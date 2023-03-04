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

    // プレイヤーの移動速度
    PLAYER_SPEED: 180,
    PLAYER_JUMP_SPEED: 200,

    // プレイヤーの移動速度の変化倍率
    PLAYER_SPEEDCHG_RATE: 0.1,

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

    // 重力
    GRAVITY: 500,
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