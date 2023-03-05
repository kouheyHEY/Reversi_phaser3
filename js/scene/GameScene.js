class GameScene extends BaseScene {
    // コンストラクタ
    constructor() {
        super(COMMON_CONST.GAMESCENE);

        // 各パラメータ
        // ブロック（足場）リスト
        this.blockList = [];

        // 各フラグ
        // ゲームオーバーフラグ
        this.gameOverFlg = false;
        // ゲーム一時停止フラグ
        this.gamePauseFlg = false;
        // ゲームクリアフラグ
        this.gameClearFlg = false;
        // ゲーム開始フラグ
        this.gameStartFlg = false;

    }

    /**
     * 各パラメータの初期化
     */
    initParameters() {

        // アイテム管理クラス
        this.itemManager = new ItemManager(this);
        this.itemManager.initParams();

        // ブロック（足場）リスト
        this.blockList = [];
        this.blockGroup = this.physics.add.group();

        // 地面管理クラス
        this.floorManager = new FloorManager(this);
        this.floorManager.initParams();
        // 床の初期化
        this.floorManager.addFloor();
        this.floorManager.addFloor();

        // プレイヤーの生成
        this.player = new Player(
            this,
            GSCONST.PLAYER_START_X,
            GSCONST.PLAYER_START_Y
        );

        // TODO: ゲーム開始フラグ
        this.gameStartFlg = true;
    }

    /**
     * このシーンで使用する画像の読み込みを行う
     */
    loadImg() { }

    preload() { }

    // 画面生成時の実行関数
    create() {
        // 各エリアを管理するオブジェクト
        this.infoArea = new InfoArea(this);
        this.gameArea = new GameArea(this);

        // 各エリアの描画
        this.infoArea.createArea();
        this.gameArea.createArea();

        // パラメータの初期化
        this.initParameters();

        /* スプライトシートを設定 */
        // プレイヤー
        this.anims.create({
            key: ANIM_CONST.PLAYER_RIGHT_ANIM,
            frames: this.anims.generateFrameNumbers(
                IMG_CONST.PLAYER_RIGHT,
                { start: 0, end: 3 }
            ),
            frameRate: 10,
            repeat: -1
        });
        // プレイヤーのアニメーションを再生する
        this.player.anims.play(ANIM_CONST.PLAYER_RIGHT_ANIM);

        // 衝突判定のハンドラ設定
        // 衝突はcollider, 重なりはoverlap
        this.physics.add.collider(this.player, this.floorManager.floorGroup, this.colHandlerPlayerAndFloor, null, this);
        this.physics.add.overlap(this.player, this.itemManager.playerItemGroup, this.colHandlerPlayerAndItem, null, this);
        this.physics.add.overlap(this.player, this.itemManager.enemyItemGroup, this.colHandlerPlayerAndItem, null, this);
    }

    /**
     * プレイヤーと地面の衝突判定
     * @param {Player} player プレイヤー
     * @param {Phaser.GameObjects.Sprite} floor 地面
     */
    colHandlerPlayerAndFloor(player, floor) {
        player.collideToFloor();
    }

    /**
     * プレイヤーとアイテムの衝突判定
     * @param {Player} player プレイヤー
     * @param {Item} item アイテム
     */
    colHandlerPlayerAndItem(player, item) {
        // 衝突時の処理
        player.collideToItem(item);
        this.itemManager.deleteItem(item, true);
    }

    update(time, delta) {
        // ゲーム開始している場合
        if (this.gameStartFlg) {

            // 地面の更新処理
            this.floorManager.update();
            // アイテムの更新処理
            this.itemManager.update();
            // プレイヤーの更新処理
            this.player.update();

            // 画面内のどこかがクリックされた場合
            this.input.on('pointerdown', function (pointer) {
                this.player.jump();
            }, this);
        }

        // ゲームオーバーの場合
        if (this.gameOverFlg) {

        }
        // ゲーム一時停止した場合
        if (this.gamePauseFlg) {

        }
        // ゲームクリアした場合
        if (this.gameClearFlg) {

        }
    }
};