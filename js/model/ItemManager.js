class ItemManager {
    constructor(scene) {
        // シーンの設定
        this.scene = scene;
        this.initParams();
    }

    /**
     * 各パラメータの初期化
     */
    initParams() {
        // プレイヤー側のアイテムリスト
        this.playerItemList = [];
        this.playerItemGroup = this.scene.physics.add.group();
        // 敵側のアイテムリスト
        this.enemyItemList = [];
        this.enemyItemGroup = this.scene.physics.add.group();

        this.addItem(IMG_CONST.BREAD);
    }

    /**
     * アイテムをアイテムリストに追加
     * @param {string} itemName アイテムID
     */
    addItem(itemName) {
        // プレイヤー側のアイテムの場合
        if (itemName == IMG_CONST.BREAD
            || itemName == IMG_CONST.MINICOW
        ) {
            // アイテムの生成
            let item = new Item(
                this.scene,
                900,
                COMMON_CONST.D_HEIGHT - GSCONST.FLOOR_HEIGHT - GSCONST.ITEM_HEIGHT / 2,
                itemName
            );
            // リストに追加
            this.playerItemList.push(item);
            this.playerItemGroup.add(item);
            // 速度の設定
            item.body.setVelocityX(-GSCONST.PLAYER_SPEED);

        }
    }

    /**
     * 更新処理
     */
    update() {
        this.playerItemList.forEach(playerItem => {
            // アイテムが画面外に出た場合
            if (playerItem.x <= -GSCONST.ITEM_WIDTH / 2) {
                // アイテムを削除
                let firstChild = this.playerItemGroup.getChildren()[0];
                this.playerItemGroup.remove(firstChild, true, true);
                this.playerItemList.splice(0, 1);
            }
        });
    }

}