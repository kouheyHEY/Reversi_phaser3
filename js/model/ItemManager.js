class ItemManager {
    constructor(scene) {
        // シーンの設定
        this.scene = scene;
        this.initParams();

        // 生成予定アイテムリスト
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

        // アイテム待ちリスト
        this.playerItemQueue = [];
        this.enemyItemQueue = [];

        // アイテム生成用時間
        this.waitFrame = 0;

        // 生成用アイテムの初期設定
        this.addItemToQueueRandom();
        this.addItemToQueueRandom();
        this.addItemToQueueRandom();
        this.addItemToQueueRandom();

        // TODO: デバッグ用
        // this.addItem(IMG_CONST.BREAD);
    }

    /**
     * アイテムを生成し、待ちリストに追加
     */
    addItemToQueueRandom() {
        // アイテムを確率で生成
        if (Math.random() <= 0.5) {
            // 50%の確率でパンかミニ牛を待ちリストに追加
            this.addItemToQueue(IMG_CONST.BREAD);
        } else {
            this.addItemToQueue(IMG_CONST.MINICOW);
        }

    }

    /**
     * 指定したアイテムを生成し、待ちリストに追加
     * @param {string} itemName 生成するアイテムID
     */
    addItemToQueue(itemName) {
        if (itemName == IMG_CONST.BREAD
            || itemName == IMG_CONST.MINICOW
        ) {
            // プレイヤーアイテムの場合
            // プレイヤーアイテム待ちリストに追加
            this.playerItemQueue.push(itemName);

        } else if (
            itemName == IMG_CONST.BREADCRUMS
            || itemName == IMG_CONST.MILK
        ) {
            // 敵アイテムの場合
            // 敵のアイテム待ちリストに追加
            this.enemyItemQueue.push(itemName);
        }
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
                // 待ちリストに新たなアイテムを追加
                this.addItemToQueueRandom();
                // アイテムを削除
                let firstChild = this.playerItemGroup.getChildren()[0];
                this.playerItemGroup.remove(firstChild, true, true);
                this.playerItemList.splice(0, 1);
            }
        });

        this.enemyItemList.forEach(enemyItem => {
            // アイテムが画面外に出た場合
            if (enemyItem.x <= -GSCONST.ITEM_WIDTH / 2) {
                // アイテムを待ちリストに追加
                this.addItemToQueue(enemyItem.texture.key);
                // アイテムを削除
                let firstChild = this.enemyItemGroup.getChildren()[0];
                this.enemyItemGroup.remove(firstChild, true, true);
                this.enemyItemList.splice(0, 1);
            }
        });

        // 2秒ごとにアイテムの生成を乱数で決定
        this.waitFrame++;
        if (this.waitFrame >= COMMON_CONST.FPS * GSCONST.ITEM_CREATE_INTERVAL) {
            if (Math.random() <= GSCONST.ITEM_CREATE_RATE) {
                // 待ちリストからアイテムを画面に生成
                this.addItem(this.playerItemQueue[0]);
                // 待ちリストからアイテムを削除
                this.playerItemQueue.splice(0, 1);
            }
            // 待ち時間をリセット
            this.waitFrame = 0;

            // TODO: デバッグ用
            console.log("queue is ...");
            this.playerItemQueue.forEach(element => {
                console.log(element);
            });
            console.log("list is ...");
            this.playerItemList.forEach(element => {
                console.log(element.texture.key);
            });
        }

    }

}