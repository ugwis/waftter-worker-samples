# waftter-worker-samples
waftterで使えるworker集です。
waftterからこのリポジトリにアクセスして表示しています。
基本的にwaftterのworkerはサンプルを改変などして使うことを想定していますので、サンプルはたくさんあるほど良いです。

プルリクエストでたくさんの面白いサンプルお待ちしております。

## 書き方
codes.jsonにすべてのサンプルのファイル名と説明が書いてありますので、新しくサンプルを追加する場合は追記してください。
新しく.jsファイルを作成し、function(data,account){と始めてください。
※必ず無名関数で書いてください。waftter側で自動敵に名前を決めるためです。

・パラメータについて
二つのパラメータが渡されます。
data...UserStreamやgetHomeTimelineなどから流れてくるJSONデータがそのまま渡されます。
account...アカウントの情報(screen_nameとprofile_image_url)がJSON形式で渡されます。

・戻り値について
戻り値はJSONオブジェクトである必要があります。
{"経路先":data}
経路先の名前は自分で好きな名前を決めることができます。
ユーザはこの名前をもとにリンクを張ります。
また、経路先をtrashにしていすると、そのデータは破棄され、どこのノードにもデータが渡されることはありません。
