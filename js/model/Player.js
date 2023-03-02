class Player extends Mover {
    /**
     * コンストラクタ
     * @param {Phaser.Scene} scene シーン名
     * @param {int} x 初期x座標
     * @param {int} y 初期y座標
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'player');

        // プレイヤーのアニメーションの設定
        // scene.anims.create({
        //     key: 'run',
        //     frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // プレイヤーの物理エンジンの設定
        scene.physics.world.enable(this);
        this.body.setSize(GSCONST.PLAYER_WIDTH, GSCONST.PLAYER_HEIGHT);
        this.body.setCollideWorldBounds(true);

        // プレイヤーの初期速度の設定
        this.speed = GSCONST.PLAYER_SPEED;
        this.jumpSpeed = GSCONST.PLAYER_JUMP_SPEED;

        // プレイヤーのアニメーションの再生
        // this.play('run');
        scene.add.existing(this);
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

    /**
     * オブジェクトと衝突した際の処理
     * @param {Phaser.GameObjects.Sprite} object 衝突したオブジェクト
     * @return {string} 衝突したオブジェクトのID
     */
    onCollision(object) {
        // 衝突したオブジェクトのID
        collideObjId = "";

        if (object instanceof Enemy) {
            // 敵と衝突時

            // ゲームオーバーの処理
            collideObjId = GSCONST.OBJECT_ID.ENEMY;
        } else if (object instanceof Bread) {
            // パンと衝突時

            // プレイヤーのスピードアップ
            // アイテムリストにパン粉を追加
            collideObjId = GSCONST.OBJECT_ID.BREAD;
        } else if (object instanceof MiniCow) {
            // ミニ牛と衝突時

            // プレイヤーのスピードダウン
            //　アイテムリストに牛乳を追加
            collideObjId = GSCONST.OBJECT_ID.MINICOW;
        }

        return collideObjId;
    }
}