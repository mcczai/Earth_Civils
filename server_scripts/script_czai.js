// priority: 0



console.info('这是czai写的配方分割线')

ServerEvents.recipes(event => {
 event.custom({                                                                                                    //电路板
  "type": "create:sequenced_assembly",                         //顺序装配
  "ingredient": {"item": "immersiveengineering:circuit_board"},//底料
  "loops": 2,//循环次数
  "results": [{"chance": 100.0,"item": "immersiveengineering:logic_circuit"},      //输出
    {"item": "minecraft:clock"}],
  "sequence": [     //装配方式
    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_logic_circuit"},{"item": "immersiveengineering:electron_tube"}], //输入材料，半成品在前
     "results": [{"item": "kubejs:component_logic_circuit"}]},                 //输出的半成品

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_logic_circuit"},{"item": "immersiveengineering:capacitor_lv"}],
     "results": [{"item": "kubejs:component_logic_circuit"}]},

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_logic_circuit"},{"item": "createaddition:gold_wire"}],
     "results": [{"item": "kubejs:component_logic_circuit"}]},

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_logic_circuit"},{"item": "immersiveengineering:component_electronic_adv"}],
     "results": [{"item": "kubejs:component_logic_circuit"}]}
  ],
  "transitionalItem": {"item": "kubejs:component_logic_circuit"}//半成品
 })

 event.custom({                                                                                                    //高级逻辑组件
  "type": "create:sequenced_assembly",
  "ingredient": {"item": "immersiveengineering:plate_duroplast"},
  "loops": 2,
  "results": [{"chance": 100.0,"item": "immersiveengineering:component_electronic_adv"},
    {"item": "minecraft:clock"}],
  "sequence": [
    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_electronic_adv"},{"item": "createaddition:capacitor"}],
     "results": [{"item": "kubejs:component_electronic_adv"}]},

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_electronic_adv"},{"item": "immersiveengineering:electron_tube"}],
     "results": [{"item": "kubejs:component_electronic_adv"}]},

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_electronic_adv"},{"item": "createaddition:gold_wire"}],
     "results": [{"item": "kubejs:component_electronic_adv"}]}
  ],
  "transitionalItem": {"item": "kubejs:component_electronic_adv"}
 })

 event.custom({                                               //枪管加工
          "type": "create:sequenced_assembly",
          "ingredient": {"tag": "forge:rods/steel"},    //输入
          "transitionalItem": {"item": "kubejs:chamfered_steel_pipe"},   //半成品
          "sequence": [                                 //顺序装配
            {
              "keepHeldItem": true,
              "type": "create:deploying",      //工序
              "ingredients": [{"item": "kubejs:chamfered_steel_pipe"},{"item": "immersiveengineering:drillhead_steel"}],     //输入
              "results": [{"item": "kubejs:chamfered_steel_pipe"}]    //输出
            },
            {
              "keepHeldItem": true,
              "type": "create:deploying",
              "ingredients": [{"item": "kubejs:chamfered_steel_pipe"},{"item": "immersiveengineering:screwdriver"}],
              "results": [{"item": "kubejs:chamfered_steel_pipe"}]
            }
          ],
          "results": [{"item": "immersiveengineering:gunpart_barrel"}],   //最终输出
          "loops": 1
        })

 event.custom({                                                                                                    //精密构件
  "type": "create:sequenced_assembly",
  "ingredient": {"tag": "forge:plates/iron"},
  "loops": 2,//循环次数
  "results": [{"chance": 120.0,"item": "create:precision_mechanism"},
              {"chance": 8.0,"item": "create:golden_sheet"},
              {"chance": 8.0,"item": "create:andesite_alloy"},
              {"chance": 5.0,"item": "create:cogwheel"},
              {"chance": 3.0,"item": "minecraft:gold_nugget"},
              {"chance": 2.0,"item": "create:shaft"},
              {"chance": 2.0,"item": "create:crushed_gold_ore"},
              {"item": "minecraft:iron_ingot"},
              {"item": "minecraft:clock"}],
  "sequence": [
    {"type": "create:deploying","ingredients": [{"item": "create:incomplete_precision_mechanism"},{"item": "immersiveengineering:component_iron"}],
     "results": [{"item": "create:incomplete_precision_mechanism"}]},

    {"type": "create:deploying","ingredients": [{"item": "create:incomplete_precision_mechanism"},{"item": "immersiveengineering:component_steel"}],
     "results": [{"item": "kubejs:component_electronic_adv"}]},

    {"type": "create:deploying","ingredients": [{"item": "create:incomplete_precision_mechanism"},{"item": "immersiveengineering:wire_steel"}],
     "results": [{"item": "create:incomplete_precision_mechanism"}]},

    {"type": "create:deploying","ingredients": [{"item": "create:incomplete_precision_mechanism"},{"item": "create:cogwheel"}],
     "results": [{"item": "create:incomplete_precision_mechanism"}]}
  ],
  "transitionalItem": {"item": "create:incomplete_precision_mechanism"}
 })

 event.custom({                                                                                                    //击锤
  "type": "create:sequenced_assembly",
  "ingredient": {"tag": "forge:plates/steel"},
  "loops": 1,
  "results": [{"item": "immersiveengineering:gunpart_hammer"}],
  "sequence": [
    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_gunpart_hammer"},{"item": "immersiveengineering:component_iron"}],"results": [{"item": "kubejs:component_gunpart_hammer"}]},

    {"type": "create:cutting","ingredients": [{"item": "kubejs:component_gunpart_hammer"}],"results": [{"item": "kubejs:component_gunpart_hammer"}]},

    {"type": "create:cutting","ingredients": [{"item": "kubejs:component_gunpart_hammer"}],"results": [{"item": "kubejs:component_gunpart_hammer"}]}
  ],
  "transitionalItem": {"item": "kubejs:component_gunpart_hammer"}
 })

 event.custom({                                                                                                    //木制枪械零件(未打磨)
  "type": "create:sequenced_assembly",
  "ingredient": {"item": "immersiveengineering:treated_wood_horizontal"},
  "loops": 1,
  "results": [{"count":2,"item": "kubejs:unpolished_wooden_firearm_parts"}],
  "sequence": [

    {"type": "create:cutting","ingredients": [{"item": "kubejs:component_wooden_firearm_parts"}],"results": [{"item": "kubejs:component_wooden_firearm_parts"}]},

    {"type": "create:cutting","ingredients": [{"item": "kubejs:component_wooden_firearm_parts"}],"results": [{"item": "kubejs:component_wooden_firearm_parts"}]},

    {"type": "create:filling","ingredients": [{"item": "kubejs:component_wooden_firearm_parts"},{"amount": 100,"fluid": "immersiveengineering:plantoil"}],
    "results": [{"item": "kubejs:component_wooden_firearm_parts"}]}

  ],
  "transitionalItem": {"item": "kubejs:component_wooden_firearm_parts"}
 })

 event.custom({                         //钢制枪械零件(未打磨)
   "type": "create:cutting",
   "ingredients": [{"tag": "forge:plates/steel"}],
   "processingTime": 50,
   "results": [{"count":2,"item": "kubejs:unpolished_steel_firearm_parts"}]
 })

 event.custom({                         //木制枪械零件
   "type": "create:sandpaper_polishing",
   "ingredients": [{"item": "kubejs:unpolished_wooden_firearm_parts"}],
   "results": [{"item": "kubejs:wooden_firearm_parts"}]
 })

 event.custom({                         //钢制枪械零件
   "type": "create:sandpaper_polishing",
   "ingredients": [{"item": "kubejs:unpolished_steel_firearm_parts"}],
   "results": [{"item": "kubejs:steel_firearm_parts"}]
 })

 event.custom({                         //钢制枪械零件(未打磨)
   "type": "create:cutting",
   "ingredients": [{"tag": "forge:plates/steel"}],
   "processingTime": 50,
   "results": [{"count":2,"item": "kubejs:unpolished_steel_firearm_parts"}]
})

 event.custom({                         //木握把
   "type": "create:cutting",
   "ingredients": [{"item": "kubejs:wooden_firearm_parts"}],
   "processingTime": 50,
   "results": [{"item": "immersiveengineering:wooden_grip"}]
 })

 event.custom(                     //成形的坚固板
        {
           "type":"immersiveengineering:arc_furnace",
           "results":[
           {
              "count":4,
              "base_ingredient":{
               "item":"kubejs:formed_sturdy_sheet"
              }
            }],
        "additives":[{"item":"minecraft:coal"}],
        "input":{"item":"immersiveengineering:plate_steel"},
        "time":100,"energy":51200
        }
   )

 event.custom(                     //石灰（电弧炉）花岗岩
        {
           "type":"immersiveengineering:arc_furnace",
           "additives":[],
           "results":[
           {
              "count":4,
              "base_ingredient":{
               "item":"kubejs:lime"
              }
            }],
        "input":{"item":"minecraft:granite"},
        "time":100,"energy":51200
        }
   )

 event.custom(                     //石灰（电弧炉）石灰岩
        {
           "type":"immersiveengineering:arc_furnace",
           "additives":[],
           "results":[
           {
              "count":6,
              "base_ingredient":{
               "item":"kubejs:lime"
              }
            }],
        "input":{"item":"create:limestone"},
        "time":100,"energy":51200
        }
   )
 event.custom({                     //石灰（高炉）花岗岩
       "type":"immersiveengineering:blast_furnace",
       "input":{"item":"minecraft:granite"},
       "result":{"count":2,"item":"kubejs:lime"},
       "time":200
  })
  event.custom({                     //石灰（高炉）石灰石
        "type":"immersiveengineering:blast_furnace",
        "input":{"item":"create:limestone"},
        "result":{"count":3,"item":"kubejs:lime"},
        "time":200
   })

 event.custom({                         //钢板合成
   "type": "create:pressing",
   "ingredients": [{"tag": "forge:ingots/steel"}],
   "results": [{"item": "immersiveengineering:plate_steel"}]
 })

 event.custom(                     //坚固板
        {
           "type":"immersiveengineering:arc_furnace",
           "results":[
           {
              "count":1,
              "base_ingredient":{
               "item":"create:sturdy_sheet"
              }
            }],
           "additives":[{"item":"immersiveengineering:dust_coke"}],
        "input":{"item":"kubejs:formed_sturdy_sheet"},
        "time":100,"energy":51200
        }
   )

    event.custom({                              //黄麻碱
      "type":"immersiveengineering:squeezer",
      "fluid":{"fluid":"kubejs:jute","amount":25},
      "input":{"count":64,"base_ingredient":{"item":"immersiveengineering:hemp_fiber"}},
      "energy":19200
      })

 event.custom({                                                            //黄麻碱针剂
   "type": "create:filling",
   "ingredients": [{"item": "kubejs:ethanol_bottled"},{"amount": 250,"fluid": "kubejs:jute"}],
    "results": [{"item": "kubejs:jute_injection"}]
 })
 event.custom({                                                                         //霰弹枪弹头
   "type": "create:deploying",
   "ingredients": [{"item": "kubejs:no12_projectiles"},{"item": "minecraft:paper"}],
   "results": [{"item": "kubejs:shotgun_warheads"}]
 })

 event.custom({                                                                         //底火
    "type": "create:deploying",
    "ingredients": [{"tag": "forge:nuggets/lead"},{"item": "kubejs:small_portions_gunpowder"}],
    "results": [{"count":9,"item": "kubejs:primer"}]
  })
 event.custom({                              //云母合成
    "type": "create:crushing",
    "ingredients": [{"item":"minecraft:diorite"}],
    "results": [{"chance": 0.2,"item": "minecraft:cobblestone"},{"chance": 0.8,"item": "kubejs:mica"}]
 })

 event.custom({                              //手枪弹壳模具
   "type":"immersiveengineering:blueprint",
   "inputs":[{"count":3,"base_ingredient":{"tag":"forge:plates/steel"}},
   {"item":"immersiveengineering:wirecutter"}],
   "category":"molds",
   "result":{"item":"kubejs:rifle_shells_mold"}
   })

 event.custom({                              //步枪弹壳模具
   "type":"immersiveengineering:blueprint",
   "inputs":[{"count":3,"base_ingredient":{"tag":"forge:plates/steel"}},
   {"item":"immersiveengineering:wirecutter"}],
   "category":"molds",
   "result":{"item":"kubejs:pistol_casings_mold"}
   })


 event.custom({                              //小份火药
     "type":"immersiveengineering:metal_press",
      "mold":"immersiveengineering:mold_unpacking",
      "result":{"item":"kubejs:small_portions_gunpowder","count":18},
      "input":{"tag":"forge:gunpowder"},
      "energy":2400
      })

 event.custom({                              //12号弹丸
     "type":"immersiveengineering:metal_press",
      "mold":"immersiveengineering:mold_unpacking",
      "result":{"item":"kubejs:no12_projectiles","count":4},
      "input":{"tag":"forge:ingots/copper"},
      "energy":2400
      })

 event.custom({                                                                                                    //独头霰弹枪弹头
  "type": "create:sequenced_assembly",
  "ingredient": {"tag": "forge:ingots/steel"},
  "loops": 1,
  "results": [{"count":4,"item": "kubejs:oneheaded_shotgun_warheads"}],
  "sequence": [

    {"type": "create:cutting","ingredients": [{"item": "kubejs:component_oneheaded_shotgun_ammunition"}],"results": [{"item": "kubejs:component_oneheaded_shotgun_ammunition"}]},

    {"type": "create:cutting","ingredients": [{"item": "kubejs:component_oneheaded_shotgun_ammunition"}],"results": [{"item": "kubejs:component_oneheaded_shotgun_ammunition"}]}

  ],
  "transitionalItem": {"item": "kubejs:component_oneheaded_shotgun_ammunition"}
 })

 event.custom({                              //手枪弹壳
        "type":"immersiveengineering:metal_press",
         "mold":"kubejs:pistol_casings_mold",
         "result":{"item":"kubejs:pistol_casings","count":18},
         "input":{"tag":"forge:ingots/copper"},
         "energy":2400
         })

 event.custom({                              //步枪弹壳
        "type":"immersiveengineering:metal_press",
         "mold":"kubejs:rifle_shells_mold",
         "result":{"item":"kubejs:rifle_shells","count":9},
         "input":{"tag":"forge:ingots/copper"},
         "energy":2400
         })

 event.custom({                              //大型弹壳(霰弹)
        "type":"immersiveengineering:metal_press",
         "mold":"immersiveengineering:mold_bullet_casing",
         "result":{"item":"immersiveengineering:empty_shell","count":5},
         "input":{"item":"immersiveengineering:plate_duroplast"},
         "energy":2400
         })

 event.custom({                                                                                                    //未完成的霰弹枪弹药
  "type": "create:sequenced_assembly",
  "ingredient": {"item": "immersiveengineering:empty_shell"},
  "loops": 1,
  "results": [{"item": "kubejs:component_shotgun_ammunition"}],
  "sequence": [
    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_shotgun_ammunition"},{"item": "kubejs:primer"}],
     "results": [{"item": "kubejs:component_shotgun_ammunition"}]},

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_shotgun_ammunition"},{"item": "kubejs:small_portions_gunpowder"}],
     "results": [{"item": "kubejs:component_shotgun_ammunition"}]},

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_shotgun_ammunition"},{"item": "kubejs:small_portions_gunpowder"}],
     "results": [{"item": "kubejs:component_shotgun_ammunition"}]}
  ],
  "transitionalItem": {"item": "kubejs:component_shotgun_ammunition"}
 })

 event.custom({                                                                         //霰弹枪弹药
   "type": "create:deploying",
   "ingredients": [{"item": "kubejs:component_shotgun_ammunition"},{"item": "kubejs:shotgun_warheads"}],
   "results": [{"item": "ww1guns:12_gauge"}]
 })

 event.custom({                                                                         //独头霰弹枪弹药
   "type": "create:deploying",
   "ingredients": [{"item": "kubejs:component_shotgun_ammunition"},{"item": "kubejs:oneheaded_shotgun_warheads"}],
   "results": [{"item": "ww1guns:slug"}]
 })

 event.custom({                                                                                                    //手枪弹药
  "type": "create:sequenced_assembly",
  "ingredient": {"item": "kubejs:pistol_casings"},
  "loops": 1,
  "results": [{"item": "ww1guns:handgun_ammo"}],
  "sequence": [
    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_pistol_ammunition"},{"item": "kubejs:primer"}],
     "results": [{"item": "kubejs:component_pistol_ammunition"}]},

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_pistol_ammunition"},{"item": "kubejs:small_portions_gunpowder"}],
     "results": [{"item": "kubejs:component_pistol_ammunition"}]},

    {"type": "create:deploying","ingredients": [{"item": "kubejs:component_pistol_ammunition"},{"tag": "forge:nuggets/brass"}],
     "results": [{"item": "kubejs:component_pistol_ammunition"}]}
  ],
  "transitionalItem": {"item": "kubejs:component_pistol_ammunition"}
 })

