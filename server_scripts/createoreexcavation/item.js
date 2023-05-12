console.info('这是机械动力钻井矿物分配分割线')

ServerEvents.recipes(event => {
      	event.recipes.createoreexcavation.drilling([
      	   Item.of('immersiveengineering:raw_aluminum').withChance(0.8),
      	   Item.of('minecraft:raw_iron').withChance(0.2)],
      	   '{"text": "粗铝土开采"}', 12.8, 800    //20%出铁
      	).biomeWhitelist('forge:is_overworld').stress(64).id("raw_aluminum").alwaysFinite().veinSize(0.64, 0.64);     //铝土开采

          event.recipes.createoreexcavation.drilling([
            Item.of('immersiveengineering:raw_lead').withChance(0.8),
            Item.of('immersiveengineering:dust_sulfur').withChance(0.5),
            Item.of('immersiveengineering:raw_silver').withChance(0.01)],
            '{"text": "粗铅开采"}', 9.6, 800  //50%硫磺，1%银
          ).biomeWhitelist('forge:is_overworld').stress(128).id("raw_lead").alwaysFinite().veinSize(0.64, 0.64);    //铅开采       //.alwaysFinite().veinSize(5, 5)   限制矿脉大小，基数1000，允许小数

          event.recipes.createoreexcavation.drilling([
                Item.of('immersiveengineering:raw_silver').withChance(0.8),
                Item.of('minecraft:raw_copper').withChance(0.2),   //铜 20%
                Item.of('minecraft:raw_gold').withChance(0.07),    //金  7%
                Item.of('immersiveengineering:raw_uranium').withChance(0.02),   //铀  2%
                Item.of('immersiveengineering:raw_lead').withChance(0.01),     //铅   1%
                Item.of('create:raw_zinc').withChance(0.4)],   //锌  40%
                '{"text": "粗银开采"}', 6.4, 800
              ).biomeWhitelist('forge:is_overworld').stress(256).id("raw_silver").alwaysFinite().veinSize(0.64, 0.64);    //银开采

          event.recipes.createoreexcavation.drilling([
                Item.of('immersiveengineering:raw_nickel').withChance(0.8),
                Item.of('minecraft:raw_iron').withChance(0.2),   //铁 20%
                Item.of('immersiveengineering:dust_sulfur').withChance(0.1)],    //硫磺  10%
                '{"text": "粗镍开采"}', 6.4, 800
              ).biomeWhitelist('forge:is_overworld').stress(128).id("raw_nickel").alwaysFinite().veinSize(0.64, 0.64);    //镍开采

          event.recipes.createoreexcavation.drilling(
                Item.of('immersiveengineering:raw_uranium').withChance(0.8),'{"text": "粗铀开采"}', 1.6, 1200
          ).biomeWhitelist('forge:is_overworld').stress(256).id("raw_uranium").alwaysFinite().veinSize(0.64, 1.024);    //铀开采

          event.recipes.createoreexcavation.drilling([
               Item.of('create:crimsite').withChance(0.15),
               Item.of('minecraft:raw_iron').withChance(0.65),      //铁   80%
               Item.of('immersiveengineering:dust_sulfur').withChance(0.2)],   //硫磺  20%
               '{"text": "粗铁开采"}', 8, 800
          ).biomeWhitelist('forge:is_overworld').stress(64).id("iron_uranium").alwaysFinite().veinSize(0.64, 1.024);    //铁开采

          event.recipes.createoreexcavation.drilling(
               Item.of('9x minecraft:gold_nugget').withChance(0.8),'{"text": "金粒开采"}', 6.4, 1200
          ).fluid('minecraft:water').biomeWhitelist('forge:is_overworld').stress(128).id("gold_uranium").alwaysFinite().veinSize(0.64, 1.024);     //金开采  80%

          event.recipes.createoreexcavation.drilling(
              Item.of('createoreexcavation:raw_diamond'),'{"text": "钻石开采"}', 3.2, 1200
          ).biomeWhitelist('forge:is_overworld').stress(256).id("diamond").drill('createoreexcavation:diamond_drill').alwaysFinite().veinSize(0.01, 0.064);    //钻石开采

          event.recipes.createoreexcavation.drilling(
              Item.of('minecraft:coal'),'{"text": "煤炭开采"}', 25.6, 200
          ).biomeWhitelist('forge:is_overworld').stress(64).id("coal").alwaysFinite().veinSize(1.024, 10);      //煤炭开采

          event.recipes.createoreexcavation.drilling(
              Item.of('createoreexcavation:raw_emerald').withChance(0.6),'{"text": "绿宝石开采"}', 3.2, 1000
          ).biomeWhitelist('forge:is_overworld').stress(128).id("emerald").drill('createoreexcavation:netherite_drill').alwaysFinite().veinSize(0.64, 1);    //绿宝石开采

          event.recipes.createoreexcavation.drilling(
             [Item.of('createoreexcavation:raw_redstone'),
              Item.of('minecraft:redstone').withChance(0.5)],
              '{"text": "红石开采"}', 11.2, 800
             ).biomeWhitelist('forge:is_overworld').stress(64).id("redstone").alwaysFinite().veinSize(1.024, 2.048);      //红石开采

          event.recipes.createoreexcavation.drilling([
             Item.of('create:veridium').withChance(0.4),
             Item.of('minecraft:raw_copper').withChance(0.6)],
             '{"text": "粗铜开采"}', 12.8, 600
          ).biomeWhitelist('forge:is_overworld').stress(128).id("copper").alwaysFinite().veinSize(1.024, 2.048);       //铜开采

          event.recipes.createoreexcavation.drilling([
             Item.of('create:asurine').withChance(0.2),
             Item.of('create:raw_zinc').withChance(0.6),                      //锌 60%
             Item.of('immersiveengineering:dust_sulfur').withChance(0.2)],      //硫  40%
             '{"text": "粗锌开采"}', 11.2, 600
          ).biomeWhitelist('forge:is_overworld').stress(64).id("zinc").alwaysFinite().veinSize(3072, 5120);       //锌开采

          event.recipes.createoreexcavation.drilling([
            Item.of('create:asurine').withChance(0.70),
            Item.of('create:raw_zinc').withChance(0.30)],
            '{"text": "粗锌开采(多杂质)"}', 12.8, 600
          ).biomeWhitelist('forge:is_overworld').stress(64).id("zinc").alwaysFinite().veinSize(3072, 5120);      //粗锌开采(多杂质)

          event.recipes.createoreexcavation.drilling([
             Item.of('create:veridium').withChance(0.70),
             Item.of('minecraft:raw_copper').withChance(0.30)],
             '{"text": "粗铜开采(多杂质)"}', 14.4, 600
          ).biomeWhitelist('forge:is_overworld').stress(128).id("copper").alwaysFinite().veinSize(1.024, 2.048);       //铜开采(多杂质)

          event.recipes.createoreexcavation.drilling([
               Item.of('create:crimsite').withChance(0.60),
               Item.of('minecraft:raw_iron').withChance(0.3),
               Item.of('immersiveengineering:dust_sulfur').withChance(0.1)],
               '{"text": "粗铁开采(多杂质)"}', 14.4, 800
          ).biomeWhitelist('forge:is_overworld').stress(64).id("iron_uranium").alwaysFinite().veinSize(0.64, 1.024);    //铁开采开采(多杂质)

})