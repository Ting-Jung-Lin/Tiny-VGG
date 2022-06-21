將此資料夾的檔案都放到伺服器上，例如 localhost 。  
打開 webdemo.html，選擇章魚或魷魚的照片，就可以看到辨識結果，打開開發人員工具，可以看到預測某類別的機率多大。  
```trainedModel```放的是 tiny-vgg 訓練好的 model。但是這個 model 的準確度很低(如圖)  
  
<img width="651" alt="image" src="https://user-images.githubusercontent.com/85891503/174724967-9aefd142-d523-477f-9e88-57d54b4f7280.png">  
  
，需要再把照片類別分乾淨，以及調整訓練的參數。
