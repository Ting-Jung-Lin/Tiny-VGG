執行 tiny-vgg.py 後的步驟請參考 github：https://github.com/poloclub/cnn-explainer/tree/master/tiny-vgg  
以下講解若要匯入新的圖片，索引值的格式內容，也有附訓練好的 model 直接使用  
- 要先做出下兩個 excel 檔案  
  - val_annotations.xlsx  ：圖片檔名(包含驗證圖片及測試圖片)以及它們屬於的類別
  <img width="400" alt="image" src="https://user-images.githubusercontent.com/85891503/174646137-bc4978e0-a7aa-4951-a0a4-a6490108ec0e.png"><img width="150" alt="image" src="https://user-images.githubusercontent.com/85891503/174659114-a6a373a9-ac2d-4b47-b4a4-b10b1a632ec8.png"><img width="150" alt="image" src="https://user-images.githubusercontent.com/85891503/174659184-47e641b3-18ed-4251-adaf-13ca6bf127b9.png">
 
  - word.xlsx  ：  
    <img width="147" alt="image" src="https://user-images.githubusercontent.com/85891503/174652497-a85cd766-8498-43a0-82c3-cbd3985b7033.png">  
- 第 250 行的 NUM_CLASS 以及 308 行的 filters 要改成自己的類別數
```
data
├── class_2_train   
|   ├── octopus
│   │   └── images [octopus_train * 500]
│   └── squid
│       └── images [squid_train * 500] 
├── class_2_val
|   ├── test_images [squid_test * 125、octopus_test * 125]
|   └── val_images [squid_val * 125、octopus_val * 125]
├── word.xlsx
└── val_annotations.xlsx 
```
