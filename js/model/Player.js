class Player extends Mover {
    /**
     * コンストラクタ
     * @param {Phaser.Scene} scene シーン名
     * @param {int} x 初期x座標
     * @param {int} y 初期y座標
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'player');

        // プレイヤーの物理エンジンの設定
        scene.physics.world.enable(this);
        scene.add.existing(this);
        // 物理演算エリアの設定
        this.body.setSize(GSCONST.PLAYER_WIDTH, GSCONST.PLAYER_HEIGHT);
        this.body.setOffset(0, 0);

        // 画面外に出ないよう設定
        this.body.setCollideWorldBounds(true);
        // 重力の設定
        this.body.gravity.y = GSCONST.GRAVITY;

        // プレイヤーの初期速度の設定
        this.deafultSpeed = GSCONST.PLAYER_SPEED;
        this.speed = this.deafultSpeed;
        this.speedChgRate = 1;
        this.jumpSpeed = GSCONST.PLAYER_JUMP_SPEED;

        // 各フラグ
        this.onGroundFlg = false;
    }

    /**
     * 右への移動処理
     */
    moveRight() {
        this.body.setVelocityX(this.speed);
    }

    /**
     * 左への移動処理
     */
    moveLeft() {
        this.body.setVelocityX(-this.speed);
    }

    /**
     * ジャンプする
     */
    jump() {
        this.body.setVelocityY(this.jumpSpeed);
    }

    update() {
        // 着地時
        if (this.onGroundFlg) {
            // y方向速度を0にする
            this.body.setVelocityY(0);
        }
    }

}