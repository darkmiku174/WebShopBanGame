# Web shop bán game

[requirements](./requirements.md)
## Setup

```bash
yarn #Chạy lệnh này trong folder server & client để cài dependencies
```
```bash
yarn add packageName #Thêm package
yarn add -D packageName #Thêm package dưới dạng dev dependencies
```
```bash
yarn remove packageName #Xóa package
```

[Cách chạy server](./server/README.md)

## Cấu trúc project

**Quy tắc chung**

- Git
  * Tạo bản folk hoặc tạo từng branch cho từng tính năng mới
  * Tạo commit thường xuyên
  * Tạo pull request vào mỗi tối thứ 6 hàng tuần để preview code và merge vào thứ 7

- Đặt tên
  * Đặt tên file bằng tiếng anh 
  * Đối với các component: Viết hoa chữ cái đầu và không chứa các ký đặc biệt
    + ví dụ: "Checkout.tsx"
  * Đối với các file khác: Viết thường chữ cái đầu và không chứa ký tự đặc biệt
    + ví dụ: "customHooks.tsx"
  * Đặt tên class bằng chữ cái thường với dấu gạch ngang
    + ví dụ: `this-is-a-class`

### Client

```
./
├─ src/
├─ public/
│  ├─ hooks/
│  ├─ types/
│  ├─ components/
├─ README.md/
```

- component: Tạo folder riêng cho từng component trong folder này
- hooks: Chứa custom hooks
- types: Chứa các kiểu dữ liệu

#### Quy tắc

- Tạo folder cần thiết cho mỗi tính năng ở thư mục `src`, thường tương ứng với một trang
  * Ví dụ: `src/checkout`
- Tạo file chính dựa theo tên của folder chứa tính năng
  * Ví dự: `src/checkout/Checkout.tsx`
- Tạo các folder cho các component và tính năng con vào folder của tính năng chính
  * Ví dụ: `src/checkout/paypal/Paypal.tsx`
- Nếu có một component được sử dụng nhiều lần ở các tính năng khác nhau, 
cân nhắc tạo thành một component trong thư mục component
- Tạo các file style tương ứng với các tính năng và tách thành các file con nếu cảm thấy cần thiết
- Import file style vào các file tính năng/ component tương ứng
- Import các file con vào file chính và import file chính vào file App.tsx
- Import các file style vào các component tương ứng

### Server

```
./
├─ config/
├─ controllers/
├─ middlewares/
├─ models/
├─ routes/
├─ types/
├─ sampleData/
```

- config:
- controllers: Chứa các controllers cho từng collection
- routes: Chứa các routes cho từng collection, sử dụng các controller tương ứng
- models: Chưa các models cho từng collection
- types: Chứa các kiểu dữ liệu

#### Quy tắc 

- Tạo các file có đuôi tương ứng với folder
  * Ví dụ: `./controllers/checkoutControllers.ts`

## Development stack

### Client

- react
- typescript
- react-router-dom: Routing
- axios: Like fetch but "better" (I don't know, I like fetch as well)
- node-saas: Allow using sass in react app
- MaterialUi: Component library for react app

### Server

- typescript
- express
- mongoose
- express-async-handler: Handler error to prevent server stop when error occurs
- cors: Cross origin is painful to set up ourself
- dotevn: Allow using environment variable
- nodemon: Hot reload server
- ts-node: nodemon need this for typescript
- json-server(dev deps): Fake rest api
