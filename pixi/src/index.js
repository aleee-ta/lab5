import { Application, Container, Sprite, Texture } from 'pixi.js';

(async () => {
    const app = new Application();

    await app.init({ background: '#aabbcc', resizeTo: window });

    document.body.appendChild(app.canvas);

    const container = new Container();

    app.stage.addChild(container);

    const rect = Sprite.from(Texture.WHITE);
    rect.height = 250;
    rect.width = 270;
    rect.tint = 0x1299aa;
    container.addChild(rect);

    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    app.ticker.add((time) => {
        container.rotation -= 0.01 * time.deltaTime;
    });
})();