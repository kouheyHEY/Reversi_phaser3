class InfoArea extends BaseArea {
    constructor(scene) {
        super(scene);
    }

    createArea() {
        let g = this.scene.add.graphics();
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
    }
}