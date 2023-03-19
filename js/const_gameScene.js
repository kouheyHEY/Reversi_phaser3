/* ゲームシーン変数 */
const GSCONST = {
    // プレイヤーの大きさ
    PLAYER_WIDTH: 100,
    PLAYER_HEIGHT: 100,

    // 敵の大きさ
    ENEMY_WIDTH: 128,
    ENEMY_HEIGHT: 128,

    // 各アイテムの大きさ
    ITEM_WIDTH: 80,
    ITEM_HEIGHT: 80,

    // 足場の大きさ
    BLOCK_WIDTH: 100,
    BLOCK_HEIGHT: 100,
    FLOOR_WIDTH: 1000,
    FLOOR_HEIGHT: 100,

    // プレイヤー、敵の初期座標
    PLAYER_START_X: 350,
    PLAYER_START_Y: COMMON_CONST.D_HEIGHT - 300,
    ENEMY_START_X: 96,
    ENEMY_START_Y: COMMON_CONST.D_HEIGHT - 300,

    // プレイヤーの移動速度
    PLAYER_SPEED: 480,
    PLAYER_JUMP_SPEED: 1200,

    // 敵の速度
    ENEMY_JUMP_SPEED: 1200,

    // 後退、前進の速度
    CHG_SPEED_RATE: 10,
    // 前進の限界座標
    LIMIT_X_PLAYER: COMMON_CONST.D_WIDTH * 2 / 3,

    // オブジェクトのID
    OBJECT_ID: {
        PLAYER: "PLAYER",
        ENEMY: "ENEMY",
        BLOCK: "BLOCK",
        ITEM: "ITEM",
        MILK: "MILK",
        MINICOW: "MINICOW",
        BREAD: "BREAD",
        BREADCRUMS: "BREADCRUMS"
    },

    // アイテムごとの素点
    SCORE_BASE: {
        BREAD: 10,
        MINICOW: 15,
        MILK: -10,
        BREADCRUMS: -15
    },

    // 一定秒毎の、アイテムの生成確率
    ITEM_CREATE_RATE_PLAYER: 0.5,
    ITEM_CREATE_RATE_ENEMY: 0.5,
    ITEM_CREATE_INTERVAL: 1.5,

    // 重力
    GRAVITY: 2000,

    // アイコンの表示時間(ミリ秒)
    ICON_DISP_DURATION: {
        SPEED: 500,
    }
}

// 表示用テキスト
const GS_TEXT_CONST = {
    COL_SCORE: "SCORE: ",
    COL_TIME: "TIME: ",

    // テキストの初期座標
    X_SCORE: 30,
    Y_SCORE: 30,
    X_TIME: 30,
    Y_TIME: 80,
}

// 画面描画用定数
const GS_SCREEN_COSNT = {
    // 全エリア共通
    COMMON_STROKE_WEIGHT: 4,
    COMMON_COLOR_AREA: 0xCCFFCC,
    COMMON_COLOR_STROKE: 0x44AA44,

    // 情報表示エリア
    X_INFOAREA: 0,
    Y_INFOAREA: 0,
    W_INFOAREA: COMMON_CONST.D_WIDTH,
    H_INFOAREA: 150,

    // ゲームエリア
    X_GAMEAREA: 0,
    Y_GAMEAREA: 150,
    W_GAMEAREA: COMMON_CONST.D_WIDTH,
    H_GAMEAREA: COMMON_CONST.D_HEIGHT,
    COLOR_GAMEAREA: 0xCCEEFF,

};