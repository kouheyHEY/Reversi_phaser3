class Player extends Phaser.GameObjects.Sprite {
    /**
     * コンストラクタ
     * @param {string} scene シーン名
     * @param {int} x 初期x座標
     * @param {int} y 初期y座標
     */
    constructor(scene, x, y, objName) {
        super(scene, x, y, objName);
    }

    /**
     * 右への移動処理
     */
    moveRight() {
    }

    /**
     * 左への移動処理
     */
    moveLeft() {
    }

    /**
     * ジャンプする
     */
    jump() {
    }

    /**
     * オブジェクトと衝突した際の処理
     * @param {Phaser.GameObjects.Sprite} object 衝突したオブジェクト
     */
    onCollision(object) {
    }
}