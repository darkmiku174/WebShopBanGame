# Các bước chạy server

## Nếu dùng json-server

## Chạy server

- B1: Chạy json-server

```bash
  json-server --watch ./sampleData/db.json --port 5000
```

- B2:
  - Mở link: http://localhost:5000

**Tài liệu: https://github.com/typicode/json-server**

## Thêm dữ liệu

```json
{
  "golf":[....],
  "DuLieuMoi":[
    {
      "_id":"id1",
      "name":"Nguyễn Hùng Vĩ",
      ...
    }
  ]
}
```

## Nếu dùng mongodb

- B1: Tạo file `.env` với các dữ liệu sau

```
NODE_ENV=development
PORT=5000
MONGO_URI=`local db uri hoặc mongodb atlas`
```

- B2: Cài typescript globally nếu chưa có

```
npm i -g typescript
```

- B3: Chạy các lệnh sau

  - Đối với window(Tui chưa tìm ra cách chạy 2 lệnh này cùng lúc trên window :v)

    ```bash
    tsc -w #compile typescript to javascript
    ```

    ```bash
    yarn nodemon dist/server.js #Watch compiled javascript file
    ```

  - MacOS & linux

    ```
    yarn server
    ```

- B4: Mở link: http://localhost:5000 hoặc http://localhost:5000/api/sample để xem dữ liệu mẫu

**Lưu ý: folder dist được generate từ lệnh tsc, không chỉnh sửa trực tiếp**
