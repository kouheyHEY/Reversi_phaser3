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

    }

    loadImg() {
        // 各画像の読み込み
        this.load.image(IMG_CONST.BLOCK, DIR_IMG + "/" + IMGNAME_CONST.BLOCK);
        this.load.image(IMG_CONST.FLOOR, DIR_IMG + "/" + IMGNAME_CONST.FLOOR);
        this.load.image(IMG_CONST.BREAD, DIR_IMG + "/" + IMGNAME_CONST.BREAD);
        this.load.image(IMG_CONST.BREADCRUMS, DIR_IMG + "/" + IMGNAME_CONST.BREADCRUMS);
        this.load.image(IMG_CONST.MINICOW, DIR_IMG + "/" + IMGNAME_CONST.MINICOW);
        this.load.image(IMG_CONST.MILK, DIR_IMG + "/" + IMGNAME_CONST.MILK);


        // 各スプライトシートの読み込み
        // プレイヤー
        this.load.spritesheet(
            IMG_CONST.PLAYER_RIGHT,
            DIR_CONST.DIR_IMG + "/" + IMG_CONST.PLAYER_RIGHT,
            {
                frameWidth: GSCONST.PLAYER_WIDTH,
                frameHeight: GSCONST.PLAYER_HEIGHT
            }
        );

        // 敵
        this.load.spritesheet(
            IMG_CONST.ENEMY_RIGHT,
            DIR_CONST.DIR_IMG + "/" + IMG_CONST.ENEMY_RIGHT,
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
        g.lineStyle(STROKE_WEIGHT, COLOR_AREA_STROKE, 1);
        // 情報表示エリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_INFOAREA,
                AREA_Y_INFOAREA,
                AREA_W_INFOAREA,
                AREA_H_INFOAREA
            ).strokeRect(
                AREA_X_INFOAREA + STROKE_WEIGHT / 2,
                AREA_Y_INFOAREA + STROKE_WEIGHT / 2,
                AREA_W_INFOAREA - STROKE_WEIGHT,
                AREA_H_INFOAREA - STROKE_WEIGHT);

        // モード選択エリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_MODECHOICEAREA,
                AREA_Y_MODECHOICEAREA,
                AREA_W_MODECHOICEAREA,
                AREA_H_MODECHOICEAREA
            ).strokeRect(
                AREA_X_MODECHOICEAREA + STROKE_WEIGHT / 2,
                AREA_Y_MODECHOICEAREA + STROKE_WEIGHT / 2,
                AREA_W_MODECHOICEAREA - STROKE_WEIGHT,
                AREA_H_MODECHOICEAREA - STROKE_WEIGHT);

        // パズルエリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_PUZZLEAREA,
                AREA_Y_PUZZLEAREA,
                AREA_W_PUZZLEAREA,
                AREA_H_PUZZLEAREA
            ).strokeRect(
                AREA_X_PUZZLEAREA + STROKE_WEIGHT / 2,
                AREA_Y_PUZZLEAREA + STROKE_WEIGHT / 2,
                AREA_W_PUZZLEAREA - STROKE_WEIGHT,
                AREA_H_PUZZLEAREA - STROKE_WEIGHT);

        // 各エリアの描画
        this.createInfoArea();
        this.createModeChoiceArea();
        this.createPuzzleArea();

        /* 画面の初期表示 END */
    }

    update() {

    }

    /**
     * 情報表示エリアの描画を行う
     */
    createInfoArea() {
        // 表示する項目
        let info_val_playTime = "0.0" + INFO_VAL_PLAYTIME_END;
        let info_val_reverse = 0 + INFO_VAL_REVERSETIME_END;
        let info_val_mode = MODE_NAME[this.gameMode];
        let info_val_highScore = 0 + INFO_VAL_HIGHSCORE_MID + "0.0" + INFO_VAL_HIGHSCORE_END;

        // 情報表示エリアの各文字列
        this.setText(INFO_NAME_PLAYTIME, INFO_X, INFO_Y_PLAYTIME, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_REVERSETIME, INFO_X, INFO_Y_REVERSE, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_MODE, INFO_X, INFO_Y_MODE, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_HIGHSCORE, INFO_X, INFO_Y_HIGHSCORE, INFO_H, INFO_COLOR, true);

        let infoValX = INFO_X + INFO_W;
        this.InfoArea.textObject[INFO_NAME_PLAYTIME] =
            this.setText(info_val_playTime, infoValX, INFO_Y_PLAYTIME, INFO_H, INFO_COLOR, true);
        this.InfoArea.textObject[INFO_NAME_REVERSETIME] =
            this.setText(info_val_reverse, infoValX, INFO_Y_REVERSE, INFO_H, INFO_COLOR, true);
        this.InfoArea.textObject[INFO_NAME_MODE] =
            this.setText(info_val_mode, infoValX, INFO_Y_MODE, INFO_H, INFO_COLOR, true);
        this.InfoArea.textObject[INFO_NAME_HIGHSCORE] =
            this.setText(info_val_highScore, infoValX, INFO_Y_HIGHSCORE, INFO_H, INFO_COLOR, true);

    }

    /**
     * ゲームエリアの描画
     */
    createGameArea() {
    }
};