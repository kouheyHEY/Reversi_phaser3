class IconManager {
    constructor(_scene) {
        this.scene = _scene;
    }

    /**
     * 
     * @param {Phaser.GameObject.Sprite} _object アイコンを表示する対象
     * @param {string}  _iconName アイコンの種類 
     */
    dispIcon(_object, _iconName) {
        if (_object == null) {
            // 対象がなしの場合

        } else {
            // 対象がありの場合
            // アイコンを表示する
            let icon = this.scene.add.image(0, 0, _iconName);
            icon.setOrigin(1, 0); // 右上に表示するために原点を変更する
            icon.x = _object.body.x + _object.body.width / 2;
            icon.y = _object.body.y;

            // 一定時間後にアイコンを削除する
            let dispDuration = GSCONST.ICON_DISP_DURATION.SPEED;
            this.scene.time.delayedCall(dispDuration, () => {
                icon.destroy();
            });
        }
    }
}