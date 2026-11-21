function App() {
  return (
    <div className="page" id="dau-trang">
      <header className="container header">
        <a className="brand" href="#dau-trang" aria-label="Gia Bảo, về đầu trang">gb.</a>
        <nav aria-label="Điều hướng chính">
          <a href="#gioi-thieu">Giới thiệu</a>
          <a href="#so-thich">Sở thích</a>
          <a href="#lien-he">Liên hệ</a>
        </nav>
      </header>

      <main className="container">
        <section id="gioi-thieu" className="hero" aria-labelledby="ten">
          <div>
            <p className="eyebrow">Trang cá nhân · Sinh viên</p>
            <p className="greeting">Xin chào thầy cô và mọi người, mình là</p>
            <h1 id="ten">Bùi Gia Bảo<span>.</span></h1>
            <p className="intro">
              Mình hiện là sinh viên. Ngoài giờ học, mình thích xem phim
              và chơi game. Đây là góc nhỏ để mọi người biết thêm một chút về mình.
            </p>
            <a className="button" href="#so-thich">
              Khám phá sở thích <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="portrait" aria-hidden="true">
            <span className="initials">GB</span>
          </div>
        </section>

        <section id="so-thich" className="hobbies" aria-labelledby="tieu-de-so-thich">
          <h2 id="tieu-de-so-thich">Ngoài giờ học</h2>

          <div className="cards">
            <article className="card">
              <div className="art cinema" aria-hidden="true">
                <span className="filmstrip"></span>
              </div>
              <div className="card-body">
                <h3>Xem phim</h3>
                <p>
                  Có những lúc mình chỉ muốn chọn một bộ phim, ngồi xuống
                  và theo dõi câu chuyện cho đến cảnh cuối cùng.
                </p>
              </div>
            </article>

            <article className="card">
              <div className="art arcade" aria-hidden="true">
                <span className="controller">
                  <span className="dpad">✚</span>
                  <span className="keys"><i></i><i></i></span>
                </span>
              </div>
              <div className="card-body">
                <h3>Chơi game</h3>
                <p>
                  Khi chơi game, mình được tự quyết định bước đi tiếp theo.
                  Đôi khi niềm vui chỉ đơn giản là thử lại và vượt qua một màn khó.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="lien-he" className="contact" aria-labelledby="tieu-de-lien-he">
          <div>
            <h2 id="tieu-de-lien-he">Liên hệ với mình</h2>
            <p>Thầy cô và các bạn có thể gửi email cho mình qua địa chỉ này.</p>
          </div>
          <a className="email" href="mailto:bxxxxxxxxxxxxx007@gmail.com">
            bxxxxxxxxxxxxx007@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="container footer">
        <span>Bùi Gia Bảo</span>
        <a href="#dau-trang">Về đầu trang ↑</a>
      </footer>
    </div>
  )
}

export default App
