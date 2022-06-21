async function init(){
	model =await tf.loadLayersModel("trainedModel/model.json");//放轉成tensorflow.js格式 model 的 .json 檔
}
//接收HTML傳進的圖片
function sub(){
	const selectFile=document.getElementById("input").files[0];
	console.log(selectFile);
	let reader=new FileReader();
	reader.onload = e =>{
			let img=document.createElement("img");
			img.src=e.target.result;
			img.width=144;
			img.height=144;
			img.onload=()=>{
				const showImage=document.getElementById('showImage');
				showImage.innerHTML='';
				showImage.appendChild(img);
				prediction(img);
			}
	}
	reader.readAsDataURL(selectFile);
}
//將輸入的圖片轉成模型需要的格式
function prediction(imgElement){
	//第HTML<ing>轉換成轉換為矩陣tensor
	const tfImg = tf.browser.fromPixels(imgElement,3);
	//強制將圖片縮小到 64*64 像素
	const smalImg = tf.image.resizeBilinear(tfImg, [64, 64]);
	let tensor = smalImg.reshape([1,64,64,3]);
	//預測
	const pred = model.predict(tensor);
	const result = pred.dataSync();
	const {predNum,prob}=findMaxIndex(result);
	console.log(predNum,prob);
	if(predNum==0){
		document.getElementById('returnValue').innerHTML="章魚";
	}else if (predNum==1){
		document.getElementById('returnValue').innerHTML="魷魚";
	}
}
//找出預測結果中的最大值
function findMaxIndex(result){
	const arr = Array.from(result);
	let maxIndex=0;
	let maxValue=0;
	for(let i=0;i<arr.length;i++){
		if(arr[1]>maxValue){
			maxIndex=i;
			maxValue=arr[i];
		}
	}		
	return {predNum: maxIndex,prob: maxValue};
}