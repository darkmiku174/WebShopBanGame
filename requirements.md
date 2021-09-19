# Yêu cầu shop bán game

*Các mục có "auto": Sẽ được xử lý bởi hệ thống, không cần sự can thiệp của con người*

*Các mục có "...": Tùy ý developer muốn thêm gì thì thêm, nhưng yêu cầu có các chức năng đã được liệt kê*

*Các mục có "?": Chưa quyết định hoặc chưa có đủ thông tin*

**Lưu ý tính responsive khi thiết kết giao diện**

## Giao diện và chức năng của admin

- Quản lý sản phẩm
  * Thêm
    + API: Thêm middleware compressed ảnh/ video(Ưu tiên thấp)
    + Danh mục game? Chọn từ danh mục có sãn - Chưa có? => Tạo mới
    + ...
  * Quản lý khuyến mãi(mã, chương trình)
    + Áp dụng cho các tựa game nào
  * Quản Danh mục thể loại game

- Thống kê(Datadog? Freshpaint? New relic? Simpleanalytics(Seem really good)? auto)
  * Thống kê doanh số(Theo quý)
  * Thống kê xu hướng(Theo quý)
  * Thống kê thông tin người dùng? Quốc gia? Độ tuổi?

- Quản lý người dùng
  * Ban tài khoản
  * Các chức năng người dùng có thể sử dụng

- Hỗ trợ
  * Quản lý tiket
  * Live chat(Dịch vụ?)

## Các giao diện và chức năng của người dùng

- Homepage
  * Phân loại sản phẩm
    + khuyến mãi(auto)
    + mới(auto)
    + bán chạy(auto)

- Giỏ hàng
  * Thêm sản phẩm vào giỏ hàng
  * Thay đổi số lượng sản phẩm
  * Xóa sản phẩm
  * Tặng quà? Yêu cầu email người nhận

- Checkout
  * Phương thức thanh toán
    + Credit card(Stripe)
    + Paypal
  * Apply coupon code
  * API 
    + Tính toán giá trị bằng các lấy dữ liệu từ db và xử lý trên server
    + Gửi thông báo về email sau khi xác nhận thanh toán

- Phương thức đăng ký/ đăng nhập(verify via email)
  * Facebook
  * Gmail
  * Quên mật khẩu(gửi qua email)

- Quản lý thông tin cá nhân
  * Chỉnh sửa thông tin
    + Username(Hạn chế số lần sửa)
    + Email(Hạn chế số lần sửa)
    + Đổi mật khẩu(yêu cầu mk cũ)
  * Xóa tài khoản

- Tìm kiếm
  * Filter(Combine filter)
    + Thể loại
    + Giá thành
    + ...
  * Theo tên game

- Bình luận, rating
  * Filter bình luận
    + Thời gian
    + Rating
  * Thêm, chỉnh sửa, xóa bình luận
    + Cho upload ảnh?


- Lịch sử giao dịch
  * In hóa đơn
  
- Thư viện(library)
  * Quản lý key game
  * Show thông tin cơ bản của game


- Wishlist
  * Thêm, xóa
  * Tạo đơn hàng mới từ wishlist

- Thông báo qua email(testmail.app? mailgun? Auto)
  * Các chương trình khuyến mãi, đơn hàng wishlist được giảm giá
  
- Support
  * Live chat(Customerly?)
  * Ticket

## Các chức năng bổ sung(Không cần ưu tiên)

- Tùy chỉnh ngôn ngữ(LingoHub? weglot? phrase?)
- Proxy API?