console.info('111')
 event.custom({                                                                                                    //步枪弹药
   "type": "create:sequenced_assembly",
   "ingredient": {"item": "kubejs:rifle_shells"},
   "loops": 1,
   "results": [{"item": "ww1guns:rifle_ammo"}],
   "sequence": [
     {"type": "create:deploying","ingredients": [{"item": "kubejs:component_rifle_ammunition"},{"item": "kubejs:primer"}],
      "results": [{"item": "kubejs:component_rifle_ammunition"}]},

     {"type": "create:deploying","ingredients": [{"item": "kubejs:component_rifle_ammunition"},{"item": "kubejs:small_portions_gunpowder"}],
      "results": [{"item": "kubejs:component_rifle_ammunition"}]},

     {"type": "create:deploying","ingredients": [{"item": "kubejs:component_rifle_ammunition"},{"item": "kubejs:small_portions_gunpowder"}],
      "results": [{"item": "kubejs:component_rifle_ammunition"}]},

     {"type": "create:deploying","ingredients": [{"item": "kubejs:component_rifle_ammunition"},{"tag": "forge:nuggets/constantan"}],
      "results": [{"item": "kubejs:component_rifle_ammunition"}]}
   ],
   "transitionalItem": {"item": "kubejs:component_rifle_ammunition"}
  })

 event.custom({                                                            //瓶装乙醇(生物乙醇)
   "type": "create:filling",
   "ingredients": [{"item": "minecraft:glass_bottle"},{"amount": 250,"fluid": "createaddition:bioethanol"}],
    "results": [{"item": "kubejs:ethanol_bottled"}]
 })

 event.custom({                                                            //修改机械动力附属玻璃的配方
   "type": "create:deploying",
   "ingredients": [{"item": "minecraft:glass"},{"item": "create:sturdy_sheet"}],
    "results": [{"item": "create_crystal_clear:train_glass_casing"}]
 })

 event.custom({                                                            //瓶装乙醇(乙醇)
   "type": "create:filling",
   "ingredients": [{"item": "minecraft:glass_bottle"},{"item": "create:sturdy_sheet"}],
    "results": [{"item": "kubejs:ethanol_bottled"}]
 })

 event.custom({                         //木握把
   "type": "create:cutting",
   "ingredients": [{"item": "kubejs:wooden_firearm_parts"}],
   "processingTime": 50,
   "results": [{"item": "immersiveengineering:wooden_grip"}]
 })

 event.custom({                                                             //炮钢锭合成
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      {"tag": "forge:ingots/nickel"},{"tag": "forge:ingots/steel"},
    ],
    "results": [
      {"item": "kubejs:nickel_iron_alloy"}
    ]
  })

  event.custom({                                                             //燧石
     "type": "create:splashing",
     "ingredients": [{"item": "minecraft:gravel"}],
     "results": [{"chance": 0.25,"item": "minecraft:flint"}]
   })

 event.shapeless('create:schedule', ['#forge:plates/steel', 'minecraft:paper'])       //列车时刻表
 event.shapeless('9x minecraft:coal', ['minecraft:coal_block'])        //煤炭
 event.shapeless('9x minecraft:diamond', ['minecraft:diamond_block'])       //钻石
 event.shapeless('9x minecraft:redstone', ['minecraft:redstone_block'])       //红石
 event.shapeless('9x minecraft:emerald', ['minecraft:emerald_block'])       //绿宝石
 event.shapeless('contact:ender_wrapping_paper', ['contact:wrapping_paper','kubejs:unknown_technology'])       //末影包裹

 event.shaped(Item.of('immersive_weathering:steel_wool'),[     //钢丝球
       'ww',
       'ww',
   ],{
       w:'immersiveengineering:wire_steel'
   })

 event.shaped('2x create_electric_stonks:resonating_block',[     //共振线圈方块
       'plp',
       'ncn',
       'plp'
   ],{
       p:'immersiveengineering:plate_steel',
       c:'immersiveengineering:generator',
       n:'minecraft:netherite_scrap',
       l:'immersiveengineering:plate_copper'
   })

 event.shaped('kubejs:medical_kits',[     //医疗包
       'h h',
       ' e ',
       'h h'
   ],{
       h:'immersiveengineering:hemp_fabric',
       e:'kubejs:ethanol_bottled'
   })

 event.shaped('createoreexcavation:vein_finder',[     //勘矿稿
          'hss',
          ' t ',
          ' t '
      ],{
          h:Item.of('immersiveengineering:hammer', '{Damage:0}'),
          s:'#forge:ingots/steel',
          t:'immersiveengineering:stick_treated'
      })

 event.shaped('create:white_sail',[     //白色风帆
          'sss',
          'shs',
          'sss'
      ],{
          s:'#forge:rods/wooden',
          h:'immersiveengineering:hemp_fabric'
      })

 event.shaped('create:nozzle',[     //分散网
               'iii',
               'iai',
               'iii'
           ],{
               i:'minecraft:iron_bars',
               a:'create:andesite_casing'
           })

 event.shaped('backpacked:backpack',[     //背包
                           'lhl',
                           'hsh',
                           'hhh'
                    ],{
                    l:'minecraft:leather',
                    s:'minecraft:string',
                    h:'immersiveengineering:hemp_fabric'
                 })

 event.custom({                                                                //喷气背包合成
            "type": "create:mechanical_crafting",
            "acceptMirrored": false,
            "key": {
              "S": {"item": "create:steam_engine"},
              "O": {"item": "immersiveengineering:component_steel"},
              "M": {"item": "create:mechanical_pump"},
              "P": {"item": "create:precision_mechanism"},
              "E": {"item": "create:encased_fan"},
              "A": {"tag": "forge:plates/aluminum"},
              "B": {"item": "create:blaze_burner"},
              "C": {"item": "create_sa:brass_chestplate"},
              "F": {"item": "create:fluid_tank"}
                   },
            "pattern": [
              " O O ",
              "PMFMP",
              "SEBES",
              "AMCMA",
              " A A "
            ],
            "result": {"item": "create_sa:brass_jetpack_chestplate"}
      })

 event.custom({                                                                //钩爪
            "type": "create:mechanical_crafting",
            "acceptMirrored": false,
            "key": {
              "a": {"item": "create:andesite_casing"},
              "w": {"item": "immersiveengineering:wooden_grip"},
              "m": {"item": "create:minecart_coupling"},
              "c": {"item": "create:cogwheel"},
              "b": {"ignoreNBT": true, "item": "create:copper_backtank"},
              "s": {"item": "immersiveengineering:wirecoil_structure_rope"},
              "o": {"item": "immersiveengineering:component_iron"},
              "h": {"item": "create:whisk"}
                   },
            "pattern": [
              "   m ",
              " csm ",
              "abomh",
              "wcsm ",
              "   m "
            ],
            "result": {"item": "create_sa:grapplin_whisk"}
      })

 event.custom({                                                                //沉浸钻头
            "type": "create:mechanical_crafting",
            "acceptMirrored": false,
            "key": {
              "b": {"item": "create:blaze_burner"},
              "w": {"item": "immersiveengineering:wooden_grip"},
              "s": {"item": "kubejs:steel_firearm_parts"},
              "c": {"item": "immersiveengineering:component_steel"},
              "o": {"item": "kubejs:wooden_firearm_parts"},
              "t": {"item": "immersiveengineering:toolupgrade_drill_capacity"},
              "e": {"item": "create:steam_engine"},
              "m": {"item": "create:mechanical_bearing"}
                   },
            "pattern": [
              "cto ",
              "cbem",
              "wss "
            ],
            "result": {"item": "immersiveengineering:drill"}
      })

 event.custom({                                                                //沉浸电锯
            "type": "create:mechanical_crafting",
            "acceptMirrored": false,
            "key": {
              "b": {"item": "create:blaze_burner"},
              "w": {"item": "immersiveengineering:wooden_grip"},
              "s": {"item": "kubejs:steel_firearm_parts"},
              "c": {"item": "immersiveengineering:component_steel"},
              "o": {"item": "kubejs:wooden_firearm_parts"},
              "t": {"item": "immersiveengineering:toolupgrade_drill_capacity"},
              "e": {"item": "create:steam_engine"},
              "g": {"item": "create:gearbox"}
                   },
            "pattern": [
              "cto ",
              "cbeg",
              "wss "
            ],
            "result": {"item": "immersiveengineering:buzzsaw"}
      })

 event.custom({                                                                //化学喷射器
            "type": "create:mechanical_crafting",
            "acceptMirrored": false,
            "key": {
              "w": {"item": "immersiveengineering:toolupgrade_drill_waterproof"},
              "c": {"item": "immersiveengineering:toolupgrade_drill_capacity"},
              "p": {"item": "kubejs:wooden_firearm_parts"},
              "s": {"item": "immersiveengineering:component_steel"},
              "v": {"item": "create:fluid_valve"},
              "i": {"item": "immersiveengineering:fluid_pipe"},
              "g": {"item": "immersiveengineering:wooden_grip"},
              "t": {"item": "kubejs:steel_firearm_parts"}
                   },
            "pattern": [
              "wcp ",
              "svii",
              "gt  "
            ],
            "result": {"item": "immersiveengineering:chemthrower"}
      })
  event.custom({                                                                //微型虫洞发生器
             "type": "create:mechanical_crafting",
             "acceptMirrored": false,
             "key": {
               "m": {"item": "immersiveengineering:coil_mv"},
               "h": {"item": "immersiveengineering:capacitor_hv"},
               "e": {"item": "minecraft:end_crystal"},
               "p": {"item": "immersiveengineering:plate_silver"},
               "a": {"item": "immersiveengineering:heavy_engineering"}
                    },
             "pattern": [
               "mhmhm",
               "hpeph",
               "meaem",
               "hpeph",
               "mhmhm",
             ],
             "result": {"item": "kubejs:unknown_technology"}
       })
})





