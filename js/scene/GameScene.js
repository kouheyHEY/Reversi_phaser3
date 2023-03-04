class GameScene extends BaseScene {
    // コンストラクタ
    constructor() {
        super('GameScene');

        // 各エリアを管理するオブジェクト
        this.infoArea = new InfoArea();
        this.gameArea = new GameArea();

        // 各パラメータ
        // アイテムリスト
        this.itemList = [];
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

        // アイテムリスト
        this.itemList = [];
        this.itemGroup = this.physics.add.group();
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
    loadImg() {
        // 各画像の読み込み
        this.load.image(IMG_CONST.BLOCK, DIR_CONST.DIR_IMG + "/" + IMGNAME_CONST.BLOCK);
        this.load.image(IMG_CONST.FLOOR, DIR_CONST.DIR_IMG + "/" + IMGNAME_CONST.FLOOR);
        this.load.image(IMG_CONST.BREAD, DIR_CONST.DIR_IMG + "/" + IMGNAME_CONST.BREAD);
        this.load.image(IMG_CONST.BREADCRUMS, DIR_CONST.DIR_IMG + "/" + IMGNAME_CONST.BREADCRUMS);
        this.load.image(IMG_CONST.MINICOW, DIR_CONST.DIR_IMG + "/" + IMGNAME_CONST.MINICOW);
        this.load.image(IMG_CONST.MILK, DIR_CONST.DIR_IMG + "/" + IMGNAME_CONST.MILK);


        // 各スプライトシートの読み込み
        // プレイヤー
        this.load.spritesheet(
            IMG_CONST.PLAYER_RIGHT,
            DIR_CONST.DIR_IMG + "/" + IMGNAME_CONST.PLAYER_RIGHT,
            {
                frameWidth: GSCONST.PLAYER_WIDTH,
                frameHeight: GSCONST.PLAYER_HEIGHT
            }
        );

        // 敵
        this.load.spritesheet(
            IMG_CONST.ENEMY_RIGHT,
            DIR_CONST.DIR_IMG + "/" + IMGNAME_CONST.ENEMY_RIGHT,
            {
                frameWidth: GSCONST.ENEMY_WIDTH,
                frameHeight: GSCONST.ENEMY_HEIGHT
            }
        );

    }

    preload() {
        // 各画像の読み込み
        this.loadImg();
    }

    // 画面生成時の実行関数
    create() {
        /* 画面の初期表示 START */
        let g = this.add.graphics();
        // 各エリアの描画
        g.lineStyle(
            GS_SCREEN_COSNT.COMMON_STROKE_WEIGHT,
            GS_SCREEN_COSNT.COMMON_COLOR_STROKE,
            1
        );

        // 情報表示エリア
        g.fillStyle(GS_SCREEN_COSNT.COMMON_COLOR_AREA, 1)
            .fillRect(
                GS_SCREEN_COSNT.X_INFOAREA,
                GS_SCREEN_COSNT.Y_INFOAREA,
                GS_SCREEN_COSNT.W_INFOAREA,
                GS_SCREEN_COSNT.H_INFOAREA,
            ).strokeRect(
                GS_SCREEN_COSNT.X_INFOAREA + GS_SCREEN_COSNT.COMMON_STROKE_WEIGHT / 2,
                GS_SCREEN_COSNT.Y_INFOAREA + GS_SCREEN_COSNT.COMMON_STROKE_WEIGHT / 2,
                GS_SCREEN_COSNT.W_INFOAREA - GS_SCREEN_COSNT.COMMON_STROKE_WEIGHT,
                GS_SCREEN_COSNT.H_INFOAREA - GS_SCREEN_COSNT.COMMON_STROKE_WEIGHT
            );

        // ゲームエリア
        g.fillStyle(GS_SCREEN_COSNT.COLOR_GAMEAREA, 1)
            .fillRect(
                GS_SCREEN_COSNT.X_GAMEAREA,
                GS_SCREEN_COSNT.Y_GAMEAREA,
                GS_SCREEN_COSNT.W_GAMEAREA,
                GS_SCREEN_COSNT.H_GAMEAREA,
            );

        // 各エリアの描画
        this.createInfoArea();
        this.createGameArea();

        /* 画面の初期表示 END */

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
        this.physics.add.collider(this.player, this.floorManager.floorGroup, this.colHandlerPlayeAndFloor, null, this);
    }

    /**
     * プレイヤーと床の衝突判定
     * @param {Player} player 
     * @param {Phaser.GameObjects.Sprite} floor 
     */
    colHandlerPlayeAndFloor(player, floor) {
        // プレイヤーのy方向速度を0にする
        player.onGroundFlg = true;
    }

    update(time, delta) {
        // ゲーム開始している場合
        if (this.gameStartFlg) {

            // 地面の更新処理
            this.floorManager.update();
            // プレイヤーの更新処理
            this.player.update();
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

    /**
     * 情報表示エリアの描画を行う
     */
    createInfoArea() {
        // 表示する項目
        // let info_val_playTime = "0.0" + INFO_VAL_PLAYTIME_END;
        // let info_val_reverse = 0 + INFO_VAL_REVERSETIME_END;
        // let info_val_mode = MODE_NAME[this.gameMode];
        // let info_val_highScore = 0 + INFO_VAL_HIGHSCORE_MID + "0.0" + INFO_VAL_HIGHSCORE_END;

        // // 情報表示エリアの各文字列
        // this.setText(INFO_NAME_PLAYTIME, INFO_X, INFO_Y_PLAYTIME, INFO_H, INFO_COLOR, true);
        // this.setText(INFO_NAME_REVERSETIME, INFO_X, INFO_Y_REVERSE, INFO_H, INFO_COLOR, true);
        // this.setText(INFO_NAME_MODE, INFO_X, INFO_Y_MODE, INFO_H, INFO_COLOR, true);
        // this.setText(INFO_NAME_HIGHSCORE, INFO_X, INFO_Y_HIGHSCORE, INFO_H, INFO_COLOR, true);

        // let infoValX = INFO_X + INFO_W;
        // this.InfoArea.textObject[INFO_NAME_PLAYTIME] =
        //     this.setText(info_val_playTime, infoValX, INFO_Y_PLAYTIME, INFO_H, INFO_COLOR, true);
    }

    /**
     * ゲームエリアの描画
     */
    createGameArea() {
    }

};