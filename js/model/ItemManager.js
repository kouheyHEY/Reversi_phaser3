class ItemManager {
    constructor(scene) {
        // シーンの設定
        this.scene = scene;
        this.initParams();

        this.playerItemQueue = [];
        this.enemyItemQueue = [];
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

        // TODO: デバッグ用
        this.addItem(IMG_CONST.BREAD);
    }

    /**
     * アイテムをアイテムリストに追加
     * @param {string} itemName アイテムID
     */
    addItem(itemName) {
        // アイテムの生成
        let item = new Item(
            this.scene,
            900,
            COMMON_CONST.D_HEIGHT - GSCONST.FLOOR_HEIGHT - GSCONST.ITEM_HEIGHT / 2,
            itemName
        );

        // プレイヤー側のアイテムの場合
        if (itemName == IMG_CONST.BREAD
            || itemName == IMG_CONST.MINICOW
        ) {
            // リストに追加
            this.playerItemList.push(item);
            this.playerItemGroup.add(item);
        }
        // 敵側のアイテムの場合
        if (itemName == IMG_CONST.BREADCRUMS
            || itemName == IMG_CONST.MILK
        ) {
            // リストに追加
            this.enemyItemList.push(item);
            this.enemyItemGroup.add(item);
        }

        // 速度の設定
        item.body.setVelocityX(-GSCONST.PLAYER_SPEED);
    }

    /**
     * 更新処理
     */
    update() {
        // アイテムの移動処理
        this.playerItemList.forEach(playerItem => {
            // アイテムが画面外に出た場合
            if (playerItem.x <= -GSCONST.ITEM_WIDTH / 2) {
                // アイテムを削除
                let firstChild = this.playerItemGroup.getChildren()[0];
                this.playerItemGroup.remove(firstChild, true, true);
                this.playerItemList.splice(0, 1);
            }
        });

        this.enemyItemList.forEach(enemyItem => {
            // アイテムが画面外に出た場合
            if (enemyItem.x <= -GSCONST.ITEM_WIDTH / 2) {
                // アイテムを削除
                let firstChild = this.enemyItemGroup.getChildren()[0];
                this.enemyItemGroup.remove(firstChild, true, true);
                this.enemyItemList.splice(0, 1);
            }
        });
    }

}