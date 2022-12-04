class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <div class="jumbotron__content">
          <h1 class="jumbotron__title">Bingung mencari restaurant terdekat?</h1>
          <p class="jumbotron__tagline">
          mari cari restaurant terdekat anda dengan katalog yang berada dibawah ini.
          </p>
      </div>
      <picture>
        <source type="image/webp" media="(max-width: 600px)" srcset="./images/hero-image_3-small.webp">
        <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/hero-image_3-small.jpg">
        <source type="image/webp" media="(min-width: 600px)" srcset="./images/hero-image_3-large.webp">
        <source type="image/jpeg" media="(min-width: 600px)" srcset="./images/hero-image_3-large.jpg">
        <img class="jumbotron__image" src="./hero.jpg" alt="" />
      </picture>
    </div>
    `;
  }
}

customElements.define('jumbotron-restaurant', Jumbotron);
