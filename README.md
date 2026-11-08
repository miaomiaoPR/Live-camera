# 我的ライブカメラ

只顯示自己想看的公開即時影像（ライブカメラ）的單檔網頁 app。

- 打開 `index.html` 即可使用（建議用 GitHub Pages 發布，YouTube 嵌入在本機檔案模式下有時會被拒絕）。
- 上方搜尋框：輸入地點，按「在 YouTube 搜尋直播」會在新分頁只列出正在直播的影片。
- 按「＋ 新增鏡頭」貼上內容會自動判斷類型：YouTube 網址、網站提供的 `<iframe>` 嵌入碼、靜態圖片網址（每 5 分鐘自動更新）、或一般連結。
- 清單存在瀏覽器的 localStorage；預設清單在 `index.html` 的 `DEFAULTS`。

## 預設鏡頭
- 富士山：河口湖駅前、富士ビューホテル、山中湖芙蓉台、FUJIYAMAタワー（YouTube 內嵌）；富士山頂、FUJI RICE（連結）
- 世界：渋谷スクランブル交差点、Times Square、Abbey Road、Jackson Hole、北極光 Utsjoki、AuroraMAX（連結）

已經儲存過清單的瀏覽器不會自動換成新的預設清單，按「重設」即可。
