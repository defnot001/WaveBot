const allScboreboards = [
  // {
  //   stat: 'digevent',
  //   translation: 'Digevent [Combined]',
  // },
  {
    stat: 'digs',
    translation: 'Digs [Combined]',
  },
  {
    stat: 'bedrock_removed',
    translation: 'Removed Bedrock',
  },
  {
    stat: 'm-air',
    translation: 'Mined Air',
  },
  {
    stat: 'm-stone',
    translation: 'Mined Stone',
  },
  {
    stat: 'm-granite',
    translation: 'Mined Granite',
  },
  {
    stat: 'm-polished_granite',
    translation: 'Mined Polished Granite',
  },
  {
    stat: 'm-diorite',
    translation: 'Mined Diorite',
  },
  {
    stat: 'm-polished_diorite',
    translation: 'Mined Polished Diorite',
  },
  {
    stat: 'm-andesite',
    translation: 'Mined Andesite',
  },
  {
    stat: 'm-polished_andesite',
    translation: 'Mined Polished Andesite',
  },
  {
    stat: 'm-grass_block',
    translation: 'Mined Grass Block',
  },
  {
    stat: 'm-dirt',
    translation: 'Mined Dirt',
  },
  {
    stat: 'm-coarse_dirt',
    translation: 'Mined Coarse Dirt',
  },
  {
    stat: 'm-podzol',
    translation: 'Mined Podzol',
  },
  {
    stat: 'm-cobblestone',
    translation: 'Mined Cobblestone',
  },
  {
    stat: 'm-oak_planks',
    translation: 'Mined Oak Planks',
  },
  {
    stat: 'm-spruce_planks',
    translation: 'Mined Spruce Planks',
  },
  {
    stat: 'm-birch_planks',
    translation: 'Mined Birch Planks',
  },
  {
    stat: 'm-jungle_planks',
    translation: 'Mined Jungle Planks',
  },
  {
    stat: 'm-acacia_planks',
    translation: 'Mined Acacia Planks',
  },
  {
    stat: 'm-dark_oak_planks',
    translation: 'Mined Dark Oak Planks',
  },
  {
    stat: 'm-mangrove_planks',
    translation: 'Mined Mangrove Planks',
  },
  {
    stat: 'm-oak_sapling',
    translation: 'Mined Oak Sapling',
  },
  {
    stat: 'm-spruce_sapling',
    translation: 'Mined Spruce Sapling',
  },
  {
    stat: 'm-birch_sapling',
    translation: 'Mined Birch Sapling',
  },
  {
    stat: 'm-jungle_sapling',
    translation: 'Mined Jungle Sapling',
  },
  {
    stat: 'm-acacia_sapling',
    translation: 'Mined Acacia Sapling',
  },
  {
    stat: 'm-dark_oak_sapling',
    translation: 'Mined Dark Oak Sapling',
  },
  {
    stat: 'm-mangrove_propagule',
    translation: 'Mined Mangrove Propagule',
  },
  {
    stat: 'm-bedrock',
    translation: 'Mined Bedrock',
  },
  {
    stat: 'm-water',
    translation: 'Mined Water',
  },
  {
    stat: 'm-lava',
    translation: 'Mined Lava',
  },
  {
    stat: 'm-sand',
    translation: 'Mined Sand',
  },
  {
    stat: 'm-red_sand',
    translation: 'Mined Red Sand',
  },
  {
    stat: 'm-gravel',
    translation: 'Mined Gravel',
  },
  {
    stat: 'm-gold_ore',
    translation: 'Mined Gold Ore',
  },
  {
    stat: 'm-deepslate_gold_ore',
    translation: 'Mined Deepslate Gold Ore',
  },
  {
    stat: 'm-iron_ore',
    translation: 'Mined Iron Ore',
  },
  {
    stat: 'm-deepslate_iron_ore',
    translation: 'Mined Deepslate Iron Ore',
  },
  {
    stat: 'm-coal_ore',
    translation: 'Mined Coal Ore',
  },
  {
    stat: 'm-deepslate_coal_ore',
    translation: 'Mined Deepslate Coal Ore',
  },
  {
    stat: 'm-nether_gold_ore',
    translation: 'Mined Nether Gold Ore',
  },
  {
    stat: 'm-oak_log',
    translation: 'Mined Oak Log',
  },
  {
    stat: 'm-spruce_log',
    translation: 'Mined Spruce Log',
  },
  {
    stat: 'm-birch_log',
    translation: 'Mined Birch Log',
  },
  {
    stat: 'm-jungle_log',
    translation: 'Mined Jungle Log',
  },
  {
    stat: 'm-acacia_log',
    translation: 'Mined Acacia Log',
  },
  {
    stat: 'm-dark_oak_log',
    translation: 'Mined Dark Oak Log',
  },
  {
    stat: 'm-mangrove_log',
    translation: 'Mined Mangrove Log',
  },
  {
    stat: 'm-mangrove_roots',
    translation: 'Mined Mangrove Roots',
  },
  {
    stat: 'm-muddy_mangrove_roots',
    translation: 'Mined Muddy Mangrove Roots',
  },
  {
    stat: 'm-stripped_spruce_log',
    translation: 'Mined Stripped Spruce Log',
  },
  {
    stat: 'm-stripped_birch_log',
    translation: 'Mined Stripped Birch Log',
  },
  {
    stat: 'm-stripped_jungle_log',
    translation: 'Mined Stripped Jungle Log',
  },
  {
    stat: 'm-stripped_acacia_log',
    translation: 'Mined Stripped Acacia Log',
  },
  {
    stat: 'm-stripped_dark_oak_log',
    translation: 'Mined Stripped Dark Oak Log',
  },
  {
    stat: 'm-stripped_oak_log',
    translation: 'Mined Stripped Oak Log',
  },
  {
    stat: 'm-stripped_mangrove_log',
    translation: 'Mined Stripped Mangrove Log',
  },
  {
    stat: 'm-oak_wood',
    translation: 'Mined Oak Wood',
  },
  {
    stat: 'm-spruce_wood',
    translation: 'Mined Spruce Wood',
  },
  {
    stat: 'm-birch_wood',
    translation: 'Mined Birch Wood',
  },
  {
    stat: 'm-jungle_wood',
    translation: 'Mined Jungle Wood',
  },
  {
    stat: 'm-acacia_wood',
    translation: 'Mined Acacia Wood',
  },
  {
    stat: 'm-dark_oak_wood',
    translation: 'Mined Dark Oak Wood',
  },
  {
    stat: 'm-mangrove_wood',
    translation: 'Mined Mangrove Wood',
  },
  {
    stat: 'm-stripped_oak_wood',
    translation: 'Mined Stripped Oak Wood',
  },
  {
    stat: 'm-stripped_spruce_wood',
    translation: 'Mined Stripped Spruce Wood',
  },
  {
    stat: 'm-stripped_birch_wood',
    translation: 'Mined Stripped Birch Wood',
  },
  {
    stat: 'm-stripped_jungle_wood',
    translation: 'Mined Stripped Jungle Wood',
  },
  {
    stat: 'm-stripped_acacia_wood',
    translation: 'Mined Stripped Acacia Wood',
  },
  {
    stat: 'm-stripped_dark_oak_wood',
    translation: 'Mined Stripped Dark Oak Wood',
  },
  {
    stat: 'm-stripped_mangrove_wood',
    translation: 'Mined Stripped Mangrove Wood',
  },
  {
    stat: 'm-oak_leaves',
    translation: 'Mined Oak Leaves',
  },
  {
    stat: 'm-spruce_leaves',
    translation: 'Mined Spruce Leaves',
  },
  {
    stat: 'm-birch_leaves',
    translation: 'Mined Birch Leaves',
  },
  {
    stat: 'm-jungle_leaves',
    translation: 'Mined Jungle Leaves',
  },
  {
    stat: 'm-acacia_leaves',
    translation: 'Mined Acacia Leaves',
  },
  {
    stat: 'm-dark_oak_leaves',
    translation: 'Mined Dark Oak Leaves',
  },
  {
    stat: 'm-mangrove_leaves',
    translation: 'Mined Mangrove Leaves',
  },
  {
    stat: 'm-azalea_leaves',
    translation: 'Mined Azalea Leaves',
  },
  {
    stat: 'm-flowering_azalea_leaves',
    translation: 'Mined Flowering Azalea Leaves',
  },
  {
    stat: 'm-sponge',
    translation: 'Mined Sponge',
  },
  {
    stat: 'm-wet_sponge',
    translation: 'Mined Wet Sponge',
  },
  {
    stat: 'm-glass',
    translation: 'Mined Glass',
  },
  {
    stat: 'm-lapis_ore',
    translation: 'Mined Lapis Lazuli Ore',
  },
  {
    stat: 'm-deepslate_lapis_ore',
    translation: 'Mined Deepslate Lapis Lazuli Ore',
  },
  {
    stat: 'm-lapis_block',
    translation: 'Mined Block of Lapis Lazuli',
  },
  {
    stat: 'm-dispenser',
    translation: 'Mined Dispenser',
  },
  {
    stat: 'm-sandstone',
    translation: 'Mined Sandstone',
  },
  {
    stat: 'm-chiseled_sandstone',
    translation: 'Mined Chiseled Sandstone',
  },
  {
    stat: 'm-cut_sandstone',
    translation: 'Mined Cut Sandstone',
  },
  {
    stat: 'm-note_block',
    translation: 'Mined Note Block',
  },
  {
    stat: 'm-white_bed',
    translation: 'Mined White Bed',
  },
  {
    stat: 'm-orange_bed',
    translation: 'Mined Orange Bed',
  },
  {
    stat: 'm-magenta_bed',
    translation: 'Mined Magenta Bed',
  },
  {
    stat: 'm-light_blue_bed',
    translation: 'Mined Light Blue Bed',
  },
  {
    stat: 'm-yellow_bed',
    translation: 'Mined Yellow Bed',
  },
  {
    stat: 'm-lime_bed',
    translation: 'Mined Lime Bed',
  },
  {
    stat: 'm-pink_bed',
    translation: 'Mined Pink Bed',
  },
  {
    stat: 'm-gray_bed',
    translation: 'Mined Gray Bed',
  },
  {
    stat: 'm-light_gray_bed',
    translation: 'Mined Light Gray Bed',
  },
  {
    stat: 'm-cyan_bed',
    translation: 'Mined Cyan Bed',
  },
  {
    stat: 'm-purple_bed',
    translation: 'Mined Purple Bed',
  },
  {
    stat: 'm-blue_bed',
    translation: 'Mined Blue Bed',
  },
  {
    stat: 'm-brown_bed',
    translation: 'Mined Brown Bed',
  },
  {
    stat: 'm-green_bed',
    translation: 'Mined Green Bed',
  },
  {
    stat: 'm-red_bed',
    translation: 'Mined Red Bed',
  },
  {
    stat: 'm-black_bed',
    translation: 'Mined Black Bed',
  },
  {
    stat: 'm-powered_rail',
    translation: 'Mined Powered Rail',
  },
  {
    stat: 'm-detector_rail',
    translation: 'Mined Detector Rail',
  },
  {
    stat: 'm-sticky_piston',
    translation: 'Mined Sticky Piston',
  },
  {
    stat: 'm-cobweb',
    translation: 'Mined Cobweb',
  },
  {
    stat: 'm-grass',
    translation: 'Mined Grass',
  },
  {
    stat: 'm-fern',
    translation: 'Mined Fern',
  },
  {
    stat: 'm-dead_bush',
    translation: 'Mined Dead Bush',
  },
  {
    stat: 'm-seagrass',
    translation: 'Mined Seagrass',
  },
  {
    stat: 'm-tall_seagrass',
    translation: 'Mined Tall Seagrass',
  },
  {
    stat: 'm-piston',
    translation: 'Mined Piston',
  },
  {
    stat: 'm-piston_head',
    translation: 'Mined Piston Head',
  },
  {
    stat: 'm-white_wool',
    translation: 'Mined White Wool',
  },
  {
    stat: 'm-orange_wool',
    translation: 'Mined Orange Wool',
  },
  {
    stat: 'm-magenta_wool',
    translation: 'Mined Magenta Wool',
  },
  {
    stat: 'm-light_blue_wool',
    translation: 'Mined Light Blue Wool',
  },
  {
    stat: 'm-yellow_wool',
    translation: 'Mined Yellow Wool',
  },
  {
    stat: 'm-lime_wool',
    translation: 'Mined Lime Wool',
  },
  {
    stat: 'm-pink_wool',
    translation: 'Mined Pink Wool',
  },
  {
    stat: 'm-gray_wool',
    translation: 'Mined Gray Wool',
  },
  {
    stat: 'm-light_gray_wool',
    translation: 'Mined Light Gray Wool',
  },
  {
    stat: 'm-cyan_wool',
    translation: 'Mined Cyan Wool',
  },
  {
    stat: 'm-purple_wool',
    translation: 'Mined Purple Wool',
  },
  {
    stat: 'm-blue_wool',
    translation: 'Mined Blue Wool',
  },
  {
    stat: 'm-brown_wool',
    translation: 'Mined Brown Wool',
  },
  {
    stat: 'm-green_wool',
    translation: 'Mined Green Wool',
  },
  {
    stat: 'm-red_wool',
    translation: 'Mined Red Wool',
  },
  {
    stat: 'm-black_wool',
    translation: 'Mined Black Wool',
  },
  {
    stat: 'm-moving_piston',
    translation: 'Mined Moving Piston',
  },
  {
    stat: 'm-dandelion',
    translation: 'Mined Dandelion',
  },
  {
    stat: 'm-poppy',
    translation: 'Mined Poppy',
  },
  {
    stat: 'm-blue_orchid',
    translation: 'Mined Blue Orchid',
  },
  {
    stat: 'm-allium',
    translation: 'Mined Allium',
  },
  {
    stat: 'm-azure_bluet',
    translation: 'Mined Azure Bluet',
  },
  {
    stat: 'm-red_tulip',
    translation: 'Mined Red Tulip',
  },
  {
    stat: 'm-orange_tulip',
    translation: 'Mined Orange Tulip',
  },
  {
    stat: 'm-white_tulip',
    translation: 'Mined White Tulip',
  },
  {
    stat: 'm-pink_tulip',
    translation: 'Mined Pink Tulip',
  },
  {
    stat: 'm-oxeye_daisy',
    translation: 'Mined Oxeye Daisy',
  },
  {
    stat: 'm-cornflower',
    translation: 'Mined Cornflower',
  },
  {
    stat: 'm-wither_rose',
    translation: 'Mined Wither Rose',
  },
  {
    stat: 'm-lily_of_the_valley',
    translation: 'Mined Lily of the Valley',
  },
  {
    stat: 'm-brown_mushroom',
    translation: 'Mined Brown Mushroom',
  },
  {
    stat: 'm-red_mushroom',
    translation: 'Mined Red Mushroom',
  },
  {
    stat: 'm-gold_block',
    translation: 'Mined Block of Gold',
  },
  {
    stat: 'm-iron_block',
    translation: 'Mined Block of Iron',
  },
  {
    stat: 'm-bricks',
    translation: 'Mined Bricks',
  },
  {
    stat: 'm-tnt',
    translation: 'Mined TNT',
  },
  {
    stat: 'm-bookshelf',
    translation: 'Mined Bookshelf',
  },
  {
    stat: 'm-mossy_cobblestone',
    translation: 'Mined Mossy Cobblestone',
  },
  {
    stat: 'm-obsidian',
    translation: 'Mined Obsidian',
  },
  {
    stat: 'm-torch',
    translation: 'Mined Torch',
  },
  {
    stat: 'm-wall_torch',
    translation: 'Mined Torch',
  },
  {
    stat: 'm-fire',
    translation: 'Mined Fire',
  },
  {
    stat: 'm-soul_fire',
    translation: 'Mined Soul Fire',
  },
  {
    stat: 'm-spawner',
    translation: 'Mined Spawner',
  },
  {
    stat: 'm-oak_stairs',
    translation: 'Mined Oak Stairs',
  },
  {
    stat: 'm-chest',
    translation: 'Mined Chest',
  },
  {
    stat: 'm-redstone_wire',
    translation: 'Mined Redstone Wire',
  },
  {
    stat: 'm-diamond_ore',
    translation: 'Mined Diamond Ore',
  },
  {
    stat: 'm-deepslate_diamond_ore',
    translation: 'Mined Deepslate Diamond Ore',
  },
  {
    stat: 'm-diamond_block',
    translation: 'Mined Block of Diamond',
  },
  {
    stat: 'm-crafting_table',
    translation: 'Mined Crafting Table',
  },
  {
    stat: 'm-wheat',
    translation: 'Mined Wheat Crops',
  },
  {
    stat: 'm-farmland',
    translation: 'Mined Farmland',
  },
  {
    stat: 'm-furnace',
    translation: 'Mined Furnace',
  },
  {
    stat: 'm-oak_sign',
    translation: 'Mined Oak Sign',
  },
  {
    stat: 'm-spruce_sign',
    translation: 'Mined Spruce Sign',
  },
  {
    stat: 'm-birch_sign',
    translation: 'Mined Birch Sign',
  },
  {
    stat: 'm-acacia_sign',
    translation: 'Mined Acacia Sign',
  },
  {
    stat: 'm-jungle_sign',
    translation: 'Mined Jungle Sign',
  },
  {
    stat: 'm-dark_oak_sign',
    translation: 'Mined Dark Oak Sign',
  },
  {
    stat: 'm-mangrove_sign',
    translation: 'Mined Mangrove Sign',
  },
  {
    stat: 'm-oak_door',
    translation: 'Mined Oak Door',
  },
  {
    stat: 'm-ladder',
    translation: 'Mined Ladder',
  },
  {
    stat: 'm-rail',
    translation: 'Mined Rail',
  },
  {
    stat: 'm-cobblestone_stairs',
    translation: 'Mined Cobblestone Stairs',
  },
  {
    stat: 'm-oak_wall_sign',
    translation: 'Mined Oak Sign',
  },
  {
    stat: 'm-spruce_wall_sign',
    translation: 'Mined Spruce Sign',
  },
  {
    stat: 'm-birch_wall_sign',
    translation: 'Mined Birch Sign',
  },
  {
    stat: 'm-acacia_wall_sign',
    translation: 'Mined Acacia Sign',
  },
  {
    stat: 'm-jungle_wall_sign',
    translation: 'Mined Jungle Sign',
  },
  {
    stat: 'm-dark_oak_wall_sign',
    translation: 'Mined Dark Oak Sign',
  },
  {
    stat: 'm-mangrove_wall_sign',
    translation: 'Mined Mangrove Sign',
  },
  {
    stat: 'm-lever',
    translation: 'Mined Lever',
  },
  {
    stat: 'm-stone_pressure_plate',
    translation: 'Mined Stone Pressure Plate',
  },
  {
    stat: 'm-iron_door',
    translation: 'Mined Iron Door',
  },
  {
    stat: 'm-oak_pressure_plate',
    translation: 'Mined Oak Pressure Plate',
  },
  {
    stat: 'm-spruce_pressure_plate',
    translation: 'Mined Spruce Pressure Plate',
  },
  {
    stat: 'm-birch_pressure_plate',
    translation: 'Mined Birch Pressure Plate',
  },
  {
    stat: 'm-jungle_pressure_plate',
    translation: 'Mined Jungle Pressure Plate',
  },
  {
    stat: 'm-acacia_pressure_plate',
    translation: 'Mined Acacia Pressure Plate',
  },
  {
    stat: 'm-dark_oak_pressure_plate',
    translation: 'Mined Dark Oak Pressure Plate',
  },
  {
    stat: 'm-mangrove_pressure_plate',
    translation: 'Mined Mangrove Pressure Plate',
  },
  {
    stat: 'm-redstone_ore',
    translation: 'Mined Redstone Ore',
  },
  {
    stat: 'm-deepslate_redstone_ore',
    translation: 'Mined Deepslate Redstone Ore',
  },
  {
    stat: 'm-redstone_torch',
    translation: 'Mined Redstone Torch',
  },
  {
    stat: 'm-redstone_wall_torch',
    translation: 'Mined Redstone Torch',
  },
  {
    stat: 'm-stone_button',
    translation: 'Mined Stone Button',
  },
  {
    stat: 'm-snow',
    translation: 'Mined Snow',
  },
  {
    stat: 'm-ice',
    translation: 'Mined Ice',
  },
  {
    stat: 'm-snow_block',
    translation: 'Mined Snow Block',
  },
  {
    stat: 'm-cactus',
    translation: 'Mined Cactus',
  },
  {
    stat: 'm-clay',
    translation: 'Mined Clay',
  },
  {
    stat: 'm-sugar_cane',
    translation: 'Mined Sugar Cane',
  },
  {
    stat: 'm-jukebox',
    translation: 'Mined Jukebox',
  },
  {
    stat: 'm-oak_fence',
    translation: 'Mined Oak Fence',
  },
  {
    stat: 'm-pumpkin',
    translation: 'Mined Pumpkin',
  },
  {
    stat: 'm-netherrack',
    translation: 'Mined Netherrack',
  },
  {
    stat: 'm-soul_sand',
    translation: 'Mined Soul Sand',
  },
  {
    stat: 'm-soul_soil',
    translation: 'Mined Soul Soil',
  },
  {
    stat: 'm-basalt',
    translation: 'Mined Basalt',
  },
  {
    stat: 'm-polished_basalt',
    translation: 'Mined Polished Basalt',
  },
  {
    stat: 'm-soul_torch',
    translation: 'Mined Soul Torch',
  },
  {
    stat: 'm-soul_wall_torch',
    translation: 'Mined Soul Torch',
  },
  {
    stat: 'm-glowstone',
    translation: 'Mined Glowstone',
  },
  {
    stat: 'm-nether_portal',
    translation: 'Mined Nether Portal',
  },
  {
    stat: 'm-carved_pumpkin',
    translation: 'Mined Carved Pumpkin',
  },
  {
    stat: 'm-jack_o_lantern',
    translation: "Mined Jack o'Lantern",
  },
  {
    stat: 'm-cake',
    translation: 'Mined Cake',
  },
  {
    stat: 'm-repeater',
    translation: 'Mined Redstone Repeater',
  },
  {
    stat: 'm-white_stained_glass',
    translation: 'Mined White Stained Glass',
  },
  {
    stat: 'm-orange_stained_glass',
    translation: 'Mined Orange Stained Glass',
  },
  {
    stat: 'm-magenta_stained_glass',
    translation: 'Mined Magenta Stained Glass',
  },
  {
    stat: 'm-light_blue_stained_glass',
    translation: 'Mined Light Blue Stained Glass',
  },
  {
    stat: 'm-yellow_stained_glass',
    translation: 'Mined Yellow Stained Glass',
  },
  {
    stat: 'm-lime_stained_glass',
    translation: 'Mined Lime Stained Glass',
  },
  {
    stat: 'm-pink_stained_glass',
    translation: 'Mined Pink Stained Glass',
  },
  {
    stat: 'm-gray_stained_glass',
    translation: 'Mined Gray Stained Glass',
  },
  {
    stat: 'm-light_gray_stained_glass',
    translation: 'Mined Light Gray Stained Glass',
  },
  {
    stat: 'm-cyan_stained_glass',
    translation: 'Mined Cyan Stained Glass',
  },
  {
    stat: 'm-purple_stained_glass',
    translation: 'Mined Purple Stained Glass',
  },
  {
    stat: 'm-blue_stained_glass',
    translation: 'Mined Blue Stained Glass',
  },
  {
    stat: 'm-brown_stained_glass',
    translation: 'Mined Brown Stained Glass',
  },
  {
    stat: 'm-green_stained_glass',
    translation: 'Mined Green Stained Glass',
  },
  {
    stat: 'm-red_stained_glass',
    translation: 'Mined Red Stained Glass',
  },
  {
    stat: 'm-black_stained_glass',
    translation: 'Mined Black Stained Glass',
  },
  {
    stat: 'm-oak_trapdoor',
    translation: 'Mined Oak Trapdoor',
  },
  {
    stat: 'm-spruce_trapdoor',
    translation: 'Mined Spruce Trapdoor',
  },
  {
    stat: 'm-birch_trapdoor',
    translation: 'Mined Birch Trapdoor',
  },
  {
    stat: 'm-jungle_trapdoor',
    translation: 'Mined Jungle Trapdoor',
  },
  {
    stat: 'm-acacia_trapdoor',
    translation: 'Mined Acacia Trapdoor',
  },
  {
    stat: 'm-dark_oak_trapdoor',
    translation: 'Mined Dark Oak Trapdoor',
  },
  {
    stat: 'm-mangrove_trapdoor',
    translation: 'Mined Mangrove Trapdoor',
  },
  {
    stat: 'm-stone_bricks',
    translation: 'Mined Stone Bricks',
  },
  {
    stat: 'm-mossy_stone_bricks',
    translation: 'Mined Mossy Stone Bricks',
  },
  {
    stat: 'm-cracked_stone_bricks',
    translation: 'Mined Cracked Stone Bricks',
  },
  {
    stat: 'm-chiseled_stone_bricks',
    translation: 'Mined Chiseled Stone Bricks',
  },
  {
    stat: 'm-packed_mud',
    translation: 'Mined Packed Mud',
  },
  {
    stat: 'm-mud_bricks',
    translation: 'Mined Mud Bricks',
  },
  {
    stat: 'm-infested_stone',
    translation: 'Mined Infested Stone',
  },
  {
    stat: 'm-infested_cobblestone',
    translation: 'Mined Infested Cobblestone',
  },
  {
    stat: 'm-infested_stone_bricks',
    translation: 'Mined Infested Stone Bricks',
  },
  {
    stat: 'm-infested_mossy_stone_bricks',
    translation: 'Mined Infested Mossy Stone Bricks',
  },
  {
    stat: 'm-infested_cracked_stone_bricks',
    translation: 'Mined Infested Cracked Stone Bricks',
  },
  {
    stat: 'm-infested_chiseled_stone_bricks',
    translation: 'Mined Infested Chiseled Stone Bricks',
  },
  {
    stat: 'm-brown_mushroom_block',
    translation: 'Mined Brown Mushroom Block',
  },
  {
    stat: 'm-red_mushroom_block',
    translation: 'Mined Red Mushroom Block',
  },
  {
    stat: 'm-mushroom_stem',
    translation: 'Mined Mushroom Stem',
  },
  {
    stat: 'm-iron_bars',
    translation: 'Mined Iron Bars',
  },
  {
    stat: 'm-chain',
    translation: 'Mined Chain',
  },
  {
    stat: 'm-glass_pane',
    translation: 'Mined Glass Pane',
  },
  {
    stat: 'm-melon',
    translation: 'Mined Melon',
  },
  {
    stat: 'm-attached_pumpkin_stem',
    translation: 'Mined Attached Pumpkin Stem',
  },
  {
    stat: 'm-attached_melon_stem',
    translation: 'Mined Attached Melon Stem',
  },
  {
    stat: 'm-pumpkin_stem',
    translation: 'Mined Pumpkin Stem',
  },
  {
    stat: 'm-melon_stem',
    translation: 'Mined Melon Stem',
  },
  {
    stat: 'm-vine',
    translation: 'Mined Vines',
  },
  {
    stat: 'm-glow_lichen',
    translation: 'Mined Glow Lichen',
  },
  {
    stat: 'm-oak_fence_gate',
    translation: 'Mined Oak Fence Gate',
  },
  {
    stat: 'm-brick_stairs',
    translation: 'Mined Brick Stairs',
  },
  {
    stat: 'm-stone_brick_stairs',
    translation: 'Mined Stone Brick Stairs',
  },
  {
    stat: 'm-mud_brick_stairs',
    translation: 'Mined Mud Brick Stairs',
  },
  {
    stat: 'm-mycelium',
    translation: 'Mined Mycelium',
  },
  {
    stat: 'm-lily_pad',
    translation: 'Mined Lily Pad',
  },
  {
    stat: 'm-nether_bricks',
    translation: 'Mined Nether Bricks',
  },
  {
    stat: 'm-nether_brick_fence',
    translation: 'Mined Nether Brick Fence',
  },
  {
    stat: 'm-nether_brick_stairs',
    translation: 'Mined Nether Brick Stairs',
  },
  {
    stat: 'm-nether_wart',
    translation: 'Mined Nether Wart',
  },
  {
    stat: 'm-enchanting_table',
    translation: 'Mined Enchanting Table',
  },
  {
    stat: 'm-brewing_stand',
    translation: 'Mined Brewing Stand',
  },
  {
    stat: 'm-cauldron',
    translation: 'Mined Cauldron',
  },
  {
    stat: 'm-water_cauldron',
    translation: 'Mined Water Cauldron',
  },
  {
    stat: 'm-lava_cauldron',
    translation: 'Mined Lava Cauldron',
  },
  {
    stat: 'm-powder_snow_cauldron',
    translation: 'Mined Powder Snow Cauldron',
  },
  {
    stat: 'm-end_portal',
    translation: 'Mined End Portal',
  },
  {
    stat: 'm-end_portal_frame',
    translation: 'Mined End Portal Frame',
  },
  {
    stat: 'm-end_stone',
    translation: 'Mined End Stone',
  },
  {
    stat: 'm-dragon_egg',
    translation: 'Mined Dragon Egg',
  },
  {
    stat: 'm-redstone_lamp',
    translation: 'Mined Redstone Lamp',
  },
  {
    stat: 'm-cocoa',
    translation: 'Mined Cocoa',
  },
  {
    stat: 'm-sandstone_stairs',
    translation: 'Mined Sandstone Stairs',
  },
  {
    stat: 'm-emerald_ore',
    translation: 'Mined Emerald Ore',
  },
  {
    stat: 'm-deepslate_emerald_ore',
    translation: 'Mined Deepslate Emerald Ore',
  },
  {
    stat: 'm-ender_chest',
    translation: 'Mined Ender Chest',
  },
  {
    stat: 'm-tripwire_hook',
    translation: 'Mined Tripwire Hook',
  },
  {
    stat: 'm-tripwire',
    translation: 'Mined Tripwire',
  },
  {
    stat: 'm-emerald_block',
    translation: 'Mined Block of Emerald',
  },
  {
    stat: 'm-spruce_stairs',
    translation: 'Mined Spruce Stairs',
  },
  {
    stat: 'm-birch_stairs',
    translation: 'Mined Birch Stairs',
  },
  {
    stat: 'm-jungle_stairs',
    translation: 'Mined Jungle Stairs',
  },
  {
    stat: 'm-command_block',
    translation: 'Mined Command Block',
  },
  {
    stat: 'm-beacon',
    translation: 'Mined Beacon',
  },
  {
    stat: 'm-cobblestone_wall',
    translation: 'Mined Cobblestone Wall',
  },
  {
    stat: 'm-mossy_cobblestone_wall',
    translation: 'Mined Mossy Cobblestone Wall',
  },
  {
    stat: 'm-flower_pot',
    translation: 'Mined Flower Pot',
  },
  {
    stat: 'm-potted_oak_sapling',
    translation: 'Mined Potted Oak Sapling',
  },
  {
    stat: 'm-potted_spruce_sapling',
    translation: 'Mined Potted Spruce Sapling',
  },
  {
    stat: 'm-potted_birch_sapling',
    translation: 'Mined Potted Birch Sapling',
  },
  {
    stat: 'm-potted_jungle_sapling',
    translation: 'Mined Potted Jungle Sapling',
  },
  {
    stat: 'm-potted_acacia_sapling',
    translation: 'Mined Potted Acacia Sapling',
  },
  {
    stat: 'm-potted_dark_oak_sapling',
    translation: 'Mined Potted Dark Oak Sapling',
  },
  {
    stat: 'm-potted_mangrove_propagule',
    translation: 'Mined Potted Mangrove Propagule',
  },
  {
    stat: 'm-potted_fern',
    translation: 'Mined Potted Fern',
  },
  {
    stat: 'm-potted_dandelion',
    translation: 'Mined Potted Dandelion',
  },
  {
    stat: 'm-potted_poppy',
    translation: 'Mined Potted Poppy',
  },
  {
    stat: 'm-potted_blue_orchid',
    translation: 'Mined Potted Blue Orchid',
  },
  {
    stat: 'm-potted_allium',
    translation: 'Mined Potted Allium',
  },
  {
    stat: 'm-potted_azure_bluet',
    translation: 'Mined Potted Azure Bluet',
  },
  {
    stat: 'm-potted_red_tulip',
    translation: 'Mined Potted Red Tulip',
  },
  {
    stat: 'm-potted_orange_tulip',
    translation: 'Mined Potted Orange Tulip',
  },
  {
    stat: 'm-potted_white_tulip',
    translation: 'Mined Potted White Tulip',
  },
  {
    stat: 'm-potted_pink_tulip',
    translation: 'Mined Potted Pink Tulip',
  },
  {
    stat: 'm-potted_oxeye_daisy',
    translation: 'Mined Potted Oxeye Daisy',
  },
  {
    stat: 'm-potted_cornflower',
    translation: 'Mined Potted Cornflower',
  },
  {
    stat: 'm-potted_lily_of_the_valley',
    translation: 'Mined Potted Lily of the Valley',
  },
  {
    stat: 'm-potted_wither_rose',
    translation: 'Mined Potted Wither Rose',
  },
  {
    stat: 'm-potted_red_mushroom',
    translation: 'Mined Potted Red Mushroom',
  },
  {
    stat: 'm-potted_brown_mushroom',
    translation: 'Mined Potted Brown Mushroom',
  },
  {
    stat: 'm-potted_dead_bush',
    translation: 'Mined Potted Dead Bush',
  },
  {
    stat: 'm-potted_cactus',
    translation: 'Mined Potted Cactus',
  },
  {
    stat: 'm-carrots',
    translation: 'Mined Carrots',
  },
  {
    stat: 'm-potatoes',
    translation: 'Mined Potatoes',
  },
  {
    stat: 'm-oak_button',
    translation: 'Mined Oak Button',
  },
  {
    stat: 'm-spruce_button',
    translation: 'Mined Spruce Button',
  },
  {
    stat: 'm-birch_button',
    translation: 'Mined Birch Button',
  },
  {
    stat: 'm-jungle_button',
    translation: 'Mined Jungle Button',
  },
  {
    stat: 'm-acacia_button',
    translation: 'Mined Acacia Button',
  },
  {
    stat: 'm-dark_oak_button',
    translation: 'Mined Dark Oak Button',
  },
  {
    stat: 'm-mangrove_button',
    translation: 'Mined Mangrove Button',
  },
  {
    stat: 'm-skeleton_skull',
    translation: 'Mined Skeleton Skull',
  },
  {
    stat: 'm-skeleton_wall_skull',
    translation: 'Mined Skeleton Skull',
  },
  {
    stat: 'm-wither_skeleton_skull',
    translation: 'Mined Wither Skeleton Skull',
  },
  {
    stat: 'm-wither_skeleton_wall_skull',
    translation: 'Mined Wither Skeleton Skull',
  },
  {
    stat: 'm-zombie_head',
    translation: 'Mined Zombie Head',
  },
  {
    stat: 'm-zombie_wall_head',
    translation: 'Mined Zombie Head',
  },
  {
    stat: 'm-player_head',
    translation: 'Mined Player Head',
  },
  {
    stat: 'm-player_wall_head',
    translation: 'Mined Player Head',
  },
  {
    stat: 'm-creeper_head',
    translation: 'Mined Creeper Head',
  },
  {
    stat: 'm-creeper_wall_head',
    translation: 'Mined Creeper Head',
  },
  {
    stat: 'm-dragon_head',
    translation: 'Mined Dragon Head',
  },
  {
    stat: 'm-dragon_wall_head',
    translation: 'Mined Dragon Head',
  },
  {
    stat: 'm-anvil',
    translation: 'Mined Anvil',
  },
  {
    stat: 'm-chipped_anvil',
    translation: 'Mined Chipped Anvil',
  },
  {
    stat: 'm-damaged_anvil',
    translation: 'Mined Damaged Anvil',
  },
  {
    stat: 'm-trapped_chest',
    translation: 'Mined Trapped Chest',
  },
  {
    stat: 'm-light_weighted_pressure_plate',
    translation: 'Mined Light Weighted Pressure Plate',
  },
  {
    stat: 'm-heavy_weighted_pressure_plate',
    translation: 'Mined Heavy Weighted Pressure Plate',
  },
  {
    stat: 'm-comparator',
    translation: 'Mined Redstone Comparator',
  },
  {
    stat: 'm-daylight_detector',
    translation: 'Mined Daylight Detector',
  },
  {
    stat: 'm-redstone_block',
    translation: 'Mined Block of Redstone',
  },
  {
    stat: 'm-nether_quartz_ore',
    translation: 'Mined Nether Quartz Ore',
  },
  {
    stat: 'm-hopper',
    translation: 'Mined Hopper',
  },
  {
    stat: 'm-quartz_block',
    translation: 'Mined Block of Quartz',
  },
  {
    stat: 'm-chiseled_quartz_block',
    translation: 'Mined Chiseled Quartz Block',
  },
  {
    stat: 'm-quartz_pillar',
    translation: 'Mined Quartz Pillar',
  },
  {
    stat: 'm-quartz_stairs',
    translation: 'Mined Quartz Stairs',
  },
  {
    stat: 'm-activator_rail',
    translation: 'Mined Activator Rail',
  },
  {
    stat: 'm-dropper',
    translation: 'Mined Dropper',
  },
  {
    stat: 'm-white_terracotta',
    translation: 'Mined White Terracotta',
  },
  {
    stat: 'm-orange_terracotta',
    translation: 'Mined Orange Terracotta',
  },
  {
    stat: 'm-magenta_terracotta',
    translation: 'Mined Magenta Terracotta',
  },
  {
    stat: 'm-light_blue_terracotta',
    translation: 'Mined Light Blue Terracotta',
  },
  {
    stat: 'm-yellow_terracotta',
    translation: 'Mined Yellow Terracotta',
  },
  {
    stat: 'm-lime_terracotta',
    translation: 'Mined Lime Terracotta',
  },
  {
    stat: 'm-pink_terracotta',
    translation: 'Mined Pink Terracotta',
  },
  {
    stat: 'm-gray_terracotta',
    translation: 'Mined Gray Terracotta',
  },
  {
    stat: 'm-light_gray_terracotta',
    translation: 'Mined Light Gray Terracotta',
  },
  {
    stat: 'm-cyan_terracotta',
    translation: 'Mined Cyan Terracotta',
  },
  {
    stat: 'm-purple_terracotta',
    translation: 'Mined Purple Terracotta',
  },
  {
    stat: 'm-blue_terracotta',
    translation: 'Mined Blue Terracotta',
  },
  {
    stat: 'm-brown_terracotta',
    translation: 'Mined Brown Terracotta',
  },
  {
    stat: 'm-green_terracotta',
    translation: 'Mined Green Terracotta',
  },
  {
    stat: 'm-red_terracotta',
    translation: 'Mined Red Terracotta',
  },
  {
    stat: 'm-black_terracotta',
    translation: 'Mined Black Terracotta',
  },
  {
    stat: 'm-white_stained_glass_pane',
    translation: 'Mined White Stained Glass Pane',
  },
  {
    stat: 'm-orange_stained_glass_pane',
    translation: 'Mined Orange Stained Glass Pane',
  },
  {
    stat: 'm-magenta_stained_glass_pane',
    translation: 'Mined Magenta Stained Glass Pane',
  },
  {
    stat: 'm-light_blue_stained_glass_pane',
    translation: 'Mined Light Blue Stained Glass Pane',
  },
  {
    stat: 'm-yellow_stained_glass_pane',
    translation: 'Mined Yellow Stained Glass Pane',
  },
  {
    stat: 'm-lime_stained_glass_pane',
    translation: 'Mined Lime Stained Glass Pane',
  },
  {
    stat: 'm-pink_stained_glass_pane',
    translation: 'Mined Pink Stained Glass Pane',
  },
  {
    stat: 'm-gray_stained_glass_pane',
    translation: 'Mined Gray Stained Glass Pane',
  },
  {
    stat: 'm-light_gray_stained_glass_pane',
    translation: 'Mined Light Gray Stained Glass Pane',
  },
  {
    stat: 'm-cyan_stained_glass_pane',
    translation: 'Mined Cyan Stained Glass Pane',
  },
  {
    stat: 'm-purple_stained_glass_pane',
    translation: 'Mined Purple Stained Glass Pane',
  },
  {
    stat: 'm-blue_stained_glass_pane',
    translation: 'Mined Blue Stained Glass Pane',
  },
  {
    stat: 'm-brown_stained_glass_pane',
    translation: 'Mined Brown Stained Glass Pane',
  },
  {
    stat: 'm-green_stained_glass_pane',
    translation: 'Mined Green Stained Glass Pane',
  },
  {
    stat: 'm-red_stained_glass_pane',
    translation: 'Mined Red Stained Glass Pane',
  },
  {
    stat: 'm-black_stained_glass_pane',
    translation: 'Mined Black Stained Glass Pane',
  },
  {
    stat: 'm-acacia_stairs',
    translation: 'Mined Acacia Stairs',
  },
  {
    stat: 'm-dark_oak_stairs',
    translation: 'Mined Dark Oak Stairs',
  },
  {
    stat: 'm-mangrove_stairs',
    translation: 'Mined Mangrove Stairs',
  },
  {
    stat: 'm-slime_block',
    translation: 'Mined Slime Block',
  },
  {
    stat: 'm-barrier',
    translation: 'Mined Barrier',
  },
  {
    stat: 'm-light',
    translation: 'Mined Light',
  },
  {
    stat: 'm-iron_trapdoor',
    translation: 'Mined Iron Trapdoor',
  },
  {
    stat: 'm-prismarine',
    translation: 'Mined Prismarine',
  },
  {
    stat: 'm-prismarine_bricks',
    translation: 'Mined Prismarine Bricks',
  },
  {
    stat: 'm-dark_prismarine',
    translation: 'Mined Dark Prismarine',
  },
  {
    stat: 'm-prismarine_stairs',
    translation: 'Mined Prismarine Stairs',
  },
  {
    stat: 'm-prismarine_brick_stairs',
    translation: 'Mined Prismarine Brick Stairs',
  },
  {
    stat: 'm-dark_prismarine_stairs',
    translation: 'Mined Dark Prismarine Stairs',
  },
  {
    stat: 'm-prismarine_slab',
    translation: 'Mined Prismarine Slab',
  },
  {
    stat: 'm-prismarine_brick_slab',
    translation: 'Mined Prismarine Brick Slab',
  },
  {
    stat: 'm-dark_prismarine_slab',
    translation: 'Mined Dark Prismarine Slab',
  },
  {
    stat: 'm-sea_lantern',
    translation: 'Mined Sea Lantern',
  },
  {
    stat: 'm-hay_block',
    translation: 'Mined Hay Bale',
  },
  {
    stat: 'm-white_carpet',
    translation: 'Mined White Carpet',
  },
  {
    stat: 'm-orange_carpet',
    translation: 'Mined Orange Carpet',
  },
  {
    stat: 'm-magenta_carpet',
    translation: 'Mined Magenta Carpet',
  },
  {
    stat: 'm-light_blue_carpet',
    translation: 'Mined Light Blue Carpet',
  },
  {
    stat: 'm-yellow_carpet',
    translation: 'Mined Yellow Carpet',
  },
  {
    stat: 'm-lime_carpet',
    translation: 'Mined Lime Carpet',
  },
  {
    stat: 'm-pink_carpet',
    translation: 'Mined Pink Carpet',
  },
  {
    stat: 'm-gray_carpet',
    translation: 'Mined Gray Carpet',
  },
  {
    stat: 'm-light_gray_carpet',
    translation: 'Mined Light Gray Carpet',
  },
  {
    stat: 'm-cyan_carpet',
    translation: 'Mined Cyan Carpet',
  },
  {
    stat: 'm-purple_carpet',
    translation: 'Mined Purple Carpet',
  },
  {
    stat: 'm-blue_carpet',
    translation: 'Mined Blue Carpet',
  },
  {
    stat: 'm-brown_carpet',
    translation: 'Mined Brown Carpet',
  },
  {
    stat: 'm-green_carpet',
    translation: 'Mined Green Carpet',
  },
  {
    stat: 'm-red_carpet',
    translation: 'Mined Red Carpet',
  },
  {
    stat: 'm-black_carpet',
    translation: 'Mined Black Carpet',
  },
  {
    stat: 'm-terracotta',
    translation: 'Mined Terracotta',
  },
  {
    stat: 'm-coal_block',
    translation: 'Mined Block of Coal',
  },
  {
    stat: 'm-packed_ice',
    translation: 'Mined Packed Ice',
  },
  {
    stat: 'm-sunflower',
    translation: 'Mined Sunflower',
  },
  {
    stat: 'm-lilac',
    translation: 'Mined Lilac',
  },
  {
    stat: 'm-rose_bush',
    translation: 'Mined Rose Bush',
  },
  {
    stat: 'm-peony',
    translation: 'Mined Peony',
  },
  {
    stat: 'm-tall_grass',
    translation: 'Mined Tall Grass',
  },
  {
    stat: 'm-large_fern',
    translation: 'Mined Large Fern',
  },
  {
    stat: 'm-white_banner',
    translation: 'Mined White Banner',
  },
  {
    stat: 'm-orange_banner',
    translation: 'Mined Orange Banner',
  },
  {
    stat: 'm-magenta_banner',
    translation: 'Mined Magenta Banner',
  },
  {
    stat: 'm-light_blue_banner',
    translation: 'Mined Light Blue Banner',
  },
  {
    stat: 'm-yellow_banner',
    translation: 'Mined Yellow Banner',
  },
  {
    stat: 'm-lime_banner',
    translation: 'Mined Lime Banner',
  },
  {
    stat: 'm-pink_banner',
    translation: 'Mined Pink Banner',
  },
  {
    stat: 'm-gray_banner',
    translation: 'Mined Gray Banner',
  },
  {
    stat: 'm-light_gray_banner',
    translation: 'Mined Light Gray Banner',
  },
  {
    stat: 'm-cyan_banner',
    translation: 'Mined Cyan Banner',
  },
  {
    stat: 'm-purple_banner',
    translation: 'Mined Purple Banner',
  },
  {
    stat: 'm-blue_banner',
    translation: 'Mined Blue Banner',
  },
  {
    stat: 'm-brown_banner',
    translation: 'Mined Brown Banner',
  },
  {
    stat: 'm-green_banner',
    translation: 'Mined Green Banner',
  },
  {
    stat: 'm-red_banner',
    translation: 'Mined Red Banner',
  },
  {
    stat: 'm-black_banner',
    translation: 'Mined Black Banner',
  },
  {
    stat: 'm-white_wall_banner',
    translation: 'Mined White Banner',
  },
  {
    stat: 'm-orange_wall_banner',
    translation: 'Mined Orange Banner',
  },
  {
    stat: 'm-magenta_wall_banner',
    translation: 'Mined Magenta Banner',
  },
  {
    stat: 'm-light_blue_wall_banner',
    translation: 'Mined Light Blue Banner',
  },
  {
    stat: 'm-yellow_wall_banner',
    translation: 'Mined Yellow Banner',
  },
  {
    stat: 'm-lime_wall_banner',
    translation: 'Mined Lime Banner',
  },
  {
    stat: 'm-pink_wall_banner',
    translation: 'Mined Pink Banner',
  },
  {
    stat: 'm-gray_wall_banner',
    translation: 'Mined Gray Banner',
  },
  {
    stat: 'm-light_gray_wall_banner',
    translation: 'Mined Light Gray Banner',
  },
  {
    stat: 'm-cyan_wall_banner',
    translation: 'Mined Cyan Banner',
  },
  {
    stat: 'm-purple_wall_banner',
    translation: 'Mined Purple Banner',
  },
  {
    stat: 'm-blue_wall_banner',
    translation: 'Mined Blue Banner',
  },
  {
    stat: 'm-brown_wall_banner',
    translation: 'Mined Brown Banner',
  },
  {
    stat: 'm-green_wall_banner',
    translation: 'Mined Green Banner',
  },
  {
    stat: 'm-red_wall_banner',
    translation: 'Mined Red Banner',
  },
  {
    stat: 'm-black_wall_banner',
    translation: 'Mined Black Banner',
  },
  {
    stat: 'm-red_sandstone',
    translation: 'Mined Red Sandstone',
  },
  {
    stat: 'm-chiseled_red_sandstone',
    translation: 'Mined Chiseled Red Sandstone',
  },
  {
    stat: 'm-cut_red_sandstone',
    translation: 'Mined Cut Red Sandstone',
  },
  {
    stat: 'm-red_sandstone_stairs',
    translation: 'Mined Red Sandstone Stairs',
  },
  {
    stat: 'm-oak_slab',
    translation: 'Mined Oak Slab',
  },
  {
    stat: 'm-spruce_slab',
    translation: 'Mined Spruce Slab',
  },
  {
    stat: 'm-birch_slab',
    translation: 'Mined Birch Slab',
  },
  {
    stat: 'm-jungle_slab',
    translation: 'Mined Jungle Slab',
  },
  {
    stat: 'm-acacia_slab',
    translation: 'Mined Acacia Slab',
  },
  {
    stat: 'm-dark_oak_slab',
    translation: 'Mined Dark Oak Slab',
  },
  {
    stat: 'm-mangrove_slab',
    translation: 'Mined Mangrove Slab',
  },
  {
    stat: 'm-stone_slab',
    translation: 'Mined Stone Slab',
  },
  {
    stat: 'm-smooth_stone_slab',
    translation: 'Mined Smooth Stone Slab',
  },
  {
    stat: 'm-sandstone_slab',
    translation: 'Mined Sandstone Slab',
  },
  {
    stat: 'm-cut_sandstone_slab',
    translation: 'Mined Cut Sandstone Slab',
  },
  {
    stat: 'm-petrified_oak_slab',
    translation: 'Mined Petrified Oak Slab',
  },
  {
    stat: 'm-cobblestone_slab',
    translation: 'Mined Cobblestone Slab',
  },
  {
    stat: 'm-brick_slab',
    translation: 'Mined Brick Slab',
  },
  {
    stat: 'm-stone_brick_slab',
    translation: 'Mined Stone Brick Slab',
  },
  {
    stat: 'm-mud_brick_slab',
    translation: 'Mined Mud Brick Slab',
  },
  {
    stat: 'm-nether_brick_slab',
    translation: 'Mined Nether Brick Slab',
  },
  {
    stat: 'm-quartz_slab',
    translation: 'Mined Quartz Slab',
  },
  {
    stat: 'm-red_sandstone_slab',
    translation: 'Mined Red Sandstone Slab',
  },
  {
    stat: 'm-cut_red_sandstone_slab',
    translation: 'Mined Cut Red Sandstone Slab',
  },
  {
    stat: 'm-purpur_slab',
    translation: 'Mined Purpur Slab',
  },
  {
    stat: 'm-smooth_stone',
    translation: 'Mined Smooth Stone',
  },
  {
    stat: 'm-smooth_sandstone',
    translation: 'Mined Smooth Sandstone',
  },
  {
    stat: 'm-smooth_quartz',
    translation: 'Mined Smooth Quartz Block',
  },
  {
    stat: 'm-smooth_red_sandstone',
    translation: 'Mined Smooth Red Sandstone',
  },
  {
    stat: 'm-spruce_fence_gate',
    translation: 'Mined Spruce Fence Gate',
  },
  {
    stat: 'm-birch_fence_gate',
    translation: 'Mined Birch Fence Gate',
  },
  {
    stat: 'm-jungle_fence_gate',
    translation: 'Mined Jungle Fence Gate',
  },
  {
    stat: 'm-acacia_fence_gate',
    translation: 'Mined Acacia Fence Gate',
  },
  {
    stat: 'm-dark_oak_fence_gate',
    translation: 'Mined Dark Oak Fence Gate',
  },
  {
    stat: 'm-mangrove_fence_gate',
    translation: 'Mined Mangrove Fence Gate',
  },
  {
    stat: 'm-spruce_fence',
    translation: 'Mined Spruce Fence',
  },
  {
    stat: 'm-birch_fence',
    translation: 'Mined Birch Fence',
  },
  {
    stat: 'm-jungle_fence',
    translation: 'Mined Jungle Fence',
  },
  {
    stat: 'm-acacia_fence',
    translation: 'Mined Acacia Fence',
  },
  {
    stat: 'm-dark_oak_fence',
    translation: 'Mined Dark Oak Fence',
  },
  {
    stat: 'm-mangrove_fence',
    translation: 'Mined Mangrove Fence',
  },
  {
    stat: 'm-spruce_door',
    translation: 'Mined Spruce Door',
  },
  {
    stat: 'm-birch_door',
    translation: 'Mined Birch Door',
  },
  {
    stat: 'm-jungle_door',
    translation: 'Mined Jungle Door',
  },
  {
    stat: 'm-acacia_door',
    translation: 'Mined Acacia Door',
  },
  {
    stat: 'm-dark_oak_door',
    translation: 'Mined Dark Oak Door',
  },
  {
    stat: 'm-mangrove_door',
    translation: 'Mined Mangrove Door',
  },
  {
    stat: 'm-end_rod',
    translation: 'Mined End Rod',
  },
  {
    stat: 'm-chorus_plant',
    translation: 'Mined Chorus Plant',
  },
  {
    stat: 'm-chorus_flower',
    translation: 'Mined Chorus Flower',
  },
  {
    stat: 'm-purpur_block',
    translation: 'Mined Purpur Block',
  },
  {
    stat: 'm-purpur_pillar',
    translation: 'Mined Purpur Pillar',
  },
  {
    stat: 'm-purpur_stairs',
    translation: 'Mined Purpur Stairs',
  },
  {
    stat: 'm-end_stone_bricks',
    translation: 'Mined End Stone Bricks',
  },
  {
    stat: 'm-beetroots',
    translation: 'Mined Beetroots',
  },
  {
    stat: 'm-dirt_path',
    translation: 'Mined Dirt Path',
  },
  {
    stat: 'm-end_gateway',
    translation: 'Mined End Gateway',
  },
  {
    stat: 'm-repeating_command_block',
    translation: 'Mined Repeating Command Block',
  },
  {
    stat: 'm-chain_command_block',
    translation: 'Mined Chain Command Block',
  },
  {
    stat: 'm-frosted_ice',
    translation: 'Mined Frosted Ice',
  },
  {
    stat: 'm-magma_block',
    translation: 'Mined Magma Block',
  },
  {
    stat: 'm-nether_wart_block',
    translation: 'Mined Nether Wart Block',
  },
  {
    stat: 'm-red_nether_bricks',
    translation: 'Mined Red Nether Bricks',
  },
  {
    stat: 'm-bone_block',
    translation: 'Mined Bone Block',
  },
  {
    stat: 'm-structure_void',
    translation: 'Mined Structure Void',
  },
  {
    stat: 'm-observer',
    translation: 'Mined Observer',
  },
  {
    stat: 'm-shulker_box',
    translation: 'Mined Shulker Box',
  },
  {
    stat: 'm-white_shulker_box',
    translation: 'Mined White Shulker Box',
  },
  {
    stat: 'm-orange_shulker_box',
    translation: 'Mined Orange Shulker Box',
  },
  {
    stat: 'm-magenta_shulker_box',
    translation: 'Mined Magenta Shulker Box',
  },
  {
    stat: 'm-light_blue_shulker_box',
    translation: 'Mined Light Blue Shulker Box',
  },
  {
    stat: 'm-yellow_shulker_box',
    translation: 'Mined Yellow Shulker Box',
  },
  {
    stat: 'm-lime_shulker_box',
    translation: 'Mined Lime Shulker Box',
  },
  {
    stat: 'm-pink_shulker_box',
    translation: 'Mined Pink Shulker Box',
  },
  {
    stat: 'm-gray_shulker_box',
    translation: 'Mined Gray Shulker Box',
  },
  {
    stat: 'm-light_gray_shulker_box',
    translation: 'Mined Light Gray Shulker Box',
  },
  {
    stat: 'm-cyan_shulker_box',
    translation: 'Mined Cyan Shulker Box',
  },
  {
    stat: 'm-purple_shulker_box',
    translation: 'Mined Purple Shulker Box',
  },
  {
    stat: 'm-blue_shulker_box',
    translation: 'Mined Blue Shulker Box',
  },
  {
    stat: 'm-brown_shulker_box',
    translation: 'Mined Brown Shulker Box',
  },
  {
    stat: 'm-green_shulker_box',
    translation: 'Mined Green Shulker Box',
  },
  {
    stat: 'm-red_shulker_box',
    translation: 'Mined Red Shulker Box',
  },
  {
    stat: 'm-black_shulker_box',
    translation: 'Mined Black Shulker Box',
  },
  {
    stat: 'm-white_glazed_terracotta',
    translation: 'Mined White Glazed Terracotta',
  },
  {
    stat: 'm-orange_glazed_terracotta',
    translation: 'Mined Orange Glazed Terracotta',
  },
  {
    stat: 'm-magenta_glazed_terracotta',
    translation: 'Mined Magenta Glazed Terracotta',
  },
  {
    stat: 'm-light_blue_glazed_terracotta',
    translation: 'Mined Light Blue Glazed Terracotta',
  },
  {
    stat: 'm-yellow_glazed_terracotta',
    translation: 'Mined Yellow Glazed Terracotta',
  },
  {
    stat: 'm-lime_glazed_terracotta',
    translation: 'Mined Lime Glazed Terracotta',
  },
  {
    stat: 'm-pink_glazed_terracotta',
    translation: 'Mined Pink Glazed Terracotta',
  },
  {
    stat: 'm-gray_glazed_terracotta',
    translation: 'Mined Gray Glazed Terracotta',
  },
  {
    stat: 'm-light_gray_glazed_terracotta',
    translation: 'Mined Light Gray Glazed Terracotta',
  },
  {
    stat: 'm-cyan_glazed_terracotta',
    translation: 'Mined Cyan Glazed Terracotta',
  },
  {
    stat: 'm-purple_glazed_terracotta',
    translation: 'Mined Purple Glazed Terracotta',
  },
  {
    stat: 'm-blue_glazed_terracotta',
    translation: 'Mined Blue Glazed Terracotta',
  },
  {
    stat: 'm-brown_glazed_terracotta',
    translation: 'Mined Brown Glazed Terracotta',
  },
  {
    stat: 'm-green_glazed_terracotta',
    translation: 'Mined Green Glazed Terracotta',
  },
  {
    stat: 'm-red_glazed_terracotta',
    translation: 'Mined Red Glazed Terracotta',
  },
  {
    stat: 'm-black_glazed_terracotta',
    translation: 'Mined Black Glazed Terracotta',
  },
  {
    stat: 'm-white_concrete',
    translation: 'Mined White Concrete',
  },
  {
    stat: 'm-orange_concrete',
    translation: 'Mined Orange Concrete',
  },
  {
    stat: 'm-magenta_concrete',
    translation: 'Mined Magenta Concrete',
  },
  {
    stat: 'm-light_blue_concrete',
    translation: 'Mined Light Blue Concrete',
  },
  {
    stat: 'm-yellow_concrete',
    translation: 'Mined Yellow Concrete',
  },
  {
    stat: 'm-lime_concrete',
    translation: 'Mined Lime Concrete',
  },
  {
    stat: 'm-pink_concrete',
    translation: 'Mined Pink Concrete',
  },
  {
    stat: 'm-gray_concrete',
    translation: 'Mined Gray Concrete',
  },
  {
    stat: 'm-light_gray_concrete',
    translation: 'Mined Light Gray Concrete',
  },
  {
    stat: 'm-cyan_concrete',
    translation: 'Mined Cyan Concrete',
  },
  {
    stat: 'm-purple_concrete',
    translation: 'Mined Purple Concrete',
  },
  {
    stat: 'm-blue_concrete',
    translation: 'Mined Blue Concrete',
  },
  {
    stat: 'm-brown_concrete',
    translation: 'Mined Brown Concrete',
  },
  {
    stat: 'm-green_concrete',
    translation: 'Mined Green Concrete',
  },
  {
    stat: 'm-red_concrete',
    translation: 'Mined Red Concrete',
  },
  {
    stat: 'm-black_concrete',
    translation: 'Mined Black Concrete',
  },
  {
    stat: 'm-white_concrete_powder',
    translation: 'Mined White Concrete Powder',
  },
  {
    stat: 'm-orange_concrete_powder',
    translation: 'Mined Orange Concrete Powder',
  },
  {
    stat: 'm-magenta_concrete_powder',
    translation: 'Mined Magenta Concrete Powder',
  },
  {
    stat: 'm-light_blue_concrete_powder',
    translation: 'Mined Light Blue Concrete Powder',
  },
  {
    stat: 'm-yellow_concrete_powder',
    translation: 'Mined Yellow Concrete Powder',
  },
  {
    stat: 'm-lime_concrete_powder',
    translation: 'Mined Lime Concrete Powder',
  },
  {
    stat: 'm-pink_concrete_powder',
    translation: 'Mined Pink Concrete Powder',
  },
  {
    stat: 'm-gray_concrete_powder',
    translation: 'Mined Gray Concrete Powder',
  },
  {
    stat: 'm-light_gray_concrete_powder',
    translation: 'Mined Light Gray Concrete Powder',
  },
  {
    stat: 'm-cyan_concrete_powder',
    translation: 'Mined Cyan Concrete Powder',
  },
  {
    stat: 'm-purple_concrete_powder',
    translation: 'Mined Purple Concrete Powder',
  },
  {
    stat: 'm-blue_concrete_powder',
    translation: 'Mined Blue Concrete Powder',
  },
  {
    stat: 'm-brown_concrete_powder',
    translation: 'Mined Brown Concrete Powder',
  },
  {
    stat: 'm-green_concrete_powder',
    translation: 'Mined Green Concrete Powder',
  },
  {
    stat: 'm-red_concrete_powder',
    translation: 'Mined Red Concrete Powder',
  },
  {
    stat: 'm-black_concrete_powder',
    translation: 'Mined Black Concrete Powder',
  },
  {
    stat: 'm-kelp',
    translation: 'Mined Kelp',
  },
  {
    stat: 'm-kelp_plant',
    translation: 'Mined Kelp Plant',
  },
  {
    stat: 'm-dried_kelp_block',
    translation: 'Mined Dried Kelp Block',
  },
  {
    stat: 'm-turtle_egg',
    translation: 'Mined Turtle Egg',
  },
  {
    stat: 'm-dead_tube_coral_block',
    translation: 'Mined Dead Tube Coral Block',
  },
  {
    stat: 'm-dead_brain_coral_block',
    translation: 'Mined Dead Brain Coral Block',
  },
  {
    stat: 'm-dead_bubble_coral_block',
    translation: 'Mined Dead Bubble Coral Block',
  },
  {
    stat: 'm-dead_fire_coral_block',
    translation: 'Mined Dead Fire Coral Block',
  },
  {
    stat: 'm-dead_horn_coral_block',
    translation: 'Mined Dead Horn Coral Block',
  },
  {
    stat: 'm-tube_coral_block',
    translation: 'Mined Tube Coral Block',
  },
  {
    stat: 'm-brain_coral_block',
    translation: 'Mined Brain Coral Block',
  },
  {
    stat: 'm-bubble_coral_block',
    translation: 'Mined Bubble Coral Block',
  },
  {
    stat: 'm-fire_coral_block',
    translation: 'Mined Fire Coral Block',
  },
  {
    stat: 'm-horn_coral_block',
    translation: 'Mined Horn Coral Block',
  },
  {
    stat: 'm-dead_tube_coral',
    translation: 'Mined Dead Tube Coral',
  },
  {
    stat: 'm-dead_brain_coral',
    translation: 'Mined Dead Brain Coral',
  },
  {
    stat: 'm-dead_bubble_coral',
    translation: 'Mined Dead Bubble Coral',
  },
  {
    stat: 'm-dead_fire_coral',
    translation: 'Mined Dead Fire Coral',
  },
  {
    stat: 'm-dead_horn_coral',
    translation: 'Mined Dead Horn Coral',
  },
  {
    stat: 'm-tube_coral',
    translation: 'Mined Tube Coral',
  },
  {
    stat: 'm-brain_coral',
    translation: 'Mined Brain Coral',
  },
  {
    stat: 'm-bubble_coral',
    translation: 'Mined Bubble Coral',
  },
  {
    stat: 'm-fire_coral',
    translation: 'Mined Fire Coral',
  },
  {
    stat: 'm-horn_coral',
    translation: 'Mined Horn Coral',
  },
  {
    stat: 'm-dead_tube_coral_fan',
    translation: 'Mined Dead Tube Coral Fan',
  },
  {
    stat: 'm-dead_brain_coral_fan',
    translation: 'Mined Dead Brain Coral Fan',
  },
  {
    stat: 'm-dead_bubble_coral_fan',
    translation: 'Mined Dead Bubble Coral Fan',
  },
  {
    stat: 'm-dead_fire_coral_fan',
    translation: 'Mined Dead Fire Coral Fan',
  },
  {
    stat: 'm-dead_horn_coral_fan',
    translation: 'Mined Dead Horn Coral Fan',
  },
  {
    stat: 'm-tube_coral_fan',
    translation: 'Mined Tube Coral Fan',
  },
  {
    stat: 'm-brain_coral_fan',
    translation: 'Mined Brain Coral Fan',
  },
  {
    stat: 'm-bubble_coral_fan',
    translation: 'Mined Bubble Coral Fan',
  },
  {
    stat: 'm-fire_coral_fan',
    translation: 'Mined Fire Coral Fan',
  },
  {
    stat: 'm-horn_coral_fan',
    translation: 'Mined Horn Coral Fan',
  },
  {
    stat: 'm-dead_tube_coral_wall_fan',
    translation: 'Mined Dead Tube Coral Wall Fan',
  },
  {
    stat: 'm-dead_brain_coral_wall_fan',
    translation: 'Mined Dead Brain Coral Wall Fan',
  },
  {
    stat: 'm-dead_bubble_coral_wall_fan',
    translation: 'Mined Dead Bubble Coral Wall Fan',
  },
  {
    stat: 'm-dead_fire_coral_wall_fan',
    translation: 'Mined Dead Fire Coral Wall Fan',
  },
  {
    stat: 'm-dead_horn_coral_wall_fan',
    translation: 'Mined Dead Horn Coral Wall Fan',
  },
  {
    stat: 'm-tube_coral_wall_fan',
    translation: 'Mined Tube Coral Wall Fan',
  },
  {
    stat: 'm-brain_coral_wall_fan',
    translation: 'Mined Brain Coral Wall Fan',
  },
  {
    stat: 'm-bubble_coral_wall_fan',
    translation: 'Mined Bubble Coral Wall Fan',
  },
  {
    stat: 'm-fire_coral_wall_fan',
    translation: 'Mined Fire Coral Wall Fan',
  },
  {
    stat: 'm-horn_coral_wall_fan',
    translation: 'Mined Horn Coral Wall Fan',
  },
  {
    stat: 'm-sea_pickle',
    translation: 'Mined Sea Pickle',
  },
  {
    stat: 'm-blue_ice',
    translation: 'Mined Blue Ice',
  },
  {
    stat: 'm-conduit',
    translation: 'Mined Conduit',
  },
  {
    stat: 'm-bamboo_sapling',
    translation: 'Mined Bamboo Shoot',
  },
  {
    stat: 'm-bamboo',
    translation: 'Mined Bamboo',
  },
  {
    stat: 'm-potted_bamboo',
    translation: 'Mined Potted Bamboo',
  },
  {
    stat: 'm-void_air',
    translation: 'Mined Void Air',
  },
  {
    stat: 'm-cave_air',
    translation: 'Mined Cave Air',
  },
  {
    stat: 'm-bubble_column',
    translation: 'Mined Bubble Column',
  },
  {
    stat: 'm-polished_granite_stairs',
    translation: 'Mined Polished Granite Stairs',
  },
  {
    stat: 'm-smooth_red_sandstone_stairs',
    translation: 'Mined Smooth Red Sandstone Stairs',
  },
  {
    stat: 'm-mossy_stone_brick_stairs',
    translation: 'Mined Mossy Stone Brick Stairs',
  },
  {
    stat: 'm-polished_diorite_stairs',
    translation: 'Mined Polished Diorite Stairs',
  },
  {
    stat: 'm-mossy_cobblestone_stairs',
    translation: 'Mined Mossy Cobblestone Stairs',
  },
  {
    stat: 'm-end_stone_brick_stairs',
    translation: 'Mined End Stone Brick Stairs',
  },
  {
    stat: 'm-stone_stairs',
    translation: 'Mined Stone Stairs',
  },
  {
    stat: 'm-smooth_sandstone_stairs',
    translation: 'Mined Smooth Sandstone Stairs',
  },
  {
    stat: 'm-smooth_quartz_stairs',
    translation: 'Mined Smooth Quartz Stairs',
  },
  {
    stat: 'm-granite_stairs',
    translation: 'Mined Granite Stairs',
  },
  {
    stat: 'm-andesite_stairs',
    translation: 'Mined Andesite Stairs',
  },
  {
    stat: 'm-red_nether_brick_stairs',
    translation: 'Mined Red Nether Brick Stairs',
  },
  {
    stat: 'm-polished_andesite_stairs',
    translation: 'Mined Polished Andesite Stairs',
  },
  {
    stat: 'm-diorite_stairs',
    translation: 'Mined Diorite Stairs',
  },
  {
    stat: 'm-polished_granite_slab',
    translation: 'Mined Polished Granite Slab',
  },
  {
    stat: 'm-smooth_red_sandstone_slab',
    translation: 'Mined Smooth Red Sandstone Slab',
  },
  {
    stat: 'm-mossy_stone_brick_slab',
    translation: 'Mined Mossy Stone Brick Slab',
  },
  {
    stat: 'm-polished_diorite_slab',
    translation: 'Mined Polished Diorite Slab',
  },
  {
    stat: 'm-mossy_cobblestone_slab',
    translation: 'Mined Mossy Cobblestone Slab',
  },
  {
    stat: 'm-end_stone_brick_slab',
    translation: 'Mined End Stone Brick Slab',
  },
  {
    stat: 'm-smooth_sandstone_slab',
    translation: 'Mined Smooth Sandstone Slab',
  },
  {
    stat: 'm-smooth_quartz_slab',
    translation: 'Mined Smooth Quartz Slab',
  },
  {
    stat: 'm-granite_slab',
    translation: 'Mined Granite Slab',
  },
  {
    stat: 'm-andesite_slab',
    translation: 'Mined Andesite Slab',
  },
  {
    stat: 'm-red_nether_brick_slab',
    translation: 'Mined Red Nether Brick Slab',
  },
  {
    stat: 'm-polished_andesite_slab',
    translation: 'Mined Polished Andesite Slab',
  },
  {
    stat: 'm-diorite_slab',
    translation: 'Mined Diorite Slab',
  },
  {
    stat: 'm-brick_wall',
    translation: 'Mined Brick Wall',
  },
  {
    stat: 'm-prismarine_wall',
    translation: 'Mined Prismarine Wall',
  },
  {
    stat: 'm-red_sandstone_wall',
    translation: 'Mined Red Sandstone Wall',
  },
  {
    stat: 'm-mossy_stone_brick_wall',
    translation: 'Mined Mossy Stone Brick Wall',
  },
  {
    stat: 'm-granite_wall',
    translation: 'Mined Granite Wall',
  },
  {
    stat: 'm-stone_brick_wall',
    translation: 'Mined Stone Brick Wall',
  },
  {
    stat: 'm-mud_brick_wall',
    translation: 'Mined Mud Brick Wall',
  },
  {
    stat: 'm-nether_brick_wall',
    translation: 'Mined Nether Brick Wall',
  },
  {
    stat: 'm-andesite_wall',
    translation: 'Mined Andesite Wall',
  },
  {
    stat: 'm-red_nether_brick_wall',
    translation: 'Mined Red Nether Brick Wall',
  },
  {
    stat: 'm-sandstone_wall',
    translation: 'Mined Sandstone Wall',
  },
  {
    stat: 'm-end_stone_brick_wall',
    translation: 'Mined End Stone Brick Wall',
  },
  {
    stat: 'm-diorite_wall',
    translation: 'Mined Diorite Wall',
  },
  {
    stat: 'm-scaffolding',
    translation: 'Mined Scaffolding',
  },
  {
    stat: 'm-loom',
    translation: 'Mined Loom',
  },
  {
    stat: 'm-barrel',
    translation: 'Mined Barrel',
  },
  {
    stat: 'm-smoker',
    translation: 'Mined Smoker',
  },
  {
    stat: 'm-blast_furnace',
    translation: 'Mined Blast Furnace',
  },
  {
    stat: 'm-cartography_table',
    translation: 'Mined Cartography Table',
  },
  {
    stat: 'm-fletching_table',
    translation: 'Mined Fletching Table',
  },
  {
    stat: 'm-grindstone',
    translation: 'Mined Grindstone',
  },
  {
    stat: 'm-lectern',
    translation: 'Mined Lectern',
  },
  {
    stat: 'm-smithing_table',
    translation: 'Mined Smithing Table',
  },
  {
    stat: 'm-stonecutter',
    translation: 'Mined Stonecutter',
  },
  {
    stat: 'm-bell',
    translation: 'Mined Bell',
  },
  {
    stat: 'm-lantern',
    translation: 'Mined Lantern',
  },
  {
    stat: 'm-soul_lantern',
    translation: 'Mined Soul Lantern',
  },
  {
    stat: 'm-campfire',
    translation: 'Mined Campfire',
  },
  {
    stat: 'm-soul_campfire',
    translation: 'Mined Soul Campfire',
  },
  {
    stat: 'm-sweet_berry_bush',
    translation: 'Mined Sweet Berry Bush',
  },
  {
    stat: 'm-warped_stem',
    translation: 'Mined Warped Stem',
  },
  {
    stat: 'm-stripped_warped_stem',
    translation: 'Mined Stripped Warped Stem',
  },
  {
    stat: 'm-warped_hyphae',
    translation: 'Mined Warped Hyphae',
  },
  {
    stat: 'm-stripped_warped_hyphae',
    translation: 'Mined Stripped Warped Hyphae',
  },
  {
    stat: 'm-warped_nylium',
    translation: 'Mined Warped Nylium',
  },
  {
    stat: 'm-warped_fungus',
    translation: 'Mined Warped Fungus',
  },
  {
    stat: 'm-warped_wart_block',
    translation: 'Mined Warped Wart Block',
  },
  {
    stat: 'm-warped_roots',
    translation: 'Mined Warped Roots',
  },
  {
    stat: 'm-nether_sprouts',
    translation: 'Mined Nether Sprouts',
  },
  {
    stat: 'm-crimson_stem',
    translation: 'Mined Crimson Stem',
  },
  {
    stat: 'm-stripped_crimson_stem',
    translation: 'Mined Stripped Crimson Stem',
  },
  {
    stat: 'm-crimson_hyphae',
    translation: 'Mined Crimson Hyphae',
  },
  {
    stat: 'm-stripped_crimson_hyphae',
    translation: 'Mined Stripped Crimson Hyphae',
  },
  {
    stat: 'm-crimson_nylium',
    translation: 'Mined Crimson Nylium',
  },
  {
    stat: 'm-crimson_fungus',
    translation: 'Mined Crimson Fungus',
  },
  {
    stat: 'm-shroomlight',
    translation: 'Mined Shroomlight',
  },
  {
    stat: 'm-weeping_vines',
    translation: 'Mined Weeping Vines',
  },
  {
    stat: 'm-weeping_vines_plant',
    translation: 'Mined Weeping Vines Plant',
  },
  {
    stat: 'm-twisting_vines',
    translation: 'Mined Twisting Vines',
  },
  {
    stat: 'm-twisting_vines_plant',
    translation: 'Mined Twisting Vines Plant',
  },
  {
    stat: 'm-crimson_roots',
    translation: 'Mined Crimson Roots',
  },
  {
    stat: 'm-crimson_planks',
    translation: 'Mined Crimson Planks',
  },
  {
    stat: 'm-warped_planks',
    translation: 'Mined Warped Planks',
  },
  {
    stat: 'm-crimson_slab',
    translation: 'Mined Crimson Slab',
  },
  {
    stat: 'm-warped_slab',
    translation: 'Mined Warped Slab',
  },
  {
    stat: 'm-crimson_pressure_plate',
    translation: 'Mined Crimson Pressure Plate',
  },
  {
    stat: 'm-warped_pressure_plate',
    translation: 'Mined Warped Pressure Plate',
  },
  {
    stat: 'm-crimson_fence',
    translation: 'Mined Crimson Fence',
  },
  {
    stat: 'm-warped_fence',
    translation: 'Mined Warped Fence',
  },
  {
    stat: 'm-crimson_trapdoor',
    translation: 'Mined Crimson Trapdoor',
  },
  {
    stat: 'm-warped_trapdoor',
    translation: 'Mined Warped Trapdoor',
  },
  {
    stat: 'm-crimson_fence_gate',
    translation: 'Mined Crimson Fence Gate',
  },
  {
    stat: 'm-warped_fence_gate',
    translation: 'Mined Warped Fence Gate',
  },
  {
    stat: 'm-crimson_stairs',
    translation: 'Mined Crimson Stairs',
  },
  {
    stat: 'm-warped_stairs',
    translation: 'Mined Warped Stairs',
  },
  {
    stat: 'm-crimson_button',
    translation: 'Mined Crimson Button',
  },
  {
    stat: 'm-warped_button',
    translation: 'Mined Warped Button',
  },
  {
    stat: 'm-crimson_door',
    translation: 'Mined Crimson Door',
  },
  {
    stat: 'm-warped_door',
    translation: 'Mined Warped Door',
  },
  {
    stat: 'm-crimson_sign',
    translation: 'Mined Crimson Sign',
  },
  {
    stat: 'm-warped_sign',
    translation: 'Mined Warped Sign',
  },
  {
    stat: 'm-crimson_wall_sign',
    translation: 'Mined Crimson Sign',
  },
  {
    stat: 'm-warped_wall_sign',
    translation: 'Mined Warped Sign',
  },
  {
    stat: 'm-structure_block',
    translation: 'Mined Structure Block',
  },
  {
    stat: 'm-jigsaw',
    translation: 'Mined Jigsaw Block',
  },
  {
    stat: 'm-composter',
    translation: 'Mined Composter',
  },
  {
    stat: 'm-target',
    translation: 'Mined Target',
  },
  {
    stat: 'm-bee_nest',
    translation: 'Mined Bee Nest',
  },
  {
    stat: 'm-beehive',
    translation: 'Mined Beehive',
  },
  {
    stat: 'm-honey_block',
    translation: 'Mined Honey Block',
  },
  {
    stat: 'm-honeycomb_block',
    translation: 'Mined Honeycomb Block',
  },
  {
    stat: 'm-netherite_block',
    translation: 'Mined Block of Netherite',
  },
  {
    stat: 'm-ancient_debris',
    translation: 'Mined Ancient Debris',
  },
  {
    stat: 'm-crying_obsidian',
    translation: 'Mined Crying Obsidian',
  },
  {
    stat: 'm-respawn_anchor',
    translation: 'Mined Respawn Anchor',
  },
  {
    stat: 'm-potted_crimson_fungus',
    translation: 'Mined Potted Crimson Fungus',
  },
  {
    stat: 'm-potted_warped_fungus',
    translation: 'Mined Potted Warped Fungus',
  },
  {
    stat: 'm-potted_crimson_roots',
    translation: 'Mined Potted Crimson Roots',
  },
  {
    stat: 'm-potted_warped_roots',
    translation: 'Mined Potted Warped Roots',
  },
  {
    stat: 'm-lodestone',
    translation: 'Mined Lodestone',
  },
  {
    stat: 'm-blackstone',
    translation: 'Mined Blackstone',
  },
  {
    stat: 'm-blackstone_stairs',
    translation: 'Mined Blackstone Stairs',
  },
  {
    stat: 'm-blackstone_wall',
    translation: 'Mined Blackstone Wall',
  },
  {
    stat: 'm-blackstone_slab',
    translation: 'Mined Blackstone Slab',
  },
  {
    stat: 'm-polished_blackstone',
    translation: 'Mined Polished Blackstone',
  },
  {
    stat: 'm-polished_blackstone_bricks',
    translation: 'Mined Polished Blackstone Bricks',
  },
  {
    stat: 'm-cracked_polished_blackstone_bricks',
    translation: 'Mined Cracked Polished Blackstone Bricks',
  },
  {
    stat: 'm-chiseled_polished_blackstone',
    translation: 'Mined Chiseled Polished Blackstone',
  },
  {
    stat: 'm-polished_blackstone_brick_slab',
    translation: 'Mined Polished Blackstone Brick Slab',
  },
  {
    stat: 'm-polished_blackstone_brick_stairs',
    translation: 'Mined Polished Blackstone Brick Stairs',
  },
  {
    stat: 'm-polished_blackstone_brick_wall',
    translation: 'Mined Polished Blackstone Brick Wall',
  },
  {
    stat: 'm-gilded_blackstone',
    translation: 'Mined Gilded Blackstone',
  },
  {
    stat: 'm-polished_blackstone_stairs',
    translation: 'Mined Polished Blackstone Stairs',
  },
  {
    stat: 'm-polished_blackstone_slab',
    translation: 'Mined Polished Blackstone Slab',
  },
  {
    stat: 'm-polished_blackstone_pressure_plate',
    translation: 'Mined Polished Blackstone Pressure Plate',
  },
  {
    stat: 'm-polished_blackstone_button',
    translation: 'Mined Polished Blackstone Button',
  },
  {
    stat: 'm-polished_blackstone_wall',
    translation: 'Mined Polished Blackstone Wall',
  },
  {
    stat: 'm-chiseled_nether_bricks',
    translation: 'Mined Chiseled Nether Bricks',
  },
  {
    stat: 'm-cracked_nether_bricks',
    translation: 'Mined Cracked Nether Bricks',
  },
  {
    stat: 'm-quartz_bricks',
    translation: 'Mined Quartz Bricks',
  },
  {
    stat: 'm-candle',
    translation: 'Mined Candle',
  },
  {
    stat: 'm-white_candle',
    translation: 'Mined White Candle',
  },
  {
    stat: 'm-orange_candle',
    translation: 'Mined Orange Candle',
  },
  {
    stat: 'm-magenta_candle',
    translation: 'Mined Magenta Candle',
  },
  {
    stat: 'm-light_blue_candle',
    translation: 'Mined Light Blue Candle',
  },
  {
    stat: 'm-yellow_candle',
    translation: 'Mined Yellow Candle',
  },
  {
    stat: 'm-lime_candle',
    translation: 'Mined Lime Candle',
  },
  {
    stat: 'm-pink_candle',
    translation: 'Mined Pink Candle',
  },
  {
    stat: 'm-gray_candle',
    translation: 'Mined Gray Candle',
  },
  {
    stat: 'm-light_gray_candle',
    translation: 'Mined Light Gray Candle',
  },
  {
    stat: 'm-cyan_candle',
    translation: 'Mined Cyan Candle',
  },
  {
    stat: 'm-purple_candle',
    translation: 'Mined Purple Candle',
  },
  {
    stat: 'm-blue_candle',
    translation: 'Mined Blue Candle',
  },
  {
    stat: 'm-brown_candle',
    translation: 'Mined Brown Candle',
  },
  {
    stat: 'm-green_candle',
    translation: 'Mined Green Candle',
  },
  {
    stat: 'm-red_candle',
    translation: 'Mined Red Candle',
  },
  {
    stat: 'm-black_candle',
    translation: 'Mined Black Candle',
  },
  {
    stat: 'm-candle_cake',
    translation: 'Mined Cake with Candle',
  },
  {
    stat: 'm-white_candle_cake',
    translation: 'Mined Cake with White Candle',
  },
  {
    stat: 'm-orange_candle_cake',
    translation: 'Mined Cake with Orange Candle',
  },
  {
    stat: 'm-magenta_candle_cake',
    translation: 'Mined Cake with Magenta Candle',
  },
  {
    stat: 'm-light_blue_candle_cake',
    translation: 'Mined Cake with Light Blue Candle',
  },
  {
    stat: 'm-yellow_candle_cake',
    translation: 'Mined Cake with Yellow Candle',
  },
  {
    stat: 'm-lime_candle_cake',
    translation: 'Mined Cake with Lime Candle',
  },
  {
    stat: 'm-pink_candle_cake',
    translation: 'Mined Cake with Pink Candle',
  },
  {
    stat: 'm-gray_candle_cake',
    translation: 'Mined Cake with Gray Candle',
  },
  {
    stat: 'm-light_gray_candle_cake',
    translation: 'Mined Cake with Light Gray Candle',
  },
  {
    stat: 'm-cyan_candle_cake',
    translation: 'Mined Cake with Cyan Candle',
  },
  {
    stat: 'm-purple_candle_cake',
    translation: 'Mined Cake with Purple Candle',
  },
  {
    stat: 'm-blue_candle_cake',
    translation: 'Mined Cake with Blue Candle',
  },
  {
    stat: 'm-brown_candle_cake',
    translation: 'Mined Cake with Brown Candle',
  },
  {
    stat: 'm-green_candle_cake',
    translation: 'Mined Cake with Green Candle',
  },
  {
    stat: 'm-red_candle_cake',
    translation: 'Mined Cake with Red Candle',
  },
  {
    stat: 'm-black_candle_cake',
    translation: 'Mined Cake with Black Candle',
  },
  {
    stat: 'm-amethyst_block',
    translation: 'Mined Block of Amethyst',
  },
  {
    stat: 'm-budding_amethyst',
    translation: 'Mined Budding Amethyst',
  },
  {
    stat: 'm-amethyst_cluster',
    translation: 'Mined Amethyst Cluster',
  },
  {
    stat: 'm-large_amethyst_bud',
    translation: 'Mined Large Amethyst Bud',
  },
  {
    stat: 'm-medium_amethyst_bud',
    translation: 'Mined Medium Amethyst Bud',
  },
  {
    stat: 'm-small_amethyst_bud',
    translation: 'Mined Small Amethyst Bud',
  },
  {
    stat: 'm-tuff',
    translation: 'Mined Tuff',
  },
  {
    stat: 'm-calcite',
    translation: 'Mined Calcite',
  },
  {
    stat: 'm-tinted_glass',
    translation: 'Mined Tinted Glass',
  },
  {
    stat: 'm-powder_snow',
    translation: 'Mined Powder Snow',
  },
  {
    stat: 'm-sculk_sensor',
    translation: 'Mined Sculk Sensor',
  },
  {
    stat: 'm-sculk',
    translation: 'Mined Sculk',
  },
  {
    stat: 'm-sculk_vein',
    translation: 'Mined Sculk Vein',
  },
  {
    stat: 'm-sculk_catalyst',
    translation: 'Mined Sculk Catalyst',
  },
  {
    stat: 'm-sculk_shrieker',
    translation: 'Mined Sculk Shrieker',
  },
  {
    stat: 'm-oxidized_copper',
    translation: 'Mined Oxidized Copper',
  },
  {
    stat: 'm-weathered_copper',
    translation: 'Mined Weathered Copper',
  },
  {
    stat: 'm-exposed_copper',
    translation: 'Mined Exposed Copper',
  },
  {
    stat: 'm-copper_block',
    translation: 'Mined Block of Copper',
  },
  {
    stat: 'm-copper_ore',
    translation: 'Mined Copper Ore',
  },
  {
    stat: 'm-deepslate_copper_ore',
    translation: 'Mined Deepslate Copper Ore',
  },
  {
    stat: 'm-oxidized_cut_copper',
    translation: 'Mined Oxidized Cut Copper',
  },
  {
    stat: 'm-weathered_cut_copper',
    translation: 'Mined Weathered Cut Copper',
  },
  {
    stat: 'm-exposed_cut_copper',
    translation: 'Mined Exposed Cut Copper',
  },
  {
    stat: 'm-cut_copper',
    translation: 'Mined Cut Copper',
  },
  {
    stat: 'm-oxidized_cut_copper_stairs',
    translation: 'Mined Oxidized Cut Copper Stairs',
  },
  {
    stat: 'm-weathered_cut_copper_stairs',
    translation: 'Mined Weathered Cut Copper Stairs',
  },
  {
    stat: 'm-exposed_cut_copper_stairs',
    translation: 'Mined Exposed Cut Copper Stairs',
  },
  {
    stat: 'm-cut_copper_stairs',
    translation: 'Mined Cut Copper Stairs',
  },
  {
    stat: 'm-oxidized_cut_copper_slab',
    translation: 'Mined Oxidized Cut Copper Slab',
  },
  {
    stat: 'm-weathered_cut_copper_slab',
    translation: 'Mined Weathered Cut Copper Slab',
  },
  {
    stat: 'm-exposed_cut_copper_slab',
    translation: 'Mined Exposed Cut Copper Slab',
  },
  {
    stat: 'm-cut_copper_slab',
    translation: 'Mined Cut Copper Slab',
  },
  {
    stat: 'm-waxed_copper_block',
    translation: 'Mined Waxed Block of Copper',
  },
  {
    stat: 'm-waxed_weathered_copper',
    translation: 'Mined Waxed Weathered Copper',
  },
  {
    stat: 'm-waxed_exposed_copper',
    translation: 'Mined Waxed Exposed Copper',
  },
  {
    stat: 'm-waxed_oxidized_copper',
    translation: 'Mined Waxed Oxidized Copper',
  },
  {
    stat: 'm-waxed_oxidized_cut_copper',
    translation: 'Mined Waxed Oxidized Cut Copper',
  },
  {
    stat: 'm-waxed_weathered_cut_copper',
    translation: 'Mined Waxed Weathered Cut Copper',
  },
  {
    stat: 'm-waxed_exposed_cut_copper',
    translation: 'Mined Waxed Exposed Cut Copper',
  },
  {
    stat: 'm-waxed_cut_copper',
    translation: 'Mined Waxed Cut Copper',
  },
  {
    stat: 'm-waxed_oxidized_cut_copper_stairs',
    translation: 'Mined Waxed Oxidized Cut Copper Stairs',
  },
  {
    stat: 'm-waxed_weathered_cut_copper_stairs',
    translation: 'Mined Waxed Weathered Cut Copper Stairs',
  },
  {
    stat: 'm-waxed_exposed_cut_copper_stairs',
    translation: 'Mined Waxed Exposed Cut Copper Stairs',
  },
  {
    stat: 'm-waxed_cut_copper_stairs',
    translation: 'Mined Waxed Cut Copper Stairs',
  },
  {
    stat: 'm-waxed_oxidized_cut_copper_slab',
    translation: 'Mined Waxed Oxidized Cut Copper Slab',
  },
  {
    stat: 'm-waxed_weathered_cut_copper_slab',
    translation: 'Mined Waxed Weathered Cut Copper Slab',
  },
  {
    stat: 'm-waxed_exposed_cut_copper_slab',
    translation: 'Mined Waxed Exposed Cut Copper Slab',
  },
  {
    stat: 'm-waxed_cut_copper_slab',
    translation: 'Mined Waxed Cut Copper Slab',
  },
  {
    stat: 'm-lightning_rod',
    translation: 'Mined Lightning Rod',
  },
  {
    stat: 'm-pointed_dripstone',
    translation: 'Mined Pointed Dripstone',
  },
  {
    stat: 'm-dripstone_block',
    translation: 'Mined Dripstone Block',
  },
  {
    stat: 'm-cave_vines',
    translation: 'Mined Cave Vines',
  },
  {
    stat: 'm-cave_vines_plant',
    translation: 'Mined Cave Vines Plant',
  },
  {
    stat: 'm-spore_blossom',
    translation: 'Mined Spore Blossom',
  },
  {
    stat: 'm-azalea',
    translation: 'Mined Azalea',
  },
  {
    stat: 'm-flowering_azalea',
    translation: 'Mined Flowering Azalea',
  },
  {
    stat: 'm-moss_carpet',
    translation: 'Mined Moss Carpet',
  },
  {
    stat: 'm-moss_block',
    translation: 'Mined Moss Block',
  },
  {
    stat: 'm-big_dripleaf',
    translation: 'Mined Big Dripleaf',
  },
  {
    stat: 'm-big_dripleaf_stem',
    translation: 'Mined Big Dripleaf Stem',
  },
  {
    stat: 'm-small_dripleaf',
    translation: 'Mined Small Dripleaf',
  },
  {
    stat: 'm-hanging_roots',
    translation: 'Mined Hanging Roots',
  },
  {
    stat: 'm-rooted_dirt',
    translation: 'Mined Rooted Dirt',
  },
  {
    stat: 'm-mud',
    translation: 'Mined Mud',
  },
  {
    stat: 'm-deepslate',
    translation: 'Mined Deepslate',
  },
  {
    stat: 'm-cobbled_deepslate',
    translation: 'Mined Cobbled Deepslate',
  },
  {
    stat: 'm-cobbled_deepslate_stairs',
    translation: 'Mined Cobbled Deepslate Stairs',
  },
  {
    stat: 'm-cobbled_deepslate_slab',
    translation: 'Mined Cobbled Deepslate Slab',
  },
  {
    stat: 'm-cobbled_deepslate_wall',
    translation: 'Mined Cobbled Deepslate Wall',
  },
  {
    stat: 'm-polished_deepslate',
    translation: 'Mined Polished Deepslate',
  },
  {
    stat: 'm-polished_deepslate_stairs',
    translation: 'Mined Polished Deepslate Stairs',
  },
  {
    stat: 'm-polished_deepslate_slab',
    translation: 'Mined Polished Deepslate Slab',
  },
  {
    stat: 'm-polished_deepslate_wall',
    translation: 'Mined Polished Deepslate Wall',
  },
  {
    stat: 'm-deepslate_tiles',
    translation: 'Mined Deepslate Tiles',
  },
  {
    stat: 'm-deepslate_tile_stairs',
    translation: 'Mined Deepslate Tile Stairs',
  },
  {
    stat: 'm-deepslate_tile_slab',
    translation: 'Mined Deepslate Tile Slab',
  },
  {
    stat: 'm-deepslate_tile_wall',
    translation: 'Mined Deepslate Tile Wall',
  },
  {
    stat: 'm-deepslate_bricks',
    translation: 'Mined Deepslate Bricks',
  },
  {
    stat: 'm-deepslate_brick_stairs',
    translation: 'Mined Deepslate Brick Stairs',
  },
  {
    stat: 'm-deepslate_brick_slab',
    translation: 'Mined Deepslate Brick Slab',
  },
  {
    stat: 'm-deepslate_brick_wall',
    translation: 'Mined Deepslate Brick Wall',
  },
  {
    stat: 'm-chiseled_deepslate',
    translation: 'Mined Chiseled Deepslate',
  },
  {
    stat: 'm-cracked_deepslate_bricks',
    translation: 'Mined Cracked Deepslate Bricks',
  },
  {
    stat: 'm-cracked_deepslate_tiles',
    translation: 'Mined Cracked Deepslate Tiles',
  },
  {
    stat: 'm-infested_deepslate',
    translation: 'Mined Infested Deepslate',
  },
  {
    stat: 'm-smooth_basalt',
    translation: 'Mined Smooth Basalt',
  },
  {
    stat: 'm-raw_iron_block',
    translation: 'Mined Block of Raw Iron',
  },
  {
    stat: 'm-raw_copper_block',
    translation: 'Mined Block of Raw Copper',
  },
  {
    stat: 'm-raw_gold_block',
    translation: 'Mined Block of Raw Gold',
  },
  {
    stat: 'm-potted_azalea_bush',
    translation: 'Mined Potted Azalea',
  },
  {
    stat: 'm-potted_flowering_azalea_bush',
    translation: 'Mined Potted Flowering Azalea',
  },
  {
    stat: 'm-ochre_froglight',
    translation: 'Mined Ochre Froglight',
  },
  {
    stat: 'm-verdant_froglight',
    translation: 'Mined Verdant Froglight',
  },
  {
    stat: 'm-pearlescent_froglight',
    translation: 'Mined Pearlescent Froglight',
  },
  {
    stat: 'm-frogspawn',
    translation: 'Mined Frogspawn',
  },
  {
    stat: 'm-reinforced_deepslate',
    translation: 'Mined Reinforced Deepslate',
  },
  {
    stat: 'c-air',
    translation: 'Crafted Air',
  },
  {
    stat: 'c-stone',
    translation: 'Crafted Stone',
  },
  {
    stat: 'c-granite',
    translation: 'Crafted Granite',
  },
  {
    stat: 'c-polished_granite',
    translation: 'Crafted Polished Granite',
  },
  {
    stat: 'c-diorite',
    translation: 'Crafted Diorite',
  },
  {
    stat: 'c-polished_diorite',
    translation: 'Crafted Polished Diorite',
  },
  {
    stat: 'c-andesite',
    translation: 'Crafted Andesite',
  },
  {
    stat: 'c-polished_andesite',
    translation: 'Crafted Polished Andesite',
  },
  {
    stat: 'c-deepslate',
    translation: 'Crafted Deepslate',
  },
  {
    stat: 'c-cobbled_deepslate',
    translation: 'Crafted Cobbled Deepslate',
  },
  {
    stat: 'c-polished_deepslate',
    translation: 'Crafted Polished Deepslate',
  },
  {
    stat: 'c-calcite',
    translation: 'Crafted Calcite',
  },
  {
    stat: 'c-tuff',
    translation: 'Crafted Tuff',
  },
  {
    stat: 'c-dripstone_block',
    translation: 'Crafted Dripstone Block',
  },
  {
    stat: 'c-grass_block',
    translation: 'Crafted Grass Block',
  },
  {
    stat: 'c-dirt',
    translation: 'Crafted Dirt',
  },
  {
    stat: 'c-coarse_dirt',
    translation: 'Crafted Coarse Dirt',
  },
  {
    stat: 'c-podzol',
    translation: 'Crafted Podzol',
  },
  {
    stat: 'c-rooted_dirt',
    translation: 'Crafted Rooted Dirt',
  },
  {
    stat: 'c-mud',
    translation: 'Crafted Mud',
  },
  {
    stat: 'c-crimson_nylium',
    translation: 'Crafted Crimson Nylium',
  },
  {
    stat: 'c-warped_nylium',
    translation: 'Crafted Warped Nylium',
  },
  {
    stat: 'c-cobblestone',
    translation: 'Crafted Cobblestone',
  },
  {
    stat: 'c-oak_planks',
    translation: 'Crafted Oak Planks',
  },
  {
    stat: 'c-spruce_planks',
    translation: 'Crafted Spruce Planks',
  },
  {
    stat: 'c-birch_planks',
    translation: 'Crafted Birch Planks',
  },
  {
    stat: 'c-jungle_planks',
    translation: 'Crafted Jungle Planks',
  },
  {
    stat: 'c-acacia_planks',
    translation: 'Crafted Acacia Planks',
  },
  {
    stat: 'c-dark_oak_planks',
    translation: 'Crafted Dark Oak Planks',
  },
  {
    stat: 'c-mangrove_planks',
    translation: 'Crafted Mangrove Planks',
  },
  {
    stat: 'c-crimson_planks',
    translation: 'Crafted Crimson Planks',
  },
  {
    stat: 'c-warped_planks',
    translation: 'Crafted Warped Planks',
  },
  {
    stat: 'c-oak_sapling',
    translation: 'Crafted Oak Sapling',
  },
  {
    stat: 'c-spruce_sapling',
    translation: 'Crafted Spruce Sapling',
  },
  {
    stat: 'c-birch_sapling',
    translation: 'Crafted Birch Sapling',
  },
  {
    stat: 'c-jungle_sapling',
    translation: 'Crafted Jungle Sapling',
  },
  {
    stat: 'c-acacia_sapling',
    translation: 'Crafted Acacia Sapling',
  },
  {
    stat: 'c-dark_oak_sapling',
    translation: 'Crafted Dark Oak Sapling',
  },
  {
    stat: 'c-mangrove_propagule',
    translation: 'Crafted Mangrove Propagule',
  },
  {
    stat: 'c-bedrock',
    translation: 'Crafted Bedrock',
  },
  {
    stat: 'c-sand',
    translation: 'Crafted Sand',
  },
  {
    stat: 'c-red_sand',
    translation: 'Crafted Red Sand',
  },
  {
    stat: 'c-gravel',
    translation: 'Crafted Gravel',
  },
  {
    stat: 'c-coal_ore',
    translation: 'Crafted Coal Ore',
  },
  {
    stat: 'c-deepslate_coal_ore',
    translation: 'Crafted Deepslate Coal Ore',
  },
  {
    stat: 'c-iron_ore',
    translation: 'Crafted Iron Ore',
  },
  {
    stat: 'c-deepslate_iron_ore',
    translation: 'Crafted Deepslate Iron Ore',
  },
  {
    stat: 'c-copper_ore',
    translation: 'Crafted Copper Ore',
  },
  {
    stat: 'c-deepslate_copper_ore',
    translation: 'Crafted Deepslate Copper Ore',
  },
  {
    stat: 'c-gold_ore',
    translation: 'Crafted Gold Ore',
  },
  {
    stat: 'c-deepslate_gold_ore',
    translation: 'Crafted Deepslate Gold Ore',
  },
  {
    stat: 'c-redstone_ore',
    translation: 'Crafted Redstone Ore',
  },
  {
    stat: 'c-deepslate_redstone_ore',
    translation: 'Crafted Deepslate Redstone Ore',
  },
  {
    stat: 'c-emerald_ore',
    translation: 'Crafted Emerald Ore',
  },
  {
    stat: 'c-deepslate_emerald_ore',
    translation: 'Crafted Deepslate Emerald Ore',
  },
  {
    stat: 'c-lapis_ore',
    translation: 'Crafted Lapis Lazuli Ore',
  },
  {
    stat: 'c-deepslate_lapis_ore',
    translation: 'Crafted Deepslate Lapis Lazuli Ore',
  },
  {
    stat: 'c-diamond_ore',
    translation: 'Crafted Diamond Ore',
  },
  {
    stat: 'c-deepslate_diamond_ore',
    translation: 'Crafted Deepslate Diamond Ore',
  },
  {
    stat: 'c-nether_gold_ore',
    translation: 'Crafted Nether Gold Ore',
  },
  {
    stat: 'c-nether_quartz_ore',
    translation: 'Crafted Nether Quartz Ore',
  },
  {
    stat: 'c-ancient_debris',
    translation: 'Crafted Ancient Debris',
  },
  {
    stat: 'c-coal_block',
    translation: 'Crafted Block of Coal',
  },
  {
    stat: 'c-raw_iron_block',
    translation: 'Crafted Block of Raw Iron',
  },
  {
    stat: 'c-raw_copper_block',
    translation: 'Crafted Block of Raw Copper',
  },
  {
    stat: 'c-raw_gold_block',
    translation: 'Crafted Block of Raw Gold',
  },
  {
    stat: 'c-amethyst_block',
    translation: 'Crafted Block of Amethyst',
  },
  {
    stat: 'c-budding_amethyst',
    translation: 'Crafted Budding Amethyst',
  },
  {
    stat: 'c-iron_block',
    translation: 'Crafted Block of Iron',
  },
  {
    stat: 'c-copper_block',
    translation: 'Crafted Block of Copper',
  },
  {
    stat: 'c-gold_block',
    translation: 'Crafted Block of Gold',
  },
  {
    stat: 'c-diamond_block',
    translation: 'Crafted Block of Diamond',
  },
  {
    stat: 'c-netherite_block',
    translation: 'Crafted Block of Netherite',
  },
  {
    stat: 'c-exposed_copper',
    translation: 'Crafted Exposed Copper',
  },
  {
    stat: 'c-weathered_copper',
    translation: 'Crafted Weathered Copper',
  },
  {
    stat: 'c-oxidized_copper',
    translation: 'Crafted Oxidized Copper',
  },
  {
    stat: 'c-cut_copper',
    translation: 'Crafted Cut Copper',
  },
  {
    stat: 'c-exposed_cut_copper',
    translation: 'Crafted Exposed Cut Copper',
  },
  {
    stat: 'c-weathered_cut_copper',
    translation: 'Crafted Weathered Cut Copper',
  },
  {
    stat: 'c-oxidized_cut_copper',
    translation: 'Crafted Oxidized Cut Copper',
  },
  {
    stat: 'c-cut_copper_stairs',
    translation: 'Crafted Cut Copper Stairs',
  },
  {
    stat: 'c-exposed_cut_copper_stairs',
    translation: 'Crafted Exposed Cut Copper Stairs',
  },
  {
    stat: 'c-weathered_cut_copper_stairs',
    translation: 'Crafted Weathered Cut Copper Stairs',
  },
  {
    stat: 'c-oxidized_cut_copper_stairs',
    translation: 'Crafted Oxidized Cut Copper Stairs',
  },
  {
    stat: 'c-cut_copper_slab',
    translation: 'Crafted Cut Copper Slab',
  },
  {
    stat: 'c-exposed_cut_copper_slab',
    translation: 'Crafted Exposed Cut Copper Slab',
  },
  {
    stat: 'c-weathered_cut_copper_slab',
    translation: 'Crafted Weathered Cut Copper Slab',
  },
  {
    stat: 'c-oxidized_cut_copper_slab',
    translation: 'Crafted Oxidized Cut Copper Slab',
  },
  {
    stat: 'c-waxed_copper_block',
    translation: 'Crafted Waxed Block of Copper',
  },
  {
    stat: 'c-waxed_exposed_copper',
    translation: 'Crafted Waxed Exposed Copper',
  },
  {
    stat: 'c-waxed_weathered_copper',
    translation: 'Crafted Waxed Weathered Copper',
  },
  {
    stat: 'c-waxed_oxidized_copper',
    translation: 'Crafted Waxed Oxidized Copper',
  },
  {
    stat: 'c-waxed_cut_copper',
    translation: 'Crafted Waxed Cut Copper',
  },
  {
    stat: 'c-waxed_exposed_cut_copper',
    translation: 'Crafted Waxed Exposed Cut Copper',
  },
  {
    stat: 'c-waxed_weathered_cut_copper',
    translation: 'Crafted Waxed Weathered Cut Copper',
  },
  {
    stat: 'c-waxed_oxidized_cut_copper',
    translation: 'Crafted Waxed Oxidized Cut Copper',
  },
  {
    stat: 'c-waxed_cut_copper_stairs',
    translation: 'Crafted Waxed Cut Copper Stairs',
  },
  {
    stat: 'c-waxed_exposed_cut_copper_stairs',
    translation: 'Crafted Waxed Exposed Cut Copper Stairs',
  },
  {
    stat: 'c-waxed_weathered_cut_copper_stairs',
    translation: 'Crafted Waxed Weathered Cut Copper Stairs',
  },
  {
    stat: 'c-waxed_oxidized_cut_copper_stairs',
    translation: 'Crafted Waxed Oxidized Cut Copper Stairs',
  },
  {
    stat: 'c-waxed_cut_copper_slab',
    translation: 'Crafted Waxed Cut Copper Slab',
  },
  {
    stat: 'c-waxed_exposed_cut_copper_slab',
    translation: 'Crafted Waxed Exposed Cut Copper Slab',
  },
  {
    stat: 'c-waxed_weathered_cut_copper_slab',
    translation: 'Crafted Waxed Weathered Cut Copper Slab',
  },
  {
    stat: 'c-waxed_oxidized_cut_copper_slab',
    translation: 'Crafted Waxed Oxidized Cut Copper Slab',
  },
  {
    stat: 'c-oak_log',
    translation: 'Crafted Oak Log',
  },
  {
    stat: 'c-spruce_log',
    translation: 'Crafted Spruce Log',
  },
  {
    stat: 'c-birch_log',
    translation: 'Crafted Birch Log',
  },
  {
    stat: 'c-jungle_log',
    translation: 'Crafted Jungle Log',
  },
  {
    stat: 'c-acacia_log',
    translation: 'Crafted Acacia Log',
  },
  {
    stat: 'c-dark_oak_log',
    translation: 'Crafted Dark Oak Log',
  },
  {
    stat: 'c-mangrove_log',
    translation: 'Crafted Mangrove Log',
  },
  {
    stat: 'c-mangrove_roots',
    translation: 'Crafted Mangrove Roots',
  },
  {
    stat: 'c-muddy_mangrove_roots',
    translation: 'Crafted Muddy Mangrove Roots',
  },
  {
    stat: 'c-crimson_stem',
    translation: 'Crafted Crimson Stem',
  },
  {
    stat: 'c-warped_stem',
    translation: 'Crafted Warped Stem',
  },
  {
    stat: 'c-stripped_oak_log',
    translation: 'Crafted Stripped Oak Log',
  },
  {
    stat: 'c-stripped_spruce_log',
    translation: 'Crafted Stripped Spruce Log',
  },
  {
    stat: 'c-stripped_birch_log',
    translation: 'Crafted Stripped Birch Log',
  },
  {
    stat: 'c-stripped_jungle_log',
    translation: 'Crafted Stripped Jungle Log',
  },
  {
    stat: 'c-stripped_acacia_log',
    translation: 'Crafted Stripped Acacia Log',
  },
  {
    stat: 'c-stripped_dark_oak_log',
    translation: 'Crafted Stripped Dark Oak Log',
  },
  {
    stat: 'c-stripped_mangrove_log',
    translation: 'Crafted Stripped Mangrove Log',
  },
  {
    stat: 'c-stripped_crimson_stem',
    translation: 'Crafted Stripped Crimson Stem',
  },
  {
    stat: 'c-stripped_warped_stem',
    translation: 'Crafted Stripped Warped Stem',
  },
  {
    stat: 'c-stripped_oak_wood',
    translation: 'Crafted Stripped Oak Wood',
  },
  {
    stat: 'c-stripped_spruce_wood',
    translation: 'Crafted Stripped Spruce Wood',
  },
  {
    stat: 'c-stripped_birch_wood',
    translation: 'Crafted Stripped Birch Wood',
  },
  {
    stat: 'c-stripped_jungle_wood',
    translation: 'Crafted Stripped Jungle Wood',
  },
  {
    stat: 'c-stripped_acacia_wood',
    translation: 'Crafted Stripped Acacia Wood',
  },
  {
    stat: 'c-stripped_dark_oak_wood',
    translation: 'Crafted Stripped Dark Oak Wood',
  },
  {
    stat: 'c-stripped_mangrove_wood',
    translation: 'Crafted Stripped Mangrove Wood',
  },
  {
    stat: 'c-stripped_crimson_hyphae',
    translation: 'Crafted Stripped Crimson Hyphae',
  },
  {
    stat: 'c-stripped_warped_hyphae',
    translation: 'Crafted Stripped Warped Hyphae',
  },
  {
    stat: 'c-oak_wood',
    translation: 'Crafted Oak Wood',
  },
  {
    stat: 'c-spruce_wood',
    translation: 'Crafted Spruce Wood',
  },
  {
    stat: 'c-birch_wood',
    translation: 'Crafted Birch Wood',
  },
  {
    stat: 'c-jungle_wood',
    translation: 'Crafted Jungle Wood',
  },
  {
    stat: 'c-acacia_wood',
    translation: 'Crafted Acacia Wood',
  },
  {
    stat: 'c-dark_oak_wood',
    translation: 'Crafted Dark Oak Wood',
  },
  {
    stat: 'c-mangrove_wood',
    translation: 'Crafted Mangrove Wood',
  },
  {
    stat: 'c-crimson_hyphae',
    translation: 'Crafted Crimson Hyphae',
  },
  {
    stat: 'c-warped_hyphae',
    translation: 'Crafted Warped Hyphae',
  },
  {
    stat: 'c-oak_leaves',
    translation: 'Crafted Oak Leaves',
  },
  {
    stat: 'c-spruce_leaves',
    translation: 'Crafted Spruce Leaves',
  },
  {
    stat: 'c-birch_leaves',
    translation: 'Crafted Birch Leaves',
  },
  {
    stat: 'c-jungle_leaves',
    translation: 'Crafted Jungle Leaves',
  },
  {
    stat: 'c-acacia_leaves',
    translation: 'Crafted Acacia Leaves',
  },
  {
    stat: 'c-dark_oak_leaves',
    translation: 'Crafted Dark Oak Leaves',
  },
  {
    stat: 'c-mangrove_leaves',
    translation: 'Crafted Mangrove Leaves',
  },
  {
    stat: 'c-azalea_leaves',
    translation: 'Crafted Azalea Leaves',
  },
  {
    stat: 'c-flowering_azalea_leaves',
    translation: 'Crafted Flowering Azalea Leaves',
  },
  {
    stat: 'c-sponge',
    translation: 'Crafted Sponge',
  },
  {
    stat: 'c-wet_sponge',
    translation: 'Crafted Wet Sponge',
  },
  {
    stat: 'c-glass',
    translation: 'Crafted Glass',
  },
  {
    stat: 'c-tinted_glass',
    translation: 'Crafted Tinted Glass',
  },
  {
    stat: 'c-lapis_block',
    translation: 'Crafted Block of Lapis Lazuli',
  },
  {
    stat: 'c-sandstone',
    translation: 'Crafted Sandstone',
  },
  {
    stat: 'c-chiseled_sandstone',
    translation: 'Crafted Chiseled Sandstone',
  },
  {
    stat: 'c-cut_sandstone',
    translation: 'Crafted Cut Sandstone',
  },
  {
    stat: 'c-cobweb',
    translation: 'Crafted Cobweb',
  },
  {
    stat: 'c-grass',
    translation: 'Crafted Grass',
  },
  {
    stat: 'c-fern',
    translation: 'Crafted Fern',
  },
  {
    stat: 'c-azalea',
    translation: 'Crafted Azalea',
  },
  {
    stat: 'c-flowering_azalea',
    translation: 'Crafted Flowering Azalea',
  },
  {
    stat: 'c-dead_bush',
    translation: 'Crafted Dead Bush',
  },
  {
    stat: 'c-seagrass',
    translation: 'Crafted Seagrass',
  },
  {
    stat: 'c-sea_pickle',
    translation: 'Crafted Sea Pickle',
  },
  {
    stat: 'c-white_wool',
    translation: 'Crafted White Wool',
  },
  {
    stat: 'c-orange_wool',
    translation: 'Crafted Orange Wool',
  },
  {
    stat: 'c-magenta_wool',
    translation: 'Crafted Magenta Wool',
  },
  {
    stat: 'c-light_blue_wool',
    translation: 'Crafted Light Blue Wool',
  },
  {
    stat: 'c-yellow_wool',
    translation: 'Crafted Yellow Wool',
  },
  {
    stat: 'c-lime_wool',
    translation: 'Crafted Lime Wool',
  },
  {
    stat: 'c-pink_wool',
    translation: 'Crafted Pink Wool',
  },
  {
    stat: 'c-gray_wool',
    translation: 'Crafted Gray Wool',
  },
  {
    stat: 'c-light_gray_wool',
    translation: 'Crafted Light Gray Wool',
  },
  {
    stat: 'c-cyan_wool',
    translation: 'Crafted Cyan Wool',
  },
  {
    stat: 'c-purple_wool',
    translation: 'Crafted Purple Wool',
  },
  {
    stat: 'c-blue_wool',
    translation: 'Crafted Blue Wool',
  },
  {
    stat: 'c-brown_wool',
    translation: 'Crafted Brown Wool',
  },
  {
    stat: 'c-green_wool',
    translation: 'Crafted Green Wool',
  },
  {
    stat: 'c-red_wool',
    translation: 'Crafted Red Wool',
  },
  {
    stat: 'c-black_wool',
    translation: 'Crafted Black Wool',
  },
  {
    stat: 'c-dandelion',
    translation: 'Crafted Dandelion',
  },
  {
    stat: 'c-poppy',
    translation: 'Crafted Poppy',
  },
  {
    stat: 'c-blue_orchid',
    translation: 'Crafted Blue Orchid',
  },
  {
    stat: 'c-allium',
    translation: 'Crafted Allium',
  },
  {
    stat: 'c-azure_bluet',
    translation: 'Crafted Azure Bluet',
  },
  {
    stat: 'c-red_tulip',
    translation: 'Crafted Red Tulip',
  },
  {
    stat: 'c-orange_tulip',
    translation: 'Crafted Orange Tulip',
  },
  {
    stat: 'c-white_tulip',
    translation: 'Crafted White Tulip',
  },
  {
    stat: 'c-pink_tulip',
    translation: 'Crafted Pink Tulip',
  },
  {
    stat: 'c-oxeye_daisy',
    translation: 'Crafted Oxeye Daisy',
  },
  {
    stat: 'c-cornflower',
    translation: 'Crafted Cornflower',
  },
  {
    stat: 'c-lily_of_the_valley',
    translation: 'Crafted Lily of the Valley',
  },
  {
    stat: 'c-wither_rose',
    translation: 'Crafted Wither Rose',
  },
  {
    stat: 'c-spore_blossom',
    translation: 'Crafted Spore Blossom',
  },
  {
    stat: 'c-brown_mushroom',
    translation: 'Crafted Brown Mushroom',
  },
  {
    stat: 'c-red_mushroom',
    translation: 'Crafted Red Mushroom',
  },
  {
    stat: 'c-crimson_fungus',
    translation: 'Crafted Crimson Fungus',
  },
  {
    stat: 'c-warped_fungus',
    translation: 'Crafted Warped Fungus',
  },
  {
    stat: 'c-crimson_roots',
    translation: 'Crafted Crimson Roots',
  },
  {
    stat: 'c-warped_roots',
    translation: 'Crafted Warped Roots',
  },
  {
    stat: 'c-nether_sprouts',
    translation: 'Crafted Nether Sprouts',
  },
  {
    stat: 'c-weeping_vines',
    translation: 'Crafted Weeping Vines',
  },
  {
    stat: 'c-twisting_vines',
    translation: 'Crafted Twisting Vines',
  },
  {
    stat: 'c-sugar_cane',
    translation: 'Crafted Sugar Cane',
  },
  {
    stat: 'c-kelp',
    translation: 'Crafted Kelp',
  },
  {
    stat: 'c-moss_carpet',
    translation: 'Crafted Moss Carpet',
  },
  {
    stat: 'c-moss_block',
    translation: 'Crafted Moss Block',
  },
  {
    stat: 'c-hanging_roots',
    translation: 'Crafted Hanging Roots',
  },
  {
    stat: 'c-big_dripleaf',
    translation: 'Crafted Big Dripleaf',
  },
  {
    stat: 'c-small_dripleaf',
    translation: 'Crafted Small Dripleaf',
  },
  {
    stat: 'c-bamboo',
    translation: 'Crafted Bamboo',
  },
  {
    stat: 'c-oak_slab',
    translation: 'Crafted Oak Slab',
  },
  {
    stat: 'c-spruce_slab',
    translation: 'Crafted Spruce Slab',
  },
  {
    stat: 'c-birch_slab',
    translation: 'Crafted Birch Slab',
  },
  {
    stat: 'c-jungle_slab',
    translation: 'Crafted Jungle Slab',
  },
  {
    stat: 'c-acacia_slab',
    translation: 'Crafted Acacia Slab',
  },
  {
    stat: 'c-dark_oak_slab',
    translation: 'Crafted Dark Oak Slab',
  },
  {
    stat: 'c-mangrove_slab',
    translation: 'Crafted Mangrove Slab',
  },
  {
    stat: 'c-crimson_slab',
    translation: 'Crafted Crimson Slab',
  },
  {
    stat: 'c-warped_slab',
    translation: 'Crafted Warped Slab',
  },
  {
    stat: 'c-stone_slab',
    translation: 'Crafted Stone Slab',
  },
  {
    stat: 'c-smooth_stone_slab',
    translation: 'Crafted Smooth Stone Slab',
  },
  {
    stat: 'c-sandstone_slab',
    translation: 'Crafted Sandstone Slab',
  },
  {
    stat: 'c-cut_sandstone_slab',
    translation: 'Crafted Cut Sandstone Slab',
  },
  {
    stat: 'c-petrified_oak_slab',
    translation: 'Crafted Petrified Oak Slab',
  },
  {
    stat: 'c-cobblestone_slab',
    translation: 'Crafted Cobblestone Slab',
  },
  {
    stat: 'c-brick_slab',
    translation: 'Crafted Brick Slab',
  },
  {
    stat: 'c-stone_brick_slab',
    translation: 'Crafted Stone Brick Slab',
  },
  {
    stat: 'c-mud_brick_slab',
    translation: 'Crafted Mud Brick Slab',
  },
  {
    stat: 'c-nether_brick_slab',
    translation: 'Crafted Nether Brick Slab',
  },
  {
    stat: 'c-quartz_slab',
    translation: 'Crafted Quartz Slab',
  },
  {
    stat: 'c-red_sandstone_slab',
    translation: 'Crafted Red Sandstone Slab',
  },
  {
    stat: 'c-cut_red_sandstone_slab',
    translation: 'Crafted Cut Red Sandstone Slab',
  },
  {
    stat: 'c-purpur_slab',
    translation: 'Crafted Purpur Slab',
  },
  {
    stat: 'c-prismarine_slab',
    translation: 'Crafted Prismarine Slab',
  },
  {
    stat: 'c-prismarine_brick_slab',
    translation: 'Crafted Prismarine Brick Slab',
  },
  {
    stat: 'c-dark_prismarine_slab',
    translation: 'Crafted Dark Prismarine Slab',
  },
  {
    stat: 'c-smooth_quartz',
    translation: 'Crafted Smooth Quartz Block',
  },
  {
    stat: 'c-smooth_red_sandstone',
    translation: 'Crafted Smooth Red Sandstone',
  },
  {
    stat: 'c-smooth_sandstone',
    translation: 'Crafted Smooth Sandstone',
  },
  {
    stat: 'c-smooth_stone',
    translation: 'Crafted Smooth Stone',
  },
  {
    stat: 'c-bricks',
    translation: 'Crafted Bricks',
  },
  {
    stat: 'c-bookshelf',
    translation: 'Crafted Bookshelf',
  },
  {
    stat: 'c-mossy_cobblestone',
    translation: 'Crafted Mossy Cobblestone',
  },
  {
    stat: 'c-obsidian',
    translation: 'Crafted Obsidian',
  },
  {
    stat: 'c-torch',
    translation: 'Crafted Torch',
  },
  {
    stat: 'c-end_rod',
    translation: 'Crafted End Rod',
  },
  {
    stat: 'c-chorus_plant',
    translation: 'Crafted Chorus Plant',
  },
  {
    stat: 'c-chorus_flower',
    translation: 'Crafted Chorus Flower',
  },
  {
    stat: 'c-purpur_block',
    translation: 'Crafted Purpur Block',
  },
  {
    stat: 'c-purpur_pillar',
    translation: 'Crafted Purpur Pillar',
  },
  {
    stat: 'c-purpur_stairs',
    translation: 'Crafted Purpur Stairs',
  },
  {
    stat: 'c-spawner',
    translation: 'Crafted Spawner',
  },
  {
    stat: 'c-chest',
    translation: 'Crafted Chest',
  },
  {
    stat: 'c-crafting_table',
    translation: 'Crafted Crafting Table',
  },
  {
    stat: 'c-farmland',
    translation: 'Crafted Farmland',
  },
  {
    stat: 'c-furnace',
    translation: 'Crafted Furnace',
  },
  {
    stat: 'c-ladder',
    translation: 'Crafted Ladder',
  },
  {
    stat: 'c-cobblestone_stairs',
    translation: 'Crafted Cobblestone Stairs',
  },
  {
    stat: 'c-snow',
    translation: 'Crafted Snow',
  },
  {
    stat: 'c-ice',
    translation: 'Crafted Ice',
  },
  {
    stat: 'c-snow_block',
    translation: 'Crafted Snow Block',
  },
  {
    stat: 'c-cactus',
    translation: 'Crafted Cactus',
  },
  {
    stat: 'c-clay',
    translation: 'Crafted Clay',
  },
  {
    stat: 'c-jukebox',
    translation: 'Crafted Jukebox',
  },
  {
    stat: 'c-oak_fence',
    translation: 'Crafted Oak Fence',
  },
  {
    stat: 'c-spruce_fence',
    translation: 'Crafted Spruce Fence',
  },
  {
    stat: 'c-birch_fence',
    translation: 'Crafted Birch Fence',
  },
  {
    stat: 'c-jungle_fence',
    translation: 'Crafted Jungle Fence',
  },
  {
    stat: 'c-acacia_fence',
    translation: 'Crafted Acacia Fence',
  },
  {
    stat: 'c-dark_oak_fence',
    translation: 'Crafted Dark Oak Fence',
  },
  {
    stat: 'c-mangrove_fence',
    translation: 'Crafted Mangrove Fence',
  },
  {
    stat: 'c-crimson_fence',
    translation: 'Crafted Crimson Fence',
  },
  {
    stat: 'c-warped_fence',
    translation: 'Crafted Warped Fence',
  },
  {
    stat: 'c-pumpkin',
    translation: 'Crafted Pumpkin',
  },
  {
    stat: 'c-carved_pumpkin',
    translation: 'Crafted Carved Pumpkin',
  },
  {
    stat: 'c-jack_o_lantern',
    translation: "Crafted Jack o'Lantern",
  },
  {
    stat: 'c-netherrack',
    translation: 'Crafted Netherrack',
  },
  {
    stat: 'c-soul_sand',
    translation: 'Crafted Soul Sand',
  },
  {
    stat: 'c-soul_soil',
    translation: 'Crafted Soul Soil',
  },
  {
    stat: 'c-basalt',
    translation: 'Crafted Basalt',
  },
  {
    stat: 'c-polished_basalt',
    translation: 'Crafted Polished Basalt',
  },
  {
    stat: 'c-smooth_basalt',
    translation: 'Crafted Smooth Basalt',
  },
  {
    stat: 'c-soul_torch',
    translation: 'Crafted Soul Torch',
  },
  {
    stat: 'c-glowstone',
    translation: 'Crafted Glowstone',
  },
  {
    stat: 'c-infested_stone',
    translation: 'Crafted Infested Stone',
  },
  {
    stat: 'c-infested_cobblestone',
    translation: 'Crafted Infested Cobblestone',
  },
  {
    stat: 'c-infested_stone_bricks',
    translation: 'Crafted Infested Stone Bricks',
  },
  {
    stat: 'c-infested_mossy_stone_bricks',
    translation: 'Crafted Infested Mossy Stone Bricks',
  },
  {
    stat: 'c-infested_cracked_stone_bricks',
    translation: 'Crafted Infested Cracked Stone Bricks',
  },
  {
    stat: 'c-infested_chiseled_stone_bricks',
    translation: 'Crafted Infested Chiseled Stone Bricks',
  },
  {
    stat: 'c-infested_deepslate',
    translation: 'Crafted Infested Deepslate',
  },
  {
    stat: 'c-stone_bricks',
    translation: 'Crafted Stone Bricks',
  },
  {
    stat: 'c-mossy_stone_bricks',
    translation: 'Crafted Mossy Stone Bricks',
  },
  {
    stat: 'c-cracked_stone_bricks',
    translation: 'Crafted Cracked Stone Bricks',
  },
  {
    stat: 'c-chiseled_stone_bricks',
    translation: 'Crafted Chiseled Stone Bricks',
  },
  {
    stat: 'c-packed_mud',
    translation: 'Crafted Packed Mud',
  },
  {
    stat: 'c-mud_bricks',
    translation: 'Crafted Mud Bricks',
  },
  {
    stat: 'c-deepslate_bricks',
    translation: 'Crafted Deepslate Bricks',
  },
  {
    stat: 'c-cracked_deepslate_bricks',
    translation: 'Crafted Cracked Deepslate Bricks',
  },
  {
    stat: 'c-deepslate_tiles',
    translation: 'Crafted Deepslate Tiles',
  },
  {
    stat: 'c-cracked_deepslate_tiles',
    translation: 'Crafted Cracked Deepslate Tiles',
  },
  {
    stat: 'c-chiseled_deepslate',
    translation: 'Crafted Chiseled Deepslate',
  },
  {
    stat: 'c-reinforced_deepslate',
    translation: 'Crafted Reinforced Deepslate',
  },
  {
    stat: 'c-brown_mushroom_block',
    translation: 'Crafted Brown Mushroom Block',
  },
  {
    stat: 'c-red_mushroom_block',
    translation: 'Crafted Red Mushroom Block',
  },
  {
    stat: 'c-mushroom_stem',
    translation: 'Crafted Mushroom Stem',
  },
  {
    stat: 'c-iron_bars',
    translation: 'Crafted Iron Bars',
  },
  {
    stat: 'c-chain',
    translation: 'Crafted Chain',
  },
  {
    stat: 'c-glass_pane',
    translation: 'Crafted Glass Pane',
  },
  {
    stat: 'c-melon',
    translation: 'Crafted Melon',
  },
  {
    stat: 'c-vine',
    translation: 'Crafted Vines',
  },
  {
    stat: 'c-glow_lichen',
    translation: 'Crafted Glow Lichen',
  },
  {
    stat: 'c-brick_stairs',
    translation: 'Crafted Brick Stairs',
  },
  {
    stat: 'c-stone_brick_stairs',
    translation: 'Crafted Stone Brick Stairs',
  },
  {
    stat: 'c-mud_brick_stairs',
    translation: 'Crafted Mud Brick Stairs',
  },
  {
    stat: 'c-mycelium',
    translation: 'Crafted Mycelium',
  },
  {
    stat: 'c-lily_pad',
    translation: 'Crafted Lily Pad',
  },
  {
    stat: 'c-nether_bricks',
    translation: 'Crafted Nether Bricks',
  },
  {
    stat: 'c-cracked_nether_bricks',
    translation: 'Crafted Cracked Nether Bricks',
  },
  {
    stat: 'c-chiseled_nether_bricks',
    translation: 'Crafted Chiseled Nether Bricks',
  },
  {
    stat: 'c-nether_brick_fence',
    translation: 'Crafted Nether Brick Fence',
  },
  {
    stat: 'c-nether_brick_stairs',
    translation: 'Crafted Nether Brick Stairs',
  },
  {
    stat: 'c-sculk',
    translation: 'Crafted Sculk',
  },
  {
    stat: 'c-sculk_vein',
    translation: 'Crafted Sculk Vein',
  },
  {
    stat: 'c-sculk_catalyst',
    translation: 'Crafted Sculk Catalyst',
  },
  {
    stat: 'c-sculk_shrieker',
    translation: 'Crafted Sculk Shrieker',
  },
  {
    stat: 'c-enchanting_table',
    translation: 'Crafted Enchanting Table',
  },
  {
    stat: 'c-end_portal_frame',
    translation: 'Crafted End Portal Frame',
  },
  {
    stat: 'c-end_stone',
    translation: 'Crafted End Stone',
  },
  {
    stat: 'c-end_stone_bricks',
    translation: 'Crafted End Stone Bricks',
  },
  {
    stat: 'c-dragon_egg',
    translation: 'Crafted Dragon Egg',
  },
  {
    stat: 'c-sandstone_stairs',
    translation: 'Crafted Sandstone Stairs',
  },
  {
    stat: 'c-ender_chest',
    translation: 'Crafted Ender Chest',
  },
  {
    stat: 'c-emerald_block',
    translation: 'Crafted Block of Emerald',
  },
  {
    stat: 'c-oak_stairs',
    translation: 'Crafted Oak Stairs',
  },
  {
    stat: 'c-spruce_stairs',
    translation: 'Crafted Spruce Stairs',
  },
  {
    stat: 'c-birch_stairs',
    translation: 'Crafted Birch Stairs',
  },
  {
    stat: 'c-jungle_stairs',
    translation: 'Crafted Jungle Stairs',
  },
  {
    stat: 'c-acacia_stairs',
    translation: 'Crafted Acacia Stairs',
  },
  {
    stat: 'c-dark_oak_stairs',
    translation: 'Crafted Dark Oak Stairs',
  },
  {
    stat: 'c-mangrove_stairs',
    translation: 'Crafted Mangrove Stairs',
  },
  {
    stat: 'c-crimson_stairs',
    translation: 'Crafted Crimson Stairs',
  },
  {
    stat: 'c-warped_stairs',
    translation: 'Crafted Warped Stairs',
  },
  {
    stat: 'c-command_block',
    translation: 'Crafted Command Block',
  },
  {
    stat: 'c-beacon',
    translation: 'Crafted Beacon',
  },
  {
    stat: 'c-cobblestone_wall',
    translation: 'Crafted Cobblestone Wall',
  },
  {
    stat: 'c-mossy_cobblestone_wall',
    translation: 'Crafted Mossy Cobblestone Wall',
  },
  {
    stat: 'c-brick_wall',
    translation: 'Crafted Brick Wall',
  },
  {
    stat: 'c-prismarine_wall',
    translation: 'Crafted Prismarine Wall',
  },
  {
    stat: 'c-red_sandstone_wall',
    translation: 'Crafted Red Sandstone Wall',
  },
  {
    stat: 'c-mossy_stone_brick_wall',
    translation: 'Crafted Mossy Stone Brick Wall',
  },
  {
    stat: 'c-granite_wall',
    translation: 'Crafted Granite Wall',
  },
  {
    stat: 'c-stone_brick_wall',
    translation: 'Crafted Stone Brick Wall',
  },
  {
    stat: 'c-mud_brick_wall',
    translation: 'Crafted Mud Brick Wall',
  },
  {
    stat: 'c-nether_brick_wall',
    translation: 'Crafted Nether Brick Wall',
  },
  {
    stat: 'c-andesite_wall',
    translation: 'Crafted Andesite Wall',
  },
  {
    stat: 'c-red_nether_brick_wall',
    translation: 'Crafted Red Nether Brick Wall',
  },
  {
    stat: 'c-sandstone_wall',
    translation: 'Crafted Sandstone Wall',
  },
  {
    stat: 'c-end_stone_brick_wall',
    translation: 'Crafted End Stone Brick Wall',
  },
  {
    stat: 'c-diorite_wall',
    translation: 'Crafted Diorite Wall',
  },
  {
    stat: 'c-blackstone_wall',
    translation: 'Crafted Blackstone Wall',
  },
  {
    stat: 'c-polished_blackstone_wall',
    translation: 'Crafted Polished Blackstone Wall',
  },
  {
    stat: 'c-polished_blackstone_brick_wall',
    translation: 'Crafted Polished Blackstone Brick Wall',
  },
  {
    stat: 'c-cobbled_deepslate_wall',
    translation: 'Crafted Cobbled Deepslate Wall',
  },
  {
    stat: 'c-polished_deepslate_wall',
    translation: 'Crafted Polished Deepslate Wall',
  },
  {
    stat: 'c-deepslate_brick_wall',
    translation: 'Crafted Deepslate Brick Wall',
  },
  {
    stat: 'c-deepslate_tile_wall',
    translation: 'Crafted Deepslate Tile Wall',
  },
  {
    stat: 'c-anvil',
    translation: 'Crafted Anvil',
  },
  {
    stat: 'c-chipped_anvil',
    translation: 'Crafted Chipped Anvil',
  },
  {
    stat: 'c-damaged_anvil',
    translation: 'Crafted Damaged Anvil',
  },
  {
    stat: 'c-chiseled_quartz_block',
    translation: 'Crafted Chiseled Quartz Block',
  },
  {
    stat: 'c-quartz_block',
    translation: 'Crafted Block of Quartz',
  },
  {
    stat: 'c-quartz_bricks',
    translation: 'Crafted Quartz Bricks',
  },
  {
    stat: 'c-quartz_pillar',
    translation: 'Crafted Quartz Pillar',
  },
  {
    stat: 'c-quartz_stairs',
    translation: 'Crafted Quartz Stairs',
  },
  {
    stat: 'c-white_terracotta',
    translation: 'Crafted White Terracotta',
  },
  {
    stat: 'c-orange_terracotta',
    translation: 'Crafted Orange Terracotta',
  },
  {
    stat: 'c-magenta_terracotta',
    translation: 'Crafted Magenta Terracotta',
  },
  {
    stat: 'c-light_blue_terracotta',
    translation: 'Crafted Light Blue Terracotta',
  },
  {
    stat: 'c-yellow_terracotta',
    translation: 'Crafted Yellow Terracotta',
  },
  {
    stat: 'c-lime_terracotta',
    translation: 'Crafted Lime Terracotta',
  },
  {
    stat: 'c-pink_terracotta',
    translation: 'Crafted Pink Terracotta',
  },
  {
    stat: 'c-gray_terracotta',
    translation: 'Crafted Gray Terracotta',
  },
  {
    stat: 'c-light_gray_terracotta',
    translation: 'Crafted Light Gray Terracotta',
  },
  {
    stat: 'c-cyan_terracotta',
    translation: 'Crafted Cyan Terracotta',
  },
  {
    stat: 'c-purple_terracotta',
    translation: 'Crafted Purple Terracotta',
  },
  {
    stat: 'c-blue_terracotta',
    translation: 'Crafted Blue Terracotta',
  },
  {
    stat: 'c-brown_terracotta',
    translation: 'Crafted Brown Terracotta',
  },
  {
    stat: 'c-green_terracotta',
    translation: 'Crafted Green Terracotta',
  },
  {
    stat: 'c-red_terracotta',
    translation: 'Crafted Red Terracotta',
  },
  {
    stat: 'c-black_terracotta',
    translation: 'Crafted Black Terracotta',
  },
  {
    stat: 'c-barrier',
    translation: 'Crafted Barrier',
  },
  {
    stat: 'c-light',
    translation: 'Crafted Light',
  },
  {
    stat: 'c-hay_block',
    translation: 'Crafted Hay Bale',
  },
  {
    stat: 'c-white_carpet',
    translation: 'Crafted White Carpet',
  },
  {
    stat: 'c-orange_carpet',
    translation: 'Crafted Orange Carpet',
  },
  {
    stat: 'c-magenta_carpet',
    translation: 'Crafted Magenta Carpet',
  },
  {
    stat: 'c-light_blue_carpet',
    translation: 'Crafted Light Blue Carpet',
  },
  {
    stat: 'c-yellow_carpet',
    translation: 'Crafted Yellow Carpet',
  },
  {
    stat: 'c-lime_carpet',
    translation: 'Crafted Lime Carpet',
  },
  {
    stat: 'c-pink_carpet',
    translation: 'Crafted Pink Carpet',
  },
  {
    stat: 'c-gray_carpet',
    translation: 'Crafted Gray Carpet',
  },
  {
    stat: 'c-light_gray_carpet',
    translation: 'Crafted Light Gray Carpet',
  },
  {
    stat: 'c-cyan_carpet',
    translation: 'Crafted Cyan Carpet',
  },
  {
    stat: 'c-purple_carpet',
    translation: 'Crafted Purple Carpet',
  },
  {
    stat: 'c-blue_carpet',
    translation: 'Crafted Blue Carpet',
  },
  {
    stat: 'c-brown_carpet',
    translation: 'Crafted Brown Carpet',
  },
  {
    stat: 'c-green_carpet',
    translation: 'Crafted Green Carpet',
  },
  {
    stat: 'c-red_carpet',
    translation: 'Crafted Red Carpet',
  },
  {
    stat: 'c-black_carpet',
    translation: 'Crafted Black Carpet',
  },
  {
    stat: 'c-terracotta',
    translation: 'Crafted Terracotta',
  },
  {
    stat: 'c-packed_ice',
    translation: 'Crafted Packed Ice',
  },
  {
    stat: 'c-dirt_path',
    translation: 'Crafted Dirt Path',
  },
  {
    stat: 'c-sunflower',
    translation: 'Crafted Sunflower',
  },
  {
    stat: 'c-lilac',
    translation: 'Crafted Lilac',
  },
  {
    stat: 'c-rose_bush',
    translation: 'Crafted Rose Bush',
  },
  {
    stat: 'c-peony',
    translation: 'Crafted Peony',
  },
  {
    stat: 'c-tall_grass',
    translation: 'Crafted Tall Grass',
  },
  {
    stat: 'c-large_fern',
    translation: 'Crafted Large Fern',
  },
  {
    stat: 'c-white_stained_glass',
    translation: 'Crafted White Stained Glass',
  },
  {
    stat: 'c-orange_stained_glass',
    translation: 'Crafted Orange Stained Glass',
  },
  {
    stat: 'c-magenta_stained_glass',
    translation: 'Crafted Magenta Stained Glass',
  },
  {
    stat: 'c-light_blue_stained_glass',
    translation: 'Crafted Light Blue Stained Glass',
  },
  {
    stat: 'c-yellow_stained_glass',
    translation: 'Crafted Yellow Stained Glass',
  },
  {
    stat: 'c-lime_stained_glass',
    translation: 'Crafted Lime Stained Glass',
  },
  {
    stat: 'c-pink_stained_glass',
    translation: 'Crafted Pink Stained Glass',
  },
  {
    stat: 'c-gray_stained_glass',
    translation: 'Crafted Gray Stained Glass',
  },
  {
    stat: 'c-light_gray_stained_glass',
    translation: 'Crafted Light Gray Stained Glass',
  },
  {
    stat: 'c-cyan_stained_glass',
    translation: 'Crafted Cyan Stained Glass',
  },
  {
    stat: 'c-purple_stained_glass',
    translation: 'Crafted Purple Stained Glass',
  },
  {
    stat: 'c-blue_stained_glass',
    translation: 'Crafted Blue Stained Glass',
  },
  {
    stat: 'c-brown_stained_glass',
    translation: 'Crafted Brown Stained Glass',
  },
  {
    stat: 'c-green_stained_glass',
    translation: 'Crafted Green Stained Glass',
  },
  {
    stat: 'c-red_stained_glass',
    translation: 'Crafted Red Stained Glass',
  },
  {
    stat: 'c-black_stained_glass',
    translation: 'Crafted Black Stained Glass',
  },
  {
    stat: 'c-white_stained_glass_pane',
    translation: 'Crafted White Stained Glass Pane',
  },
  {
    stat: 'c-orange_stained_glass_pane',
    translation: 'Crafted Orange Stained Glass Pane',
  },
  {
    stat: 'c-magenta_stained_glass_pane',
    translation: 'Crafted Magenta Stained Glass Pane',
  },
  {
    stat: 'c-light_blue_stained_glass_pane',
    translation: 'Crafted Light Blue Stained Glass Pane',
  },
  {
    stat: 'c-yellow_stained_glass_pane',
    translation: 'Crafted Yellow Stained Glass Pane',
  },
  {
    stat: 'c-lime_stained_glass_pane',
    translation: 'Crafted Lime Stained Glass Pane',
  },
  {
    stat: 'c-pink_stained_glass_pane',
    translation: 'Crafted Pink Stained Glass Pane',
  },
  {
    stat: 'c-gray_stained_glass_pane',
    translation: 'Crafted Gray Stained Glass Pane',
  },
  {
    stat: 'c-light_gray_stained_glass_pane',
    translation: 'Crafted Light Gray Stained Glass Pane',
  },
  {
    stat: 'c-cyan_stained_glass_pane',
    translation: 'Crafted Cyan Stained Glass Pane',
  },
  {
    stat: 'c-purple_stained_glass_pane',
    translation: 'Crafted Purple Stained Glass Pane',
  },
  {
    stat: 'c-blue_stained_glass_pane',
    translation: 'Crafted Blue Stained Glass Pane',
  },
  {
    stat: 'c-brown_stained_glass_pane',
    translation: 'Crafted Brown Stained Glass Pane',
  },
  {
    stat: 'c-green_stained_glass_pane',
    translation: 'Crafted Green Stained Glass Pane',
  },
  {
    stat: 'c-red_stained_glass_pane',
    translation: 'Crafted Red Stained Glass Pane',
  },
  {
    stat: 'c-black_stained_glass_pane',
    translation: 'Crafted Black Stained Glass Pane',
  },
  {
    stat: 'c-prismarine',
    translation: 'Crafted Prismarine',
  },
  {
    stat: 'c-prismarine_bricks',
    translation: 'Crafted Prismarine Bricks',
  },
  {
    stat: 'c-dark_prismarine',
    translation: 'Crafted Dark Prismarine',
  },
  {
    stat: 'c-prismarine_stairs',
    translation: 'Crafted Prismarine Stairs',
  },
  {
    stat: 'c-prismarine_brick_stairs',
    translation: 'Crafted Prismarine Brick Stairs',
  },
  {
    stat: 'c-dark_prismarine_stairs',
    translation: 'Crafted Dark Prismarine Stairs',
  },
  {
    stat: 'c-sea_lantern',
    translation: 'Crafted Sea Lantern',
  },
  {
    stat: 'c-red_sandstone',
    translation: 'Crafted Red Sandstone',
  },
  {
    stat: 'c-chiseled_red_sandstone',
    translation: 'Crafted Chiseled Red Sandstone',
  },
  {
    stat: 'c-cut_red_sandstone',
    translation: 'Crafted Cut Red Sandstone',
  },
  {
    stat: 'c-red_sandstone_stairs',
    translation: 'Crafted Red Sandstone Stairs',
  },
  {
    stat: 'c-repeating_command_block',
    translation: 'Crafted Repeating Command Block',
  },
  {
    stat: 'c-chain_command_block',
    translation: 'Crafted Chain Command Block',
  },
  {
    stat: 'c-magma_block',
    translation: 'Crafted Magma Block',
  },
  {
    stat: 'c-nether_wart_block',
    translation: 'Crafted Nether Wart Block',
  },
  {
    stat: 'c-warped_wart_block',
    translation: 'Crafted Warped Wart Block',
  },
  {
    stat: 'c-red_nether_bricks',
    translation: 'Crafted Red Nether Bricks',
  },
  {
    stat: 'c-bone_block',
    translation: 'Crafted Bone Block',
  },
  {
    stat: 'c-structure_void',
    translation: 'Crafted Structure Void',
  },
  {
    stat: 'c-shulker_box',
    translation: 'Crafted Shulker Box',
  },
  {
    stat: 'c-white_shulker_box',
    translation: 'Crafted White Shulker Box',
  },
  {
    stat: 'c-orange_shulker_box',
    translation: 'Crafted Orange Shulker Box',
  },
  {
    stat: 'c-magenta_shulker_box',
    translation: 'Crafted Magenta Shulker Box',
  },
  {
    stat: 'c-light_blue_shulker_box',
    translation: 'Crafted Light Blue Shulker Box',
  },
  {
    stat: 'c-yellow_shulker_box',
    translation: 'Crafted Yellow Shulker Box',
  },
  {
    stat: 'c-lime_shulker_box',
    translation: 'Crafted Lime Shulker Box',
  },
  {
    stat: 'c-pink_shulker_box',
    translation: 'Crafted Pink Shulker Box',
  },
  {
    stat: 'c-gray_shulker_box',
    translation: 'Crafted Gray Shulker Box',
  },
  {
    stat: 'c-light_gray_shulker_box',
    translation: 'Crafted Light Gray Shulker Box',
  },
  {
    stat: 'c-cyan_shulker_box',
    translation: 'Crafted Cyan Shulker Box',
  },
  {
    stat: 'c-purple_shulker_box',
    translation: 'Crafted Purple Shulker Box',
  },
  {
    stat: 'c-blue_shulker_box',
    translation: 'Crafted Blue Shulker Box',
  },
  {
    stat: 'c-brown_shulker_box',
    translation: 'Crafted Brown Shulker Box',
  },
  {
    stat: 'c-green_shulker_box',
    translation: 'Crafted Green Shulker Box',
  },
  {
    stat: 'c-red_shulker_box',
    translation: 'Crafted Red Shulker Box',
  },
  {
    stat: 'c-black_shulker_box',
    translation: 'Crafted Black Shulker Box',
  },
  {
    stat: 'c-white_glazed_terracotta',
    translation: 'Crafted White Glazed Terracotta',
  },
  {
    stat: 'c-orange_glazed_terracotta',
    translation: 'Crafted Orange Glazed Terracotta',
  },
  {
    stat: 'c-magenta_glazed_terracotta',
    translation: 'Crafted Magenta Glazed Terracotta',
  },
  {
    stat: 'c-light_blue_glazed_terracotta',
    translation: 'Crafted Light Blue Glazed Terracotta',
  },
  {
    stat: 'c-yellow_glazed_terracotta',
    translation: 'Crafted Yellow Glazed Terracotta',
  },
  {
    stat: 'c-lime_glazed_terracotta',
    translation: 'Crafted Lime Glazed Terracotta',
  },
  {
    stat: 'c-pink_glazed_terracotta',
    translation: 'Crafted Pink Glazed Terracotta',
  },
  {
    stat: 'c-gray_glazed_terracotta',
    translation: 'Crafted Gray Glazed Terracotta',
  },
  {
    stat: 'c-light_gray_glazed_terracotta',
    translation: 'Crafted Light Gray Glazed Terracotta',
  },
  {
    stat: 'c-cyan_glazed_terracotta',
    translation: 'Crafted Cyan Glazed Terracotta',
  },
  {
    stat: 'c-purple_glazed_terracotta',
    translation: 'Crafted Purple Glazed Terracotta',
  },
  {
    stat: 'c-blue_glazed_terracotta',
    translation: 'Crafted Blue Glazed Terracotta',
  },
  {
    stat: 'c-brown_glazed_terracotta',
    translation: 'Crafted Brown Glazed Terracotta',
  },
  {
    stat: 'c-green_glazed_terracotta',
    translation: 'Crafted Green Glazed Terracotta',
  },
  {
    stat: 'c-red_glazed_terracotta',
    translation: 'Crafted Red Glazed Terracotta',
  },
  {
    stat: 'c-black_glazed_terracotta',
    translation: 'Crafted Black Glazed Terracotta',
  },
  {
    stat: 'c-white_concrete',
    translation: 'Crafted White Concrete',
  },
  {
    stat: 'c-orange_concrete',
    translation: 'Crafted Orange Concrete',
  },
  {
    stat: 'c-magenta_concrete',
    translation: 'Crafted Magenta Concrete',
  },
  {
    stat: 'c-light_blue_concrete',
    translation: 'Crafted Light Blue Concrete',
  },
  {
    stat: 'c-yellow_concrete',
    translation: 'Crafted Yellow Concrete',
  },
  {
    stat: 'c-lime_concrete',
    translation: 'Crafted Lime Concrete',
  },
  {
    stat: 'c-pink_concrete',
    translation: 'Crafted Pink Concrete',
  },
  {
    stat: 'c-gray_concrete',
    translation: 'Crafted Gray Concrete',
  },
  {
    stat: 'c-light_gray_concrete',
    translation: 'Crafted Light Gray Concrete',
  },
  {
    stat: 'c-cyan_concrete',
    translation: 'Crafted Cyan Concrete',
  },
  {
    stat: 'c-purple_concrete',
    translation: 'Crafted Purple Concrete',
  },
  {
    stat: 'c-blue_concrete',
    translation: 'Crafted Blue Concrete',
  },
  {
    stat: 'c-brown_concrete',
    translation: 'Crafted Brown Concrete',
  },
  {
    stat: 'c-green_concrete',
    translation: 'Crafted Green Concrete',
  },
  {
    stat: 'c-red_concrete',
    translation: 'Crafted Red Concrete',
  },
  {
    stat: 'c-black_concrete',
    translation: 'Crafted Black Concrete',
  },
  {
    stat: 'c-white_concrete_powder',
    translation: 'Crafted White Concrete Powder',
  },
  {
    stat: 'c-orange_concrete_powder',
    translation: 'Crafted Orange Concrete Powder',
  },
  {
    stat: 'c-magenta_concrete_powder',
    translation: 'Crafted Magenta Concrete Powder',
  },
  {
    stat: 'c-light_blue_concrete_powder',
    translation: 'Crafted Light Blue Concrete Powder',
  },
  {
    stat: 'c-yellow_concrete_powder',
    translation: 'Crafted Yellow Concrete Powder',
  },
  {
    stat: 'c-lime_concrete_powder',
    translation: 'Crafted Lime Concrete Powder',
  },
  {
    stat: 'c-pink_concrete_powder',
    translation: 'Crafted Pink Concrete Powder',
  },
  {
    stat: 'c-gray_concrete_powder',
    translation: 'Crafted Gray Concrete Powder',
  },
  {
    stat: 'c-light_gray_concrete_powder',
    translation: 'Crafted Light Gray Concrete Powder',
  },
  {
    stat: 'c-cyan_concrete_powder',
    translation: 'Crafted Cyan Concrete Powder',
  },
  {
    stat: 'c-purple_concrete_powder',
    translation: 'Crafted Purple Concrete Powder',
  },
  {
    stat: 'c-blue_concrete_powder',
    translation: 'Crafted Blue Concrete Powder',
  },
  {
    stat: 'c-brown_concrete_powder',
    translation: 'Crafted Brown Concrete Powder',
  },
  {
    stat: 'c-green_concrete_powder',
    translation: 'Crafted Green Concrete Powder',
  },
  {
    stat: 'c-red_concrete_powder',
    translation: 'Crafted Red Concrete Powder',
  },
  {
    stat: 'c-black_concrete_powder',
    translation: 'Crafted Black Concrete Powder',
  },
  {
    stat: 'c-turtle_egg',
    translation: 'Crafted Turtle Egg',
  },
  {
    stat: 'c-dead_tube_coral_block',
    translation: 'Crafted Dead Tube Coral Block',
  },
  {
    stat: 'c-dead_brain_coral_block',
    translation: 'Crafted Dead Brain Coral Block',
  },
  {
    stat: 'c-dead_bubble_coral_block',
    translation: 'Crafted Dead Bubble Coral Block',
  },
  {
    stat: 'c-dead_fire_coral_block',
    translation: 'Crafted Dead Fire Coral Block',
  },
  {
    stat: 'c-dead_horn_coral_block',
    translation: 'Crafted Dead Horn Coral Block',
  },
  {
    stat: 'c-tube_coral_block',
    translation: 'Crafted Tube Coral Block',
  },
  {
    stat: 'c-brain_coral_block',
    translation: 'Crafted Brain Coral Block',
  },
  {
    stat: 'c-bubble_coral_block',
    translation: 'Crafted Bubble Coral Block',
  },
  {
    stat: 'c-fire_coral_block',
    translation: 'Crafted Fire Coral Block',
  },
  {
    stat: 'c-horn_coral_block',
    translation: 'Crafted Horn Coral Block',
  },
  {
    stat: 'c-tube_coral',
    translation: 'Crafted Tube Coral',
  },
  {
    stat: 'c-brain_coral',
    translation: 'Crafted Brain Coral',
  },
  {
    stat: 'c-bubble_coral',
    translation: 'Crafted Bubble Coral',
  },
  {
    stat: 'c-fire_coral',
    translation: 'Crafted Fire Coral',
  },
  {
    stat: 'c-horn_coral',
    translation: 'Crafted Horn Coral',
  },
  {
    stat: 'c-dead_brain_coral',
    translation: 'Crafted Dead Brain Coral',
  },
  {
    stat: 'c-dead_bubble_coral',
    translation: 'Crafted Dead Bubble Coral',
  },
  {
    stat: 'c-dead_fire_coral',
    translation: 'Crafted Dead Fire Coral',
  },
  {
    stat: 'c-dead_horn_coral',
    translation: 'Crafted Dead Horn Coral',
  },
  {
    stat: 'c-dead_tube_coral',
    translation: 'Crafted Dead Tube Coral',
  },
  {
    stat: 'c-tube_coral_fan',
    translation: 'Crafted Tube Coral Fan',
  },
  {
    stat: 'c-brain_coral_fan',
    translation: 'Crafted Brain Coral Fan',
  },
  {
    stat: 'c-bubble_coral_fan',
    translation: 'Crafted Bubble Coral Fan',
  },
  {
    stat: 'c-fire_coral_fan',
    translation: 'Crafted Fire Coral Fan',
  },
  {
    stat: 'c-horn_coral_fan',
    translation: 'Crafted Horn Coral Fan',
  },
  {
    stat: 'c-dead_tube_coral_fan',
    translation: 'Crafted Dead Tube Coral Fan',
  },
  {
    stat: 'c-dead_brain_coral_fan',
    translation: 'Crafted Dead Brain Coral Fan',
  },
  {
    stat: 'c-dead_bubble_coral_fan',
    translation: 'Crafted Dead Bubble Coral Fan',
  },
  {
    stat: 'c-dead_fire_coral_fan',
    translation: 'Crafted Dead Fire Coral Fan',
  },
  {
    stat: 'c-dead_horn_coral_fan',
    translation: 'Crafted Dead Horn Coral Fan',
  },
  {
    stat: 'c-blue_ice',
    translation: 'Crafted Blue Ice',
  },
  {
    stat: 'c-conduit',
    translation: 'Crafted Conduit',
  },
  {
    stat: 'c-polished_granite_stairs',
    translation: 'Crafted Polished Granite Stairs',
  },
  {
    stat: 'c-smooth_red_sandstone_stairs',
    translation: 'Crafted Smooth Red Sandstone Stairs',
  },
  {
    stat: 'c-mossy_stone_brick_stairs',
    translation: 'Crafted Mossy Stone Brick Stairs',
  },
  {
    stat: 'c-polished_diorite_stairs',
    translation: 'Crafted Polished Diorite Stairs',
  },
  {
    stat: 'c-mossy_cobblestone_stairs',
    translation: 'Crafted Mossy Cobblestone Stairs',
  },
  {
    stat: 'c-end_stone_brick_stairs',
    translation: 'Crafted End Stone Brick Stairs',
  },
  {
    stat: 'c-stone_stairs',
    translation: 'Crafted Stone Stairs',
  },
  {
    stat: 'c-smooth_sandstone_stairs',
    translation: 'Crafted Smooth Sandstone Stairs',
  },
  {
    stat: 'c-smooth_quartz_stairs',
    translation: 'Crafted Smooth Quartz Stairs',
  },
  {
    stat: 'c-granite_stairs',
    translation: 'Crafted Granite Stairs',
  },
  {
    stat: 'c-andesite_stairs',
    translation: 'Crafted Andesite Stairs',
  },
  {
    stat: 'c-red_nether_brick_stairs',
    translation: 'Crafted Red Nether Brick Stairs',
  },
  {
    stat: 'c-polished_andesite_stairs',
    translation: 'Crafted Polished Andesite Stairs',
  },
  {
    stat: 'c-diorite_stairs',
    translation: 'Crafted Diorite Stairs',
  },
  {
    stat: 'c-cobbled_deepslate_stairs',
    translation: 'Crafted Cobbled Deepslate Stairs',
  },
  {
    stat: 'c-polished_deepslate_stairs',
    translation: 'Crafted Polished Deepslate Stairs',
  },
  {
    stat: 'c-deepslate_brick_stairs',
    translation: 'Crafted Deepslate Brick Stairs',
  },
  {
    stat: 'c-deepslate_tile_stairs',
    translation: 'Crafted Deepslate Tile Stairs',
  },
  {
    stat: 'c-polished_granite_slab',
    translation: 'Crafted Polished Granite Slab',
  },
  {
    stat: 'c-smooth_red_sandstone_slab',
    translation: 'Crafted Smooth Red Sandstone Slab',
  },
  {
    stat: 'c-mossy_stone_brick_slab',
    translation: 'Crafted Mossy Stone Brick Slab',
  },
  {
    stat: 'c-polished_diorite_slab',
    translation: 'Crafted Polished Diorite Slab',
  },
  {
    stat: 'c-mossy_cobblestone_slab',
    translation: 'Crafted Mossy Cobblestone Slab',
  },
  {
    stat: 'c-end_stone_brick_slab',
    translation: 'Crafted End Stone Brick Slab',
  },
  {
    stat: 'c-smooth_sandstone_slab',
    translation: 'Crafted Smooth Sandstone Slab',
  },
  {
    stat: 'c-smooth_quartz_slab',
    translation: 'Crafted Smooth Quartz Slab',
  },
  {
    stat: 'c-granite_slab',
    translation: 'Crafted Granite Slab',
  },
  {
    stat: 'c-andesite_slab',
    translation: 'Crafted Andesite Slab',
  },
  {
    stat: 'c-red_nether_brick_slab',
    translation: 'Crafted Red Nether Brick Slab',
  },
  {
    stat: 'c-polished_andesite_slab',
    translation: 'Crafted Polished Andesite Slab',
  },
  {
    stat: 'c-diorite_slab',
    translation: 'Crafted Diorite Slab',
  },
  {
    stat: 'c-cobbled_deepslate_slab',
    translation: 'Crafted Cobbled Deepslate Slab',
  },
  {
    stat: 'c-polished_deepslate_slab',
    translation: 'Crafted Polished Deepslate Slab',
  },
  {
    stat: 'c-deepslate_brick_slab',
    translation: 'Crafted Deepslate Brick Slab',
  },
  {
    stat: 'c-deepslate_tile_slab',
    translation: 'Crafted Deepslate Tile Slab',
  },
  {
    stat: 'c-scaffolding',
    translation: 'Crafted Scaffolding',
  },
  {
    stat: 'c-redstone',
    translation: 'Crafted Redstone Dust',
  },
  {
    stat: 'c-redstone_torch',
    translation: 'Crafted Redstone Torch',
  },
  {
    stat: 'c-redstone_block',
    translation: 'Crafted Block of Redstone',
  },
  {
    stat: 'c-repeater',
    translation: 'Crafted Redstone Repeater',
  },
  {
    stat: 'c-comparator',
    translation: 'Crafted Redstone Comparator',
  },
  {
    stat: 'c-piston',
    translation: 'Crafted Piston',
  },
  {
    stat: 'c-sticky_piston',
    translation: 'Crafted Sticky Piston',
  },
  {
    stat: 'c-slime_block',
    translation: 'Crafted Slime Block',
  },
  {
    stat: 'c-honey_block',
    translation: 'Crafted Honey Block',
  },
  {
    stat: 'c-observer',
    translation: 'Crafted Observer',
  },
  {
    stat: 'c-hopper',
    translation: 'Crafted Hopper',
  },
  {
    stat: 'c-dispenser',
    translation: 'Crafted Dispenser',
  },
  {
    stat: 'c-dropper',
    translation: 'Crafted Dropper',
  },
  {
    stat: 'c-lectern',
    translation: 'Crafted Lectern',
  },
  {
    stat: 'c-target',
    translation: 'Crafted Target',
  },
  {
    stat: 'c-lever',
    translation: 'Crafted Lever',
  },
  {
    stat: 'c-lightning_rod',
    translation: 'Crafted Lightning Rod',
  },
  {
    stat: 'c-daylight_detector',
    translation: 'Crafted Daylight Detector',
  },
  {
    stat: 'c-sculk_sensor',
    translation: 'Crafted Sculk Sensor',
  },
  {
    stat: 'c-tripwire_hook',
    translation: 'Crafted Tripwire Hook',
  },
  {
    stat: 'c-trapped_chest',
    translation: 'Crafted Trapped Chest',
  },
  {
    stat: 'c-tnt',
    translation: 'Crafted TNT',
  },
  {
    stat: 'c-redstone_lamp',
    translation: 'Crafted Redstone Lamp',
  },
  {
    stat: 'c-note_block',
    translation: 'Crafted Note Block',
  },
  {
    stat: 'c-stone_button',
    translation: 'Crafted Stone Button',
  },
  {
    stat: 'c-polished_blackstone_button',
    translation: 'Crafted Polished Blackstone Button',
  },
  {
    stat: 'c-oak_button',
    translation: 'Crafted Oak Button',
  },
  {
    stat: 'c-spruce_button',
    translation: 'Crafted Spruce Button',
  },
  {
    stat: 'c-birch_button',
    translation: 'Crafted Birch Button',
  },
  {
    stat: 'c-jungle_button',
    translation: 'Crafted Jungle Button',
  },
  {
    stat: 'c-acacia_button',
    translation: 'Crafted Acacia Button',
  },
  {
    stat: 'c-dark_oak_button',
    translation: 'Crafted Dark Oak Button',
  },
  {
    stat: 'c-mangrove_button',
    translation: 'Crafted Mangrove Button',
  },
  {
    stat: 'c-crimson_button',
    translation: 'Crafted Crimson Button',
  },
  {
    stat: 'c-warped_button',
    translation: 'Crafted Warped Button',
  },
  {
    stat: 'c-stone_pressure_plate',
    translation: 'Crafted Stone Pressure Plate',
  },
  {
    stat: 'c-polished_blackstone_pressure_plate',
    translation: 'Crafted Polished Blackstone Pressure Plate',
  },
  {
    stat: 'c-light_weighted_pressure_plate',
    translation: 'Crafted Light Weighted Pressure Plate',
  },
  {
    stat: 'c-heavy_weighted_pressure_plate',
    translation: 'Crafted Heavy Weighted Pressure Plate',
  },
  {
    stat: 'c-oak_pressure_plate',
    translation: 'Crafted Oak Pressure Plate',
  },
  {
    stat: 'c-spruce_pressure_plate',
    translation: 'Crafted Spruce Pressure Plate',
  },
  {
    stat: 'c-birch_pressure_plate',
    translation: 'Crafted Birch Pressure Plate',
  },
  {
    stat: 'c-jungle_pressure_plate',
    translation: 'Crafted Jungle Pressure Plate',
  },
  {
    stat: 'c-acacia_pressure_plate',
    translation: 'Crafted Acacia Pressure Plate',
  },
  {
    stat: 'c-dark_oak_pressure_plate',
    translation: 'Crafted Dark Oak Pressure Plate',
  },
  {
    stat: 'c-mangrove_pressure_plate',
    translation: 'Crafted Mangrove Pressure Plate',
  },
  {
    stat: 'c-crimson_pressure_plate',
    translation: 'Crafted Crimson Pressure Plate',
  },
  {
    stat: 'c-warped_pressure_plate',
    translation: 'Crafted Warped Pressure Plate',
  },
  {
    stat: 'c-iron_door',
    translation: 'Crafted Iron Door',
  },
  {
    stat: 'c-oak_door',
    translation: 'Crafted Oak Door',
  },
  {
    stat: 'c-spruce_door',
    translation: 'Crafted Spruce Door',
  },
  {
    stat: 'c-birch_door',
    translation: 'Crafted Birch Door',
  },
  {
    stat: 'c-jungle_door',
    translation: 'Crafted Jungle Door',
  },
  {
    stat: 'c-acacia_door',
    translation: 'Crafted Acacia Door',
  },
  {
    stat: 'c-dark_oak_door',
    translation: 'Crafted Dark Oak Door',
  },
  {
    stat: 'c-mangrove_door',
    translation: 'Crafted Mangrove Door',
  },
  {
    stat: 'c-crimson_door',
    translation: 'Crafted Crimson Door',
  },
  {
    stat: 'c-warped_door',
    translation: 'Crafted Warped Door',
  },
  {
    stat: 'c-iron_trapdoor',
    translation: 'Crafted Iron Trapdoor',
  },
  {
    stat: 'c-oak_trapdoor',
    translation: 'Crafted Oak Trapdoor',
  },
  {
    stat: 'c-spruce_trapdoor',
    translation: 'Crafted Spruce Trapdoor',
  },
  {
    stat: 'c-birch_trapdoor',
    translation: 'Crafted Birch Trapdoor',
  },
  {
    stat: 'c-jungle_trapdoor',
    translation: 'Crafted Jungle Trapdoor',
  },
  {
    stat: 'c-acacia_trapdoor',
    translation: 'Crafted Acacia Trapdoor',
  },
  {
    stat: 'c-dark_oak_trapdoor',
    translation: 'Crafted Dark Oak Trapdoor',
  },
  {
    stat: 'c-mangrove_trapdoor',
    translation: 'Crafted Mangrove Trapdoor',
  },
  {
    stat: 'c-crimson_trapdoor',
    translation: 'Crafted Crimson Trapdoor',
  },
  {
    stat: 'c-warped_trapdoor',
    translation: 'Crafted Warped Trapdoor',
  },
  {
    stat: 'c-oak_fence_gate',
    translation: 'Crafted Oak Fence Gate',
  },
  {
    stat: 'c-spruce_fence_gate',
    translation: 'Crafted Spruce Fence Gate',
  },
  {
    stat: 'c-birch_fence_gate',
    translation: 'Crafted Birch Fence Gate',
  },
  {
    stat: 'c-jungle_fence_gate',
    translation: 'Crafted Jungle Fence Gate',
  },
  {
    stat: 'c-acacia_fence_gate',
    translation: 'Crafted Acacia Fence Gate',
  },
  {
    stat: 'c-dark_oak_fence_gate',
    translation: 'Crafted Dark Oak Fence Gate',
  },
  {
    stat: 'c-mangrove_fence_gate',
    translation: 'Crafted Mangrove Fence Gate',
  },
  {
    stat: 'c-crimson_fence_gate',
    translation: 'Crafted Crimson Fence Gate',
  },
  {
    stat: 'c-warped_fence_gate',
    translation: 'Crafted Warped Fence Gate',
  },
  {
    stat: 'c-powered_rail',
    translation: 'Crafted Powered Rail',
  },
  {
    stat: 'c-detector_rail',
    translation: 'Crafted Detector Rail',
  },
  {
    stat: 'c-rail',
    translation: 'Crafted Rail',
  },
  {
    stat: 'c-activator_rail',
    translation: 'Crafted Activator Rail',
  },
  {
    stat: 'c-saddle',
    translation: 'Crafted Saddle',
  },
  {
    stat: 'c-minecart',
    translation: 'Crafted Minecart',
  },
  {
    stat: 'c-chest_minecart',
    translation: 'Crafted Minecart with Chest',
  },
  {
    stat: 'c-furnace_minecart',
    translation: 'Crafted Minecart with Furnace',
  },
  {
    stat: 'c-tnt_minecart',
    translation: 'Crafted Minecart with TNT',
  },
  {
    stat: 'c-hopper_minecart',
    translation: 'Crafted Minecart with Hopper',
  },
  {
    stat: 'c-carrot_on_a_stick',
    translation: 'Crafted Carrot on a Stick',
  },
  {
    stat: 'c-warped_fungus_on_a_stick',
    translation: 'Crafted Warped Fungus on a Stick',
  },
  {
    stat: 'c-elytra',
    translation: 'Crafted Elytra',
  },
  {
    stat: 'c-oak_boat',
    translation: 'Crafted Oak Boat',
  },
  {
    stat: 'c-oak_chest_boat',
    translation: 'Crafted Oak Boat with Chest',
  },
  {
    stat: 'c-spruce_boat',
    translation: 'Crafted Spruce Boat',
  },
  {
    stat: 'c-spruce_chest_boat',
    translation: 'Crafted Spruce Boat with Chest',
  },
  {
    stat: 'c-birch_boat',
    translation: 'Crafted Birch Boat',
  },
  {
    stat: 'c-birch_chest_boat',
    translation: 'Crafted Birch Boat with Chest',
  },
  {
    stat: 'c-jungle_boat',
    translation: 'Crafted Jungle Boat',
  },
  {
    stat: 'c-jungle_chest_boat',
    translation: 'Crafted Jungle Boat with Chest',
  },
  {
    stat: 'c-acacia_boat',
    translation: 'Crafted Acacia Boat',
  },
  {
    stat: 'c-acacia_chest_boat',
    translation: 'Crafted Acacia Boat with Chest',
  },
  {
    stat: 'c-dark_oak_boat',
    translation: 'Crafted Dark Oak Boat',
  },
  {
    stat: 'c-dark_oak_chest_boat',
    translation: 'Crafted Dark Oak Boat with Chest',
  },
  {
    stat: 'c-mangrove_boat',
    translation: 'Crafted Mangrove Boat',
  },
  {
    stat: 'c-mangrove_chest_boat',
    translation: 'Crafted Mangrove Boat with Chest',
  },
  {
    stat: 'c-structure_block',
    translation: 'Crafted Structure Block',
  },
  {
    stat: 'c-jigsaw',
    translation: 'Crafted Jigsaw Block',
  },
  {
    stat: 'c-turtle_helmet',
    translation: 'Crafted Turtle Shell',
  },
  {
    stat: 'c-scute',
    translation: 'Crafted Scute',
  },
  {
    stat: 'c-flint_and_steel',
    translation: 'Crafted Flint and Steel',
  },
  {
    stat: 'c-apple',
    translation: 'Crafted Apple',
  },
  {
    stat: 'c-bow',
    translation: 'Crafted Bow',
  },
  {
    stat: 'c-arrow',
    translation: 'Crafted Arrow',
  },
  {
    stat: 'c-coal',
    translation: 'Crafted Coal',
  },
  {
    stat: 'c-charcoal',
    translation: 'Crafted Charcoal',
  },
  {
    stat: 'c-diamond',
    translation: 'Crafted Diamond',
  },
  {
    stat: 'c-emerald',
    translation: 'Crafted Emerald',
  },
  {
    stat: 'c-lapis_lazuli',
    translation: 'Crafted Lapis Lazuli',
  },
  {
    stat: 'c-quartz',
    translation: 'Crafted Nether Quartz',
  },
  {
    stat: 'c-amethyst_shard',
    translation: 'Crafted Amethyst Shard',
  },
  {
    stat: 'c-raw_iron',
    translation: 'Crafted Raw Iron',
  },
  {
    stat: 'c-iron_ingot',
    translation: 'Crafted Iron Ingot',
  },
  {
    stat: 'c-raw_copper',
    translation: 'Crafted Raw Copper',
  },
  {
    stat: 'c-copper_ingot',
    translation: 'Crafted Copper Ingot',
  },
  {
    stat: 'c-raw_gold',
    translation: 'Crafted Raw Gold',
  },
  {
    stat: 'c-gold_ingot',
    translation: 'Crafted Gold Ingot',
  },
  {
    stat: 'c-netherite_ingot',
    translation: 'Crafted Netherite Ingot',
  },
  {
    stat: 'c-netherite_scrap',
    translation: 'Crafted Netherite Scrap',
  },
  {
    stat: 'c-wooden_sword',
    translation: 'Crafted Wooden Sword',
  },
  {
    stat: 'c-wooden_shovel',
    translation: 'Crafted Wooden Shovel',
  },
  {
    stat: 'c-wooden_pickaxe',
    translation: 'Crafted Wooden Pickaxe',
  },
  {
    stat: 'c-wooden_axe',
    translation: 'Crafted Wooden Axe',
  },
  {
    stat: 'c-wooden_hoe',
    translation: 'Crafted Wooden Hoe',
  },
  {
    stat: 'c-stone_sword',
    translation: 'Crafted Stone Sword',
  },
  {
    stat: 'c-stone_shovel',
    translation: 'Crafted Stone Shovel',
  },
  {
    stat: 'c-stone_pickaxe',
    translation: 'Crafted Stone Pickaxe',
  },
  {
    stat: 'c-stone_axe',
    translation: 'Crafted Stone Axe',
  },
  {
    stat: 'c-stone_hoe',
    translation: 'Crafted Stone Hoe',
  },
  {
    stat: 'c-golden_sword',
    translation: 'Crafted Golden Sword',
  },
  {
    stat: 'c-golden_shovel',
    translation: 'Crafted Golden Shovel',
  },
  {
    stat: 'c-golden_pickaxe',
    translation: 'Crafted Golden Pickaxe',
  },
  {
    stat: 'c-golden_axe',
    translation: 'Crafted Golden Axe',
  },
  {
    stat: 'c-golden_hoe',
    translation: 'Crafted Golden Hoe',
  },
  {
    stat: 'c-iron_sword',
    translation: 'Crafted Iron Sword',
  },
  {
    stat: 'c-iron_shovel',
    translation: 'Crafted Iron Shovel',
  },
  {
    stat: 'c-iron_pickaxe',
    translation: 'Crafted Iron Pickaxe',
  },
  {
    stat: 'c-iron_axe',
    translation: 'Crafted Iron Axe',
  },
  {
    stat: 'c-iron_hoe',
    translation: 'Crafted Iron Hoe',
  },
  {
    stat: 'c-diamond_sword',
    translation: 'Crafted Diamond Sword',
  },
  {
    stat: 'c-diamond_shovel',
    translation: 'Crafted Diamond Shovel',
  },
  {
    stat: 'c-diamond_pickaxe',
    translation: 'Crafted Diamond Pickaxe',
  },
  {
    stat: 'c-diamond_axe',
    translation: 'Crafted Diamond Axe',
  },
  {
    stat: 'c-diamond_hoe',
    translation: 'Crafted Diamond Hoe',
  },
  {
    stat: 'c-netherite_sword',
    translation: 'Crafted Netherite Sword',
  },
  {
    stat: 'c-netherite_shovel',
    translation: 'Crafted Netherite Shovel',
  },
  {
    stat: 'c-netherite_pickaxe',
    translation: 'Crafted Netherite Pickaxe',
  },
  {
    stat: 'c-netherite_axe',
    translation: 'Crafted Netherite Axe',
  },
  {
    stat: 'c-netherite_hoe',
    translation: 'Crafted Netherite Hoe',
  },
  {
    stat: 'c-stick',
    translation: 'Crafted Stick',
  },
  {
    stat: 'c-bowl',
    translation: 'Crafted Bowl',
  },
  {
    stat: 'c-mushroom_stew',
    translation: 'Crafted Mushroom Stew',
  },
  {
    stat: 'c-string',
    translation: 'Crafted String',
  },
  {
    stat: 'c-feather',
    translation: 'Crafted Feather',
  },
  {
    stat: 'c-gunpowder',
    translation: 'Crafted Gunpowder',
  },
  {
    stat: 'c-wheat_seeds',
    translation: 'Crafted Wheat Seeds',
  },
  {
    stat: 'c-wheat',
    translation: 'Crafted Wheat',
  },
  {
    stat: 'c-bread',
    translation: 'Crafted Bread',
  },
  {
    stat: 'c-leather_helmet',
    translation: 'Crafted Leather Cap',
  },
  {
    stat: 'c-leather_chestplate',
    translation: 'Crafted Leather Tunic',
  },
  {
    stat: 'c-leather_leggings',
    translation: 'Crafted Leather Pants',
  },
  {
    stat: 'c-leather_boots',
    translation: 'Crafted Leather Boots',
  },
  {
    stat: 'c-chainmail_helmet',
    translation: 'Crafted Chainmail Helmet',
  },
  {
    stat: 'c-chainmail_chestplate',
    translation: 'Crafted Chainmail Chestplate',
  },
  {
    stat: 'c-chainmail_leggings',
    translation: 'Crafted Chainmail Leggings',
  },
  {
    stat: 'c-chainmail_boots',
    translation: 'Crafted Chainmail Boots',
  },
  {
    stat: 'c-iron_helmet',
    translation: 'Crafted Iron Helmet',
  },
  {
    stat: 'c-iron_chestplate',
    translation: 'Crafted Iron Chestplate',
  },
  {
    stat: 'c-iron_leggings',
    translation: 'Crafted Iron Leggings',
  },
  {
    stat: 'c-iron_boots',
    translation: 'Crafted Iron Boots',
  },
  {
    stat: 'c-diamond_helmet',
    translation: 'Crafted Diamond Helmet',
  },
  {
    stat: 'c-diamond_chestplate',
    translation: 'Crafted Diamond Chestplate',
  },
  {
    stat: 'c-diamond_leggings',
    translation: 'Crafted Diamond Leggings',
  },
  {
    stat: 'c-diamond_boots',
    translation: 'Crafted Diamond Boots',
  },
  {
    stat: 'c-golden_helmet',
    translation: 'Crafted Golden Helmet',
  },
  {
    stat: 'c-golden_chestplate',
    translation: 'Crafted Golden Chestplate',
  },
  {
    stat: 'c-golden_leggings',
    translation: 'Crafted Golden Leggings',
  },
  {
    stat: 'c-golden_boots',
    translation: 'Crafted Golden Boots',
  },
  {
    stat: 'c-netherite_helmet',
    translation: 'Crafted Netherite Helmet',
  },
  {
    stat: 'c-netherite_chestplate',
    translation: 'Crafted Netherite Chestplate',
  },
  {
    stat: 'c-netherite_leggings',
    translation: 'Crafted Netherite Leggings',
  },
  {
    stat: 'c-netherite_boots',
    translation: 'Crafted Netherite Boots',
  },
  {
    stat: 'c-flint',
    translation: 'Crafted Flint',
  },
  {
    stat: 'c-porkchop',
    translation: 'Crafted Raw Porkchop',
  },
  {
    stat: 'c-cooked_porkchop',
    translation: 'Crafted Cooked Porkchop',
  },
  {
    stat: 'c-painting',
    translation: 'Crafted Painting',
  },
  {
    stat: 'c-golden_apple',
    translation: 'Crafted Golden Apple',
  },
  {
    stat: 'c-enchanted_golden_apple',
    translation: 'Crafted Enchanted Golden Apple',
  },
  {
    stat: 'c-oak_sign',
    translation: 'Crafted Oak Sign',
  },
  {
    stat: 'c-spruce_sign',
    translation: 'Crafted Spruce Sign',
  },
  {
    stat: 'c-birch_sign',
    translation: 'Crafted Birch Sign',
  },
  {
    stat: 'c-jungle_sign',
    translation: 'Crafted Jungle Sign',
  },
  {
    stat: 'c-acacia_sign',
    translation: 'Crafted Acacia Sign',
  },
  {
    stat: 'c-dark_oak_sign',
    translation: 'Crafted Dark Oak Sign',
  },
  {
    stat: 'c-mangrove_sign',
    translation: 'Crafted Mangrove Sign',
  },
  {
    stat: 'c-crimson_sign',
    translation: 'Crafted Crimson Sign',
  },
  {
    stat: 'c-warped_sign',
    translation: 'Crafted Warped Sign',
  },
  {
    stat: 'c-bucket',
    translation: 'Crafted Bucket',
  },
  {
    stat: 'c-water_bucket',
    translation: 'Crafted Water Bucket',
  },
  {
    stat: 'c-lava_bucket',
    translation: 'Crafted Lava Bucket',
  },
  {
    stat: 'c-powder_snow_bucket',
    translation: 'Crafted Powder Snow Bucket',
  },
  {
    stat: 'c-snowball',
    translation: 'Crafted Snowball',
  },
  {
    stat: 'c-leather',
    translation: 'Crafted Leather',
  },
  {
    stat: 'c-milk_bucket',
    translation: 'Crafted Milk Bucket',
  },
  {
    stat: 'c-pufferfish_bucket',
    translation: 'Crafted Bucket of Pufferfish',
  },
  {
    stat: 'c-salmon_bucket',
    translation: 'Crafted Bucket of Salmon',
  },
  {
    stat: 'c-cod_bucket',
    translation: 'Crafted Bucket of Cod',
  },
  {
    stat: 'c-tropical_fish_bucket',
    translation: 'Crafted Bucket of Tropical Fish',
  },
  {
    stat: 'c-axolotl_bucket',
    translation: 'Crafted Bucket of Axolotl',
  },
  {
    stat: 'c-tadpole_bucket',
    translation: 'Crafted Bucket of Tadpole',
  },
  {
    stat: 'c-brick',
    translation: 'Crafted Brick',
  },
  {
    stat: 'c-clay_ball',
    translation: 'Crafted Clay Ball',
  },
  {
    stat: 'c-dried_kelp_block',
    translation: 'Crafted Dried Kelp Block',
  },
  {
    stat: 'c-paper',
    translation: 'Crafted Paper',
  },
  {
    stat: 'c-book',
    translation: 'Crafted Book',
  },
  {
    stat: 'c-slime_ball',
    translation: 'Crafted Slimeball',
  },
  {
    stat: 'c-egg',
    translation: 'Crafted Egg',
  },
  {
    stat: 'c-compass',
    translation: 'Crafted Compass',
  },
  {
    stat: 'c-recovery_compass',
    translation: 'Crafted Recovery Compass',
  },
  {
    stat: 'c-bundle',
    translation: 'Crafted Bundle',
  },
  {
    stat: 'c-fishing_rod',
    translation: 'Crafted Fishing Rod',
  },
  {
    stat: 'c-clock',
    translation: 'Crafted Clock',
  },
  {
    stat: 'c-spyglass',
    translation: 'Crafted Spyglass',
  },
  {
    stat: 'c-glowstone_dust',
    translation: 'Crafted Glowstone Dust',
  },
  {
    stat: 'c-cod',
    translation: 'Crafted Raw Cod',
  },
  {
    stat: 'c-salmon',
    translation: 'Crafted Raw Salmon',
  },
  {
    stat: 'c-tropical_fish',
    translation: 'Crafted Tropical Fish',
  },
  {
    stat: 'c-pufferfish',
    translation: 'Crafted Pufferfish',
  },
  {
    stat: 'c-cooked_cod',
    translation: 'Crafted Cooked Cod',
  },
  {
    stat: 'c-cooked_salmon',
    translation: 'Crafted Cooked Salmon',
  },
  {
    stat: 'c-ink_sac',
    translation: 'Crafted Ink Sac',
  },
  {
    stat: 'c-glow_ink_sac',
    translation: 'Crafted Glow Ink Sac',
  },
  {
    stat: 'c-cocoa_beans',
    translation: 'Crafted Cocoa Beans',
  },
  {
    stat: 'c-white_dye',
    translation: 'Crafted White Dye',
  },
  {
    stat: 'c-orange_dye',
    translation: 'Crafted Orange Dye',
  },
  {
    stat: 'c-magenta_dye',
    translation: 'Crafted Magenta Dye',
  },
  {
    stat: 'c-light_blue_dye',
    translation: 'Crafted Light Blue Dye',
  },
  {
    stat: 'c-yellow_dye',
    translation: 'Crafted Yellow Dye',
  },
  {
    stat: 'c-lime_dye',
    translation: 'Crafted Lime Dye',
  },
  {
    stat: 'c-pink_dye',
    translation: 'Crafted Pink Dye',
  },
  {
    stat: 'c-gray_dye',
    translation: 'Crafted Gray Dye',
  },
  {
    stat: 'c-light_gray_dye',
    translation: 'Crafted Light Gray Dye',
  },
  {
    stat: 'c-cyan_dye',
    translation: 'Crafted Cyan Dye',
  },
  {
    stat: 'c-purple_dye',
    translation: 'Crafted Purple Dye',
  },
  {
    stat: 'c-blue_dye',
    translation: 'Crafted Blue Dye',
  },
  {
    stat: 'c-brown_dye',
    translation: 'Crafted Brown Dye',
  },
  {
    stat: 'c-green_dye',
    translation: 'Crafted Green Dye',
  },
  {
    stat: 'c-red_dye',
    translation: 'Crafted Red Dye',
  },
  {
    stat: 'c-black_dye',
    translation: 'Crafted Black Dye',
  },
  {
    stat: 'c-bone_meal',
    translation: 'Crafted Bone Meal',
  },
  {
    stat: 'c-bone',
    translation: 'Crafted Bone',
  },
  {
    stat: 'c-sugar',
    translation: 'Crafted Sugar',
  },
  {
    stat: 'c-cake',
    translation: 'Crafted Cake',
  },
  {
    stat: 'c-white_bed',
    translation: 'Crafted White Bed',
  },
  {
    stat: 'c-orange_bed',
    translation: 'Crafted Orange Bed',
  },
  {
    stat: 'c-magenta_bed',
    translation: 'Crafted Magenta Bed',
  },
  {
    stat: 'c-light_blue_bed',
    translation: 'Crafted Light Blue Bed',
  },
  {
    stat: 'c-yellow_bed',
    translation: 'Crafted Yellow Bed',
  },
  {
    stat: 'c-lime_bed',
    translation: 'Crafted Lime Bed',
  },
  {
    stat: 'c-pink_bed',
    translation: 'Crafted Pink Bed',
  },
  {
    stat: 'c-gray_bed',
    translation: 'Crafted Gray Bed',
  },
  {
    stat: 'c-light_gray_bed',
    translation: 'Crafted Light Gray Bed',
  },
  {
    stat: 'c-cyan_bed',
    translation: 'Crafted Cyan Bed',
  },
  {
    stat: 'c-purple_bed',
    translation: 'Crafted Purple Bed',
  },
  {
    stat: 'c-blue_bed',
    translation: 'Crafted Blue Bed',
  },
  {
    stat: 'c-brown_bed',
    translation: 'Crafted Brown Bed',
  },
  {
    stat: 'c-green_bed',
    translation: 'Crafted Green Bed',
  },
  {
    stat: 'c-red_bed',
    translation: 'Crafted Red Bed',
  },
  {
    stat: 'c-black_bed',
    translation: 'Crafted Black Bed',
  },
  {
    stat: 'c-cookie',
    translation: 'Crafted Cookie',
  },
  {
    stat: 'c-filled_map',
    translation: 'Crafted Map',
  },
  {
    stat: 'c-shears',
    translation: 'Crafted Shears',
  },
  {
    stat: 'c-melon_slice',
    translation: 'Crafted Melon Slice',
  },
  {
    stat: 'c-dried_kelp',
    translation: 'Crafted Dried Kelp',
  },
  {
    stat: 'c-pumpkin_seeds',
    translation: 'Crafted Pumpkin Seeds',
  },
  {
    stat: 'c-melon_seeds',
    translation: 'Crafted Melon Seeds',
  },
  {
    stat: 'c-beef',
    translation: 'Crafted Raw Beef',
  },
  {
    stat: 'c-cooked_beef',
    translation: 'Crafted Steak',
  },
  {
    stat: 'c-chicken',
    translation: 'Crafted Raw Chicken',
  },
  {
    stat: 'c-cooked_chicken',
    translation: 'Crafted Cooked Chicken',
  },
  {
    stat: 'c-rotten_flesh',
    translation: 'Crafted Rotten Flesh',
  },
  {
    stat: 'c-ender_pearl',
    translation: 'Crafted Ender Pearl',
  },
  {
    stat: 'c-blaze_rod',
    translation: 'Crafted Blaze Rod',
  },
  {
    stat: 'c-ghast_tear',
    translation: 'Crafted Ghast Tear',
  },
  {
    stat: 'c-gold_nugget',
    translation: 'Crafted Gold Nugget',
  },
  {
    stat: 'c-nether_wart',
    translation: 'Crafted Nether Wart',
  },
  {
    stat: 'c-potion',
    translation: 'Crafted Potion',
  },
  {
    stat: 'c-glass_bottle',
    translation: 'Crafted Glass Bottle',
  },
  {
    stat: 'c-spider_eye',
    translation: 'Crafted Spider Eye',
  },
  {
    stat: 'c-fermented_spider_eye',
    translation: 'Crafted Fermented Spider Eye',
  },
  {
    stat: 'c-blaze_powder',
    translation: 'Crafted Blaze Powder',
  },
  {
    stat: 'c-magma_cream',
    translation: 'Crafted Magma Cream',
  },
  {
    stat: 'c-brewing_stand',
    translation: 'Crafted Brewing Stand',
  },
  {
    stat: 'c-cauldron',
    translation: 'Crafted Cauldron',
  },
  {
    stat: 'c-ender_eye',
    translation: 'Crafted Eye of Ender',
  },
  {
    stat: 'c-glistering_melon_slice',
    translation: 'Crafted Glistering Melon Slice',
  },
  {
    stat: 'c-allay_spawn_egg',
    translation: 'Crafted Allay Spawn Egg',
  },
  {
    stat: 'c-axolotl_spawn_egg',
    translation: 'Crafted Axolotl Spawn Egg',
  },
  {
    stat: 'c-bat_spawn_egg',
    translation: 'Crafted Bat Spawn Egg',
  },
  {
    stat: 'c-bee_spawn_egg',
    translation: 'Crafted Bee Spawn Egg',
  },
  {
    stat: 'c-blaze_spawn_egg',
    translation: 'Crafted Blaze Spawn Egg',
  },
  {
    stat: 'c-cat_spawn_egg',
    translation: 'Crafted Cat Spawn Egg',
  },
  {
    stat: 'c-cave_spider_spawn_egg',
    translation: 'Crafted Cave Spider Spawn Egg',
  },
  {
    stat: 'c-chicken_spawn_egg',
    translation: 'Crafted Chicken Spawn Egg',
  },
  {
    stat: 'c-cod_spawn_egg',
    translation: 'Crafted Cod Spawn Egg',
  },
  {
    stat: 'c-cow_spawn_egg',
    translation: 'Crafted Cow Spawn Egg',
  },
  {
    stat: 'c-creeper_spawn_egg',
    translation: 'Crafted Creeper Spawn Egg',
  },
  {
    stat: 'c-dolphin_spawn_egg',
    translation: 'Crafted Dolphin Spawn Egg',
  },
  {
    stat: 'c-donkey_spawn_egg',
    translation: 'Crafted Donkey Spawn Egg',
  },
  {
    stat: 'c-drowned_spawn_egg',
    translation: 'Crafted Drowned Spawn Egg',
  },
  {
    stat: 'c-elder_guardian_spawn_egg',
    translation: 'Crafted Elder Guardian Spawn Egg',
  },
  {
    stat: 'c-enderman_spawn_egg',
    translation: 'Crafted Enderman Spawn Egg',
  },
  {
    stat: 'c-endermite_spawn_egg',
    translation: 'Crafted Endermite Spawn Egg',
  },
  {
    stat: 'c-evoker_spawn_egg',
    translation: 'Crafted Evoker Spawn Egg',
  },
  {
    stat: 'c-fox_spawn_egg',
    translation: 'Crafted Fox Spawn Egg',
  },
  {
    stat: 'c-frog_spawn_egg',
    translation: 'Crafted Frog Spawn Egg',
  },
  {
    stat: 'c-ghast_spawn_egg',
    translation: 'Crafted Ghast Spawn Egg',
  },
  {
    stat: 'c-glow_squid_spawn_egg',
    translation: 'Crafted Glow Squid Spawn Egg',
  },
  {
    stat: 'c-goat_spawn_egg',
    translation: 'Crafted Goat Spawn Egg',
  },
  {
    stat: 'c-guardian_spawn_egg',
    translation: 'Crafted Guardian Spawn Egg',
  },
  {
    stat: 'c-hoglin_spawn_egg',
    translation: 'Crafted Hoglin Spawn Egg',
  },
  {
    stat: 'c-horse_spawn_egg',
    translation: 'Crafted Horse Spawn Egg',
  },
  {
    stat: 'c-husk_spawn_egg',
    translation: 'Crafted Husk Spawn Egg',
  },
  {
    stat: 'c-llama_spawn_egg',
    translation: 'Crafted Llama Spawn Egg',
  },
  {
    stat: 'c-magma_cube_spawn_egg',
    translation: 'Crafted Magma Cube Spawn Egg',
  },
  {
    stat: 'c-mooshroom_spawn_egg',
    translation: 'Crafted Mooshroom Spawn Egg',
  },
  {
    stat: 'c-mule_spawn_egg',
    translation: 'Crafted Mule Spawn Egg',
  },
  {
    stat: 'c-ocelot_spawn_egg',
    translation: 'Crafted Ocelot Spawn Egg',
  },
  {
    stat: 'c-panda_spawn_egg',
    translation: 'Crafted Panda Spawn Egg',
  },
  {
    stat: 'c-parrot_spawn_egg',
    translation: 'Crafted Parrot Spawn Egg',
  },
  {
    stat: 'c-phantom_spawn_egg',
    translation: 'Crafted Phantom Spawn Egg',
  },
  {
    stat: 'c-pig_spawn_egg',
    translation: 'Crafted Pig Spawn Egg',
  },
  {
    stat: 'c-piglin_spawn_egg',
    translation: 'Crafted Piglin Spawn Egg',
  },
  {
    stat: 'c-piglin_brute_spawn_egg',
    translation: 'Crafted Piglin Brute Spawn Egg',
  },
  {
    stat: 'c-pillager_spawn_egg',
    translation: 'Crafted Pillager Spawn Egg',
  },
  {
    stat: 'c-polar_bear_spawn_egg',
    translation: 'Crafted Polar Bear Spawn Egg',
  },
  {
    stat: 'c-pufferfish_spawn_egg',
    translation: 'Crafted Pufferfish Spawn Egg',
  },
  {
    stat: 'c-rabbit_spawn_egg',
    translation: 'Crafted Rabbit Spawn Egg',
  },
  {
    stat: 'c-ravager_spawn_egg',
    translation: 'Crafted Ravager Spawn Egg',
  },
  {
    stat: 'c-salmon_spawn_egg',
    translation: 'Crafted Salmon Spawn Egg',
  },
  {
    stat: 'c-sheep_spawn_egg',
    translation: 'Crafted Sheep Spawn Egg',
  },
  {
    stat: 'c-shulker_spawn_egg',
    translation: 'Crafted Shulker Spawn Egg',
  },
  {
    stat: 'c-silverfish_spawn_egg',
    translation: 'Crafted Silverfish Spawn Egg',
  },
  {
    stat: 'c-skeleton_spawn_egg',
    translation: 'Crafted Skeleton Spawn Egg',
  },
  {
    stat: 'c-skeleton_horse_spawn_egg',
    translation: 'Crafted Skeleton Horse Spawn Egg',
  },
  {
    stat: 'c-slime_spawn_egg',
    translation: 'Crafted Slime Spawn Egg',
  },
  {
    stat: 'c-spider_spawn_egg',
    translation: 'Crafted Spider Spawn Egg',
  },
  {
    stat: 'c-squid_spawn_egg',
    translation: 'Crafted Squid Spawn Egg',
  },
  {
    stat: 'c-stray_spawn_egg',
    translation: 'Crafted Stray Spawn Egg',
  },
  {
    stat: 'c-strider_spawn_egg',
    translation: 'Crafted Strider Spawn Egg',
  },
  {
    stat: 'c-tadpole_spawn_egg',
    translation: 'Crafted Tadpole Spawn Egg',
  },
  {
    stat: 'c-trader_llama_spawn_egg',
    translation: 'Crafted Trader Llama Spawn Egg',
  },
  {
    stat: 'c-tropical_fish_spawn_egg',
    translation: 'Crafted Tropical Fish Spawn Egg',
  },
  {
    stat: 'c-turtle_spawn_egg',
    translation: 'Crafted Turtle Spawn Egg',
  },
  {
    stat: 'c-vex_spawn_egg',
    translation: 'Crafted Vex Spawn Egg',
  },
  {
    stat: 'c-villager_spawn_egg',
    translation: 'Crafted Villager Spawn Egg',
  },
  {
    stat: 'c-vindicator_spawn_egg',
    translation: 'Crafted Vindicator Spawn Egg',
  },
  {
    stat: 'c-wandering_trader_spawn_egg',
    translation: 'Crafted Wandering Trader Spawn Egg',
  },
  {
    stat: 'c-warden_spawn_egg',
    translation: 'Crafted Warden Spawn Egg',
  },
  {
    stat: 'c-witch_spawn_egg',
    translation: 'Crafted Witch Spawn Egg',
  },
  {
    stat: 'c-wither_skeleton_spawn_egg',
    translation: 'Crafted Wither Skeleton Spawn Egg',
  },
  {
    stat: 'c-wolf_spawn_egg',
    translation: 'Crafted Wolf Spawn Egg',
  },
  {
    stat: 'c-zoglin_spawn_egg',
    translation: 'Crafted Zoglin Spawn Egg',
  },
  {
    stat: 'c-zombie_spawn_egg',
    translation: 'Crafted Zombie Spawn Egg',
  },
  {
    stat: 'c-zombie_horse_spawn_egg',
    translation: 'Crafted Zombie Horse Spawn Egg',
  },
  {
    stat: 'c-zombie_villager_spawn_egg',
    translation: 'Crafted Zombie Villager Spawn Egg',
  },
  {
    stat: 'c-zombified_piglin_spawn_egg',
    translation: 'Crafted Zombified Piglin Spawn Egg',
  },
  {
    stat: 'c-experience_bottle',
    translation: "Crafted Bottle o' Enchanting",
  },
  {
    stat: 'c-fire_charge',
    translation: 'Crafted Fire Charge',
  },
  {
    stat: 'c-writable_book',
    translation: 'Crafted Book and Quill',
  },
  {
    stat: 'c-written_book',
    translation: 'Crafted Written Book',
  },
  {
    stat: 'c-item_frame',
    translation: 'Crafted Item Frame',
  },
  {
    stat: 'c-glow_item_frame',
    translation: 'Crafted Glow Item Frame',
  },
  {
    stat: 'c-flower_pot',
    translation: 'Crafted Flower Pot',
  },
  {
    stat: 'c-carrot',
    translation: 'Crafted Carrot',
  },
  {
    stat: 'c-potato',
    translation: 'Crafted Potato',
  },
  {
    stat: 'c-baked_potato',
    translation: 'Crafted Baked Potato',
  },
  {
    stat: 'c-poisonous_potato',
    translation: 'Crafted Poisonous Potato',
  },
  {
    stat: 'c-map',
    translation: 'Crafted Empty Map',
  },
  {
    stat: 'c-golden_carrot',
    translation: 'Crafted Golden Carrot',
  },
  {
    stat: 'c-skeleton_skull',
    translation: 'Crafted Skeleton Skull',
  },
  {
    stat: 'c-wither_skeleton_skull',
    translation: 'Crafted Wither Skeleton Skull',
  },
  {
    stat: 'c-player_head',
    translation: 'Crafted Player Head',
  },
  {
    stat: 'c-zombie_head',
    translation: 'Crafted Zombie Head',
  },
  {
    stat: 'c-creeper_head',
    translation: 'Crafted Creeper Head',
  },
  {
    stat: 'c-dragon_head',
    translation: 'Crafted Dragon Head',
  },
  {
    stat: 'c-nether_star',
    translation: 'Crafted Nether Star',
  },
  {
    stat: 'c-pumpkin_pie',
    translation: 'Crafted Pumpkin Pie',
  },
  {
    stat: 'c-firework_rocket',
    translation: 'Crafted Firework Rocket',
  },
  {
    stat: 'c-firework_star',
    translation: 'Crafted Firework Star',
  },
  {
    stat: 'c-enchanted_book',
    translation: 'Crafted Enchanted Book',
  },
  {
    stat: 'c-nether_brick',
    translation: 'Crafted Nether Brick',
  },
  {
    stat: 'c-prismarine_shard',
    translation: 'Crafted Prismarine Shard',
  },
  {
    stat: 'c-prismarine_crystals',
    translation: 'Crafted Prismarine Crystals',
  },
  {
    stat: 'c-rabbit',
    translation: 'Crafted Raw Rabbit',
  },
  {
    stat: 'c-cooked_rabbit',
    translation: 'Crafted Cooked Rabbit',
  },
  {
    stat: 'c-rabbit_stew',
    translation: 'Crafted Rabbit Stew',
  },
  {
    stat: 'c-rabbit_foot',
    translation: "Crafted Rabbit's Foot",
  },
  {
    stat: 'c-rabbit_hide',
    translation: 'Crafted Rabbit Hide',
  },
  {
    stat: 'c-armor_stand',
    translation: 'Crafted Armor Stand',
  },
  {
    stat: 'c-iron_horse_armor',
    translation: 'Crafted Iron Horse Armor',
  },
  {
    stat: 'c-golden_horse_armor',
    translation: 'Crafted Golden Horse Armor',
  },
  {
    stat: 'c-diamond_horse_armor',
    translation: 'Crafted Diamond Horse Armor',
  },
  {
    stat: 'c-leather_horse_armor',
    translation: 'Crafted Leather Horse Armor',
  },
  {
    stat: 'c-lead',
    translation: 'Crafted Lead',
  },
  {
    stat: 'c-name_tag',
    translation: 'Crafted Name Tag',
  },
  {
    stat: 'c-command_block_minecart',
    translation: 'Crafted Minecart with Command Block',
  },
  {
    stat: 'c-mutton',
    translation: 'Crafted Raw Mutton',
  },
  {
    stat: 'c-cooked_mutton',
    translation: 'Crafted Cooked Mutton',
  },
  {
    stat: 'c-white_banner',
    translation: 'Crafted White Banner',
  },
  {
    stat: 'c-orange_banner',
    translation: 'Crafted Orange Banner',
  },
  {
    stat: 'c-magenta_banner',
    translation: 'Crafted Magenta Banner',
  },
  {
    stat: 'c-light_blue_banner',
    translation: 'Crafted Light Blue Banner',
  },
  {
    stat: 'c-yellow_banner',
    translation: 'Crafted Yellow Banner',
  },
  {
    stat: 'c-lime_banner',
    translation: 'Crafted Lime Banner',
  },
  {
    stat: 'c-pink_banner',
    translation: 'Crafted Pink Banner',
  },
  {
    stat: 'c-gray_banner',
    translation: 'Crafted Gray Banner',
  },
  {
    stat: 'c-light_gray_banner',
    translation: 'Crafted Light Gray Banner',
  },
  {
    stat: 'c-cyan_banner',
    translation: 'Crafted Cyan Banner',
  },
  {
    stat: 'c-purple_banner',
    translation: 'Crafted Purple Banner',
  },
  {
    stat: 'c-blue_banner',
    translation: 'Crafted Blue Banner',
  },
  {
    stat: 'c-brown_banner',
    translation: 'Crafted Brown Banner',
  },
  {
    stat: 'c-green_banner',
    translation: 'Crafted Green Banner',
  },
  {
    stat: 'c-red_banner',
    translation: 'Crafted Red Banner',
  },
  {
    stat: 'c-black_banner',
    translation: 'Crafted Black Banner',
  },
  {
    stat: 'c-end_crystal',
    translation: 'Crafted End Crystal',
  },
  {
    stat: 'c-chorus_fruit',
    translation: 'Crafted Chorus Fruit',
  },
  {
    stat: 'c-popped_chorus_fruit',
    translation: 'Crafted Popped Chorus Fruit',
  },
  {
    stat: 'c-beetroot',
    translation: 'Crafted Beetroot',
  },
  {
    stat: 'c-beetroot_seeds',
    translation: 'Crafted Beetroot Seeds',
  },
  {
    stat: 'c-beetroot_soup',
    translation: 'Crafted Beetroot Soup',
  },
  {
    stat: 'c-dragon_breath',
    translation: "Crafted Dragon's Breath",
  },
  {
    stat: 'c-splash_potion',
    translation: 'Crafted Splash Potion',
  },
  {
    stat: 'c-spectral_arrow',
    translation: 'Crafted Spectral Arrow',
  },
  {
    stat: 'c-tipped_arrow',
    translation: 'Crafted Tipped Arrow',
  },
  {
    stat: 'c-lingering_potion',
    translation: 'Crafted Lingering Potion',
  },
  {
    stat: 'c-shield',
    translation: 'Crafted Shield',
  },
  {
    stat: 'c-totem_of_undying',
    translation: 'Crafted Totem of Undying',
  },
  {
    stat: 'c-shulker_shell',
    translation: 'Crafted Shulker Shell',
  },
  {
    stat: 'c-iron_nugget',
    translation: 'Crafted Iron Nugget',
  },
  {
    stat: 'c-knowledge_book',
    translation: 'Crafted Knowledge Book',
  },
  {
    stat: 'c-debug_stick',
    translation: 'Crafted Debug Stick',
  },
  {
    stat: 'c-music_disc_13',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_cat',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_blocks',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_chirp',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_far',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_mall',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_mellohi',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_stal',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_strad',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_ward',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_11',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_wait',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_otherside',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_5',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-music_disc_pigstep',
    translation: 'Crafted Music Disc',
  },
  {
    stat: 'c-disc_fragment_5',
    translation: 'Crafted Disc Fragment',
  },
  {
    stat: 'c-trident',
    translation: 'Crafted Trident',
  },
  {
    stat: 'c-phantom_membrane',
    translation: 'Crafted Phantom Membrane',
  },
  {
    stat: 'c-nautilus_shell',
    translation: 'Crafted Nautilus Shell',
  },
  {
    stat: 'c-heart_of_the_sea',
    translation: 'Crafted Heart of the Sea',
  },
  {
    stat: 'c-crossbow',
    translation: 'Crafted Crossbow',
  },
  {
    stat: 'c-suspicious_stew',
    translation: 'Crafted Suspicious Stew',
  },
  {
    stat: 'c-loom',
    translation: 'Crafted Loom',
  },
  {
    stat: 'c-flower_banner_pattern',
    translation: 'Crafted Banner Pattern',
  },
  {
    stat: 'c-creeper_banner_pattern',
    translation: 'Crafted Banner Pattern',
  },
  {
    stat: 'c-skull_banner_pattern',
    translation: 'Crafted Banner Pattern',
  },
  {
    stat: 'c-mojang_banner_pattern',
    translation: 'Crafted Banner Pattern',
  },
  {
    stat: 'c-globe_banner_pattern',
    translation: 'Crafted Banner Pattern',
  },
  {
    stat: 'c-piglin_banner_pattern',
    translation: 'Crafted Banner Pattern',
  },
  {
    stat: 'c-goat_horn',
    translation: 'Crafted Goat Horn',
  },
  {
    stat: 'c-composter',
    translation: 'Crafted Composter',
  },
  {
    stat: 'c-barrel',
    translation: 'Crafted Barrel',
  },
  {
    stat: 'c-smoker',
    translation: 'Crafted Smoker',
  },
  {
    stat: 'c-blast_furnace',
    translation: 'Crafted Blast Furnace',
  },
  {
    stat: 'c-cartography_table',
    translation: 'Crafted Cartography Table',
  },
  {
    stat: 'c-fletching_table',
    translation: 'Crafted Fletching Table',
  },
  {
    stat: 'c-grindstone',
    translation: 'Crafted Grindstone',
  },
  {
    stat: 'c-smithing_table',
    translation: 'Crafted Smithing Table',
  },
  {
    stat: 'c-stonecutter',
    translation: 'Crafted Stonecutter',
  },
  {
    stat: 'c-bell',
    translation: 'Crafted Bell',
  },
  {
    stat: 'c-lantern',
    translation: 'Crafted Lantern',
  },
  {
    stat: 'c-soul_lantern',
    translation: 'Crafted Soul Lantern',
  },
  {
    stat: 'c-sweet_berries',
    translation: 'Crafted Sweet Berries',
  },
  {
    stat: 'c-glow_berries',
    translation: 'Crafted Glow Berries',
  },
  {
    stat: 'c-campfire',
    translation: 'Crafted Campfire',
  },
  {
    stat: 'c-soul_campfire',
    translation: 'Crafted Soul Campfire',
  },
  {
    stat: 'c-shroomlight',
    translation: 'Crafted Shroomlight',
  },
  {
    stat: 'c-honeycomb',
    translation: 'Crafted Honeycomb',
  },
  {
    stat: 'c-bee_nest',
    translation: 'Crafted Bee Nest',
  },
  {
    stat: 'c-beehive',
    translation: 'Crafted Beehive',
  },
  {
    stat: 'c-honey_bottle',
    translation: 'Crafted Honey Bottle',
  },
  {
    stat: 'c-honeycomb_block',
    translation: 'Crafted Honeycomb Block',
  },
  {
    stat: 'c-lodestone',
    translation: 'Crafted Lodestone',
  },
  {
    stat: 'c-crying_obsidian',
    translation: 'Crafted Crying Obsidian',
  },
  {
    stat: 'c-blackstone',
    translation: 'Crafted Blackstone',
  },
  {
    stat: 'c-blackstone_slab',
    translation: 'Crafted Blackstone Slab',
  },
  {
    stat: 'c-blackstone_stairs',
    translation: 'Crafted Blackstone Stairs',
  },
  {
    stat: 'c-gilded_blackstone',
    translation: 'Crafted Gilded Blackstone',
  },
  {
    stat: 'c-polished_blackstone',
    translation: 'Crafted Polished Blackstone',
  },
  {
    stat: 'c-polished_blackstone_slab',
    translation: 'Crafted Polished Blackstone Slab',
  },
  {
    stat: 'c-polished_blackstone_stairs',
    translation: 'Crafted Polished Blackstone Stairs',
  },
  {
    stat: 'c-chiseled_polished_blackstone',
    translation: 'Crafted Chiseled Polished Blackstone',
  },
  {
    stat: 'c-polished_blackstone_bricks',
    translation: 'Crafted Polished Blackstone Bricks',
  },
  {
    stat: 'c-polished_blackstone_brick_slab',
    translation: 'Crafted Polished Blackstone Brick Slab',
  },
  {
    stat: 'c-polished_blackstone_brick_stairs',
    translation: 'Crafted Polished Blackstone Brick Stairs',
  },
  {
    stat: 'c-cracked_polished_blackstone_bricks',
    translation: 'Crafted Cracked Polished Blackstone Bricks',
  },
  {
    stat: 'c-respawn_anchor',
    translation: 'Crafted Respawn Anchor',
  },
  {
    stat: 'c-candle',
    translation: 'Crafted Candle',
  },
  {
    stat: 'c-white_candle',
    translation: 'Crafted White Candle',
  },
  {
    stat: 'c-orange_candle',
    translation: 'Crafted Orange Candle',
  },
  {
    stat: 'c-magenta_candle',
    translation: 'Crafted Magenta Candle',
  },
  {
    stat: 'c-light_blue_candle',
    translation: 'Crafted Light Blue Candle',
  },
  {
    stat: 'c-yellow_candle',
    translation: 'Crafted Yellow Candle',
  },
  {
    stat: 'c-lime_candle',
    translation: 'Crafted Lime Candle',
  },
  {
    stat: 'c-pink_candle',
    translation: 'Crafted Pink Candle',
  },
  {
    stat: 'c-gray_candle',
    translation: 'Crafted Gray Candle',
  },
  {
    stat: 'c-light_gray_candle',
    translation: 'Crafted Light Gray Candle',
  },
  {
    stat: 'c-cyan_candle',
    translation: 'Crafted Cyan Candle',
  },
  {
    stat: 'c-purple_candle',
    translation: 'Crafted Purple Candle',
  },
  {
    stat: 'c-blue_candle',
    translation: 'Crafted Blue Candle',
  },
  {
    stat: 'c-brown_candle',
    translation: 'Crafted Brown Candle',
  },
  {
    stat: 'c-green_candle',
    translation: 'Crafted Green Candle',
  },
  {
    stat: 'c-red_candle',
    translation: 'Crafted Red Candle',
  },
  {
    stat: 'c-black_candle',
    translation: 'Crafted Black Candle',
  },
  {
    stat: 'c-small_amethyst_bud',
    translation: 'Crafted Small Amethyst Bud',
  },
  {
    stat: 'c-medium_amethyst_bud',
    translation: 'Crafted Medium Amethyst Bud',
  },
  {
    stat: 'c-large_amethyst_bud',
    translation: 'Crafted Large Amethyst Bud',
  },
  {
    stat: 'c-amethyst_cluster',
    translation: 'Crafted Amethyst Cluster',
  },
  {
    stat: 'c-pointed_dripstone',
    translation: 'Crafted Pointed Dripstone',
  },
  {
    stat: 'c-ochre_froglight',
    translation: 'Crafted Ochre Froglight',
  },
  {
    stat: 'c-verdant_froglight',
    translation: 'Crafted Verdant Froglight',
  },
  {
    stat: 'c-pearlescent_froglight',
    translation: 'Crafted Pearlescent Froglight',
  },
  {
    stat: 'c-frogspawn',
    translation: 'Crafted Frogspawn',
  },
  {
    stat: 'c-echo_shard',
    translation: 'Crafted Echo Shard',
  },
  {
    stat: 'u-air',
    translation: 'Used Air',
  },
  {
    stat: 'u-stone',
    translation: 'Used Stone',
  },
  {
    stat: 'u-granite',
    translation: 'Used Granite',
  },
  {
    stat: 'u-polished_granite',
    translation: 'Used Polished Granite',
  },
  {
    stat: 'u-diorite',
    translation: 'Used Diorite',
  },
  {
    stat: 'u-polished_diorite',
    translation: 'Used Polished Diorite',
  },
  {
    stat: 'u-andesite',
    translation: 'Used Andesite',
  },
  {
    stat: 'u-polished_andesite',
    translation: 'Used Polished Andesite',
  },
  {
    stat: 'u-deepslate',
    translation: 'Used Deepslate',
  },
  {
    stat: 'u-cobbled_deepslate',
    translation: 'Used Cobbled Deepslate',
  },
  {
    stat: 'u-polished_deepslate',
    translation: 'Used Polished Deepslate',
  },
  {
    stat: 'u-calcite',
    translation: 'Used Calcite',
  },
  {
    stat: 'u-tuff',
    translation: 'Used Tuff',
  },
  {
    stat: 'u-dripstone_block',
    translation: 'Used Dripstone Block',
  },
  {
    stat: 'u-grass_block',
    translation: 'Used Grass Block',
  },
  {
    stat: 'u-dirt',
    translation: 'Used Dirt',
  },
  {
    stat: 'u-coarse_dirt',
    translation: 'Used Coarse Dirt',
  },
  {
    stat: 'u-podzol',
    translation: 'Used Podzol',
  },
  {
    stat: 'u-rooted_dirt',
    translation: 'Used Rooted Dirt',
  },
  {
    stat: 'u-mud',
    translation: 'Used Mud',
  },
  {
    stat: 'u-crimson_nylium',
    translation: 'Used Crimson Nylium',
  },
  {
    stat: 'u-warped_nylium',
    translation: 'Used Warped Nylium',
  },
  {
    stat: 'u-cobblestone',
    translation: 'Used Cobblestone',
  },
  {
    stat: 'u-oak_planks',
    translation: 'Used Oak Planks',
  },
  {
    stat: 'u-spruce_planks',
    translation: 'Used Spruce Planks',
  },
  {
    stat: 'u-birch_planks',
    translation: 'Used Birch Planks',
  },
  {
    stat: 'u-jungle_planks',
    translation: 'Used Jungle Planks',
  },
  {
    stat: 'u-acacia_planks',
    translation: 'Used Acacia Planks',
  },
  {
    stat: 'u-dark_oak_planks',
    translation: 'Used Dark Oak Planks',
  },
  {
    stat: 'u-mangrove_planks',
    translation: 'Used Mangrove Planks',
  },
  {
    stat: 'u-crimson_planks',
    translation: 'Used Crimson Planks',
  },
  {
    stat: 'u-warped_planks',
    translation: 'Used Warped Planks',
  },
  {
    stat: 'u-oak_sapling',
    translation: 'Used Oak Sapling',
  },
  {
    stat: 'u-spruce_sapling',
    translation: 'Used Spruce Sapling',
  },
  {
    stat: 'u-birch_sapling',
    translation: 'Used Birch Sapling',
  },
  {
    stat: 'u-jungle_sapling',
    translation: 'Used Jungle Sapling',
  },
  {
    stat: 'u-acacia_sapling',
    translation: 'Used Acacia Sapling',
  },
  {
    stat: 'u-dark_oak_sapling',
    translation: 'Used Dark Oak Sapling',
  },
  {
    stat: 'u-mangrove_propagule',
    translation: 'Used Mangrove Propagule',
  },
  {
    stat: 'u-bedrock',
    translation: 'Used Bedrock',
  },
  {
    stat: 'u-sand',
    translation: 'Used Sand',
  },
  {
    stat: 'u-red_sand',
    translation: 'Used Red Sand',
  },
  {
    stat: 'u-gravel',
    translation: 'Used Gravel',
  },
  {
    stat: 'u-coal_ore',
    translation: 'Used Coal Ore',
  },
  {
    stat: 'u-deepslate_coal_ore',
    translation: 'Used Deepslate Coal Ore',
  },
  {
    stat: 'u-iron_ore',
    translation: 'Used Iron Ore',
  },
  {
    stat: 'u-deepslate_iron_ore',
    translation: 'Used Deepslate Iron Ore',
  },
  {
    stat: 'u-copper_ore',
    translation: 'Used Copper Ore',
  },
  {
    stat: 'u-deepslate_copper_ore',
    translation: 'Used Deepslate Copper Ore',
  },
  {
    stat: 'u-gold_ore',
    translation: 'Used Gold Ore',
  },
  {
    stat: 'u-deepslate_gold_ore',
    translation: 'Used Deepslate Gold Ore',
  },
  {
    stat: 'u-redstone_ore',
    translation: 'Used Redstone Ore',
  },
  {
    stat: 'u-deepslate_redstone_ore',
    translation: 'Used Deepslate Redstone Ore',
  },
  {
    stat: 'u-emerald_ore',
    translation: 'Used Emerald Ore',
  },
  {
    stat: 'u-deepslate_emerald_ore',
    translation: 'Used Deepslate Emerald Ore',
  },
  {
    stat: 'u-lapis_ore',
    translation: 'Used Lapis Lazuli Ore',
  },
  {
    stat: 'u-deepslate_lapis_ore',
    translation: 'Used Deepslate Lapis Lazuli Ore',
  },
  {
    stat: 'u-diamond_ore',
    translation: 'Used Diamond Ore',
  },
  {
    stat: 'u-deepslate_diamond_ore',
    translation: 'Used Deepslate Diamond Ore',
  },
  {
    stat: 'u-nether_gold_ore',
    translation: 'Used Nether Gold Ore',
  },
  {
    stat: 'u-nether_quartz_ore',
    translation: 'Used Nether Quartz Ore',
  },
  {
    stat: 'u-ancient_debris',
    translation: 'Used Ancient Debris',
  },
  {
    stat: 'u-coal_block',
    translation: 'Used Block of Coal',
  },
  {
    stat: 'u-raw_iron_block',
    translation: 'Used Block of Raw Iron',
  },
  {
    stat: 'u-raw_copper_block',
    translation: 'Used Block of Raw Copper',
  },
  {
    stat: 'u-raw_gold_block',
    translation: 'Used Block of Raw Gold',
  },
  {
    stat: 'u-amethyst_block',
    translation: 'Used Block of Amethyst',
  },
  {
    stat: 'u-budding_amethyst',
    translation: 'Used Budding Amethyst',
  },
  {
    stat: 'u-iron_block',
    translation: 'Used Block of Iron',
  },
  {
    stat: 'u-copper_block',
    translation: 'Used Block of Copper',
  },
  {
    stat: 'u-gold_block',
    translation: 'Used Block of Gold',
  },
  {
    stat: 'u-diamond_block',
    translation: 'Used Block of Diamond',
  },
  {
    stat: 'u-netherite_block',
    translation: 'Used Block of Netherite',
  },
  {
    stat: 'u-exposed_copper',
    translation: 'Used Exposed Copper',
  },
  {
    stat: 'u-weathered_copper',
    translation: 'Used Weathered Copper',
  },
  {
    stat: 'u-oxidized_copper',
    translation: 'Used Oxidized Copper',
  },
  {
    stat: 'u-cut_copper',
    translation: 'Used Cut Copper',
  },
  {
    stat: 'u-exposed_cut_copper',
    translation: 'Used Exposed Cut Copper',
  },
  {
    stat: 'u-weathered_cut_copper',
    translation: 'Used Weathered Cut Copper',
  },
  {
    stat: 'u-oxidized_cut_copper',
    translation: 'Used Oxidized Cut Copper',
  },
  {
    stat: 'u-cut_copper_stairs',
    translation: 'Used Cut Copper Stairs',
  },
  {
    stat: 'u-exposed_cut_copper_stairs',
    translation: 'Used Exposed Cut Copper Stairs',
  },
  {
    stat: 'u-weathered_cut_copper_stairs',
    translation: 'Used Weathered Cut Copper Stairs',
  },
  {
    stat: 'u-oxidized_cut_copper_stairs',
    translation: 'Used Oxidized Cut Copper Stairs',
  },
  {
    stat: 'u-cut_copper_slab',
    translation: 'Used Cut Copper Slab',
  },
  {
    stat: 'u-exposed_cut_copper_slab',
    translation: 'Used Exposed Cut Copper Slab',
  },
  {
    stat: 'u-weathered_cut_copper_slab',
    translation: 'Used Weathered Cut Copper Slab',
  },
  {
    stat: 'u-oxidized_cut_copper_slab',
    translation: 'Used Oxidized Cut Copper Slab',
  },
  {
    stat: 'u-waxed_copper_block',
    translation: 'Used Waxed Block of Copper',
  },
  {
    stat: 'u-waxed_exposed_copper',
    translation: 'Used Waxed Exposed Copper',
  },
  {
    stat: 'u-waxed_weathered_copper',
    translation: 'Used Waxed Weathered Copper',
  },
  {
    stat: 'u-waxed_oxidized_copper',
    translation: 'Used Waxed Oxidized Copper',
  },
  {
    stat: 'u-waxed_cut_copper',
    translation: 'Used Waxed Cut Copper',
  },
  {
    stat: 'u-waxed_exposed_cut_copper',
    translation: 'Used Waxed Exposed Cut Copper',
  },
  {
    stat: 'u-waxed_weathered_cut_copper',
    translation: 'Used Waxed Weathered Cut Copper',
  },
  {
    stat: 'u-waxed_oxidized_cut_copper',
    translation: 'Used Waxed Oxidized Cut Copper',
  },
  {
    stat: 'u-waxed_cut_copper_stairs',
    translation: 'Used Waxed Cut Copper Stairs',
  },
  {
    stat: 'u-waxed_exposed_cut_copper_stairs',
    translation: 'Used Waxed Exposed Cut Copper Stairs',
  },
  {
    stat: 'u-waxed_weathered_cut_copper_stairs',
    translation: 'Used Waxed Weathered Cut Copper Stairs',
  },
  {
    stat: 'u-waxed_oxidized_cut_copper_stairs',
    translation: 'Used Waxed Oxidized Cut Copper Stairs',
  },
  {
    stat: 'u-waxed_cut_copper_slab',
    translation: 'Used Waxed Cut Copper Slab',
  },
  {
    stat: 'u-waxed_exposed_cut_copper_slab',
    translation: 'Used Waxed Exposed Cut Copper Slab',
  },
  {
    stat: 'u-waxed_weathered_cut_copper_slab',
    translation: 'Used Waxed Weathered Cut Copper Slab',
  },
  {
    stat: 'u-waxed_oxidized_cut_copper_slab',
    translation: 'Used Waxed Oxidized Cut Copper Slab',
  },
  {
    stat: 'u-oak_log',
    translation: 'Used Oak Log',
  },
  {
    stat: 'u-spruce_log',
    translation: 'Used Spruce Log',
  },
  {
    stat: 'u-birch_log',
    translation: 'Used Birch Log',
  },
  {
    stat: 'u-jungle_log',
    translation: 'Used Jungle Log',
  },
  {
    stat: 'u-acacia_log',
    translation: 'Used Acacia Log',
  },
  {
    stat: 'u-dark_oak_log',
    translation: 'Used Dark Oak Log',
  },
  {
    stat: 'u-mangrove_log',
    translation: 'Used Mangrove Log',
  },
  {
    stat: 'u-mangrove_roots',
    translation: 'Used Mangrove Roots',
  },
  {
    stat: 'u-muddy_mangrove_roots',
    translation: 'Used Muddy Mangrove Roots',
  },
  {
    stat: 'u-crimson_stem',
    translation: 'Used Crimson Stem',
  },
  {
    stat: 'u-warped_stem',
    translation: 'Used Warped Stem',
  },
  {
    stat: 'u-stripped_oak_log',
    translation: 'Used Stripped Oak Log',
  },
  {
    stat: 'u-stripped_spruce_log',
    translation: 'Used Stripped Spruce Log',
  },
  {
    stat: 'u-stripped_birch_log',
    translation: 'Used Stripped Birch Log',
  },
  {
    stat: 'u-stripped_jungle_log',
    translation: 'Used Stripped Jungle Log',
  },
  {
    stat: 'u-stripped_acacia_log',
    translation: 'Used Stripped Acacia Log',
  },
  {
    stat: 'u-stripped_dark_oak_log',
    translation: 'Used Stripped Dark Oak Log',
  },
  {
    stat: 'u-stripped_mangrove_log',
    translation: 'Used Stripped Mangrove Log',
  },
  {
    stat: 'u-stripped_crimson_stem',
    translation: 'Used Stripped Crimson Stem',
  },
  {
    stat: 'u-stripped_warped_stem',
    translation: 'Used Stripped Warped Stem',
  },
  {
    stat: 'u-stripped_oak_wood',
    translation: 'Used Stripped Oak Wood',
  },
  {
    stat: 'u-stripped_spruce_wood',
    translation: 'Used Stripped Spruce Wood',
  },
  {
    stat: 'u-stripped_birch_wood',
    translation: 'Used Stripped Birch Wood',
  },
  {
    stat: 'u-stripped_jungle_wood',
    translation: 'Used Stripped Jungle Wood',
  },
  {
    stat: 'u-stripped_acacia_wood',
    translation: 'Used Stripped Acacia Wood',
  },
  {
    stat: 'u-stripped_dark_oak_wood',
    translation: 'Used Stripped Dark Oak Wood',
  },
  {
    stat: 'u-stripped_mangrove_wood',
    translation: 'Used Stripped Mangrove Wood',
  },
  {
    stat: 'u-stripped_crimson_hyphae',
    translation: 'Used Stripped Crimson Hyphae',
  },
  {
    stat: 'u-stripped_warped_hyphae',
    translation: 'Used Stripped Warped Hyphae',
  },
  {
    stat: 'u-oak_wood',
    translation: 'Used Oak Wood',
  },
  {
    stat: 'u-spruce_wood',
    translation: 'Used Spruce Wood',
  },
  {
    stat: 'u-birch_wood',
    translation: 'Used Birch Wood',
  },
  {
    stat: 'u-jungle_wood',
    translation: 'Used Jungle Wood',
  },
  {
    stat: 'u-acacia_wood',
    translation: 'Used Acacia Wood',
  },
  {
    stat: 'u-dark_oak_wood',
    translation: 'Used Dark Oak Wood',
  },
  {
    stat: 'u-mangrove_wood',
    translation: 'Used Mangrove Wood',
  },
  {
    stat: 'u-crimson_hyphae',
    translation: 'Used Crimson Hyphae',
  },
  {
    stat: 'u-warped_hyphae',
    translation: 'Used Warped Hyphae',
  },
  {
    stat: 'u-oak_leaves',
    translation: 'Used Oak Leaves',
  },
  {
    stat: 'u-spruce_leaves',
    translation: 'Used Spruce Leaves',
  },
  {
    stat: 'u-birch_leaves',
    translation: 'Used Birch Leaves',
  },
  {
    stat: 'u-jungle_leaves',
    translation: 'Used Jungle Leaves',
  },
  {
    stat: 'u-acacia_leaves',
    translation: 'Used Acacia Leaves',
  },
  {
    stat: 'u-dark_oak_leaves',
    translation: 'Used Dark Oak Leaves',
  },
  {
    stat: 'u-mangrove_leaves',
    translation: 'Used Mangrove Leaves',
  },
  {
    stat: 'u-azalea_leaves',
    translation: 'Used Azalea Leaves',
  },
  {
    stat: 'u-flowering_azalea_leaves',
    translation: 'Used Flowering Azalea Leaves',
  },
  {
    stat: 'u-sponge',
    translation: 'Used Sponge',
  },
  {
    stat: 'u-wet_sponge',
    translation: 'Used Wet Sponge',
  },
  {
    stat: 'u-glass',
    translation: 'Used Glass',
  },
  {
    stat: 'u-tinted_glass',
    translation: 'Used Tinted Glass',
  },
  {
    stat: 'u-lapis_block',
    translation: 'Used Block of Lapis Lazuli',
  },
  {
    stat: 'u-sandstone',
    translation: 'Used Sandstone',
  },
  {
    stat: 'u-chiseled_sandstone',
    translation: 'Used Chiseled Sandstone',
  },
  {
    stat: 'u-cut_sandstone',
    translation: 'Used Cut Sandstone',
  },
  {
    stat: 'u-cobweb',
    translation: 'Used Cobweb',
  },
  {
    stat: 'u-grass',
    translation: 'Used Grass',
  },
  {
    stat: 'u-fern',
    translation: 'Used Fern',
  },
  {
    stat: 'u-azalea',
    translation: 'Used Azalea',
  },
  {
    stat: 'u-flowering_azalea',
    translation: 'Used Flowering Azalea',
  },
  {
    stat: 'u-dead_bush',
    translation: 'Used Dead Bush',
  },
  {
    stat: 'u-seagrass',
    translation: 'Used Seagrass',
  },
  {
    stat: 'u-sea_pickle',
    translation: 'Used Sea Pickle',
  },
  {
    stat: 'u-white_wool',
    translation: 'Used White Wool',
  },
  {
    stat: 'u-orange_wool',
    translation: 'Used Orange Wool',
  },
  {
    stat: 'u-magenta_wool',
    translation: 'Used Magenta Wool',
  },
  {
    stat: 'u-light_blue_wool',
    translation: 'Used Light Blue Wool',
  },
  {
    stat: 'u-yellow_wool',
    translation: 'Used Yellow Wool',
  },
  {
    stat: 'u-lime_wool',
    translation: 'Used Lime Wool',
  },
  {
    stat: 'u-pink_wool',
    translation: 'Used Pink Wool',
  },
  {
    stat: 'u-gray_wool',
    translation: 'Used Gray Wool',
  },
  {
    stat: 'u-light_gray_wool',
    translation: 'Used Light Gray Wool',
  },
  {
    stat: 'u-cyan_wool',
    translation: 'Used Cyan Wool',
  },
  {
    stat: 'u-purple_wool',
    translation: 'Used Purple Wool',
  },
  {
    stat: 'u-blue_wool',
    translation: 'Used Blue Wool',
  },
  {
    stat: 'u-brown_wool',
    translation: 'Used Brown Wool',
  },
  {
    stat: 'u-green_wool',
    translation: 'Used Green Wool',
  },
  {
    stat: 'u-red_wool',
    translation: 'Used Red Wool',
  },
  {
    stat: 'u-black_wool',
    translation: 'Used Black Wool',
  },
  {
    stat: 'u-dandelion',
    translation: 'Used Dandelion',
  },
  {
    stat: 'u-poppy',
    translation: 'Used Poppy',
  },
  {
    stat: 'u-blue_orchid',
    translation: 'Used Blue Orchid',
  },
  {
    stat: 'u-allium',
    translation: 'Used Allium',
  },
  {
    stat: 'u-azure_bluet',
    translation: 'Used Azure Bluet',
  },
  {
    stat: 'u-red_tulip',
    translation: 'Used Red Tulip',
  },
  {
    stat: 'u-orange_tulip',
    translation: 'Used Orange Tulip',
  },
  {
    stat: 'u-white_tulip',
    translation: 'Used White Tulip',
  },
  {
    stat: 'u-pink_tulip',
    translation: 'Used Pink Tulip',
  },
  {
    stat: 'u-oxeye_daisy',
    translation: 'Used Oxeye Daisy',
  },
  {
    stat: 'u-cornflower',
    translation: 'Used Cornflower',
  },
  {
    stat: 'u-lily_of_the_valley',
    translation: 'Used Lily of the Valley',
  },
  {
    stat: 'u-wither_rose',
    translation: 'Used Wither Rose',
  },
  {
    stat: 'u-spore_blossom',
    translation: 'Used Spore Blossom',
  },
  {
    stat: 'u-brown_mushroom',
    translation: 'Used Brown Mushroom',
  },
  {
    stat: 'u-red_mushroom',
    translation: 'Used Red Mushroom',
  },
  {
    stat: 'u-crimson_fungus',
    translation: 'Used Crimson Fungus',
  },
  {
    stat: 'u-warped_fungus',
    translation: 'Used Warped Fungus',
  },
  {
    stat: 'u-crimson_roots',
    translation: 'Used Crimson Roots',
  },
  {
    stat: 'u-warped_roots',
    translation: 'Used Warped Roots',
  },
  {
    stat: 'u-nether_sprouts',
    translation: 'Used Nether Sprouts',
  },
  {
    stat: 'u-weeping_vines',
    translation: 'Used Weeping Vines',
  },
  {
    stat: 'u-twisting_vines',
    translation: 'Used Twisting Vines',
  },
  {
    stat: 'u-sugar_cane',
    translation: 'Used Sugar Cane',
  },
  {
    stat: 'u-kelp',
    translation: 'Used Kelp',
  },
  {
    stat: 'u-moss_carpet',
    translation: 'Used Moss Carpet',
  },
  {
    stat: 'u-moss_block',
    translation: 'Used Moss Block',
  },
  {
    stat: 'u-hanging_roots',
    translation: 'Used Hanging Roots',
  },
  {
    stat: 'u-big_dripleaf',
    translation: 'Used Big Dripleaf',
  },
  {
    stat: 'u-small_dripleaf',
    translation: 'Used Small Dripleaf',
  },
  {
    stat: 'u-bamboo',
    translation: 'Used Bamboo',
  },
  {
    stat: 'u-oak_slab',
    translation: 'Used Oak Slab',
  },
  {
    stat: 'u-spruce_slab',
    translation: 'Used Spruce Slab',
  },
  {
    stat: 'u-birch_slab',
    translation: 'Used Birch Slab',
  },
  {
    stat: 'u-jungle_slab',
    translation: 'Used Jungle Slab',
  },
  {
    stat: 'u-acacia_slab',
    translation: 'Used Acacia Slab',
  },
  {
    stat: 'u-dark_oak_slab',
    translation: 'Used Dark Oak Slab',
  },
  {
    stat: 'u-mangrove_slab',
    translation: 'Used Mangrove Slab',
  },
  {
    stat: 'u-crimson_slab',
    translation: 'Used Crimson Slab',
  },
  {
    stat: 'u-warped_slab',
    translation: 'Used Warped Slab',
  },
  {
    stat: 'u-stone_slab',
    translation: 'Used Stone Slab',
  },
  {
    stat: 'u-smooth_stone_slab',
    translation: 'Used Smooth Stone Slab',
  },
  {
    stat: 'u-sandstone_slab',
    translation: 'Used Sandstone Slab',
  },
  {
    stat: 'u-cut_sandstone_slab',
    translation: 'Used Cut Sandstone Slab',
  },
  {
    stat: 'u-petrified_oak_slab',
    translation: 'Used Petrified Oak Slab',
  },
  {
    stat: 'u-cobblestone_slab',
    translation: 'Used Cobblestone Slab',
  },
  {
    stat: 'u-brick_slab',
    translation: 'Used Brick Slab',
  },
  {
    stat: 'u-stone_brick_slab',
    translation: 'Used Stone Brick Slab',
  },
  {
    stat: 'u-mud_brick_slab',
    translation: 'Used Mud Brick Slab',
  },
  {
    stat: 'u-nether_brick_slab',
    translation: 'Used Nether Brick Slab',
  },
  {
    stat: 'u-quartz_slab',
    translation: 'Used Quartz Slab',
  },
  {
    stat: 'u-red_sandstone_slab',
    translation: 'Used Red Sandstone Slab',
  },
  {
    stat: 'u-cut_red_sandstone_slab',
    translation: 'Used Cut Red Sandstone Slab',
  },
  {
    stat: 'u-purpur_slab',
    translation: 'Used Purpur Slab',
  },
  {
    stat: 'u-prismarine_slab',
    translation: 'Used Prismarine Slab',
  },
  {
    stat: 'u-prismarine_brick_slab',
    translation: 'Used Prismarine Brick Slab',
  },
  {
    stat: 'u-dark_prismarine_slab',
    translation: 'Used Dark Prismarine Slab',
  },
  {
    stat: 'u-smooth_quartz',
    translation: 'Used Smooth Quartz Block',
  },
  {
    stat: 'u-smooth_red_sandstone',
    translation: 'Used Smooth Red Sandstone',
  },
  {
    stat: 'u-smooth_sandstone',
    translation: 'Used Smooth Sandstone',
  },
  {
    stat: 'u-smooth_stone',
    translation: 'Used Smooth Stone',
  },
  {
    stat: 'u-bricks',
    translation: 'Used Bricks',
  },
  {
    stat: 'u-bookshelf',
    translation: 'Used Bookshelf',
  },
  {
    stat: 'u-mossy_cobblestone',
    translation: 'Used Mossy Cobblestone',
  },
  {
    stat: 'u-obsidian',
    translation: 'Used Obsidian',
  },
  {
    stat: 'u-torch',
    translation: 'Used Torch',
  },
  {
    stat: 'u-end_rod',
    translation: 'Used End Rod',
  },
  {
    stat: 'u-chorus_plant',
    translation: 'Used Chorus Plant',
  },
  {
    stat: 'u-chorus_flower',
    translation: 'Used Chorus Flower',
  },
  {
    stat: 'u-purpur_block',
    translation: 'Used Purpur Block',
  },
  {
    stat: 'u-purpur_pillar',
    translation: 'Used Purpur Pillar',
  },
  {
    stat: 'u-purpur_stairs',
    translation: 'Used Purpur Stairs',
  },
  {
    stat: 'u-spawner',
    translation: 'Used Spawner',
  },
  {
    stat: 'u-chest',
    translation: 'Used Chest',
  },
  {
    stat: 'u-crafting_table',
    translation: 'Used Crafting Table',
  },
  {
    stat: 'u-farmland',
    translation: 'Used Farmland',
  },
  {
    stat: 'u-furnace',
    translation: 'Used Furnace',
  },
  {
    stat: 'u-ladder',
    translation: 'Used Ladder',
  },
  {
    stat: 'u-cobblestone_stairs',
    translation: 'Used Cobblestone Stairs',
  },
  {
    stat: 'u-snow',
    translation: 'Used Snow',
  },
  {
    stat: 'u-ice',
    translation: 'Used Ice',
  },
  {
    stat: 'u-snow_block',
    translation: 'Used Snow Block',
  },
  {
    stat: 'u-cactus',
    translation: 'Used Cactus',
  },
  {
    stat: 'u-clay',
    translation: 'Used Clay',
  },
  {
    stat: 'u-jukebox',
    translation: 'Used Jukebox',
  },
  {
    stat: 'u-oak_fence',
    translation: 'Used Oak Fence',
  },
  {
    stat: 'u-spruce_fence',
    translation: 'Used Spruce Fence',
  },
  {
    stat: 'u-birch_fence',
    translation: 'Used Birch Fence',
  },
  {
    stat: 'u-jungle_fence',
    translation: 'Used Jungle Fence',
  },
  {
    stat: 'u-acacia_fence',
    translation: 'Used Acacia Fence',
  },
  {
    stat: 'u-dark_oak_fence',
    translation: 'Used Dark Oak Fence',
  },
  {
    stat: 'u-mangrove_fence',
    translation: 'Used Mangrove Fence',
  },
  {
    stat: 'u-crimson_fence',
    translation: 'Used Crimson Fence',
  },
  {
    stat: 'u-warped_fence',
    translation: 'Used Warped Fence',
  },
  {
    stat: 'u-pumpkin',
    translation: 'Used Pumpkin',
  },
  {
    stat: 'u-carved_pumpkin',
    translation: 'Used Carved Pumpkin',
  },
  {
    stat: 'u-jack_o_lantern',
    translation: "Used Jack o'Lantern",
  },
  {
    stat: 'u-netherrack',
    translation: 'Used Netherrack',
  },
  {
    stat: 'u-soul_sand',
    translation: 'Used Soul Sand',
  },
  {
    stat: 'u-soul_soil',
    translation: 'Used Soul Soil',
  },
  {
    stat: 'u-basalt',
    translation: 'Used Basalt',
  },
  {
    stat: 'u-polished_basalt',
    translation: 'Used Polished Basalt',
  },
  {
    stat: 'u-smooth_basalt',
    translation: 'Used Smooth Basalt',
  },
  {
    stat: 'u-soul_torch',
    translation: 'Used Soul Torch',
  },
  {
    stat: 'u-glowstone',
    translation: 'Used Glowstone',
  },
  {
    stat: 'u-infested_stone',
    translation: 'Used Infested Stone',
  },
  {
    stat: 'u-infested_cobblestone',
    translation: 'Used Infested Cobblestone',
  },
  {
    stat: 'u-infested_stone_bricks',
    translation: 'Used Infested Stone Bricks',
  },
  {
    stat: 'u-infested_mossy_stone_bricks',
    translation: 'Used Infested Mossy Stone Bricks',
  },
  {
    stat: 'u-infested_cracked_stone_bricks',
    translation: 'Used Infested Cracked Stone Bricks',
  },
  {
    stat: 'u-infested_chiseled_stone_bricks',
    translation: 'Used Infested Chiseled Stone Bricks',
  },
  {
    stat: 'u-infested_deepslate',
    translation: 'Used Infested Deepslate',
  },
  {
    stat: 'u-stone_bricks',
    translation: 'Used Stone Bricks',
  },
  {
    stat: 'u-mossy_stone_bricks',
    translation: 'Used Mossy Stone Bricks',
  },
  {
    stat: 'u-cracked_stone_bricks',
    translation: 'Used Cracked Stone Bricks',
  },
  {
    stat: 'u-chiseled_stone_bricks',
    translation: 'Used Chiseled Stone Bricks',
  },
  {
    stat: 'u-packed_mud',
    translation: 'Used Packed Mud',
  },
  {
    stat: 'u-mud_bricks',
    translation: 'Used Mud Bricks',
  },
  {
    stat: 'u-deepslate_bricks',
    translation: 'Used Deepslate Bricks',
  },
  {
    stat: 'u-cracked_deepslate_bricks',
    translation: 'Used Cracked Deepslate Bricks',
  },
  {
    stat: 'u-deepslate_tiles',
    translation: 'Used Deepslate Tiles',
  },
  {
    stat: 'u-cracked_deepslate_tiles',
    translation: 'Used Cracked Deepslate Tiles',
  },
  {
    stat: 'u-chiseled_deepslate',
    translation: 'Used Chiseled Deepslate',
  },
  {
    stat: 'u-reinforced_deepslate',
    translation: 'Used Reinforced Deepslate',
  },
  {
    stat: 'u-brown_mushroom_block',
    translation: 'Used Brown Mushroom Block',
  },
  {
    stat: 'u-red_mushroom_block',
    translation: 'Used Red Mushroom Block',
  },
  {
    stat: 'u-mushroom_stem',
    translation: 'Used Mushroom Stem',
  },
  {
    stat: 'u-iron_bars',
    translation: 'Used Iron Bars',
  },
  {
    stat: 'u-chain',
    translation: 'Used Chain',
  },
  {
    stat: 'u-glass_pane',
    translation: 'Used Glass Pane',
  },
  {
    stat: 'u-melon',
    translation: 'Used Melon',
  },
  {
    stat: 'u-vine',
    translation: 'Used Vines',
  },
  {
    stat: 'u-glow_lichen',
    translation: 'Used Glow Lichen',
  },
  {
    stat: 'u-brick_stairs',
    translation: 'Used Brick Stairs',
  },
  {
    stat: 'u-stone_brick_stairs',
    translation: 'Used Stone Brick Stairs',
  },
  {
    stat: 'u-mud_brick_stairs',
    translation: 'Used Mud Brick Stairs',
  },
  {
    stat: 'u-mycelium',
    translation: 'Used Mycelium',
  },
  {
    stat: 'u-lily_pad',
    translation: 'Used Lily Pad',
  },
  {
    stat: 'u-nether_bricks',
    translation: 'Used Nether Bricks',
  },
  {
    stat: 'u-cracked_nether_bricks',
    translation: 'Used Cracked Nether Bricks',
  },
  {
    stat: 'u-chiseled_nether_bricks',
    translation: 'Used Chiseled Nether Bricks',
  },
  {
    stat: 'u-nether_brick_fence',
    translation: 'Used Nether Brick Fence',
  },
  {
    stat: 'u-nether_brick_stairs',
    translation: 'Used Nether Brick Stairs',
  },
  {
    stat: 'u-sculk',
    translation: 'Used Sculk',
  },
  {
    stat: 'u-sculk_vein',
    translation: 'Used Sculk Vein',
  },
  {
    stat: 'u-sculk_catalyst',
    translation: 'Used Sculk Catalyst',
  },
  {
    stat: 'u-sculk_shrieker',
    translation: 'Used Sculk Shrieker',
  },
  {
    stat: 'u-enchanting_table',
    translation: 'Used Enchanting Table',
  },
  {
    stat: 'u-end_portal_frame',
    translation: 'Used End Portal Frame',
  },
  {
    stat: 'u-end_stone',
    translation: 'Used End Stone',
  },
  {
    stat: 'u-end_stone_bricks',
    translation: 'Used End Stone Bricks',
  },
  {
    stat: 'u-dragon_egg',
    translation: 'Used Dragon Egg',
  },
  {
    stat: 'u-sandstone_stairs',
    translation: 'Used Sandstone Stairs',
  },
  {
    stat: 'u-ender_chest',
    translation: 'Used Ender Chest',
  },
  {
    stat: 'u-emerald_block',
    translation: 'Used Block of Emerald',
  },
  {
    stat: 'u-oak_stairs',
    translation: 'Used Oak Stairs',
  },
  {
    stat: 'u-spruce_stairs',
    translation: 'Used Spruce Stairs',
  },
  {
    stat: 'u-birch_stairs',
    translation: 'Used Birch Stairs',
  },
  {
    stat: 'u-jungle_stairs',
    translation: 'Used Jungle Stairs',
  },
  {
    stat: 'u-acacia_stairs',
    translation: 'Used Acacia Stairs',
  },
  {
    stat: 'u-dark_oak_stairs',
    translation: 'Used Dark Oak Stairs',
  },
  {
    stat: 'u-mangrove_stairs',
    translation: 'Used Mangrove Stairs',
  },
  {
    stat: 'u-crimson_stairs',
    translation: 'Used Crimson Stairs',
  },
  {
    stat: 'u-warped_stairs',
    translation: 'Used Warped Stairs',
  },
  {
    stat: 'u-command_block',
    translation: 'Used Command Block',
  },
  {
    stat: 'u-beacon',
    translation: 'Used Beacon',
  },
  {
    stat: 'u-cobblestone_wall',
    translation: 'Used Cobblestone Wall',
  },
  {
    stat: 'u-mossy_cobblestone_wall',
    translation: 'Used Mossy Cobblestone Wall',
  },
  {
    stat: 'u-brick_wall',
    translation: 'Used Brick Wall',
  },
  {
    stat: 'u-prismarine_wall',
    translation: 'Used Prismarine Wall',
  },
  {
    stat: 'u-red_sandstone_wall',
    translation: 'Used Red Sandstone Wall',
  },
  {
    stat: 'u-mossy_stone_brick_wall',
    translation: 'Used Mossy Stone Brick Wall',
  },
  {
    stat: 'u-granite_wall',
    translation: 'Used Granite Wall',
  },
  {
    stat: 'u-stone_brick_wall',
    translation: 'Used Stone Brick Wall',
  },
  {
    stat: 'u-mud_brick_wall',
    translation: 'Used Mud Brick Wall',
  },
  {
    stat: 'u-nether_brick_wall',
    translation: 'Used Nether Brick Wall',
  },
  {
    stat: 'u-andesite_wall',
    translation: 'Used Andesite Wall',
  },
  {
    stat: 'u-red_nether_brick_wall',
    translation: 'Used Red Nether Brick Wall',
  },
  {
    stat: 'u-sandstone_wall',
    translation: 'Used Sandstone Wall',
  },
  {
    stat: 'u-end_stone_brick_wall',
    translation: 'Used End Stone Brick Wall',
  },
  {
    stat: 'u-diorite_wall',
    translation: 'Used Diorite Wall',
  },
  {
    stat: 'u-blackstone_wall',
    translation: 'Used Blackstone Wall',
  },
  {
    stat: 'u-polished_blackstone_wall',
    translation: 'Used Polished Blackstone Wall',
  },
  {
    stat: 'u-polished_blackstone_brick_wall',
    translation: 'Used Polished Blackstone Brick Wall',
  },
  {
    stat: 'u-cobbled_deepslate_wall',
    translation: 'Used Cobbled Deepslate Wall',
  },
  {
    stat: 'u-polished_deepslate_wall',
    translation: 'Used Polished Deepslate Wall',
  },
  {
    stat: 'u-deepslate_brick_wall',
    translation: 'Used Deepslate Brick Wall',
  },
  {
    stat: 'u-deepslate_tile_wall',
    translation: 'Used Deepslate Tile Wall',
  },
  {
    stat: 'u-anvil',
    translation: 'Used Anvil',
  },
  {
    stat: 'u-chipped_anvil',
    translation: 'Used Chipped Anvil',
  },
  {
    stat: 'u-damaged_anvil',
    translation: 'Used Damaged Anvil',
  },
  {
    stat: 'u-chiseled_quartz_block',
    translation: 'Used Chiseled Quartz Block',
  },
  {
    stat: 'u-quartz_block',
    translation: 'Used Block of Quartz',
  },
  {
    stat: 'u-quartz_bricks',
    translation: 'Used Quartz Bricks',
  },
  {
    stat: 'u-quartz_pillar',
    translation: 'Used Quartz Pillar',
  },
  {
    stat: 'u-quartz_stairs',
    translation: 'Used Quartz Stairs',
  },
  {
    stat: 'u-white_terracotta',
    translation: 'Used White Terracotta',
  },
  {
    stat: 'u-orange_terracotta',
    translation: 'Used Orange Terracotta',
  },
  {
    stat: 'u-magenta_terracotta',
    translation: 'Used Magenta Terracotta',
  },
  {
    stat: 'u-light_blue_terracotta',
    translation: 'Used Light Blue Terracotta',
  },
  {
    stat: 'u-yellow_terracotta',
    translation: 'Used Yellow Terracotta',
  },
  {
    stat: 'u-lime_terracotta',
    translation: 'Used Lime Terracotta',
  },
  {
    stat: 'u-pink_terracotta',
    translation: 'Used Pink Terracotta',
  },
  {
    stat: 'u-gray_terracotta',
    translation: 'Used Gray Terracotta',
  },
  {
    stat: 'u-light_gray_terracotta',
    translation: 'Used Light Gray Terracotta',
  },
  {
    stat: 'u-cyan_terracotta',
    translation: 'Used Cyan Terracotta',
  },
  {
    stat: 'u-purple_terracotta',
    translation: 'Used Purple Terracotta',
  },
  {
    stat: 'u-blue_terracotta',
    translation: 'Used Blue Terracotta',
  },
  {
    stat: 'u-brown_terracotta',
    translation: 'Used Brown Terracotta',
  },
  {
    stat: 'u-green_terracotta',
    translation: 'Used Green Terracotta',
  },
  {
    stat: 'u-red_terracotta',
    translation: 'Used Red Terracotta',
  },
  {
    stat: 'u-black_terracotta',
    translation: 'Used Black Terracotta',
  },
  {
    stat: 'u-barrier',
    translation: 'Used Barrier',
  },
  {
    stat: 'u-light',
    translation: 'Used Light',
  },
  {
    stat: 'u-hay_block',
    translation: 'Used Hay Bale',
  },
  {
    stat: 'u-white_carpet',
    translation: 'Used White Carpet',
  },
  {
    stat: 'u-orange_carpet',
    translation: 'Used Orange Carpet',
  },
  {
    stat: 'u-magenta_carpet',
    translation: 'Used Magenta Carpet',
  },
  {
    stat: 'u-light_blue_carpet',
    translation: 'Used Light Blue Carpet',
  },
  {
    stat: 'u-yellow_carpet',
    translation: 'Used Yellow Carpet',
  },
  {
    stat: 'u-lime_carpet',
    translation: 'Used Lime Carpet',
  },
  {
    stat: 'u-pink_carpet',
    translation: 'Used Pink Carpet',
  },
  {
    stat: 'u-gray_carpet',
    translation: 'Used Gray Carpet',
  },
  {
    stat: 'u-light_gray_carpet',
    translation: 'Used Light Gray Carpet',
  },
  {
    stat: 'u-cyan_carpet',
    translation: 'Used Cyan Carpet',
  },
  {
    stat: 'u-purple_carpet',
    translation: 'Used Purple Carpet',
  },
  {
    stat: 'u-blue_carpet',
    translation: 'Used Blue Carpet',
  },
  {
    stat: 'u-brown_carpet',
    translation: 'Used Brown Carpet',
  },
  {
    stat: 'u-green_carpet',
    translation: 'Used Green Carpet',
  },
  {
    stat: 'u-red_carpet',
    translation: 'Used Red Carpet',
  },
  {
    stat: 'u-black_carpet',
    translation: 'Used Black Carpet',
  },
  {
    stat: 'u-terracotta',
    translation: 'Used Terracotta',
  },
  {
    stat: 'u-packed_ice',
    translation: 'Used Packed Ice',
  },
  {
    stat: 'u-dirt_path',
    translation: 'Used Dirt Path',
  },
  {
    stat: 'u-sunflower',
    translation: 'Used Sunflower',
  },
  {
    stat: 'u-lilac',
    translation: 'Used Lilac',
  },
  {
    stat: 'u-rose_bush',
    translation: 'Used Rose Bush',
  },
  {
    stat: 'u-peony',
    translation: 'Used Peony',
  },
  {
    stat: 'u-tall_grass',
    translation: 'Used Tall Grass',
  },
  {
    stat: 'u-large_fern',
    translation: 'Used Large Fern',
  },
  {
    stat: 'u-white_stained_glass',
    translation: 'Used White Stained Glass',
  },
  {
    stat: 'u-orange_stained_glass',
    translation: 'Used Orange Stained Glass',
  },
  {
    stat: 'u-magenta_stained_glass',
    translation: 'Used Magenta Stained Glass',
  },
  {
    stat: 'u-light_blue_stained_glass',
    translation: 'Used Light Blue Stained Glass',
  },
  {
    stat: 'u-yellow_stained_glass',
    translation: 'Used Yellow Stained Glass',
  },
  {
    stat: 'u-lime_stained_glass',
    translation: 'Used Lime Stained Glass',
  },
  {
    stat: 'u-pink_stained_glass',
    translation: 'Used Pink Stained Glass',
  },
  {
    stat: 'u-gray_stained_glass',
    translation: 'Used Gray Stained Glass',
  },
  {
    stat: 'u-light_gray_stained_glass',
    translation: 'Used Light Gray Stained Glass',
  },
  {
    stat: 'u-cyan_stained_glass',
    translation: 'Used Cyan Stained Glass',
  },
  {
    stat: 'u-purple_stained_glass',
    translation: 'Used Purple Stained Glass',
  },
  {
    stat: 'u-blue_stained_glass',
    translation: 'Used Blue Stained Glass',
  },
  {
    stat: 'u-brown_stained_glass',
    translation: 'Used Brown Stained Glass',
  },
  {
    stat: 'u-green_stained_glass',
    translation: 'Used Green Stained Glass',
  },
  {
    stat: 'u-red_stained_glass',
    translation: 'Used Red Stained Glass',
  },
  {
    stat: 'u-black_stained_glass',
    translation: 'Used Black Stained Glass',
  },
  {
    stat: 'u-white_stained_glass_pane',
    translation: 'Used White Stained Glass Pane',
  },
  {
    stat: 'u-orange_stained_glass_pane',
    translation: 'Used Orange Stained Glass Pane',
  },
  {
    stat: 'u-magenta_stained_glass_pane',
    translation: 'Used Magenta Stained Glass Pane',
  },
  {
    stat: 'u-light_blue_stained_glass_pane',
    translation: 'Used Light Blue Stained Glass Pane',
  },
  {
    stat: 'u-yellow_stained_glass_pane',
    translation: 'Used Yellow Stained Glass Pane',
  },
  {
    stat: 'u-lime_stained_glass_pane',
    translation: 'Used Lime Stained Glass Pane',
  },
  {
    stat: 'u-pink_stained_glass_pane',
    translation: 'Used Pink Stained Glass Pane',
  },
  {
    stat: 'u-gray_stained_glass_pane',
    translation: 'Used Gray Stained Glass Pane',
  },
  {
    stat: 'u-light_gray_stained_glass_pane',
    translation: 'Used Light Gray Stained Glass Pane',
  },
  {
    stat: 'u-cyan_stained_glass_pane',
    translation: 'Used Cyan Stained Glass Pane',
  },
  {
    stat: 'u-purple_stained_glass_pane',
    translation: 'Used Purple Stained Glass Pane',
  },
  {
    stat: 'u-blue_stained_glass_pane',
    translation: 'Used Blue Stained Glass Pane',
  },
  {
    stat: 'u-brown_stained_glass_pane',
    translation: 'Used Brown Stained Glass Pane',
  },
  {
    stat: 'u-green_stained_glass_pane',
    translation: 'Used Green Stained Glass Pane',
  },
  {
    stat: 'u-red_stained_glass_pane',
    translation: 'Used Red Stained Glass Pane',
  },
  {
    stat: 'u-black_stained_glass_pane',
    translation: 'Used Black Stained Glass Pane',
  },
  {
    stat: 'u-prismarine',
    translation: 'Used Prismarine',
  },
  {
    stat: 'u-prismarine_bricks',
    translation: 'Used Prismarine Bricks',
  },
  {
    stat: 'u-dark_prismarine',
    translation: 'Used Dark Prismarine',
  },
  {
    stat: 'u-prismarine_stairs',
    translation: 'Used Prismarine Stairs',
  },
  {
    stat: 'u-prismarine_brick_stairs',
    translation: 'Used Prismarine Brick Stairs',
  },
  {
    stat: 'u-dark_prismarine_stairs',
    translation: 'Used Dark Prismarine Stairs',
  },
  {
    stat: 'u-sea_lantern',
    translation: 'Used Sea Lantern',
  },
  {
    stat: 'u-red_sandstone',
    translation: 'Used Red Sandstone',
  },
  {
    stat: 'u-chiseled_red_sandstone',
    translation: 'Used Chiseled Red Sandstone',
  },
  {
    stat: 'u-cut_red_sandstone',
    translation: 'Used Cut Red Sandstone',
  },
  {
    stat: 'u-red_sandstone_stairs',
    translation: 'Used Red Sandstone Stairs',
  },
  {
    stat: 'u-repeating_command_block',
    translation: 'Used Repeating Command Block',
  },
  {
    stat: 'u-chain_command_block',
    translation: 'Used Chain Command Block',
  },
  {
    stat: 'u-magma_block',
    translation: 'Used Magma Block',
  },
  {
    stat: 'u-nether_wart_block',
    translation: 'Used Nether Wart Block',
  },
  {
    stat: 'u-warped_wart_block',
    translation: 'Used Warped Wart Block',
  },
  {
    stat: 'u-red_nether_bricks',
    translation: 'Used Red Nether Bricks',
  },
  {
    stat: 'u-bone_block',
    translation: 'Used Bone Block',
  },
  {
    stat: 'u-structure_void',
    translation: 'Used Structure Void',
  },
  {
    stat: 'u-shulker_box',
    translation: 'Used Shulker Box',
  },
  {
    stat: 'u-white_shulker_box',
    translation: 'Used White Shulker Box',
  },
  {
    stat: 'u-orange_shulker_box',
    translation: 'Used Orange Shulker Box',
  },
  {
    stat: 'u-magenta_shulker_box',
    translation: 'Used Magenta Shulker Box',
  },
  {
    stat: 'u-light_blue_shulker_box',
    translation: 'Used Light Blue Shulker Box',
  },
  {
    stat: 'u-yellow_shulker_box',
    translation: 'Used Yellow Shulker Box',
  },
  {
    stat: 'u-lime_shulker_box',
    translation: 'Used Lime Shulker Box',
  },
  {
    stat: 'u-pink_shulker_box',
    translation: 'Used Pink Shulker Box',
  },
  {
    stat: 'u-gray_shulker_box',
    translation: 'Used Gray Shulker Box',
  },
  {
    stat: 'u-light_gray_shulker_box',
    translation: 'Used Light Gray Shulker Box',
  },
  {
    stat: 'u-cyan_shulker_box',
    translation: 'Used Cyan Shulker Box',
  },
  {
    stat: 'u-purple_shulker_box',
    translation: 'Used Purple Shulker Box',
  },
  {
    stat: 'u-blue_shulker_box',
    translation: 'Used Blue Shulker Box',
  },
  {
    stat: 'u-brown_shulker_box',
    translation: 'Used Brown Shulker Box',
  },
  {
    stat: 'u-green_shulker_box',
    translation: 'Used Green Shulker Box',
  },
  {
    stat: 'u-red_shulker_box',
    translation: 'Used Red Shulker Box',
  },
  {
    stat: 'u-black_shulker_box',
    translation: 'Used Black Shulker Box',
  },
  {
    stat: 'u-white_glazed_terracotta',
    translation: 'Used White Glazed Terracotta',
  },
  {
    stat: 'u-orange_glazed_terracotta',
    translation: 'Used Orange Glazed Terracotta',
  },
  {
    stat: 'u-magenta_glazed_terracotta',
    translation: 'Used Magenta Glazed Terracotta',
  },
  {
    stat: 'u-light_blue_glazed_terracotta',
    translation: 'Used Light Blue Glazed Terracotta',
  },
  {
    stat: 'u-yellow_glazed_terracotta',
    translation: 'Used Yellow Glazed Terracotta',
  },
  {
    stat: 'u-lime_glazed_terracotta',
    translation: 'Used Lime Glazed Terracotta',
  },
  {
    stat: 'u-pink_glazed_terracotta',
    translation: 'Used Pink Glazed Terracotta',
  },
  {
    stat: 'u-gray_glazed_terracotta',
    translation: 'Used Gray Glazed Terracotta',
  },
  {
    stat: 'u-light_gray_glazed_terracotta',
    translation: 'Used Light Gray Glazed Terracotta',
  },
  {
    stat: 'u-cyan_glazed_terracotta',
    translation: 'Used Cyan Glazed Terracotta',
  },
  {
    stat: 'u-purple_glazed_terracotta',
    translation: 'Used Purple Glazed Terracotta',
  },
  {
    stat: 'u-blue_glazed_terracotta',
    translation: 'Used Blue Glazed Terracotta',
  },
  {
    stat: 'u-brown_glazed_terracotta',
    translation: 'Used Brown Glazed Terracotta',
  },
  {
    stat: 'u-green_glazed_terracotta',
    translation: 'Used Green Glazed Terracotta',
  },
  {
    stat: 'u-red_glazed_terracotta',
    translation: 'Used Red Glazed Terracotta',
  },
  {
    stat: 'u-black_glazed_terracotta',
    translation: 'Used Black Glazed Terracotta',
  },
  {
    stat: 'u-white_concrete',
    translation: 'Used White Concrete',
  },
  {
    stat: 'u-orange_concrete',
    translation: 'Used Orange Concrete',
  },
  {
    stat: 'u-magenta_concrete',
    translation: 'Used Magenta Concrete',
  },
  {
    stat: 'u-light_blue_concrete',
    translation: 'Used Light Blue Concrete',
  },
  {
    stat: 'u-yellow_concrete',
    translation: 'Used Yellow Concrete',
  },
  {
    stat: 'u-lime_concrete',
    translation: 'Used Lime Concrete',
  },
  {
    stat: 'u-pink_concrete',
    translation: 'Used Pink Concrete',
  },
  {
    stat: 'u-gray_concrete',
    translation: 'Used Gray Concrete',
  },
  {
    stat: 'u-light_gray_concrete',
    translation: 'Used Light Gray Concrete',
  },
  {
    stat: 'u-cyan_concrete',
    translation: 'Used Cyan Concrete',
  },
  {
    stat: 'u-purple_concrete',
    translation: 'Used Purple Concrete',
  },
  {
    stat: 'u-blue_concrete',
    translation: 'Used Blue Concrete',
  },
  {
    stat: 'u-brown_concrete',
    translation: 'Used Brown Concrete',
  },
  {
    stat: 'u-green_concrete',
    translation: 'Used Green Concrete',
  },
  {
    stat: 'u-red_concrete',
    translation: 'Used Red Concrete',
  },
  {
    stat: 'u-black_concrete',
    translation: 'Used Black Concrete',
  },
  {
    stat: 'u-white_concrete_powder',
    translation: 'Used White Concrete Powder',
  },
  {
    stat: 'u-orange_concrete_powder',
    translation: 'Used Orange Concrete Powder',
  },
  {
    stat: 'u-magenta_concrete_powder',
    translation: 'Used Magenta Concrete Powder',
  },
  {
    stat: 'u-light_blue_concrete_powder',
    translation: 'Used Light Blue Concrete Powder',
  },
  {
    stat: 'u-yellow_concrete_powder',
    translation: 'Used Yellow Concrete Powder',
  },
  {
    stat: 'u-lime_concrete_powder',
    translation: 'Used Lime Concrete Powder',
  },
  {
    stat: 'u-pink_concrete_powder',
    translation: 'Used Pink Concrete Powder',
  },
  {
    stat: 'u-gray_concrete_powder',
    translation: 'Used Gray Concrete Powder',
  },
  {
    stat: 'u-light_gray_concrete_powder',
    translation: 'Used Light Gray Concrete Powder',
  },
  {
    stat: 'u-cyan_concrete_powder',
    translation: 'Used Cyan Concrete Powder',
  },
  {
    stat: 'u-purple_concrete_powder',
    translation: 'Used Purple Concrete Powder',
  },
  {
    stat: 'u-blue_concrete_powder',
    translation: 'Used Blue Concrete Powder',
  },
  {
    stat: 'u-brown_concrete_powder',
    translation: 'Used Brown Concrete Powder',
  },
  {
    stat: 'u-green_concrete_powder',
    translation: 'Used Green Concrete Powder',
  },
  {
    stat: 'u-red_concrete_powder',
    translation: 'Used Red Concrete Powder',
  },
  {
    stat: 'u-black_concrete_powder',
    translation: 'Used Black Concrete Powder',
  },
  {
    stat: 'u-turtle_egg',
    translation: 'Used Turtle Egg',
  },
  {
    stat: 'u-dead_tube_coral_block',
    translation: 'Used Dead Tube Coral Block',
  },
  {
    stat: 'u-dead_brain_coral_block',
    translation: 'Used Dead Brain Coral Block',
  },
  {
    stat: 'u-dead_bubble_coral_block',
    translation: 'Used Dead Bubble Coral Block',
  },
  {
    stat: 'u-dead_fire_coral_block',
    translation: 'Used Dead Fire Coral Block',
  },
  {
    stat: 'u-dead_horn_coral_block',
    translation: 'Used Dead Horn Coral Block',
  },
  {
    stat: 'u-tube_coral_block',
    translation: 'Used Tube Coral Block',
  },
  {
    stat: 'u-brain_coral_block',
    translation: 'Used Brain Coral Block',
  },
  {
    stat: 'u-bubble_coral_block',
    translation: 'Used Bubble Coral Block',
  },
  {
    stat: 'u-fire_coral_block',
    translation: 'Used Fire Coral Block',
  },
  {
    stat: 'u-horn_coral_block',
    translation: 'Used Horn Coral Block',
  },
  {
    stat: 'u-tube_coral',
    translation: 'Used Tube Coral',
  },
  {
    stat: 'u-brain_coral',
    translation: 'Used Brain Coral',
  },
  {
    stat: 'u-bubble_coral',
    translation: 'Used Bubble Coral',
  },
  {
    stat: 'u-fire_coral',
    translation: 'Used Fire Coral',
  },
  {
    stat: 'u-horn_coral',
    translation: 'Used Horn Coral',
  },
  {
    stat: 'u-dead_brain_coral',
    translation: 'Used Dead Brain Coral',
  },
  {
    stat: 'u-dead_bubble_coral',
    translation: 'Used Dead Bubble Coral',
  },
  {
    stat: 'u-dead_fire_coral',
    translation: 'Used Dead Fire Coral',
  },
  {
    stat: 'u-dead_horn_coral',
    translation: 'Used Dead Horn Coral',
  },
  {
    stat: 'u-dead_tube_coral',
    translation: 'Used Dead Tube Coral',
  },
  {
    stat: 'u-tube_coral_fan',
    translation: 'Used Tube Coral Fan',
  },
  {
    stat: 'u-brain_coral_fan',
    translation: 'Used Brain Coral Fan',
  },
  {
    stat: 'u-bubble_coral_fan',
    translation: 'Used Bubble Coral Fan',
  },
  {
    stat: 'u-fire_coral_fan',
    translation: 'Used Fire Coral Fan',
  },
  {
    stat: 'u-horn_coral_fan',
    translation: 'Used Horn Coral Fan',
  },
  {
    stat: 'u-dead_tube_coral_fan',
    translation: 'Used Dead Tube Coral Fan',
  },
  {
    stat: 'u-dead_brain_coral_fan',
    translation: 'Used Dead Brain Coral Fan',
  },
  {
    stat: 'u-dead_bubble_coral_fan',
    translation: 'Used Dead Bubble Coral Fan',
  },
  {
    stat: 'u-dead_fire_coral_fan',
    translation: 'Used Dead Fire Coral Fan',
  },
  {
    stat: 'u-dead_horn_coral_fan',
    translation: 'Used Dead Horn Coral Fan',
  },
  {
    stat: 'u-blue_ice',
    translation: 'Used Blue Ice',
  },
  {
    stat: 'u-conduit',
    translation: 'Used Conduit',
  },
  {
    stat: 'u-polished_granite_stairs',
    translation: 'Used Polished Granite Stairs',
  },
  {
    stat: 'u-smooth_red_sandstone_stairs',
    translation: 'Used Smooth Red Sandstone Stairs',
  },
  {
    stat: 'u-mossy_stone_brick_stairs',
    translation: 'Used Mossy Stone Brick Stairs',
  },
  {
    stat: 'u-polished_diorite_stairs',
    translation: 'Used Polished Diorite Stairs',
  },
  {
    stat: 'u-mossy_cobblestone_stairs',
    translation: 'Used Mossy Cobblestone Stairs',
  },
  {
    stat: 'u-end_stone_brick_stairs',
    translation: 'Used End Stone Brick Stairs',
  },
  {
    stat: 'u-stone_stairs',
    translation: 'Used Stone Stairs',
  },
  {
    stat: 'u-smooth_sandstone_stairs',
    translation: 'Used Smooth Sandstone Stairs',
  },
  {
    stat: 'u-smooth_quartz_stairs',
    translation: 'Used Smooth Quartz Stairs',
  },
  {
    stat: 'u-granite_stairs',
    translation: 'Used Granite Stairs',
  },
  {
    stat: 'u-andesite_stairs',
    translation: 'Used Andesite Stairs',
  },
  {
    stat: 'u-red_nether_brick_stairs',
    translation: 'Used Red Nether Brick Stairs',
  },
  {
    stat: 'u-polished_andesite_stairs',
    translation: 'Used Polished Andesite Stairs',
  },
  {
    stat: 'u-diorite_stairs',
    translation: 'Used Diorite Stairs',
  },
  {
    stat: 'u-cobbled_deepslate_stairs',
    translation: 'Used Cobbled Deepslate Stairs',
  },
  {
    stat: 'u-polished_deepslate_stairs',
    translation: 'Used Polished Deepslate Stairs',
  },
  {
    stat: 'u-deepslate_brick_stairs',
    translation: 'Used Deepslate Brick Stairs',
  },
  {
    stat: 'u-deepslate_tile_stairs',
    translation: 'Used Deepslate Tile Stairs',
  },
  {
    stat: 'u-polished_granite_slab',
    translation: 'Used Polished Granite Slab',
  },
  {
    stat: 'u-smooth_red_sandstone_slab',
    translation: 'Used Smooth Red Sandstone Slab',
  },
  {
    stat: 'u-mossy_stone_brick_slab',
    translation: 'Used Mossy Stone Brick Slab',
  },
  {
    stat: 'u-polished_diorite_slab',
    translation: 'Used Polished Diorite Slab',
  },
  {
    stat: 'u-mossy_cobblestone_slab',
    translation: 'Used Mossy Cobblestone Slab',
  },
  {
    stat: 'u-end_stone_brick_slab',
    translation: 'Used End Stone Brick Slab',
  },
  {
    stat: 'u-smooth_sandstone_slab',
    translation: 'Used Smooth Sandstone Slab',
  },
  {
    stat: 'u-smooth_quartz_slab',
    translation: 'Used Smooth Quartz Slab',
  },
  {
    stat: 'u-granite_slab',
    translation: 'Used Granite Slab',
  },
  {
    stat: 'u-andesite_slab',
    translation: 'Used Andesite Slab',
  },
  {
    stat: 'u-red_nether_brick_slab',
    translation: 'Used Red Nether Brick Slab',
  },
  {
    stat: 'u-polished_andesite_slab',
    translation: 'Used Polished Andesite Slab',
  },
  {
    stat: 'u-diorite_slab',
    translation: 'Used Diorite Slab',
  },
  {
    stat: 'u-cobbled_deepslate_slab',
    translation: 'Used Cobbled Deepslate Slab',
  },
  {
    stat: 'u-polished_deepslate_slab',
    translation: 'Used Polished Deepslate Slab',
  },
  {
    stat: 'u-deepslate_brick_slab',
    translation: 'Used Deepslate Brick Slab',
  },
  {
    stat: 'u-deepslate_tile_slab',
    translation: 'Used Deepslate Tile Slab',
  },
  {
    stat: 'u-scaffolding',
    translation: 'Used Scaffolding',
  },
  {
    stat: 'u-redstone',
    translation: 'Used Redstone Dust',
  },
  {
    stat: 'u-redstone_torch',
    translation: 'Used Redstone Torch',
  },
  {
    stat: 'u-redstone_block',
    translation: 'Used Block of Redstone',
  },
  {
    stat: 'u-repeater',
    translation: 'Used Redstone Repeater',
  },
  {
    stat: 'u-comparator',
    translation: 'Used Redstone Comparator',
  },
  {
    stat: 'u-piston',
    translation: 'Used Piston',
  },
  {
    stat: 'u-sticky_piston',
    translation: 'Used Sticky Piston',
  },
  {
    stat: 'u-slime_block',
    translation: 'Used Slime Block',
  },
  {
    stat: 'u-honey_block',
    translation: 'Used Honey Block',
  },
  {
    stat: 'u-observer',
    translation: 'Used Observer',
  },
  {
    stat: 'u-hopper',
    translation: 'Used Hopper',
  },
  {
    stat: 'u-dispenser',
    translation: 'Used Dispenser',
  },
  {
    stat: 'u-dropper',
    translation: 'Used Dropper',
  },
  {
    stat: 'u-lectern',
    translation: 'Used Lectern',
  },
  {
    stat: 'u-target',
    translation: 'Used Target',
  },
  {
    stat: 'u-lever',
    translation: 'Used Lever',
  },
  {
    stat: 'u-lightning_rod',
    translation: 'Used Lightning Rod',
  },
  {
    stat: 'u-daylight_detector',
    translation: 'Used Daylight Detector',
  },
  {
    stat: 'u-sculk_sensor',
    translation: 'Used Sculk Sensor',
  },
  {
    stat: 'u-tripwire_hook',
    translation: 'Used Tripwire Hook',
  },
  {
    stat: 'u-trapped_chest',
    translation: 'Used Trapped Chest',
  },
  {
    stat: 'u-tnt',
    translation: 'Used TNT',
  },
  {
    stat: 'u-redstone_lamp',
    translation: 'Used Redstone Lamp',
  },
  {
    stat: 'u-note_block',
    translation: 'Used Note Block',
  },
  {
    stat: 'u-stone_button',
    translation: 'Used Stone Button',
  },
  {
    stat: 'u-polished_blackstone_button',
    translation: 'Used Polished Blackstone Button',
  },
  {
    stat: 'u-oak_button',
    translation: 'Used Oak Button',
  },
  {
    stat: 'u-spruce_button',
    translation: 'Used Spruce Button',
  },
  {
    stat: 'u-birch_button',
    translation: 'Used Birch Button',
  },
  {
    stat: 'u-jungle_button',
    translation: 'Used Jungle Button',
  },
  {
    stat: 'u-acacia_button',
    translation: 'Used Acacia Button',
  },
  {
    stat: 'u-dark_oak_button',
    translation: 'Used Dark Oak Button',
  },
  {
    stat: 'u-mangrove_button',
    translation: 'Used Mangrove Button',
  },
  {
    stat: 'u-crimson_button',
    translation: 'Used Crimson Button',
  },
  {
    stat: 'u-warped_button',
    translation: 'Used Warped Button',
  },
  {
    stat: 'u-stone_pressure_plate',
    translation: 'Used Stone Pressure Plate',
  },
  {
    stat: 'u-polished_blackstone_pressure_plate',
    translation: 'Used Polished Blackstone Pressure Plate',
  },
  {
    stat: 'u-light_weighted_pressure_plate',
    translation: 'Used Light Weighted Pressure Plate',
  },
  {
    stat: 'u-heavy_weighted_pressure_plate',
    translation: 'Used Heavy Weighted Pressure Plate',
  },
  {
    stat: 'u-oak_pressure_plate',
    translation: 'Used Oak Pressure Plate',
  },
  {
    stat: 'u-spruce_pressure_plate',
    translation: 'Used Spruce Pressure Plate',
  },
  {
    stat: 'u-birch_pressure_plate',
    translation: 'Used Birch Pressure Plate',
  },
  {
    stat: 'u-jungle_pressure_plate',
    translation: 'Used Jungle Pressure Plate',
  },
  {
    stat: 'u-acacia_pressure_plate',
    translation: 'Used Acacia Pressure Plate',
  },
  {
    stat: 'u-dark_oak_pressure_plate',
    translation: 'Used Dark Oak Pressure Plate',
  },
  {
    stat: 'u-mangrove_pressure_plate',
    translation: 'Used Mangrove Pressure Plate',
  },
  {
    stat: 'u-crimson_pressure_plate',
    translation: 'Used Crimson Pressure Plate',
  },
  {
    stat: 'u-warped_pressure_plate',
    translation: 'Used Warped Pressure Plate',
  },
  {
    stat: 'u-iron_door',
    translation: 'Used Iron Door',
  },
  {
    stat: 'u-oak_door',
    translation: 'Used Oak Door',
  },
  {
    stat: 'u-spruce_door',
    translation: 'Used Spruce Door',
  },
  {
    stat: 'u-birch_door',
    translation: 'Used Birch Door',
  },
  {
    stat: 'u-jungle_door',
    translation: 'Used Jungle Door',
  },
  {
    stat: 'u-acacia_door',
    translation: 'Used Acacia Door',
  },
  {
    stat: 'u-dark_oak_door',
    translation: 'Used Dark Oak Door',
  },
  {
    stat: 'u-mangrove_door',
    translation: 'Used Mangrove Door',
  },
  {
    stat: 'u-crimson_door',
    translation: 'Used Crimson Door',
  },
  {
    stat: 'u-warped_door',
    translation: 'Used Warped Door',
  },
  {
    stat: 'u-iron_trapdoor',
    translation: 'Used Iron Trapdoor',
  },
  {
    stat: 'u-oak_trapdoor',
    translation: 'Used Oak Trapdoor',
  },
  {
    stat: 'u-spruce_trapdoor',
    translation: 'Used Spruce Trapdoor',
  },
  {
    stat: 'u-birch_trapdoor',
    translation: 'Used Birch Trapdoor',
  },
  {
    stat: 'u-jungle_trapdoor',
    translation: 'Used Jungle Trapdoor',
  },
  {
    stat: 'u-acacia_trapdoor',
    translation: 'Used Acacia Trapdoor',
  },
  {
    stat: 'u-dark_oak_trapdoor',
    translation: 'Used Dark Oak Trapdoor',
  },
  {
    stat: 'u-mangrove_trapdoor',
    translation: 'Used Mangrove Trapdoor',
  },
  {
    stat: 'u-crimson_trapdoor',
    translation: 'Used Crimson Trapdoor',
  },
  {
    stat: 'u-warped_trapdoor',
    translation: 'Used Warped Trapdoor',
  },
  {
    stat: 'u-oak_fence_gate',
    translation: 'Used Oak Fence Gate',
  },
  {
    stat: 'u-spruce_fence_gate',
    translation: 'Used Spruce Fence Gate',
  },
  {
    stat: 'u-birch_fence_gate',
    translation: 'Used Birch Fence Gate',
  },
  {
    stat: 'u-jungle_fence_gate',
    translation: 'Used Jungle Fence Gate',
  },
  {
    stat: 'u-acacia_fence_gate',
    translation: 'Used Acacia Fence Gate',
  },
  {
    stat: 'u-dark_oak_fence_gate',
    translation: 'Used Dark Oak Fence Gate',
  },
  {
    stat: 'u-mangrove_fence_gate',
    translation: 'Used Mangrove Fence Gate',
  },
  {
    stat: 'u-crimson_fence_gate',
    translation: 'Used Crimson Fence Gate',
  },
  {
    stat: 'u-warped_fence_gate',
    translation: 'Used Warped Fence Gate',
  },
  {
    stat: 'u-powered_rail',
    translation: 'Used Powered Rail',
  },
  {
    stat: 'u-detector_rail',
    translation: 'Used Detector Rail',
  },
  {
    stat: 'u-rail',
    translation: 'Used Rail',
  },
  {
    stat: 'u-activator_rail',
    translation: 'Used Activator Rail',
  },
  {
    stat: 'u-saddle',
    translation: 'Used Saddle',
  },
  {
    stat: 'u-minecart',
    translation: 'Used Minecart',
  },
  {
    stat: 'u-chest_minecart',
    translation: 'Used Minecart with Chest',
  },
  {
    stat: 'u-furnace_minecart',
    translation: 'Used Minecart with Furnace',
  },
  {
    stat: 'u-tnt_minecart',
    translation: 'Used Minecart with TNT',
  },
  {
    stat: 'u-hopper_minecart',
    translation: 'Used Minecart with Hopper',
  },
  {
    stat: 'u-carrot_on_a_stick',
    translation: 'Used Carrot on a Stick',
  },
  {
    stat: 'u-warped_fungus_on_a_stick',
    translation: 'Used Warped Fungus on a Stick',
  },
  {
    stat: 'u-elytra',
    translation: 'Used Elytra',
  },
  {
    stat: 'u-oak_boat',
    translation: 'Used Oak Boat',
  },
  {
    stat: 'u-oak_chest_boat',
    translation: 'Used Oak Boat with Chest',
  },
  {
    stat: 'u-spruce_boat',
    translation: 'Used Spruce Boat',
  },
  {
    stat: 'u-spruce_chest_boat',
    translation: 'Used Spruce Boat with Chest',
  },
  {
    stat: 'u-birch_boat',
    translation: 'Used Birch Boat',
  },
  {
    stat: 'u-birch_chest_boat',
    translation: 'Used Birch Boat with Chest',
  },
  {
    stat: 'u-jungle_boat',
    translation: 'Used Jungle Boat',
  },
  {
    stat: 'u-jungle_chest_boat',
    translation: 'Used Jungle Boat with Chest',
  },
  {
    stat: 'u-acacia_boat',
    translation: 'Used Acacia Boat',
  },
  {
    stat: 'u-acacia_chest_boat',
    translation: 'Used Acacia Boat with Chest',
  },
  {
    stat: 'u-dark_oak_boat',
    translation: 'Used Dark Oak Boat',
  },
  {
    stat: 'u-dark_oak_chest_boat',
    translation: 'Used Dark Oak Boat with Chest',
  },
  {
    stat: 'u-mangrove_boat',
    translation: 'Used Mangrove Boat',
  },
  {
    stat: 'u-mangrove_chest_boat',
    translation: 'Used Mangrove Boat with Chest',
  },
  {
    stat: 'u-structure_block',
    translation: 'Used Structure Block',
  },
  {
    stat: 'u-jigsaw',
    translation: 'Used Jigsaw Block',
  },
  {
    stat: 'u-turtle_helmet',
    translation: 'Used Turtle Shell',
  },
  {
    stat: 'u-scute',
    translation: 'Used Scute',
  },
  {
    stat: 'u-flint_and_steel',
    translation: 'Used Flint and Steel',
  },
  {
    stat: 'u-apple',
    translation: 'Used Apple',
  },
  {
    stat: 'u-bow',
    translation: 'Used Bow',
  },
  {
    stat: 'u-arrow',
    translation: 'Used Arrow',
  },
  {
    stat: 'u-coal',
    translation: 'Used Coal',
  },
  {
    stat: 'u-charcoal',
    translation: 'Used Charcoal',
  },
  {
    stat: 'u-diamond',
    translation: 'Used Diamond',
  },
  {
    stat: 'u-emerald',
    translation: 'Used Emerald',
  },
  {
    stat: 'u-lapis_lazuli',
    translation: 'Used Lapis Lazuli',
  },
  {
    stat: 'u-quartz',
    translation: 'Used Nether Quartz',
  },
  {
    stat: 'u-amethyst_shard',
    translation: 'Used Amethyst Shard',
  },
  {
    stat: 'u-raw_iron',
    translation: 'Used Raw Iron',
  },
  {
    stat: 'u-iron_ingot',
    translation: 'Used Iron Ingot',
  },
  {
    stat: 'u-raw_copper',
    translation: 'Used Raw Copper',
  },
  {
    stat: 'u-copper_ingot',
    translation: 'Used Copper Ingot',
  },
  {
    stat: 'u-raw_gold',
    translation: 'Used Raw Gold',
  },
  {
    stat: 'u-gold_ingot',
    translation: 'Used Gold Ingot',
  },
  {
    stat: 'u-netherite_ingot',
    translation: 'Used Netherite Ingot',
  },
  {
    stat: 'u-netherite_scrap',
    translation: 'Used Netherite Scrap',
  },
  {
    stat: 'u-wooden_sword',
    translation: 'Used Wooden Sword',
  },
  {
    stat: 'u-wooden_shovel',
    translation: 'Used Wooden Shovel',
  },
  {
    stat: 'u-wooden_pickaxe',
    translation: 'Used Wooden Pickaxe',
  },
  {
    stat: 'u-wooden_axe',
    translation: 'Used Wooden Axe',
  },
  {
    stat: 'u-wooden_hoe',
    translation: 'Used Wooden Hoe',
  },
  {
    stat: 'u-stone_sword',
    translation: 'Used Stone Sword',
  },
  {
    stat: 'u-stone_shovel',
    translation: 'Used Stone Shovel',
  },
  {
    stat: 'u-stone_pickaxe',
    translation: 'Used Stone Pickaxe',
  },
  {
    stat: 'u-stone_axe',
    translation: 'Used Stone Axe',
  },
  {
    stat: 'u-stone_hoe',
    translation: 'Used Stone Hoe',
  },
  {
    stat: 'u-golden_sword',
    translation: 'Used Golden Sword',
  },
  {
    stat: 'u-golden_shovel',
    translation: 'Used Golden Shovel',
  },
  {
    stat: 'u-golden_pickaxe',
    translation: 'Used Golden Pickaxe',
  },
  {
    stat: 'u-golden_axe',
    translation: 'Used Golden Axe',
  },
  {
    stat: 'u-golden_hoe',
    translation: 'Used Golden Hoe',
  },
  {
    stat: 'u-iron_sword',
    translation: 'Used Iron Sword',
  },
  {
    stat: 'u-iron_shovel',
    translation: 'Used Iron Shovel',
  },
  {
    stat: 'u-iron_pickaxe',
    translation: 'Used Iron Pickaxe',
  },
  {
    stat: 'u-iron_axe',
    translation: 'Used Iron Axe',
  },
  {
    stat: 'u-iron_hoe',
    translation: 'Used Iron Hoe',
  },
  {
    stat: 'u-diamond_sword',
    translation: 'Used Diamond Sword',
  },
  {
    stat: 'u-diamond_shovel',
    translation: 'Used Diamond Shovel',
  },
  {
    stat: 'u-diamond_pickaxe',
    translation: 'Used Diamond Pickaxe',
  },
  {
    stat: 'u-diamond_axe',
    translation: 'Used Diamond Axe',
  },
  {
    stat: 'u-diamond_hoe',
    translation: 'Used Diamond Hoe',
  },
  {
    stat: 'u-netherite_sword',
    translation: 'Used Netherite Sword',
  },
  {
    stat: 'u-netherite_shovel',
    translation: 'Used Netherite Shovel',
  },
  {
    stat: 'u-netherite_pickaxe',
    translation: 'Used Netherite Pickaxe',
  },
  {
    stat: 'u-netherite_axe',
    translation: 'Used Netherite Axe',
  },
  {
    stat: 'u-netherite_hoe',
    translation: 'Used Netherite Hoe',
  },
  {
    stat: 'u-stick',
    translation: 'Used Stick',
  },
  {
    stat: 'u-bowl',
    translation: 'Used Bowl',
  },
  {
    stat: 'u-mushroom_stew',
    translation: 'Used Mushroom Stew',
  },
  {
    stat: 'u-string',
    translation: 'Used String',
  },
  {
    stat: 'u-feather',
    translation: 'Used Feather',
  },
  {
    stat: 'u-gunpowder',
    translation: 'Used Gunpowder',
  },
  {
    stat: 'u-wheat_seeds',
    translation: 'Used Wheat Seeds',
  },
  {
    stat: 'u-wheat',
    translation: 'Used Wheat',
  },
  {
    stat: 'u-bread',
    translation: 'Used Bread',
  },
  {
    stat: 'u-leather_helmet',
    translation: 'Used Leather Cap',
  },
  {
    stat: 'u-leather_chestplate',
    translation: 'Used Leather Tunic',
  },
  {
    stat: 'u-leather_leggings',
    translation: 'Used Leather Pants',
  },
  {
    stat: 'u-leather_boots',
    translation: 'Used Leather Boots',
  },
  {
    stat: 'u-chainmail_helmet',
    translation: 'Used Chainmail Helmet',
  },
  {
    stat: 'u-chainmail_chestplate',
    translation: 'Used Chainmail Chestplate',
  },
  {
    stat: 'u-chainmail_leggings',
    translation: 'Used Chainmail Leggings',
  },
  {
    stat: 'u-chainmail_boots',
    translation: 'Used Chainmail Boots',
  },
  {
    stat: 'u-iron_helmet',
    translation: 'Used Iron Helmet',
  },
  {
    stat: 'u-iron_chestplate',
    translation: 'Used Iron Chestplate',
  },
  {
    stat: 'u-iron_leggings',
    translation: 'Used Iron Leggings',
  },
  {
    stat: 'u-iron_boots',
    translation: 'Used Iron Boots',
  },
  {
    stat: 'u-diamond_helmet',
    translation: 'Used Diamond Helmet',
  },
  {
    stat: 'u-diamond_chestplate',
    translation: 'Used Diamond Chestplate',
  },
  {
    stat: 'u-diamond_leggings',
    translation: 'Used Diamond Leggings',
  },
  {
    stat: 'u-diamond_boots',
    translation: 'Used Diamond Boots',
  },
  {
    stat: 'u-golden_helmet',
    translation: 'Used Golden Helmet',
  },
  {
    stat: 'u-golden_chestplate',
    translation: 'Used Golden Chestplate',
  },
  {
    stat: 'u-golden_leggings',
    translation: 'Used Golden Leggings',
  },
  {
    stat: 'u-golden_boots',
    translation: 'Used Golden Boots',
  },
  {
    stat: 'u-netherite_helmet',
    translation: 'Used Netherite Helmet',
  },
  {
    stat: 'u-netherite_chestplate',
    translation: 'Used Netherite Chestplate',
  },
  {
    stat: 'u-netherite_leggings',
    translation: 'Used Netherite Leggings',
  },
  {
    stat: 'u-netherite_boots',
    translation: 'Used Netherite Boots',
  },
  {
    stat: 'u-flint',
    translation: 'Used Flint',
  },
  {
    stat: 'u-porkchop',
    translation: 'Used Raw Porkchop',
  },
  {
    stat: 'u-cooked_porkchop',
    translation: 'Used Cooked Porkchop',
  },
  {
    stat: 'u-painting',
    translation: 'Used Painting',
  },
  {
    stat: 'u-golden_apple',
    translation: 'Used Golden Apple',
  },
  {
    stat: 'u-enchanted_golden_apple',
    translation: 'Used Enchanted Golden Apple',
  },
  {
    stat: 'u-oak_sign',
    translation: 'Used Oak Sign',
  },
  {
    stat: 'u-spruce_sign',
    translation: 'Used Spruce Sign',
  },
  {
    stat: 'u-birch_sign',
    translation: 'Used Birch Sign',
  },
  {
    stat: 'u-jungle_sign',
    translation: 'Used Jungle Sign',
  },
  {
    stat: 'u-acacia_sign',
    translation: 'Used Acacia Sign',
  },
  {
    stat: 'u-dark_oak_sign',
    translation: 'Used Dark Oak Sign',
  },
  {
    stat: 'u-mangrove_sign',
    translation: 'Used Mangrove Sign',
  },
  {
    stat: 'u-crimson_sign',
    translation: 'Used Crimson Sign',
  },
  {
    stat: 'u-warped_sign',
    translation: 'Used Warped Sign',
  },
  {
    stat: 'u-bucket',
    translation: 'Used Bucket',
  },
  {
    stat: 'u-water_bucket',
    translation: 'Used Water Bucket',
  },
  {
    stat: 'u-lava_bucket',
    translation: 'Used Lava Bucket',
  },
  {
    stat: 'u-powder_snow_bucket',
    translation: 'Used Powder Snow Bucket',
  },
  {
    stat: 'u-snowball',
    translation: 'Used Snowball',
  },
  {
    stat: 'u-leather',
    translation: 'Used Leather',
  },
  {
    stat: 'u-milk_bucket',
    translation: 'Used Milk Bucket',
  },
  {
    stat: 'u-pufferfish_bucket',
    translation: 'Used Bucket of Pufferfish',
  },
  {
    stat: 'u-salmon_bucket',
    translation: 'Used Bucket of Salmon',
  },
  {
    stat: 'u-cod_bucket',
    translation: 'Used Bucket of Cod',
  },
  {
    stat: 'u-tropical_fish_bucket',
    translation: 'Used Bucket of Tropical Fish',
  },
  {
    stat: 'u-axolotl_bucket',
    translation: 'Used Bucket of Axolotl',
  },
  {
    stat: 'u-tadpole_bucket',
    translation: 'Used Bucket of Tadpole',
  },
  {
    stat: 'u-brick',
    translation: 'Used Brick',
  },
  {
    stat: 'u-clay_ball',
    translation: 'Used Clay Ball',
  },
  {
    stat: 'u-dried_kelp_block',
    translation: 'Used Dried Kelp Block',
  },
  {
    stat: 'u-paper',
    translation: 'Used Paper',
  },
  {
    stat: 'u-book',
    translation: 'Used Book',
  },
  {
    stat: 'u-slime_ball',
    translation: 'Used Slimeball',
  },
  {
    stat: 'u-egg',
    translation: 'Used Egg',
  },
  {
    stat: 'u-compass',
    translation: 'Used Compass',
  },
  {
    stat: 'u-recovery_compass',
    translation: 'Used Recovery Compass',
  },
  {
    stat: 'u-bundle',
    translation: 'Used Bundle',
  },
  {
    stat: 'u-fishing_rod',
    translation: 'Used Fishing Rod',
  },
  {
    stat: 'u-clock',
    translation: 'Used Clock',
  },
  {
    stat: 'u-spyglass',
    translation: 'Used Spyglass',
  },
  {
    stat: 'u-glowstone_dust',
    translation: 'Used Glowstone Dust',
  },
  {
    stat: 'u-cod',
    translation: 'Used Raw Cod',
  },
  {
    stat: 'u-salmon',
    translation: 'Used Raw Salmon',
  },
  {
    stat: 'u-tropical_fish',
    translation: 'Used Tropical Fish',
  },
  {
    stat: 'u-pufferfish',
    translation: 'Used Pufferfish',
  },
  {
    stat: 'u-cooked_cod',
    translation: 'Used Cooked Cod',
  },
  {
    stat: 'u-cooked_salmon',
    translation: 'Used Cooked Salmon',
  },
  {
    stat: 'u-ink_sac',
    translation: 'Used Ink Sac',
  },
  {
    stat: 'u-glow_ink_sac',
    translation: 'Used Glow Ink Sac',
  },
  {
    stat: 'u-cocoa_beans',
    translation: 'Used Cocoa Beans',
  },
  {
    stat: 'u-white_dye',
    translation: 'Used White Dye',
  },
  {
    stat: 'u-orange_dye',
    translation: 'Used Orange Dye',
  },
  {
    stat: 'u-magenta_dye',
    translation: 'Used Magenta Dye',
  },
  {
    stat: 'u-light_blue_dye',
    translation: 'Used Light Blue Dye',
  },
  {
    stat: 'u-yellow_dye',
    translation: 'Used Yellow Dye',
  },
  {
    stat: 'u-lime_dye',
    translation: 'Used Lime Dye',
  },
  {
    stat: 'u-pink_dye',
    translation: 'Used Pink Dye',
  },
  {
    stat: 'u-gray_dye',
    translation: 'Used Gray Dye',
  },
  {
    stat: 'u-light_gray_dye',
    translation: 'Used Light Gray Dye',
  },
  {
    stat: 'u-cyan_dye',
    translation: 'Used Cyan Dye',
  },
  {
    stat: 'u-purple_dye',
    translation: 'Used Purple Dye',
  },
  {
    stat: 'u-blue_dye',
    translation: 'Used Blue Dye',
  },
  {
    stat: 'u-brown_dye',
    translation: 'Used Brown Dye',
  },
  {
    stat: 'u-green_dye',
    translation: 'Used Green Dye',
  },
  {
    stat: 'u-red_dye',
    translation: 'Used Red Dye',
  },
  {
    stat: 'u-black_dye',
    translation: 'Used Black Dye',
  },
  {
    stat: 'u-bone_meal',
    translation: 'Used Bone Meal',
  },
  {
    stat: 'u-bone',
    translation: 'Used Bone',
  },
  {
    stat: 'u-sugar',
    translation: 'Used Sugar',
  },
  {
    stat: 'u-cake',
    translation: 'Used Cake',
  },
  {
    stat: 'u-white_bed',
    translation: 'Used White Bed',
  },
  {
    stat: 'u-orange_bed',
    translation: 'Used Orange Bed',
  },
  {
    stat: 'u-magenta_bed',
    translation: 'Used Magenta Bed',
  },
  {
    stat: 'u-light_blue_bed',
    translation: 'Used Light Blue Bed',
  },
  {
    stat: 'u-yellow_bed',
    translation: 'Used Yellow Bed',
  },
  {
    stat: 'u-lime_bed',
    translation: 'Used Lime Bed',
  },
  {
    stat: 'u-pink_bed',
    translation: 'Used Pink Bed',
  },
  {
    stat: 'u-gray_bed',
    translation: 'Used Gray Bed',
  },
  {
    stat: 'u-light_gray_bed',
    translation: 'Used Light Gray Bed',
  },
  {
    stat: 'u-cyan_bed',
    translation: 'Used Cyan Bed',
  },
  {
    stat: 'u-purple_bed',
    translation: 'Used Purple Bed',
  },
  {
    stat: 'u-blue_bed',
    translation: 'Used Blue Bed',
  },
  {
    stat: 'u-brown_bed',
    translation: 'Used Brown Bed',
  },
  {
    stat: 'u-green_bed',
    translation: 'Used Green Bed',
  },
  {
    stat: 'u-red_bed',
    translation: 'Used Red Bed',
  },
  {
    stat: 'u-black_bed',
    translation: 'Used Black Bed',
  },
  {
    stat: 'u-cookie',
    translation: 'Used Cookie',
  },
  {
    stat: 'u-filled_map',
    translation: 'Used Map',
  },
  {
    stat: 'u-shears',
    translation: 'Used Shears',
  },
  {
    stat: 'u-melon_slice',
    translation: 'Used Melon Slice',
  },
  {
    stat: 'u-dried_kelp',
    translation: 'Used Dried Kelp',
  },
  {
    stat: 'u-pumpkin_seeds',
    translation: 'Used Pumpkin Seeds',
  },
  {
    stat: 'u-melon_seeds',
    translation: 'Used Melon Seeds',
  },
  {
    stat: 'u-beef',
    translation: 'Used Raw Beef',
  },
  {
    stat: 'u-cooked_beef',
    translation: 'Used Steak',
  },
  {
    stat: 'u-chicken',
    translation: 'Used Raw Chicken',
  },
  {
    stat: 'u-cooked_chicken',
    translation: 'Used Cooked Chicken',
  },
  {
    stat: 'u-rotten_flesh',
    translation: 'Used Rotten Flesh',
  },
  {
    stat: 'u-ender_pearl',
    translation: 'Used Ender Pearl',
  },
  {
    stat: 'u-blaze_rod',
    translation: 'Used Blaze Rod',
  },
  {
    stat: 'u-ghast_tear',
    translation: 'Used Ghast Tear',
  },
  {
    stat: 'u-gold_nugget',
    translation: 'Used Gold Nugget',
  },
  {
    stat: 'u-nether_wart',
    translation: 'Used Nether Wart',
  },
  {
    stat: 'u-potion',
    translation: 'Used Potion',
  },
  {
    stat: 'u-glass_bottle',
    translation: 'Used Glass Bottle',
  },
  {
    stat: 'u-spider_eye',
    translation: 'Used Spider Eye',
  },
  {
    stat: 'u-fermented_spider_eye',
    translation: 'Used Fermented Spider Eye',
  },
  {
    stat: 'u-blaze_powder',
    translation: 'Used Blaze Powder',
  },
  {
    stat: 'u-magma_cream',
    translation: 'Used Magma Cream',
  },
  {
    stat: 'u-brewing_stand',
    translation: 'Used Brewing Stand',
  },
  {
    stat: 'u-cauldron',
    translation: 'Used Cauldron',
  },
  {
    stat: 'u-ender_eye',
    translation: 'Used Eye of Ender',
  },
  {
    stat: 'u-glistering_melon_slice',
    translation: 'Used Glistering Melon Slice',
  },
  {
    stat: 'u-allay_spawn_egg',
    translation: 'Used Allay Spawn Egg',
  },
  {
    stat: 'u-axolotl_spawn_egg',
    translation: 'Used Axolotl Spawn Egg',
  },
  {
    stat: 'u-bat_spawn_egg',
    translation: 'Used Bat Spawn Egg',
  },
  {
    stat: 'u-bee_spawn_egg',
    translation: 'Used Bee Spawn Egg',
  },
  {
    stat: 'u-blaze_spawn_egg',
    translation: 'Used Blaze Spawn Egg',
  },
  {
    stat: 'u-cat_spawn_egg',
    translation: 'Used Cat Spawn Egg',
  },
  {
    stat: 'u-cave_spider_spawn_egg',
    translation: 'Used Cave Spider Spawn Egg',
  },
  {
    stat: 'u-chicken_spawn_egg',
    translation: 'Used Chicken Spawn Egg',
  },
  {
    stat: 'u-cod_spawn_egg',
    translation: 'Used Cod Spawn Egg',
  },
  {
    stat: 'u-cow_spawn_egg',
    translation: 'Used Cow Spawn Egg',
  },
  {
    stat: 'u-creeper_spawn_egg',
    translation: 'Used Creeper Spawn Egg',
  },
  {
    stat: 'u-dolphin_spawn_egg',
    translation: 'Used Dolphin Spawn Egg',
  },
  {
    stat: 'u-donkey_spawn_egg',
    translation: 'Used Donkey Spawn Egg',
  },
  {
    stat: 'u-drowned_spawn_egg',
    translation: 'Used Drowned Spawn Egg',
  },
  {
    stat: 'u-elder_guardian_spawn_egg',
    translation: 'Used Elder Guardian Spawn Egg',
  },
  {
    stat: 'u-enderman_spawn_egg',
    translation: 'Used Enderman Spawn Egg',
  },
  {
    stat: 'u-endermite_spawn_egg',
    translation: 'Used Endermite Spawn Egg',
  },
  {
    stat: 'u-evoker_spawn_egg',
    translation: 'Used Evoker Spawn Egg',
  },
  {
    stat: 'u-fox_spawn_egg',
    translation: 'Used Fox Spawn Egg',
  },
  {
    stat: 'u-frog_spawn_egg',
    translation: 'Used Frog Spawn Egg',
  },
  {
    stat: 'u-ghast_spawn_egg',
    translation: 'Used Ghast Spawn Egg',
  },
  {
    stat: 'u-glow_squid_spawn_egg',
    translation: 'Used Glow Squid Spawn Egg',
  },
  {
    stat: 'u-goat_spawn_egg',
    translation: 'Used Goat Spawn Egg',
  },
  {
    stat: 'u-guardian_spawn_egg',
    translation: 'Used Guardian Spawn Egg',
  },
  {
    stat: 'u-hoglin_spawn_egg',
    translation: 'Used Hoglin Spawn Egg',
  },
  {
    stat: 'u-horse_spawn_egg',
    translation: 'Used Horse Spawn Egg',
  },
  {
    stat: 'u-husk_spawn_egg',
    translation: 'Used Husk Spawn Egg',
  },
  {
    stat: 'u-llama_spawn_egg',
    translation: 'Used Llama Spawn Egg',
  },
  {
    stat: 'u-magma_cube_spawn_egg',
    translation: 'Used Magma Cube Spawn Egg',
  },
  {
    stat: 'u-mooshroom_spawn_egg',
    translation: 'Used Mooshroom Spawn Egg',
  },
  {
    stat: 'u-mule_spawn_egg',
    translation: 'Used Mule Spawn Egg',
  },
  {
    stat: 'u-ocelot_spawn_egg',
    translation: 'Used Ocelot Spawn Egg',
  },
  {
    stat: 'u-panda_spawn_egg',
    translation: 'Used Panda Spawn Egg',
  },
  {
    stat: 'u-parrot_spawn_egg',
    translation: 'Used Parrot Spawn Egg',
  },
  {
    stat: 'u-phantom_spawn_egg',
    translation: 'Used Phantom Spawn Egg',
  },
  {
    stat: 'u-pig_spawn_egg',
    translation: 'Used Pig Spawn Egg',
  },
  {
    stat: 'u-piglin_spawn_egg',
    translation: 'Used Piglin Spawn Egg',
  },
  {
    stat: 'u-piglin_brute_spawn_egg',
    translation: 'Used Piglin Brute Spawn Egg',
  },
  {
    stat: 'u-pillager_spawn_egg',
    translation: 'Used Pillager Spawn Egg',
  },
  {
    stat: 'u-polar_bear_spawn_egg',
    translation: 'Used Polar Bear Spawn Egg',
  },
  {
    stat: 'u-pufferfish_spawn_egg',
    translation: 'Used Pufferfish Spawn Egg',
  },
  {
    stat: 'u-rabbit_spawn_egg',
    translation: 'Used Rabbit Spawn Egg',
  },
  {
    stat: 'u-ravager_spawn_egg',
    translation: 'Used Ravager Spawn Egg',
  },
  {
    stat: 'u-salmon_spawn_egg',
    translation: 'Used Salmon Spawn Egg',
  },
  {
    stat: 'u-sheep_spawn_egg',
    translation: 'Used Sheep Spawn Egg',
  },
  {
    stat: 'u-shulker_spawn_egg',
    translation: 'Used Shulker Spawn Egg',
  },
  {
    stat: 'u-silverfish_spawn_egg',
    translation: 'Used Silverfish Spawn Egg',
  },
  {
    stat: 'u-skeleton_spawn_egg',
    translation: 'Used Skeleton Spawn Egg',
  },
  {
    stat: 'u-skeleton_horse_spawn_egg',
    translation: 'Used Skeleton Horse Spawn Egg',
  },
  {
    stat: 'u-slime_spawn_egg',
    translation: 'Used Slime Spawn Egg',
  },
  {
    stat: 'u-spider_spawn_egg',
    translation: 'Used Spider Spawn Egg',
  },
  {
    stat: 'u-squid_spawn_egg',
    translation: 'Used Squid Spawn Egg',
  },
  {
    stat: 'u-stray_spawn_egg',
    translation: 'Used Stray Spawn Egg',
  },
  {
    stat: 'u-strider_spawn_egg',
    translation: 'Used Strider Spawn Egg',
  },
  {
    stat: 'u-tadpole_spawn_egg',
    translation: 'Used Tadpole Spawn Egg',
  },
  {
    stat: 'u-trader_llama_spawn_egg',
    translation: 'Used Trader Llama Spawn Egg',
  },
  {
    stat: 'u-tropical_fish_spawn_egg',
    translation: 'Used Tropical Fish Spawn Egg',
  },
  {
    stat: 'u-turtle_spawn_egg',
    translation: 'Used Turtle Spawn Egg',
  },
  {
    stat: 'u-vex_spawn_egg',
    translation: 'Used Vex Spawn Egg',
  },
  {
    stat: 'u-villager_spawn_egg',
    translation: 'Used Villager Spawn Egg',
  },
  {
    stat: 'u-vindicator_spawn_egg',
    translation: 'Used Vindicator Spawn Egg',
  },
  {
    stat: 'u-wandering_trader_spawn_egg',
    translation: 'Used Wandering Trader Spawn Egg',
  },
  {
    stat: 'u-warden_spawn_egg',
    translation: 'Used Warden Spawn Egg',
  },
  {
    stat: 'u-witch_spawn_egg',
    translation: 'Used Witch Spawn Egg',
  },
  {
    stat: 'u-wither_skeleton_spawn_egg',
    translation: 'Used Wither Skeleton Spawn Egg',
  },
  {
    stat: 'u-wolf_spawn_egg',
    translation: 'Used Wolf Spawn Egg',
  },
  {
    stat: 'u-zoglin_spawn_egg',
    translation: 'Used Zoglin Spawn Egg',
  },
  {
    stat: 'u-zombie_spawn_egg',
    translation: 'Used Zombie Spawn Egg',
  },
  {
    stat: 'u-zombie_horse_spawn_egg',
    translation: 'Used Zombie Horse Spawn Egg',
  },
  {
    stat: 'u-zombie_villager_spawn_egg',
    translation: 'Used Zombie Villager Spawn Egg',
  },
  {
    stat: 'u-zombified_piglin_spawn_egg',
    translation: 'Used Zombified Piglin Spawn Egg',
  },
  {
    stat: 'u-experience_bottle',
    translation: "Used Bottle o' Enchanting",
  },
  {
    stat: 'u-fire_charge',
    translation: 'Used Fire Charge',
  },
  {
    stat: 'u-writable_book',
    translation: 'Used Book and Quill',
  },
  {
    stat: 'u-written_book',
    translation: 'Used Written Book',
  },
  {
    stat: 'u-item_frame',
    translation: 'Used Item Frame',
  },
  {
    stat: 'u-glow_item_frame',
    translation: 'Used Glow Item Frame',
  },
  {
    stat: 'u-flower_pot',
    translation: 'Used Flower Pot',
  },
  {
    stat: 'u-carrot',
    translation: 'Used Carrot',
  },
  {
    stat: 'u-potato',
    translation: 'Used Potato',
  },
  {
    stat: 'u-baked_potato',
    translation: 'Used Baked Potato',
  },
  {
    stat: 'u-poisonous_potato',
    translation: 'Used Poisonous Potato',
  },
  {
    stat: 'u-map',
    translation: 'Used Empty Map',
  },
  {
    stat: 'u-golden_carrot',
    translation: 'Used Golden Carrot',
  },
  {
    stat: 'u-skeleton_skull',
    translation: 'Used Skeleton Skull',
  },
  {
    stat: 'u-wither_skeleton_skull',
    translation: 'Used Wither Skeleton Skull',
  },
  {
    stat: 'u-player_head',
    translation: 'Used Player Head',
  },
  {
    stat: 'u-zombie_head',
    translation: 'Used Zombie Head',
  },
  {
    stat: 'u-creeper_head',
    translation: 'Used Creeper Head',
  },
  {
    stat: 'u-dragon_head',
    translation: 'Used Dragon Head',
  },
  {
    stat: 'u-nether_star',
    translation: 'Used Nether Star',
  },
  {
    stat: 'u-pumpkin_pie',
    translation: 'Used Pumpkin Pie',
  },
  {
    stat: 'u-firework_rocket',
    translation: 'Used Firework Rocket',
  },
  {
    stat: 'u-firework_star',
    translation: 'Used Firework Star',
  },
  {
    stat: 'u-enchanted_book',
    translation: 'Used Enchanted Book',
  },
  {
    stat: 'u-nether_brick',
    translation: 'Used Nether Brick',
  },
  {
    stat: 'u-prismarine_shard',
    translation: 'Used Prismarine Shard',
  },
  {
    stat: 'u-prismarine_crystals',
    translation: 'Used Prismarine Crystals',
  },
  {
    stat: 'u-rabbit',
    translation: 'Used Raw Rabbit',
  },
  {
    stat: 'u-cooked_rabbit',
    translation: 'Used Cooked Rabbit',
  },
  {
    stat: 'u-rabbit_stew',
    translation: 'Used Rabbit Stew',
  },
  {
    stat: 'u-rabbit_foot',
    translation: "Used Rabbit's Foot",
  },
  {
    stat: 'u-rabbit_hide',
    translation: 'Used Rabbit Hide',
  },
  {
    stat: 'u-armor_stand',
    translation: 'Used Armor Stand',
  },
  {
    stat: 'u-iron_horse_armor',
    translation: 'Used Iron Horse Armor',
  },
  {
    stat: 'u-golden_horse_armor',
    translation: 'Used Golden Horse Armor',
  },
  {
    stat: 'u-diamond_horse_armor',
    translation: 'Used Diamond Horse Armor',
  },
  {
    stat: 'u-leather_horse_armor',
    translation: 'Used Leather Horse Armor',
  },
  {
    stat: 'u-lead',
    translation: 'Used Lead',
  },
  {
    stat: 'u-name_tag',
    translation: 'Used Name Tag',
  },
  {
    stat: 'u-command_block_minecart',
    translation: 'Used Minecart with Command Block',
  },
  {
    stat: 'u-mutton',
    translation: 'Used Raw Mutton',
  },
  {
    stat: 'u-cooked_mutton',
    translation: 'Used Cooked Mutton',
  },
  {
    stat: 'u-white_banner',
    translation: 'Used White Banner',
  },
  {
    stat: 'u-orange_banner',
    translation: 'Used Orange Banner',
  },
  {
    stat: 'u-magenta_banner',
    translation: 'Used Magenta Banner',
  },
  {
    stat: 'u-light_blue_banner',
    translation: 'Used Light Blue Banner',
  },
  {
    stat: 'u-yellow_banner',
    translation: 'Used Yellow Banner',
  },
  {
    stat: 'u-lime_banner',
    translation: 'Used Lime Banner',
  },
  {
    stat: 'u-pink_banner',
    translation: 'Used Pink Banner',
  },
  {
    stat: 'u-gray_banner',
    translation: 'Used Gray Banner',
  },
  {
    stat: 'u-light_gray_banner',
    translation: 'Used Light Gray Banner',
  },
  {
    stat: 'u-cyan_banner',
    translation: 'Used Cyan Banner',
  },
  {
    stat: 'u-purple_banner',
    translation: 'Used Purple Banner',
  },
  {
    stat: 'u-blue_banner',
    translation: 'Used Blue Banner',
  },
  {
    stat: 'u-brown_banner',
    translation: 'Used Brown Banner',
  },
  {
    stat: 'u-green_banner',
    translation: 'Used Green Banner',
  },
  {
    stat: 'u-red_banner',
    translation: 'Used Red Banner',
  },
  {
    stat: 'u-black_banner',
    translation: 'Used Black Banner',
  },
  {
    stat: 'u-end_crystal',
    translation: 'Used End Crystal',
  },
  {
    stat: 'u-chorus_fruit',
    translation: 'Used Chorus Fruit',
  },
  {
    stat: 'u-popped_chorus_fruit',
    translation: 'Used Popped Chorus Fruit',
  },
  {
    stat: 'u-beetroot',
    translation: 'Used Beetroot',
  },
  {
    stat: 'u-beetroot_seeds',
    translation: 'Used Beetroot Seeds',
  },
  {
    stat: 'u-beetroot_soup',
    translation: 'Used Beetroot Soup',
  },
  {
    stat: 'u-dragon_breath',
    translation: "Used Dragon's Breath",
  },
  {
    stat: 'u-splash_potion',
    translation: 'Used Splash Potion',
  },
  {
    stat: 'u-spectral_arrow',
    translation: 'Used Spectral Arrow',
  },
  {
    stat: 'u-tipped_arrow',
    translation: 'Used Tipped Arrow',
  },
  {
    stat: 'u-lingering_potion',
    translation: 'Used Lingering Potion',
  },
  {
    stat: 'u-shield',
    translation: 'Used Shield',
  },
  {
    stat: 'u-totem_of_undying',
    translation: 'Used Totem of Undying',
  },
  {
    stat: 'u-shulker_shell',
    translation: 'Used Shulker Shell',
  },
  {
    stat: 'u-iron_nugget',
    translation: 'Used Iron Nugget',
  },
  {
    stat: 'u-knowledge_book',
    translation: 'Used Knowledge Book',
  },
  {
    stat: 'u-debug_stick',
    translation: 'Used Debug Stick',
  },
  {
    stat: 'u-music_disc_13',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_cat',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_blocks',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_chirp',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_far',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_mall',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_mellohi',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_stal',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_strad',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_ward',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_11',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_wait',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_otherside',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_5',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-music_disc_pigstep',
    translation: 'Used Music Disc',
  },
  {
    stat: 'u-disc_fragment_5',
    translation: 'Used Disc Fragment',
  },
  {
    stat: 'u-trident',
    translation: 'Used Trident',
  },
  {
    stat: 'u-phantom_membrane',
    translation: 'Used Phantom Membrane',
  },
  {
    stat: 'u-nautilus_shell',
    translation: 'Used Nautilus Shell',
  },
  {
    stat: 'u-heart_of_the_sea',
    translation: 'Used Heart of the Sea',
  },
  {
    stat: 'u-crossbow',
    translation: 'Used Crossbow',
  },
  {
    stat: 'u-suspicious_stew',
    translation: 'Used Suspicious Stew',
  },
  {
    stat: 'u-loom',
    translation: 'Used Loom',
  },
  {
    stat: 'u-flower_banner_pattern',
    translation: 'Used Banner Pattern',
  },
  {
    stat: 'u-creeper_banner_pattern',
    translation: 'Used Banner Pattern',
  },
  {
    stat: 'u-skull_banner_pattern',
    translation: 'Used Banner Pattern',
  },
  {
    stat: 'u-mojang_banner_pattern',
    translation: 'Used Banner Pattern',
  },
  {
    stat: 'u-globe_banner_pattern',
    translation: 'Used Banner Pattern',
  },
  {
    stat: 'u-piglin_banner_pattern',
    translation: 'Used Banner Pattern',
  },
  {
    stat: 'u-goat_horn',
    translation: 'Used Goat Horn',
  },
  {
    stat: 'u-composter',
    translation: 'Used Composter',
  },
  {
    stat: 'u-barrel',
    translation: 'Used Barrel',
  },
  {
    stat: 'u-smoker',
    translation: 'Used Smoker',
  },
  {
    stat: 'u-blast_furnace',
    translation: 'Used Blast Furnace',
  },
  {
    stat: 'u-cartography_table',
    translation: 'Used Cartography Table',
  },
  {
    stat: 'u-fletching_table',
    translation: 'Used Fletching Table',
  },
  {
    stat: 'u-grindstone',
    translation: 'Used Grindstone',
  },
  {
    stat: 'u-smithing_table',
    translation: 'Used Smithing Table',
  },
  {
    stat: 'u-stonecutter',
    translation: 'Used Stonecutter',
  },
  {
    stat: 'u-bell',
    translation: 'Used Bell',
  },
  {
    stat: 'u-lantern',
    translation: 'Used Lantern',
  },
  {
    stat: 'u-soul_lantern',
    translation: 'Used Soul Lantern',
  },
  {
    stat: 'u-sweet_berries',
    translation: 'Used Sweet Berries',
  },
  {
    stat: 'u-glow_berries',
    translation: 'Used Glow Berries',
  },
  {
    stat: 'u-campfire',
    translation: 'Used Campfire',
  },
  {
    stat: 'u-soul_campfire',
    translation: 'Used Soul Campfire',
  },
  {
    stat: 'u-shroomlight',
    translation: 'Used Shroomlight',
  },
  {
    stat: 'u-honeycomb',
    translation: 'Used Honeycomb',
  },
  {
    stat: 'u-bee_nest',
    translation: 'Used Bee Nest',
  },
  {
    stat: 'u-beehive',
    translation: 'Used Beehive',
  },
  {
    stat: 'u-honey_bottle',
    translation: 'Used Honey Bottle',
  },
  {
    stat: 'u-honeycomb_block',
    translation: 'Used Honeycomb Block',
  },
  {
    stat: 'u-lodestone',
    translation: 'Used Lodestone',
  },
  {
    stat: 'u-crying_obsidian',
    translation: 'Used Crying Obsidian',
  },
  {
    stat: 'u-blackstone',
    translation: 'Used Blackstone',
  },
  {
    stat: 'u-blackstone_slab',
    translation: 'Used Blackstone Slab',
  },
  {
    stat: 'u-blackstone_stairs',
    translation: 'Used Blackstone Stairs',
  },
  {
    stat: 'u-gilded_blackstone',
    translation: 'Used Gilded Blackstone',
  },
  {
    stat: 'u-polished_blackstone',
    translation: 'Used Polished Blackstone',
  },
  {
    stat: 'u-polished_blackstone_slab',
    translation: 'Used Polished Blackstone Slab',
  },
  {
    stat: 'u-polished_blackstone_stairs',
    translation: 'Used Polished Blackstone Stairs',
  },
  {
    stat: 'u-chiseled_polished_blackstone',
    translation: 'Used Chiseled Polished Blackstone',
  },
  {
    stat: 'u-polished_blackstone_bricks',
    translation: 'Used Polished Blackstone Bricks',
  },
  {
    stat: 'u-polished_blackstone_brick_slab',
    translation: 'Used Polished Blackstone Brick Slab',
  },
  {
    stat: 'u-polished_blackstone_brick_stairs',
    translation: 'Used Polished Blackstone Brick Stairs',
  },
  {
    stat: 'u-cracked_polished_blackstone_bricks',
    translation: 'Used Cracked Polished Blackstone Bricks',
  },
  {
    stat: 'u-respawn_anchor',
    translation: 'Used Respawn Anchor',
  },
  {
    stat: 'u-candle',
    translation: 'Used Candle',
  },
  {
    stat: 'u-white_candle',
    translation: 'Used White Candle',
  },
  {
    stat: 'u-orange_candle',
    translation: 'Used Orange Candle',
  },
  {
    stat: 'u-magenta_candle',
    translation: 'Used Magenta Candle',
  },
  {
    stat: 'u-light_blue_candle',
    translation: 'Used Light Blue Candle',
  },
  {
    stat: 'u-yellow_candle',
    translation: 'Used Yellow Candle',
  },
  {
    stat: 'u-lime_candle',
    translation: 'Used Lime Candle',
  },
  {
    stat: 'u-pink_candle',
    translation: 'Used Pink Candle',
  },
  {
    stat: 'u-gray_candle',
    translation: 'Used Gray Candle',
  },
  {
    stat: 'u-light_gray_candle',
    translation: 'Used Light Gray Candle',
  },
  {
    stat: 'u-cyan_candle',
    translation: 'Used Cyan Candle',
  },
  {
    stat: 'u-purple_candle',
    translation: 'Used Purple Candle',
  },
  {
    stat: 'u-blue_candle',
    translation: 'Used Blue Candle',
  },
  {
    stat: 'u-brown_candle',
    translation: 'Used Brown Candle',
  },
  {
    stat: 'u-green_candle',
    translation: 'Used Green Candle',
  },
  {
    stat: 'u-red_candle',
    translation: 'Used Red Candle',
  },
  {
    stat: 'u-black_candle',
    translation: 'Used Black Candle',
  },
  {
    stat: 'u-small_amethyst_bud',
    translation: 'Used Small Amethyst Bud',
  },
  {
    stat: 'u-medium_amethyst_bud',
    translation: 'Used Medium Amethyst Bud',
  },
  {
    stat: 'u-large_amethyst_bud',
    translation: 'Used Large Amethyst Bud',
  },
  {
    stat: 'u-amethyst_cluster',
    translation: 'Used Amethyst Cluster',
  },
  {
    stat: 'u-pointed_dripstone',
    translation: 'Used Pointed Dripstone',
  },
  {
    stat: 'u-ochre_froglight',
    translation: 'Used Ochre Froglight',
  },
  {
    stat: 'u-verdant_froglight',
    translation: 'Used Verdant Froglight',
  },
  {
    stat: 'u-pearlescent_froglight',
    translation: 'Used Pearlescent Froglight',
  },
  {
    stat: 'u-frogspawn',
    translation: 'Used Frogspawn',
  },
  {
    stat: 'u-echo_shard',
    translation: 'Used Echo Shard',
  },
  {
    stat: 'b-air',
    translation: 'Broken Air',
  },
  {
    stat: 'b-stone',
    translation: 'Broken Stone',
  },
  {
    stat: 'b-granite',
    translation: 'Broken Granite',
  },
  {
    stat: 'b-polished_granite',
    translation: 'Broken Polished Granite',
  },
  {
    stat: 'b-diorite',
    translation: 'Broken Diorite',
  },
  {
    stat: 'b-polished_diorite',
    translation: 'Broken Polished Diorite',
  },
  {
    stat: 'b-andesite',
    translation: 'Broken Andesite',
  },
  {
    stat: 'b-polished_andesite',
    translation: 'Broken Polished Andesite',
  },
  {
    stat: 'b-deepslate',
    translation: 'Broken Deepslate',
  },
  {
    stat: 'b-cobbled_deepslate',
    translation: 'Broken Cobbled Deepslate',
  },
  {
    stat: 'b-polished_deepslate',
    translation: 'Broken Polished Deepslate',
  },
  {
    stat: 'b-calcite',
    translation: 'Broken Calcite',
  },
  {
    stat: 'b-tuff',
    translation: 'Broken Tuff',
  },
  {
    stat: 'b-dripstone_block',
    translation: 'Broken Dripstone Block',
  },
  {
    stat: 'b-grass_block',
    translation: 'Broken Grass Block',
  },
  {
    stat: 'b-dirt',
    translation: 'Broken Dirt',
  },
  {
    stat: 'b-coarse_dirt',
    translation: 'Broken Coarse Dirt',
  },
  {
    stat: 'b-podzol',
    translation: 'Broken Podzol',
  },
  {
    stat: 'b-rooted_dirt',
    translation: 'Broken Rooted Dirt',
  },
  {
    stat: 'b-mud',
    translation: 'Broken Mud',
  },
  {
    stat: 'b-crimson_nylium',
    translation: 'Broken Crimson Nylium',
  },
  {
    stat: 'b-warped_nylium',
    translation: 'Broken Warped Nylium',
  },
  {
    stat: 'b-cobblestone',
    translation: 'Broken Cobblestone',
  },
  {
    stat: 'b-oak_planks',
    translation: 'Broken Oak Planks',
  },
  {
    stat: 'b-spruce_planks',
    translation: 'Broken Spruce Planks',
  },
  {
    stat: 'b-birch_planks',
    translation: 'Broken Birch Planks',
  },
  {
    stat: 'b-jungle_planks',
    translation: 'Broken Jungle Planks',
  },
  {
    stat: 'b-acacia_planks',
    translation: 'Broken Acacia Planks',
  },
  {
    stat: 'b-dark_oak_planks',
    translation: 'Broken Dark Oak Planks',
  },
  {
    stat: 'b-mangrove_planks',
    translation: 'Broken Mangrove Planks',
  },
  {
    stat: 'b-crimson_planks',
    translation: 'Broken Crimson Planks',
  },
  {
    stat: 'b-warped_planks',
    translation: 'Broken Warped Planks',
  },
  {
    stat: 'b-oak_sapling',
    translation: 'Broken Oak Sapling',
  },
  {
    stat: 'b-spruce_sapling',
    translation: 'Broken Spruce Sapling',
  },
  {
    stat: 'b-birch_sapling',
    translation: 'Broken Birch Sapling',
  },
  {
    stat: 'b-jungle_sapling',
    translation: 'Broken Jungle Sapling',
  },
  {
    stat: 'b-acacia_sapling',
    translation: 'Broken Acacia Sapling',
  },
  {
    stat: 'b-dark_oak_sapling',
    translation: 'Broken Dark Oak Sapling',
  },
  {
    stat: 'b-mangrove_propagule',
    translation: 'Broken Mangrove Propagule',
  },
  {
    stat: 'b-bedrock',
    translation: 'Broken Bedrock',
  },
  {
    stat: 'b-sand',
    translation: 'Broken Sand',
  },
  {
    stat: 'b-red_sand',
    translation: 'Broken Red Sand',
  },
  {
    stat: 'b-gravel',
    translation: 'Broken Gravel',
  },
  {
    stat: 'b-coal_ore',
    translation: 'Broken Coal Ore',
  },
  {
    stat: 'b-deepslate_coal_ore',
    translation: 'Broken Deepslate Coal Ore',
  },
  {
    stat: 'b-iron_ore',
    translation: 'Broken Iron Ore',
  },
  {
    stat: 'b-deepslate_iron_ore',
    translation: 'Broken Deepslate Iron Ore',
  },
  {
    stat: 'b-copper_ore',
    translation: 'Broken Copper Ore',
  },
  {
    stat: 'b-deepslate_copper_ore',
    translation: 'Broken Deepslate Copper Ore',
  },
  {
    stat: 'b-gold_ore',
    translation: 'Broken Gold Ore',
  },
  {
    stat: 'b-deepslate_gold_ore',
    translation: 'Broken Deepslate Gold Ore',
  },
  {
    stat: 'b-redstone_ore',
    translation: 'Broken Redstone Ore',
  },
  {
    stat: 'b-deepslate_redstone_ore',
    translation: 'Broken Deepslate Redstone Ore',
  },
  {
    stat: 'b-emerald_ore',
    translation: 'Broken Emerald Ore',
  },
  {
    stat: 'b-deepslate_emerald_ore',
    translation: 'Broken Deepslate Emerald Ore',
  },
  {
    stat: 'b-lapis_ore',
    translation: 'Broken Lapis Lazuli Ore',
  },
  {
    stat: 'b-deepslate_lapis_ore',
    translation: 'Broken Deepslate Lapis Lazuli Ore',
  },
  {
    stat: 'b-diamond_ore',
    translation: 'Broken Diamond Ore',
  },
  {
    stat: 'b-deepslate_diamond_ore',
    translation: 'Broken Deepslate Diamond Ore',
  },
  {
    stat: 'b-nether_gold_ore',
    translation: 'Broken Nether Gold Ore',
  },
  {
    stat: 'b-nether_quartz_ore',
    translation: 'Broken Nether Quartz Ore',
  },
  {
    stat: 'b-ancient_debris',
    translation: 'Broken Ancient Debris',
  },
  {
    stat: 'b-coal_block',
    translation: 'Broken Block of Coal',
  },
  {
    stat: 'b-raw_iron_block',
    translation: 'Broken Block of Raw Iron',
  },
  {
    stat: 'b-raw_copper_block',
    translation: 'Broken Block of Raw Copper',
  },
  {
    stat: 'b-raw_gold_block',
    translation: 'Broken Block of Raw Gold',
  },
  {
    stat: 'b-amethyst_block',
    translation: 'Broken Block of Amethyst',
  },
  {
    stat: 'b-budding_amethyst',
    translation: 'Broken Budding Amethyst',
  },
  {
    stat: 'b-iron_block',
    translation: 'Broken Block of Iron',
  },
  {
    stat: 'b-copper_block',
    translation: 'Broken Block of Copper',
  },
  {
    stat: 'b-gold_block',
    translation: 'Broken Block of Gold',
  },
  {
    stat: 'b-diamond_block',
    translation: 'Broken Block of Diamond',
  },
  {
    stat: 'b-netherite_block',
    translation: 'Broken Block of Netherite',
  },
  {
    stat: 'b-exposed_copper',
    translation: 'Broken Exposed Copper',
  },
  {
    stat: 'b-weathered_copper',
    translation: 'Broken Weathered Copper',
  },
  {
    stat: 'b-oxidized_copper',
    translation: 'Broken Oxidized Copper',
  },
  {
    stat: 'b-cut_copper',
    translation: 'Broken Cut Copper',
  },
  {
    stat: 'b-exposed_cut_copper',
    translation: 'Broken Exposed Cut Copper',
  },
  {
    stat: 'b-weathered_cut_copper',
    translation: 'Broken Weathered Cut Copper',
  },
  {
    stat: 'b-oxidized_cut_copper',
    translation: 'Broken Oxidized Cut Copper',
  },
  {
    stat: 'b-cut_copper_stairs',
    translation: 'Broken Cut Copper Stairs',
  },
  {
    stat: 'b-exposed_cut_copper_stairs',
    translation: 'Broken Exposed Cut Copper Stairs',
  },
  {
    stat: 'b-weathered_cut_copper_stairs',
    translation: 'Broken Weathered Cut Copper Stairs',
  },
  {
    stat: 'b-oxidized_cut_copper_stairs',
    translation: 'Broken Oxidized Cut Copper Stairs',
  },
  {
    stat: 'b-cut_copper_slab',
    translation: 'Broken Cut Copper Slab',
  },
  {
    stat: 'b-exposed_cut_copper_slab',
    translation: 'Broken Exposed Cut Copper Slab',
  },
  {
    stat: 'b-weathered_cut_copper_slab',
    translation: 'Broken Weathered Cut Copper Slab',
  },
  {
    stat: 'b-oxidized_cut_copper_slab',
    translation: 'Broken Oxidized Cut Copper Slab',
  },
  {
    stat: 'b-waxed_copper_block',
    translation: 'Broken Waxed Block of Copper',
  },
  {
    stat: 'b-waxed_exposed_copper',
    translation: 'Broken Waxed Exposed Copper',
  },
  {
    stat: 'b-waxed_weathered_copper',
    translation: 'Broken Waxed Weathered Copper',
  },
  {
    stat: 'b-waxed_oxidized_copper',
    translation: 'Broken Waxed Oxidized Copper',
  },
  {
    stat: 'b-waxed_cut_copper',
    translation: 'Broken Waxed Cut Copper',
  },
  {
    stat: 'b-waxed_exposed_cut_copper',
    translation: 'Broken Waxed Exposed Cut Copper',
  },
  {
    stat: 'b-waxed_weathered_cut_copper',
    translation: 'Broken Waxed Weathered Cut Copper',
  },
  {
    stat: 'b-waxed_oxidized_cut_copper',
    translation: 'Broken Waxed Oxidized Cut Copper',
  },
  {
    stat: 'b-waxed_cut_copper_stairs',
    translation: 'Broken Waxed Cut Copper Stairs',
  },
  {
    stat: 'b-waxed_exposed_cut_copper_stairs',
    translation: 'Broken Waxed Exposed Cut Copper Stairs',
  },
  {
    stat: 'b-waxed_weathered_cut_copper_stairs',
    translation: 'Broken Waxed Weathered Cut Copper Stairs',
  },
  {
    stat: 'b-waxed_oxidized_cut_copper_stairs',
    translation: 'Broken Waxed Oxidized Cut Copper Stairs',
  },
  {
    stat: 'b-waxed_cut_copper_slab',
    translation: 'Broken Waxed Cut Copper Slab',
  },
  {
    stat: 'b-waxed_exposed_cut_copper_slab',
    translation: 'Broken Waxed Exposed Cut Copper Slab',
  },
  {
    stat: 'b-waxed_weathered_cut_copper_slab',
    translation: 'Broken Waxed Weathered Cut Copper Slab',
  },
  {
    stat: 'b-waxed_oxidized_cut_copper_slab',
    translation: 'Broken Waxed Oxidized Cut Copper Slab',
  },
  {
    stat: 'b-oak_log',
    translation: 'Broken Oak Log',
  },
  {
    stat: 'b-spruce_log',
    translation: 'Broken Spruce Log',
  },
  {
    stat: 'b-birch_log',
    translation: 'Broken Birch Log',
  },
  {
    stat: 'b-jungle_log',
    translation: 'Broken Jungle Log',
  },
  {
    stat: 'b-acacia_log',
    translation: 'Broken Acacia Log',
  },
  {
    stat: 'b-dark_oak_log',
    translation: 'Broken Dark Oak Log',
  },
  {
    stat: 'b-mangrove_log',
    translation: 'Broken Mangrove Log',
  },
  {
    stat: 'b-mangrove_roots',
    translation: 'Broken Mangrove Roots',
  },
  {
    stat: 'b-muddy_mangrove_roots',
    translation: 'Broken Muddy Mangrove Roots',
  },
  {
    stat: 'b-crimson_stem',
    translation: 'Broken Crimson Stem',
  },
  {
    stat: 'b-warped_stem',
    translation: 'Broken Warped Stem',
  },
  {
    stat: 'b-stripped_oak_log',
    translation: 'Broken Stripped Oak Log',
  },
  {
    stat: 'b-stripped_spruce_log',
    translation: 'Broken Stripped Spruce Log',
  },
  {
    stat: 'b-stripped_birch_log',
    translation: 'Broken Stripped Birch Log',
  },
  {
    stat: 'b-stripped_jungle_log',
    translation: 'Broken Stripped Jungle Log',
  },
  {
    stat: 'b-stripped_acacia_log',
    translation: 'Broken Stripped Acacia Log',
  },
  {
    stat: 'b-stripped_dark_oak_log',
    translation: 'Broken Stripped Dark Oak Log',
  },
  {
    stat: 'b-stripped_mangrove_log',
    translation: 'Broken Stripped Mangrove Log',
  },
  {
    stat: 'b-stripped_crimson_stem',
    translation: 'Broken Stripped Crimson Stem',
  },
  {
    stat: 'b-stripped_warped_stem',
    translation: 'Broken Stripped Warped Stem',
  },
  {
    stat: 'b-stripped_oak_wood',
    translation: 'Broken Stripped Oak Wood',
  },
  {
    stat: 'b-stripped_spruce_wood',
    translation: 'Broken Stripped Spruce Wood',
  },
  {
    stat: 'b-stripped_birch_wood',
    translation: 'Broken Stripped Birch Wood',
  },
  {
    stat: 'b-stripped_jungle_wood',
    translation: 'Broken Stripped Jungle Wood',
  },
  {
    stat: 'b-stripped_acacia_wood',
    translation: 'Broken Stripped Acacia Wood',
  },
  {
    stat: 'b-stripped_dark_oak_wood',
    translation: 'Broken Stripped Dark Oak Wood',
  },
  {
    stat: 'b-stripped_mangrove_wood',
    translation: 'Broken Stripped Mangrove Wood',
  },
  {
    stat: 'b-stripped_crimson_hyphae',
    translation: 'Broken Stripped Crimson Hyphae',
  },
  {
    stat: 'b-stripped_warped_hyphae',
    translation: 'Broken Stripped Warped Hyphae',
  },
  {
    stat: 'b-oak_wood',
    translation: 'Broken Oak Wood',
  },
  {
    stat: 'b-spruce_wood',
    translation: 'Broken Spruce Wood',
  },
  {
    stat: 'b-birch_wood',
    translation: 'Broken Birch Wood',
  },
  {
    stat: 'b-jungle_wood',
    translation: 'Broken Jungle Wood',
  },
  {
    stat: 'b-acacia_wood',
    translation: 'Broken Acacia Wood',
  },
  {
    stat: 'b-dark_oak_wood',
    translation: 'Broken Dark Oak Wood',
  },
  {
    stat: 'b-mangrove_wood',
    translation: 'Broken Mangrove Wood',
  },
  {
    stat: 'b-crimson_hyphae',
    translation: 'Broken Crimson Hyphae',
  },
  {
    stat: 'b-warped_hyphae',
    translation: 'Broken Warped Hyphae',
  },
  {
    stat: 'b-oak_leaves',
    translation: 'Broken Oak Leaves',
  },
  {
    stat: 'b-spruce_leaves',
    translation: 'Broken Spruce Leaves',
  },
  {
    stat: 'b-birch_leaves',
    translation: 'Broken Birch Leaves',
  },
  {
    stat: 'b-jungle_leaves',
    translation: 'Broken Jungle Leaves',
  },
  {
    stat: 'b-acacia_leaves',
    translation: 'Broken Acacia Leaves',
  },
  {
    stat: 'b-dark_oak_leaves',
    translation: 'Broken Dark Oak Leaves',
  },
  {
    stat: 'b-mangrove_leaves',
    translation: 'Broken Mangrove Leaves',
  },
  {
    stat: 'b-azalea_leaves',
    translation: 'Broken Azalea Leaves',
  },
  {
    stat: 'b-flowering_azalea_leaves',
    translation: 'Broken Flowering Azalea Leaves',
  },
  {
    stat: 'b-sponge',
    translation: 'Broken Sponge',
  },
  {
    stat: 'b-wet_sponge',
    translation: 'Broken Wet Sponge',
  },
  {
    stat: 'b-glass',
    translation: 'Broken Glass',
  },
  {
    stat: 'b-tinted_glass',
    translation: 'Broken Tinted Glass',
  },
  {
    stat: 'b-lapis_block',
    translation: 'Broken Block of Lapis Lazuli',
  },
  {
    stat: 'b-sandstone',
    translation: 'Broken Sandstone',
  },
  {
    stat: 'b-chiseled_sandstone',
    translation: 'Broken Chiseled Sandstone',
  },
  {
    stat: 'b-cut_sandstone',
    translation: 'Broken Cut Sandstone',
  },
  {
    stat: 'b-cobweb',
    translation: 'Broken Cobweb',
  },
  {
    stat: 'b-grass',
    translation: 'Broken Grass',
  },
  {
    stat: 'b-fern',
    translation: 'Broken Fern',
  },
  {
    stat: 'b-azalea',
    translation: 'Broken Azalea',
  },
  {
    stat: 'b-flowering_azalea',
    translation: 'Broken Flowering Azalea',
  },
  {
    stat: 'b-dead_bush',
    translation: 'Broken Dead Bush',
  },
  {
    stat: 'b-seagrass',
    translation: 'Broken Seagrass',
  },
  {
    stat: 'b-sea_pickle',
    translation: 'Broken Sea Pickle',
  },
  {
    stat: 'b-white_wool',
    translation: 'Broken White Wool',
  },
  {
    stat: 'b-orange_wool',
    translation: 'Broken Orange Wool',
  },
  {
    stat: 'b-magenta_wool',
    translation: 'Broken Magenta Wool',
  },
  {
    stat: 'b-light_blue_wool',
    translation: 'Broken Light Blue Wool',
  },
  {
    stat: 'b-yellow_wool',
    translation: 'Broken Yellow Wool',
  },
  {
    stat: 'b-lime_wool',
    translation: 'Broken Lime Wool',
  },
  {
    stat: 'b-pink_wool',
    translation: 'Broken Pink Wool',
  },
  {
    stat: 'b-gray_wool',
    translation: 'Broken Gray Wool',
  },
  {
    stat: 'b-light_gray_wool',
    translation: 'Broken Light Gray Wool',
  },
  {
    stat: 'b-cyan_wool',
    translation: 'Broken Cyan Wool',
  },
  {
    stat: 'b-purple_wool',
    translation: 'Broken Purple Wool',
  },
  {
    stat: 'b-blue_wool',
    translation: 'Broken Blue Wool',
  },
  {
    stat: 'b-brown_wool',
    translation: 'Broken Brown Wool',
  },
  {
    stat: 'b-green_wool',
    translation: 'Broken Green Wool',
  },
  {
    stat: 'b-red_wool',
    translation: 'Broken Red Wool',
  },
  {
    stat: 'b-black_wool',
    translation: 'Broken Black Wool',
  },
  {
    stat: 'b-dandelion',
    translation: 'Broken Dandelion',
  },
  {
    stat: 'b-poppy',
    translation: 'Broken Poppy',
  },
  {
    stat: 'b-blue_orchid',
    translation: 'Broken Blue Orchid',
  },
  {
    stat: 'b-allium',
    translation: 'Broken Allium',
  },
  {
    stat: 'b-azure_bluet',
    translation: 'Broken Azure Bluet',
  },
  {
    stat: 'b-red_tulip',
    translation: 'Broken Red Tulip',
  },
  {
    stat: 'b-orange_tulip',
    translation: 'Broken Orange Tulip',
  },
  {
    stat: 'b-white_tulip',
    translation: 'Broken White Tulip',
  },
  {
    stat: 'b-pink_tulip',
    translation: 'Broken Pink Tulip',
  },
  {
    stat: 'b-oxeye_daisy',
    translation: 'Broken Oxeye Daisy',
  },
  {
    stat: 'b-cornflower',
    translation: 'Broken Cornflower',
  },
  {
    stat: 'b-lily_of_the_valley',
    translation: 'Broken Lily of the Valley',
  },
  {
    stat: 'b-wither_rose',
    translation: 'Broken Wither Rose',
  },
  {
    stat: 'b-spore_blossom',
    translation: 'Broken Spore Blossom',
  },
  {
    stat: 'b-brown_mushroom',
    translation: 'Broken Brown Mushroom',
  },
  {
    stat: 'b-red_mushroom',
    translation: 'Broken Red Mushroom',
  },
  {
    stat: 'b-crimson_fungus',
    translation: 'Broken Crimson Fungus',
  },
  {
    stat: 'b-warped_fungus',
    translation: 'Broken Warped Fungus',
  },
  {
    stat: 'b-crimson_roots',
    translation: 'Broken Crimson Roots',
  },
  {
    stat: 'b-warped_roots',
    translation: 'Broken Warped Roots',
  },
  {
    stat: 'b-nether_sprouts',
    translation: 'Broken Nether Sprouts',
  },
  {
    stat: 'b-weeping_vines',
    translation: 'Broken Weeping Vines',
  },
  {
    stat: 'b-twisting_vines',
    translation: 'Broken Twisting Vines',
  },
  {
    stat: 'b-sugar_cane',
    translation: 'Broken Sugar Cane',
  },
  {
    stat: 'b-kelp',
    translation: 'Broken Kelp',
  },
  {
    stat: 'b-moss_carpet',
    translation: 'Broken Moss Carpet',
  },
  {
    stat: 'b-moss_block',
    translation: 'Broken Moss Block',
  },
  {
    stat: 'b-hanging_roots',
    translation: 'Broken Hanging Roots',
  },
  {
    stat: 'b-big_dripleaf',
    translation: 'Broken Big Dripleaf',
  },
  {
    stat: 'b-small_dripleaf',
    translation: 'Broken Small Dripleaf',
  },
  {
    stat: 'b-bamboo',
    translation: 'Broken Bamboo',
  },
  {
    stat: 'b-oak_slab',
    translation: 'Broken Oak Slab',
  },
  {
    stat: 'b-spruce_slab',
    translation: 'Broken Spruce Slab',
  },
  {
    stat: 'b-birch_slab',
    translation: 'Broken Birch Slab',
  },
  {
    stat: 'b-jungle_slab',
    translation: 'Broken Jungle Slab',
  },
  {
    stat: 'b-acacia_slab',
    translation: 'Broken Acacia Slab',
  },
  {
    stat: 'b-dark_oak_slab',
    translation: 'Broken Dark Oak Slab',
  },
  {
    stat: 'b-mangrove_slab',
    translation: 'Broken Mangrove Slab',
  },
  {
    stat: 'b-crimson_slab',
    translation: 'Broken Crimson Slab',
  },
  {
    stat: 'b-warped_slab',
    translation: 'Broken Warped Slab',
  },
  {
    stat: 'b-stone_slab',
    translation: 'Broken Stone Slab',
  },
  {
    stat: 'b-smooth_stone_slab',
    translation: 'Broken Smooth Stone Slab',
  },
  {
    stat: 'b-sandstone_slab',
    translation: 'Broken Sandstone Slab',
  },
  {
    stat: 'b-cut_sandstone_slab',
    translation: 'Broken Cut Sandstone Slab',
  },
  {
    stat: 'b-petrified_oak_slab',
    translation: 'Broken Petrified Oak Slab',
  },
  {
    stat: 'b-cobblestone_slab',
    translation: 'Broken Cobblestone Slab',
  },
  {
    stat: 'b-brick_slab',
    translation: 'Broken Brick Slab',
  },
  {
    stat: 'b-stone_brick_slab',
    translation: 'Broken Stone Brick Slab',
  },
  {
    stat: 'b-mud_brick_slab',
    translation: 'Broken Mud Brick Slab',
  },
  {
    stat: 'b-nether_brick_slab',
    translation: 'Broken Nether Brick Slab',
  },
  {
    stat: 'b-quartz_slab',
    translation: 'Broken Quartz Slab',
  },
  {
    stat: 'b-red_sandstone_slab',
    translation: 'Broken Red Sandstone Slab',
  },
  {
    stat: 'b-cut_red_sandstone_slab',
    translation: 'Broken Cut Red Sandstone Slab',
  },
  {
    stat: 'b-purpur_slab',
    translation: 'Broken Purpur Slab',
  },
  {
    stat: 'b-prismarine_slab',
    translation: 'Broken Prismarine Slab',
  },
  {
    stat: 'b-prismarine_brick_slab',
    translation: 'Broken Prismarine Brick Slab',
  },
  {
    stat: 'b-dark_prismarine_slab',
    translation: 'Broken Dark Prismarine Slab',
  },
  {
    stat: 'b-smooth_quartz',
    translation: 'Broken Smooth Quartz Block',
  },
  {
    stat: 'b-smooth_red_sandstone',
    translation: 'Broken Smooth Red Sandstone',
  },
  {
    stat: 'b-smooth_sandstone',
    translation: 'Broken Smooth Sandstone',
  },
  {
    stat: 'b-smooth_stone',
    translation: 'Broken Smooth Stone',
  },
  {
    stat: 'b-bricks',
    translation: 'Broken Bricks',
  },
  {
    stat: 'b-bookshelf',
    translation: 'Broken Bookshelf',
  },
  {
    stat: 'b-mossy_cobblestone',
    translation: 'Broken Mossy Cobblestone',
  },
  {
    stat: 'b-obsidian',
    translation: 'Broken Obsidian',
  },
  {
    stat: 'b-torch',
    translation: 'Broken Torch',
  },
  {
    stat: 'b-end_rod',
    translation: 'Broken End Rod',
  },
  {
    stat: 'b-chorus_plant',
    translation: 'Broken Chorus Plant',
  },
  {
    stat: 'b-chorus_flower',
    translation: 'Broken Chorus Flower',
  },
  {
    stat: 'b-purpur_block',
    translation: 'Broken Purpur Block',
  },
  {
    stat: 'b-purpur_pillar',
    translation: 'Broken Purpur Pillar',
  },
  {
    stat: 'b-purpur_stairs',
    translation: 'Broken Purpur Stairs',
  },
  {
    stat: 'b-spawner',
    translation: 'Broken Spawner',
  },
  {
    stat: 'b-chest',
    translation: 'Broken Chest',
  },
  {
    stat: 'b-crafting_table',
    translation: 'Broken Crafting Table',
  },
  {
    stat: 'b-farmland',
    translation: 'Broken Farmland',
  },
  {
    stat: 'b-furnace',
    translation: 'Broken Furnace',
  },
  {
    stat: 'b-ladder',
    translation: 'Broken Ladder',
  },
  {
    stat: 'b-cobblestone_stairs',
    translation: 'Broken Cobblestone Stairs',
  },
  {
    stat: 'b-snow',
    translation: 'Broken Snow',
  },
  {
    stat: 'b-ice',
    translation: 'Broken Ice',
  },
  {
    stat: 'b-snow_block',
    translation: 'Broken Snow Block',
  },
  {
    stat: 'b-cactus',
    translation: 'Broken Cactus',
  },
  {
    stat: 'b-clay',
    translation: 'Broken Clay',
  },
  {
    stat: 'b-jukebox',
    translation: 'Broken Jukebox',
  },
  {
    stat: 'b-oak_fence',
    translation: 'Broken Oak Fence',
  },
  {
    stat: 'b-spruce_fence',
    translation: 'Broken Spruce Fence',
  },
  {
    stat: 'b-birch_fence',
    translation: 'Broken Birch Fence',
  },
  {
    stat: 'b-jungle_fence',
    translation: 'Broken Jungle Fence',
  },
  {
    stat: 'b-acacia_fence',
    translation: 'Broken Acacia Fence',
  },
  {
    stat: 'b-dark_oak_fence',
    translation: 'Broken Dark Oak Fence',
  },
  {
    stat: 'b-mangrove_fence',
    translation: 'Broken Mangrove Fence',
  },
  {
    stat: 'b-crimson_fence',
    translation: 'Broken Crimson Fence',
  },
  {
    stat: 'b-warped_fence',
    translation: 'Broken Warped Fence',
  },
  {
    stat: 'b-pumpkin',
    translation: 'Broken Pumpkin',
  },
  {
    stat: 'b-carved_pumpkin',
    translation: 'Broken Carved Pumpkin',
  },
  {
    stat: 'b-jack_o_lantern',
    translation: "Broken Jack o'Lantern",
  },
  {
    stat: 'b-netherrack',
    translation: 'Broken Netherrack',
  },
  {
    stat: 'b-soul_sand',
    translation: 'Broken Soul Sand',
  },
  {
    stat: 'b-soul_soil',
    translation: 'Broken Soul Soil',
  },
  {
    stat: 'b-basalt',
    translation: 'Broken Basalt',
  },
  {
    stat: 'b-polished_basalt',
    translation: 'Broken Polished Basalt',
  },
  {
    stat: 'b-smooth_basalt',
    translation: 'Broken Smooth Basalt',
  },
  {
    stat: 'b-soul_torch',
    translation: 'Broken Soul Torch',
  },
  {
    stat: 'b-glowstone',
    translation: 'Broken Glowstone',
  },
  {
    stat: 'b-infested_stone',
    translation: 'Broken Infested Stone',
  },
  {
    stat: 'b-infested_cobblestone',
    translation: 'Broken Infested Cobblestone',
  },
  {
    stat: 'b-infested_stone_bricks',
    translation: 'Broken Infested Stone Bricks',
  },
  {
    stat: 'b-infested_mossy_stone_bricks',
    translation: 'Broken Infested Mossy Stone Bricks',
  },
  {
    stat: 'b-infested_cracked_stone_bricks',
    translation: 'Broken Infested Cracked Stone Bricks',
  },
  {
    stat: 'b-infested_chiseled_stone_bricks',
    translation: 'Broken Infested Chiseled Stone Bricks',
  },
  {
    stat: 'b-infested_deepslate',
    translation: 'Broken Infested Deepslate',
  },
  {
    stat: 'b-stone_bricks',
    translation: 'Broken Stone Bricks',
  },
  {
    stat: 'b-mossy_stone_bricks',
    translation: 'Broken Mossy Stone Bricks',
  },
  {
    stat: 'b-cracked_stone_bricks',
    translation: 'Broken Cracked Stone Bricks',
  },
  {
    stat: 'b-chiseled_stone_bricks',
    translation: 'Broken Chiseled Stone Bricks',
  },
  {
    stat: 'b-packed_mud',
    translation: 'Broken Packed Mud',
  },
  {
    stat: 'b-mud_bricks',
    translation: 'Broken Mud Bricks',
  },
  {
    stat: 'b-deepslate_bricks',
    translation: 'Broken Deepslate Bricks',
  },
  {
    stat: 'b-cracked_deepslate_bricks',
    translation: 'Broken Cracked Deepslate Bricks',
  },
  {
    stat: 'b-deepslate_tiles',
    translation: 'Broken Deepslate Tiles',
  },
  {
    stat: 'b-cracked_deepslate_tiles',
    translation: 'Broken Cracked Deepslate Tiles',
  },
  {
    stat: 'b-chiseled_deepslate',
    translation: 'Broken Chiseled Deepslate',
  },
  {
    stat: 'b-reinforced_deepslate',
    translation: 'Broken Reinforced Deepslate',
  },
  {
    stat: 'b-brown_mushroom_block',
    translation: 'Broken Brown Mushroom Block',
  },
  {
    stat: 'b-red_mushroom_block',
    translation: 'Broken Red Mushroom Block',
  },
  {
    stat: 'b-mushroom_stem',
    translation: 'Broken Mushroom Stem',
  },
  {
    stat: 'b-iron_bars',
    translation: 'Broken Iron Bars',
  },
  {
    stat: 'b-chain',
    translation: 'Broken Chain',
  },
  {
    stat: 'b-glass_pane',
    translation: 'Broken Glass Pane',
  },
  {
    stat: 'b-melon',
    translation: 'Broken Melon',
  },
  {
    stat: 'b-vine',
    translation: 'Broken Vines',
  },
  {
    stat: 'b-glow_lichen',
    translation: 'Broken Glow Lichen',
  },
  {
    stat: 'b-brick_stairs',
    translation: 'Broken Brick Stairs',
  },
  {
    stat: 'b-stone_brick_stairs',
    translation: 'Broken Stone Brick Stairs',
  },
  {
    stat: 'b-mud_brick_stairs',
    translation: 'Broken Mud Brick Stairs',
  },
  {
    stat: 'b-mycelium',
    translation: 'Broken Mycelium',
  },
  {
    stat: 'b-lily_pad',
    translation: 'Broken Lily Pad',
  },
  {
    stat: 'b-nether_bricks',
    translation: 'Broken Nether Bricks',
  },
  {
    stat: 'b-cracked_nether_bricks',
    translation: 'Broken Cracked Nether Bricks',
  },
  {
    stat: 'b-chiseled_nether_bricks',
    translation: 'Broken Chiseled Nether Bricks',
  },
  {
    stat: 'b-nether_brick_fence',
    translation: 'Broken Nether Brick Fence',
  },
  {
    stat: 'b-nether_brick_stairs',
    translation: 'Broken Nether Brick Stairs',
  },
  {
    stat: 'b-sculk',
    translation: 'Broken Sculk',
  },
  {
    stat: 'b-sculk_vein',
    translation: 'Broken Sculk Vein',
  },
  {
    stat: 'b-sculk_catalyst',
    translation: 'Broken Sculk Catalyst',
  },
  {
    stat: 'b-sculk_shrieker',
    translation: 'Broken Sculk Shrieker',
  },
  {
    stat: 'b-enchanting_table',
    translation: 'Broken Enchanting Table',
  },
  {
    stat: 'b-end_portal_frame',
    translation: 'Broken End Portal Frame',
  },
  {
    stat: 'b-end_stone',
    translation: 'Broken End Stone',
  },
  {
    stat: 'b-end_stone_bricks',
    translation: 'Broken End Stone Bricks',
  },
  {
    stat: 'b-dragon_egg',
    translation: 'Broken Dragon Egg',
  },
  {
    stat: 'b-sandstone_stairs',
    translation: 'Broken Sandstone Stairs',
  },
  {
    stat: 'b-ender_chest',
    translation: 'Broken Ender Chest',
  },
  {
    stat: 'b-emerald_block',
    translation: 'Broken Block of Emerald',
  },
  {
    stat: 'b-oak_stairs',
    translation: 'Broken Oak Stairs',
  },
  {
    stat: 'b-spruce_stairs',
    translation: 'Broken Spruce Stairs',
  },
  {
    stat: 'b-birch_stairs',
    translation: 'Broken Birch Stairs',
  },
  {
    stat: 'b-jungle_stairs',
    translation: 'Broken Jungle Stairs',
  },
  {
    stat: 'b-acacia_stairs',
    translation: 'Broken Acacia Stairs',
  },
  {
    stat: 'b-dark_oak_stairs',
    translation: 'Broken Dark Oak Stairs',
  },
  {
    stat: 'b-mangrove_stairs',
    translation: 'Broken Mangrove Stairs',
  },
  {
    stat: 'b-crimson_stairs',
    translation: 'Broken Crimson Stairs',
  },
  {
    stat: 'b-warped_stairs',
    translation: 'Broken Warped Stairs',
  },
  {
    stat: 'b-command_block',
    translation: 'Broken Command Block',
  },
  {
    stat: 'b-beacon',
    translation: 'Broken Beacon',
  },
  {
    stat: 'b-cobblestone_wall',
    translation: 'Broken Cobblestone Wall',
  },
  {
    stat: 'b-mossy_cobblestone_wall',
    translation: 'Broken Mossy Cobblestone Wall',
  },
  {
    stat: 'b-brick_wall',
    translation: 'Broken Brick Wall',
  },
  {
    stat: 'b-prismarine_wall',
    translation: 'Broken Prismarine Wall',
  },
  {
    stat: 'b-red_sandstone_wall',
    translation: 'Broken Red Sandstone Wall',
  },
  {
    stat: 'b-mossy_stone_brick_wall',
    translation: 'Broken Mossy Stone Brick Wall',
  },
  {
    stat: 'b-granite_wall',
    translation: 'Broken Granite Wall',
  },
  {
    stat: 'b-stone_brick_wall',
    translation: 'Broken Stone Brick Wall',
  },
  {
    stat: 'b-mud_brick_wall',
    translation: 'Broken Mud Brick Wall',
  },
  {
    stat: 'b-nether_brick_wall',
    translation: 'Broken Nether Brick Wall',
  },
  {
    stat: 'b-andesite_wall',
    translation: 'Broken Andesite Wall',
  },
  {
    stat: 'b-red_nether_brick_wall',
    translation: 'Broken Red Nether Brick Wall',
  },
  {
    stat: 'b-sandstone_wall',
    translation: 'Broken Sandstone Wall',
  },
  {
    stat: 'b-end_stone_brick_wall',
    translation: 'Broken End Stone Brick Wall',
  },
  {
    stat: 'b-diorite_wall',
    translation: 'Broken Diorite Wall',
  },
  {
    stat: 'b-blackstone_wall',
    translation: 'Broken Blackstone Wall',
  },
  {
    stat: 'b-polished_blackstone_wall',
    translation: 'Broken Polished Blackstone Wall',
  },
  {
    stat: 'b-polished_blackstone_brick_wall',
    translation: 'Broken Polished Blackstone Brick Wall',
  },
  {
    stat: 'b-cobbled_deepslate_wall',
    translation: 'Broken Cobbled Deepslate Wall',
  },
  {
    stat: 'b-polished_deepslate_wall',
    translation: 'Broken Polished Deepslate Wall',
  },
  {
    stat: 'b-deepslate_brick_wall',
    translation: 'Broken Deepslate Brick Wall',
  },
  {
    stat: 'b-deepslate_tile_wall',
    translation: 'Broken Deepslate Tile Wall',
  },
  {
    stat: 'b-anvil',
    translation: 'Broken Anvil',
  },
  {
    stat: 'b-chipped_anvil',
    translation: 'Broken Chipped Anvil',
  },
  {
    stat: 'b-damaged_anvil',
    translation: 'Broken Damaged Anvil',
  },
  {
    stat: 'b-chiseled_quartz_block',
    translation: 'Broken Chiseled Quartz Block',
  },
  {
    stat: 'b-quartz_block',
    translation: 'Broken Block of Quartz',
  },
  {
    stat: 'b-quartz_bricks',
    translation: 'Broken Quartz Bricks',
  },
  {
    stat: 'b-quartz_pillar',
    translation: 'Broken Quartz Pillar',
  },
  {
    stat: 'b-quartz_stairs',
    translation: 'Broken Quartz Stairs',
  },
  {
    stat: 'b-white_terracotta',
    translation: 'Broken White Terracotta',
  },
  {
    stat: 'b-orange_terracotta',
    translation: 'Broken Orange Terracotta',
  },
  {
    stat: 'b-magenta_terracotta',
    translation: 'Broken Magenta Terracotta',
  },
  {
    stat: 'b-light_blue_terracotta',
    translation: 'Broken Light Blue Terracotta',
  },
  {
    stat: 'b-yellow_terracotta',
    translation: 'Broken Yellow Terracotta',
  },
  {
    stat: 'b-lime_terracotta',
    translation: 'Broken Lime Terracotta',
  },
  {
    stat: 'b-pink_terracotta',
    translation: 'Broken Pink Terracotta',
  },
  {
    stat: 'b-gray_terracotta',
    translation: 'Broken Gray Terracotta',
  },
  {
    stat: 'b-light_gray_terracotta',
    translation: 'Broken Light Gray Terracotta',
  },
  {
    stat: 'b-cyan_terracotta',
    translation: 'Broken Cyan Terracotta',
  },
  {
    stat: 'b-purple_terracotta',
    translation: 'Broken Purple Terracotta',
  },
  {
    stat: 'b-blue_terracotta',
    translation: 'Broken Blue Terracotta',
  },
  {
    stat: 'b-brown_terracotta',
    translation: 'Broken Brown Terracotta',
  },
  {
    stat: 'b-green_terracotta',
    translation: 'Broken Green Terracotta',
  },
  {
    stat: 'b-red_terracotta',
    translation: 'Broken Red Terracotta',
  },
  {
    stat: 'b-black_terracotta',
    translation: 'Broken Black Terracotta',
  },
  {
    stat: 'b-barrier',
    translation: 'Broken Barrier',
  },
  {
    stat: 'b-light',
    translation: 'Broken Light',
  },
  {
    stat: 'b-hay_block',
    translation: 'Broken Hay Bale',
  },
  {
    stat: 'b-white_carpet',
    translation: 'Broken White Carpet',
  },
  {
    stat: 'b-orange_carpet',
    translation: 'Broken Orange Carpet',
  },
  {
    stat: 'b-magenta_carpet',
    translation: 'Broken Magenta Carpet',
  },
  {
    stat: 'b-light_blue_carpet',
    translation: 'Broken Light Blue Carpet',
  },
  {
    stat: 'b-yellow_carpet',
    translation: 'Broken Yellow Carpet',
  },
  {
    stat: 'b-lime_carpet',
    translation: 'Broken Lime Carpet',
  },
  {
    stat: 'b-pink_carpet',
    translation: 'Broken Pink Carpet',
  },
  {
    stat: 'b-gray_carpet',
    translation: 'Broken Gray Carpet',
  },
  {
    stat: 'b-light_gray_carpet',
    translation: 'Broken Light Gray Carpet',
  },
  {
    stat: 'b-cyan_carpet',
    translation: 'Broken Cyan Carpet',
  },
  {
    stat: 'b-purple_carpet',
    translation: 'Broken Purple Carpet',
  },
  {
    stat: 'b-blue_carpet',
    translation: 'Broken Blue Carpet',
  },
  {
    stat: 'b-brown_carpet',
    translation: 'Broken Brown Carpet',
  },
  {
    stat: 'b-green_carpet',
    translation: 'Broken Green Carpet',
  },
  {
    stat: 'b-red_carpet',
    translation: 'Broken Red Carpet',
  },
  {
    stat: 'b-black_carpet',
    translation: 'Broken Black Carpet',
  },
  {
    stat: 'b-terracotta',
    translation: 'Broken Terracotta',
  },
  {
    stat: 'b-packed_ice',
    translation: 'Broken Packed Ice',
  },
  {
    stat: 'b-dirt_path',
    translation: 'Broken Dirt Path',
  },
  {
    stat: 'b-sunflower',
    translation: 'Broken Sunflower',
  },
  {
    stat: 'b-lilac',
    translation: 'Broken Lilac',
  },
  {
    stat: 'b-rose_bush',
    translation: 'Broken Rose Bush',
  },
  {
    stat: 'b-peony',
    translation: 'Broken Peony',
  },
  {
    stat: 'b-tall_grass',
    translation: 'Broken Tall Grass',
  },
  {
    stat: 'b-large_fern',
    translation: 'Broken Large Fern',
  },
  {
    stat: 'b-white_stained_glass',
    translation: 'Broken White Stained Glass',
  },
  {
    stat: 'b-orange_stained_glass',
    translation: 'Broken Orange Stained Glass',
  },
  {
    stat: 'b-magenta_stained_glass',
    translation: 'Broken Magenta Stained Glass',
  },
  {
    stat: 'b-light_blue_stained_glass',
    translation: 'Broken Light Blue Stained Glass',
  },
  {
    stat: 'b-yellow_stained_glass',
    translation: 'Broken Yellow Stained Glass',
  },
  {
    stat: 'b-lime_stained_glass',
    translation: 'Broken Lime Stained Glass',
  },
  {
    stat: 'b-pink_stained_glass',
    translation: 'Broken Pink Stained Glass',
  },
  {
    stat: 'b-gray_stained_glass',
    translation: 'Broken Gray Stained Glass',
  },
  {
    stat: 'b-light_gray_stained_glass',
    translation: 'Broken Light Gray Stained Glass',
  },
  {
    stat: 'b-cyan_stained_glass',
    translation: 'Broken Cyan Stained Glass',
  },
  {
    stat: 'b-purple_stained_glass',
    translation: 'Broken Purple Stained Glass',
  },
  {
    stat: 'b-blue_stained_glass',
    translation: 'Broken Blue Stained Glass',
  },
  {
    stat: 'b-brown_stained_glass',
    translation: 'Broken Brown Stained Glass',
  },
  {
    stat: 'b-green_stained_glass',
    translation: 'Broken Green Stained Glass',
  },
  {
    stat: 'b-red_stained_glass',
    translation: 'Broken Red Stained Glass',
  },
  {
    stat: 'b-black_stained_glass',
    translation: 'Broken Black Stained Glass',
  },
  {
    stat: 'b-white_stained_glass_pane',
    translation: 'Broken White Stained Glass Pane',
  },
  {
    stat: 'b-orange_stained_glass_pane',
    translation: 'Broken Orange Stained Glass Pane',
  },
  {
    stat: 'b-magenta_stained_glass_pane',
    translation: 'Broken Magenta Stained Glass Pane',
  },
  {
    stat: 'b-light_blue_stained_glass_pane',
    translation: 'Broken Light Blue Stained Glass Pane',
  },
  {
    stat: 'b-yellow_stained_glass_pane',
    translation: 'Broken Yellow Stained Glass Pane',
  },
  {
    stat: 'b-lime_stained_glass_pane',
    translation: 'Broken Lime Stained Glass Pane',
  },
  {
    stat: 'b-pink_stained_glass_pane',
    translation: 'Broken Pink Stained Glass Pane',
  },
  {
    stat: 'b-gray_stained_glass_pane',
    translation: 'Broken Gray Stained Glass Pane',
  },
  {
    stat: 'b-light_gray_stained_glass_pane',
    translation: 'Broken Light Gray Stained Glass Pane',
  },
  {
    stat: 'b-cyan_stained_glass_pane',
    translation: 'Broken Cyan Stained Glass Pane',
  },
  {
    stat: 'b-purple_stained_glass_pane',
    translation: 'Broken Purple Stained Glass Pane',
  },
  {
    stat: 'b-blue_stained_glass_pane',
    translation: 'Broken Blue Stained Glass Pane',
  },
  {
    stat: 'b-brown_stained_glass_pane',
    translation: 'Broken Brown Stained Glass Pane',
  },
  {
    stat: 'b-green_stained_glass_pane',
    translation: 'Broken Green Stained Glass Pane',
  },
  {
    stat: 'b-red_stained_glass_pane',
    translation: 'Broken Red Stained Glass Pane',
  },
  {
    stat: 'b-black_stained_glass_pane',
    translation: 'Broken Black Stained Glass Pane',
  },
  {
    stat: 'b-prismarine',
    translation: 'Broken Prismarine',
  },
  {
    stat: 'b-prismarine_bricks',
    translation: 'Broken Prismarine Bricks',
  },
  {
    stat: 'b-dark_prismarine',
    translation: 'Broken Dark Prismarine',
  },
  {
    stat: 'b-prismarine_stairs',
    translation: 'Broken Prismarine Stairs',
  },
  {
    stat: 'b-prismarine_brick_stairs',
    translation: 'Broken Prismarine Brick Stairs',
  },
  {
    stat: 'b-dark_prismarine_stairs',
    translation: 'Broken Dark Prismarine Stairs',
  },
  {
    stat: 'b-sea_lantern',
    translation: 'Broken Sea Lantern',
  },
  {
    stat: 'b-red_sandstone',
    translation: 'Broken Red Sandstone',
  },
  {
    stat: 'b-chiseled_red_sandstone',
    translation: 'Broken Chiseled Red Sandstone',
  },
  {
    stat: 'b-cut_red_sandstone',
    translation: 'Broken Cut Red Sandstone',
  },
  {
    stat: 'b-red_sandstone_stairs',
    translation: 'Broken Red Sandstone Stairs',
  },
  {
    stat: 'b-repeating_command_block',
    translation: 'Broken Repeating Command Block',
  },
  {
    stat: 'b-chain_command_block',
    translation: 'Broken Chain Command Block',
  },
  {
    stat: 'b-magma_block',
    translation: 'Broken Magma Block',
  },
  {
    stat: 'b-nether_wart_block',
    translation: 'Broken Nether Wart Block',
  },
  {
    stat: 'b-warped_wart_block',
    translation: 'Broken Warped Wart Block',
  },
  {
    stat: 'b-red_nether_bricks',
    translation: 'Broken Red Nether Bricks',
  },
  {
    stat: 'b-bone_block',
    translation: 'Broken Bone Block',
  },
  {
    stat: 'b-structure_void',
    translation: 'Broken Structure Void',
  },
  {
    stat: 'b-shulker_box',
    translation: 'Broken Shulker Box',
  },
  {
    stat: 'b-white_shulker_box',
    translation: 'Broken White Shulker Box',
  },
  {
    stat: 'b-orange_shulker_box',
    translation: 'Broken Orange Shulker Box',
  },
  {
    stat: 'b-magenta_shulker_box',
    translation: 'Broken Magenta Shulker Box',
  },
  {
    stat: 'b-light_blue_shulker_box',
    translation: 'Broken Light Blue Shulker Box',
  },
  {
    stat: 'b-yellow_shulker_box',
    translation: 'Broken Yellow Shulker Box',
  },
  {
    stat: 'b-lime_shulker_box',
    translation: 'Broken Lime Shulker Box',
  },
  {
    stat: 'b-pink_shulker_box',
    translation: 'Broken Pink Shulker Box',
  },
  {
    stat: 'b-gray_shulker_box',
    translation: 'Broken Gray Shulker Box',
  },
  {
    stat: 'b-light_gray_shulker_box',
    translation: 'Broken Light Gray Shulker Box',
  },
  {
    stat: 'b-cyan_shulker_box',
    translation: 'Broken Cyan Shulker Box',
  },
  {
    stat: 'b-purple_shulker_box',
    translation: 'Broken Purple Shulker Box',
  },
  {
    stat: 'b-blue_shulker_box',
    translation: 'Broken Blue Shulker Box',
  },
  {
    stat: 'b-brown_shulker_box',
    translation: 'Broken Brown Shulker Box',
  },
  {
    stat: 'b-green_shulker_box',
    translation: 'Broken Green Shulker Box',
  },
  {
    stat: 'b-red_shulker_box',
    translation: 'Broken Red Shulker Box',
  },
  {
    stat: 'b-black_shulker_box',
    translation: 'Broken Black Shulker Box',
  },
  {
    stat: 'b-white_glazed_terracotta',
    translation: 'Broken White Glazed Terracotta',
  },
  {
    stat: 'b-orange_glazed_terracotta',
    translation: 'Broken Orange Glazed Terracotta',
  },
  {
    stat: 'b-magenta_glazed_terracotta',
    translation: 'Broken Magenta Glazed Terracotta',
  },
  {
    stat: 'b-light_blue_glazed_terracotta',
    translation: 'Broken Light Blue Glazed Terracotta',
  },
  {
    stat: 'b-yellow_glazed_terracotta',
    translation: 'Broken Yellow Glazed Terracotta',
  },
  {
    stat: 'b-lime_glazed_terracotta',
    translation: 'Broken Lime Glazed Terracotta',
  },
  {
    stat: 'b-pink_glazed_terracotta',
    translation: 'Broken Pink Glazed Terracotta',
  },
  {
    stat: 'b-gray_glazed_terracotta',
    translation: 'Broken Gray Glazed Terracotta',
  },
  {
    stat: 'b-light_gray_glazed_terracotta',
    translation: 'Broken Light Gray Glazed Terracotta',
  },
  {
    stat: 'b-cyan_glazed_terracotta',
    translation: 'Broken Cyan Glazed Terracotta',
  },
  {
    stat: 'b-purple_glazed_terracotta',
    translation: 'Broken Purple Glazed Terracotta',
  },
  {
    stat: 'b-blue_glazed_terracotta',
    translation: 'Broken Blue Glazed Terracotta',
  },
  {
    stat: 'b-brown_glazed_terracotta',
    translation: 'Broken Brown Glazed Terracotta',
  },
  {
    stat: 'b-green_glazed_terracotta',
    translation: 'Broken Green Glazed Terracotta',
  },
  {
    stat: 'b-red_glazed_terracotta',
    translation: 'Broken Red Glazed Terracotta',
  },
  {
    stat: 'b-black_glazed_terracotta',
    translation: 'Broken Black Glazed Terracotta',
  },
  {
    stat: 'b-white_concrete',
    translation: 'Broken White Concrete',
  },
  {
    stat: 'b-orange_concrete',
    translation: 'Broken Orange Concrete',
  },
  {
    stat: 'b-magenta_concrete',
    translation: 'Broken Magenta Concrete',
  },
  {
    stat: 'b-light_blue_concrete',
    translation: 'Broken Light Blue Concrete',
  },
  {
    stat: 'b-yellow_concrete',
    translation: 'Broken Yellow Concrete',
  },
  {
    stat: 'b-lime_concrete',
    translation: 'Broken Lime Concrete',
  },
  {
    stat: 'b-pink_concrete',
    translation: 'Broken Pink Concrete',
  },
  {
    stat: 'b-gray_concrete',
    translation: 'Broken Gray Concrete',
  },
  {
    stat: 'b-light_gray_concrete',
    translation: 'Broken Light Gray Concrete',
  },
  {
    stat: 'b-cyan_concrete',
    translation: 'Broken Cyan Concrete',
  },
  {
    stat: 'b-purple_concrete',
    translation: 'Broken Purple Concrete',
  },
  {
    stat: 'b-blue_concrete',
    translation: 'Broken Blue Concrete',
  },
  {
    stat: 'b-brown_concrete',
    translation: 'Broken Brown Concrete',
  },
  {
    stat: 'b-green_concrete',
    translation: 'Broken Green Concrete',
  },
  {
    stat: 'b-red_concrete',
    translation: 'Broken Red Concrete',
  },
  {
    stat: 'b-black_concrete',
    translation: 'Broken Black Concrete',
  },
  {
    stat: 'b-white_concrete_powder',
    translation: 'Broken White Concrete Powder',
  },
  {
    stat: 'b-orange_concrete_powder',
    translation: 'Broken Orange Concrete Powder',
  },
  {
    stat: 'b-magenta_concrete_powder',
    translation: 'Broken Magenta Concrete Powder',
  },
  {
    stat: 'b-light_blue_concrete_powder',
    translation: 'Broken Light Blue Concrete Powder',
  },
  {
    stat: 'b-yellow_concrete_powder',
    translation: 'Broken Yellow Concrete Powder',
  },
  {
    stat: 'b-lime_concrete_powder',
    translation: 'Broken Lime Concrete Powder',
  },
  {
    stat: 'b-pink_concrete_powder',
    translation: 'Broken Pink Concrete Powder',
  },
  {
    stat: 'b-gray_concrete_powder',
    translation: 'Broken Gray Concrete Powder',
  },
  {
    stat: 'b-light_gray_concrete_powder',
    translation: 'Broken Light Gray Concrete Powder',
  },
  {
    stat: 'b-cyan_concrete_powder',
    translation: 'Broken Cyan Concrete Powder',
  },
  {
    stat: 'b-purple_concrete_powder',
    translation: 'Broken Purple Concrete Powder',
  },
  {
    stat: 'b-blue_concrete_powder',
    translation: 'Broken Blue Concrete Powder',
  },
  {
    stat: 'b-brown_concrete_powder',
    translation: 'Broken Brown Concrete Powder',
  },
  {
    stat: 'b-green_concrete_powder',
    translation: 'Broken Green Concrete Powder',
  },
  {
    stat: 'b-red_concrete_powder',
    translation: 'Broken Red Concrete Powder',
  },
  {
    stat: 'b-black_concrete_powder',
    translation: 'Broken Black Concrete Powder',
  },
  {
    stat: 'b-turtle_egg',
    translation: 'Broken Turtle Egg',
  },
  {
    stat: 'b-dead_tube_coral_block',
    translation: 'Broken Dead Tube Coral Block',
  },
  {
    stat: 'b-dead_brain_coral_block',
    translation: 'Broken Dead Brain Coral Block',
  },
  {
    stat: 'b-dead_bubble_coral_block',
    translation: 'Broken Dead Bubble Coral Block',
  },
  {
    stat: 'b-dead_fire_coral_block',
    translation: 'Broken Dead Fire Coral Block',
  },
  {
    stat: 'b-dead_horn_coral_block',
    translation: 'Broken Dead Horn Coral Block',
  },
  {
    stat: 'b-tube_coral_block',
    translation: 'Broken Tube Coral Block',
  },
  {
    stat: 'b-brain_coral_block',
    translation: 'Broken Brain Coral Block',
  },
  {
    stat: 'b-bubble_coral_block',
    translation: 'Broken Bubble Coral Block',
  },
  {
    stat: 'b-fire_coral_block',
    translation: 'Broken Fire Coral Block',
  },
  {
    stat: 'b-horn_coral_block',
    translation: 'Broken Horn Coral Block',
  },
  {
    stat: 'b-tube_coral',
    translation: 'Broken Tube Coral',
  },
  {
    stat: 'b-brain_coral',
    translation: 'Broken Brain Coral',
  },
  {
    stat: 'b-bubble_coral',
    translation: 'Broken Bubble Coral',
  },
  {
    stat: 'b-fire_coral',
    translation: 'Broken Fire Coral',
  },
  {
    stat: 'b-horn_coral',
    translation: 'Broken Horn Coral',
  },
  {
    stat: 'b-dead_brain_coral',
    translation: 'Broken Dead Brain Coral',
  },
  {
    stat: 'b-dead_bubble_coral',
    translation: 'Broken Dead Bubble Coral',
  },
  {
    stat: 'b-dead_fire_coral',
    translation: 'Broken Dead Fire Coral',
  },
  {
    stat: 'b-dead_horn_coral',
    translation: 'Broken Dead Horn Coral',
  },
  {
    stat: 'b-dead_tube_coral',
    translation: 'Broken Dead Tube Coral',
  },
  {
    stat: 'b-tube_coral_fan',
    translation: 'Broken Tube Coral Fan',
  },
  {
    stat: 'b-brain_coral_fan',
    translation: 'Broken Brain Coral Fan',
  },
  {
    stat: 'b-bubble_coral_fan',
    translation: 'Broken Bubble Coral Fan',
  },
  {
    stat: 'b-fire_coral_fan',
    translation: 'Broken Fire Coral Fan',
  },
  {
    stat: 'b-horn_coral_fan',
    translation: 'Broken Horn Coral Fan',
  },
  {
    stat: 'b-dead_tube_coral_fan',
    translation: 'Broken Dead Tube Coral Fan',
  },
  {
    stat: 'b-dead_brain_coral_fan',
    translation: 'Broken Dead Brain Coral Fan',
  },
  {
    stat: 'b-dead_bubble_coral_fan',
    translation: 'Broken Dead Bubble Coral Fan',
  },
  {
    stat: 'b-dead_fire_coral_fan',
    translation: 'Broken Dead Fire Coral Fan',
  },
  {
    stat: 'b-dead_horn_coral_fan',
    translation: 'Broken Dead Horn Coral Fan',
  },
  {
    stat: 'b-blue_ice',
    translation: 'Broken Blue Ice',
  },
  {
    stat: 'b-conduit',
    translation: 'Broken Conduit',
  },
  {
    stat: 'b-polished_granite_stairs',
    translation: 'Broken Polished Granite Stairs',
  },
  {
    stat: 'b-smooth_red_sandstone_stairs',
    translation: 'Broken Smooth Red Sandstone Stairs',
  },
  {
    stat: 'b-mossy_stone_brick_stairs',
    translation: 'Broken Mossy Stone Brick Stairs',
  },
  {
    stat: 'b-polished_diorite_stairs',
    translation: 'Broken Polished Diorite Stairs',
  },
  {
    stat: 'b-mossy_cobblestone_stairs',
    translation: 'Broken Mossy Cobblestone Stairs',
  },
  {
    stat: 'b-end_stone_brick_stairs',
    translation: 'Broken End Stone Brick Stairs',
  },
  {
    stat: 'b-stone_stairs',
    translation: 'Broken Stone Stairs',
  },
  {
    stat: 'b-smooth_sandstone_stairs',
    translation: 'Broken Smooth Sandstone Stairs',
  },
  {
    stat: 'b-smooth_quartz_stairs',
    translation: 'Broken Smooth Quartz Stairs',
  },
  {
    stat: 'b-granite_stairs',
    translation: 'Broken Granite Stairs',
  },
  {
    stat: 'b-andesite_stairs',
    translation: 'Broken Andesite Stairs',
  },
  {
    stat: 'b-red_nether_brick_stairs',
    translation: 'Broken Red Nether Brick Stairs',
  },
  {
    stat: 'b-polished_andesite_stairs',
    translation: 'Broken Polished Andesite Stairs',
  },
  {
    stat: 'b-diorite_stairs',
    translation: 'Broken Diorite Stairs',
  },
  {
    stat: 'b-cobbled_deepslate_stairs',
    translation: 'Broken Cobbled Deepslate Stairs',
  },
  {
    stat: 'b-polished_deepslate_stairs',
    translation: 'Broken Polished Deepslate Stairs',
  },
  {
    stat: 'b-deepslate_brick_stairs',
    translation: 'Broken Deepslate Brick Stairs',
  },
  {
    stat: 'b-deepslate_tile_stairs',
    translation: 'Broken Deepslate Tile Stairs',
  },
  {
    stat: 'b-polished_granite_slab',
    translation: 'Broken Polished Granite Slab',
  },
  {
    stat: 'b-smooth_red_sandstone_slab',
    translation: 'Broken Smooth Red Sandstone Slab',
  },
  {
    stat: 'b-mossy_stone_brick_slab',
    translation: 'Broken Mossy Stone Brick Slab',
  },
  {
    stat: 'b-polished_diorite_slab',
    translation: 'Broken Polished Diorite Slab',
  },
  {
    stat: 'b-mossy_cobblestone_slab',
    translation: 'Broken Mossy Cobblestone Slab',
  },
  {
    stat: 'b-end_stone_brick_slab',
    translation: 'Broken End Stone Brick Slab',
  },
  {
    stat: 'b-smooth_sandstone_slab',
    translation: 'Broken Smooth Sandstone Slab',
  },
  {
    stat: 'b-smooth_quartz_slab',
    translation: 'Broken Smooth Quartz Slab',
  },
  {
    stat: 'b-granite_slab',
    translation: 'Broken Granite Slab',
  },
  {
    stat: 'b-andesite_slab',
    translation: 'Broken Andesite Slab',
  },
  {
    stat: 'b-red_nether_brick_slab',
    translation: 'Broken Red Nether Brick Slab',
  },
  {
    stat: 'b-polished_andesite_slab',
    translation: 'Broken Polished Andesite Slab',
  },
  {
    stat: 'b-diorite_slab',
    translation: 'Broken Diorite Slab',
  },
  {
    stat: 'b-cobbled_deepslate_slab',
    translation: 'Broken Cobbled Deepslate Slab',
  },
  {
    stat: 'b-polished_deepslate_slab',
    translation: 'Broken Polished Deepslate Slab',
  },
  {
    stat: 'b-deepslate_brick_slab',
    translation: 'Broken Deepslate Brick Slab',
  },
  {
    stat: 'b-deepslate_tile_slab',
    translation: 'Broken Deepslate Tile Slab',
  },
  {
    stat: 'b-scaffolding',
    translation: 'Broken Scaffolding',
  },
  {
    stat: 'b-redstone',
    translation: 'Broken Redstone Dust',
  },
  {
    stat: 'b-redstone_torch',
    translation: 'Broken Redstone Torch',
  },
  {
    stat: 'b-redstone_block',
    translation: 'Broken Block of Redstone',
  },
  {
    stat: 'b-repeater',
    translation: 'Broken Redstone Repeater',
  },
  {
    stat: 'b-comparator',
    translation: 'Broken Redstone Comparator',
  },
  {
    stat: 'b-piston',
    translation: 'Broken Piston',
  },
  {
    stat: 'b-sticky_piston',
    translation: 'Broken Sticky Piston',
  },
  {
    stat: 'b-slime_block',
    translation: 'Broken Slime Block',
  },
  {
    stat: 'b-honey_block',
    translation: 'Broken Honey Block',
  },
  {
    stat: 'b-observer',
    translation: 'Broken Observer',
  },
  {
    stat: 'b-hopper',
    translation: 'Broken Hopper',
  },
  {
    stat: 'b-dispenser',
    translation: 'Broken Dispenser',
  },
  {
    stat: 'b-dropper',
    translation: 'Broken Dropper',
  },
  {
    stat: 'b-lectern',
    translation: 'Broken Lectern',
  },
  {
    stat: 'b-target',
    translation: 'Broken Target',
  },
  {
    stat: 'b-lever',
    translation: 'Broken Lever',
  },
  {
    stat: 'b-lightning_rod',
    translation: 'Broken Lightning Rod',
  },
  {
    stat: 'b-daylight_detector',
    translation: 'Broken Daylight Detector',
  },
  {
    stat: 'b-sculk_sensor',
    translation: 'Broken Sculk Sensor',
  },
  {
    stat: 'b-tripwire_hook',
    translation: 'Broken Tripwire Hook',
  },
  {
    stat: 'b-trapped_chest',
    translation: 'Broken Trapped Chest',
  },
  {
    stat: 'b-tnt',
    translation: 'Broken TNT',
  },
  {
    stat: 'b-redstone_lamp',
    translation: 'Broken Redstone Lamp',
  },
  {
    stat: 'b-note_block',
    translation: 'Broken Note Block',
  },
  {
    stat: 'b-stone_button',
    translation: 'Broken Stone Button',
  },
  {
    stat: 'b-polished_blackstone_button',
    translation: 'Broken Polished Blackstone Button',
  },
  {
    stat: 'b-oak_button',
    translation: 'Broken Oak Button',
  },
  {
    stat: 'b-spruce_button',
    translation: 'Broken Spruce Button',
  },
  {
    stat: 'b-birch_button',
    translation: 'Broken Birch Button',
  },
  {
    stat: 'b-jungle_button',
    translation: 'Broken Jungle Button',
  },
  {
    stat: 'b-acacia_button',
    translation: 'Broken Acacia Button',
  },
  {
    stat: 'b-dark_oak_button',
    translation: 'Broken Dark Oak Button',
  },
  {
    stat: 'b-mangrove_button',
    translation: 'Broken Mangrove Button',
  },
  {
    stat: 'b-crimson_button',
    translation: 'Broken Crimson Button',
  },
  {
    stat: 'b-warped_button',
    translation: 'Broken Warped Button',
  },
  {
    stat: 'b-stone_pressure_plate',
    translation: 'Broken Stone Pressure Plate',
  },
  {
    stat: 'b-polished_blackstone_pressure_plate',
    translation: 'Broken Polished Blackstone Pressure Plate',
  },
  {
    stat: 'b-light_weighted_pressure_plate',
    translation: 'Broken Light Weighted Pressure Plate',
  },
  {
    stat: 'b-heavy_weighted_pressure_plate',
    translation: 'Broken Heavy Weighted Pressure Plate',
  },
  {
    stat: 'b-oak_pressure_plate',
    translation: 'Broken Oak Pressure Plate',
  },
  {
    stat: 'b-spruce_pressure_plate',
    translation: 'Broken Spruce Pressure Plate',
  },
  {
    stat: 'b-birch_pressure_plate',
    translation: 'Broken Birch Pressure Plate',
  },
  {
    stat: 'b-jungle_pressure_plate',
    translation: 'Broken Jungle Pressure Plate',
  },
  {
    stat: 'b-acacia_pressure_plate',
    translation: 'Broken Acacia Pressure Plate',
  },
  {
    stat: 'b-dark_oak_pressure_plate',
    translation: 'Broken Dark Oak Pressure Plate',
  },
  {
    stat: 'b-mangrove_pressure_plate',
    translation: 'Broken Mangrove Pressure Plate',
  },
  {
    stat: 'b-crimson_pressure_plate',
    translation: 'Broken Crimson Pressure Plate',
  },
  {
    stat: 'b-warped_pressure_plate',
    translation: 'Broken Warped Pressure Plate',
  },
  {
    stat: 'b-iron_door',
    translation: 'Broken Iron Door',
  },
  {
    stat: 'b-oak_door',
    translation: 'Broken Oak Door',
  },
  {
    stat: 'b-spruce_door',
    translation: 'Broken Spruce Door',
  },
  {
    stat: 'b-birch_door',
    translation: 'Broken Birch Door',
  },
  {
    stat: 'b-jungle_door',
    translation: 'Broken Jungle Door',
  },
  {
    stat: 'b-acacia_door',
    translation: 'Broken Acacia Door',
  },
  {
    stat: 'b-dark_oak_door',
    translation: 'Broken Dark Oak Door',
  },
  {
    stat: 'b-mangrove_door',
    translation: 'Broken Mangrove Door',
  },
  {
    stat: 'b-crimson_door',
    translation: 'Broken Crimson Door',
  },
  {
    stat: 'b-warped_door',
    translation: 'Broken Warped Door',
  },
  {
    stat: 'b-iron_trapdoor',
    translation: 'Broken Iron Trapdoor',
  },
  {
    stat: 'b-oak_trapdoor',
    translation: 'Broken Oak Trapdoor',
  },
  {
    stat: 'b-spruce_trapdoor',
    translation: 'Broken Spruce Trapdoor',
  },
  {
    stat: 'b-birch_trapdoor',
    translation: 'Broken Birch Trapdoor',
  },
  {
    stat: 'b-jungle_trapdoor',
    translation: 'Broken Jungle Trapdoor',
  },
  {
    stat: 'b-acacia_trapdoor',
    translation: 'Broken Acacia Trapdoor',
  },
  {
    stat: 'b-dark_oak_trapdoor',
    translation: 'Broken Dark Oak Trapdoor',
  },
  {
    stat: 'b-mangrove_trapdoor',
    translation: 'Broken Mangrove Trapdoor',
  },
  {
    stat: 'b-crimson_trapdoor',
    translation: 'Broken Crimson Trapdoor',
  },
  {
    stat: 'b-warped_trapdoor',
    translation: 'Broken Warped Trapdoor',
  },
  {
    stat: 'b-oak_fence_gate',
    translation: 'Broken Oak Fence Gate',
  },
  {
    stat: 'b-spruce_fence_gate',
    translation: 'Broken Spruce Fence Gate',
  },
  {
    stat: 'b-birch_fence_gate',
    translation: 'Broken Birch Fence Gate',
  },
  {
    stat: 'b-jungle_fence_gate',
    translation: 'Broken Jungle Fence Gate',
  },
  {
    stat: 'b-acacia_fence_gate',
    translation: 'Broken Acacia Fence Gate',
  },
  {
    stat: 'b-dark_oak_fence_gate',
    translation: 'Broken Dark Oak Fence Gate',
  },
  {
    stat: 'b-mangrove_fence_gate',
    translation: 'Broken Mangrove Fence Gate',
  },
  {
    stat: 'b-crimson_fence_gate',
    translation: 'Broken Crimson Fence Gate',
  },
  {
    stat: 'b-warped_fence_gate',
    translation: 'Broken Warped Fence Gate',
  },
  {
    stat: 'b-powered_rail',
    translation: 'Broken Powered Rail',
  },
  {
    stat: 'b-detector_rail',
    translation: 'Broken Detector Rail',
  },
  {
    stat: 'b-rail',
    translation: 'Broken Rail',
  },
  {
    stat: 'b-activator_rail',
    translation: 'Broken Activator Rail',
  },
  {
    stat: 'b-saddle',
    translation: 'Broken Saddle',
  },
  {
    stat: 'b-minecart',
    translation: 'Broken Minecart',
  },
  {
    stat: 'b-chest_minecart',
    translation: 'Broken Minecart with Chest',
  },
  {
    stat: 'b-furnace_minecart',
    translation: 'Broken Minecart with Furnace',
  },
  {
    stat: 'b-tnt_minecart',
    translation: 'Broken Minecart with TNT',
  },
  {
    stat: 'b-hopper_minecart',
    translation: 'Broken Minecart with Hopper',
  },
  {
    stat: 'b-carrot_on_a_stick',
    translation: 'Broken Carrot on a Stick',
  },
  {
    stat: 'b-warped_fungus_on_a_stick',
    translation: 'Broken Warped Fungus on a Stick',
  },
  {
    stat: 'b-elytra',
    translation: 'Broken Elytra',
  },
  {
    stat: 'b-oak_boat',
    translation: 'Broken Oak Boat',
  },
  {
    stat: 'b-oak_chest_boat',
    translation: 'Broken Oak Boat with Chest',
  },
  {
    stat: 'b-spruce_boat',
    translation: 'Broken Spruce Boat',
  },
  {
    stat: 'b-spruce_chest_boat',
    translation: 'Broken Spruce Boat with Chest',
  },
  {
    stat: 'b-birch_boat',
    translation: 'Broken Birch Boat',
  },
  {
    stat: 'b-birch_chest_boat',
    translation: 'Broken Birch Boat with Chest',
  },
  {
    stat: 'b-jungle_boat',
    translation: 'Broken Jungle Boat',
  },
  {
    stat: 'b-jungle_chest_boat',
    translation: 'Broken Jungle Boat with Chest',
  },
  {
    stat: 'b-acacia_boat',
    translation: 'Broken Acacia Boat',
  },
  {
    stat: 'b-acacia_chest_boat',
    translation: 'Broken Acacia Boat with Chest',
  },
  {
    stat: 'b-dark_oak_boat',
    translation: 'Broken Dark Oak Boat',
  },
  {
    stat: 'b-dark_oak_chest_boat',
    translation: 'Broken Dark Oak Boat with Chest',
  },
  {
    stat: 'b-mangrove_boat',
    translation: 'Broken Mangrove Boat',
  },
  {
    stat: 'b-mangrove_chest_boat',
    translation: 'Broken Mangrove Boat with Chest',
  },
  {
    stat: 'b-structure_block',
    translation: 'Broken Structure Block',
  },
  {
    stat: 'b-jigsaw',
    translation: 'Broken Jigsaw Block',
  },
  {
    stat: 'b-turtle_helmet',
    translation: 'Broken Turtle Shell',
  },
  {
    stat: 'b-scute',
    translation: 'Broken Scute',
  },
  {
    stat: 'b-flint_and_steel',
    translation: 'Broken Flint and Steel',
  },
  {
    stat: 'b-apple',
    translation: 'Broken Apple',
  },
  {
    stat: 'b-bow',
    translation: 'Broken Bow',
  },
  {
    stat: 'b-arrow',
    translation: 'Broken Arrow',
  },
  {
    stat: 'b-coal',
    translation: 'Broken Coal',
  },
  {
    stat: 'b-charcoal',
    translation: 'Broken Charcoal',
  },
  {
    stat: 'b-diamond',
    translation: 'Broken Diamond',
  },
  {
    stat: 'b-emerald',
    translation: 'Broken Emerald',
  },
  {
    stat: 'b-lapis_lazuli',
    translation: 'Broken Lapis Lazuli',
  },
  {
    stat: 'b-quartz',
    translation: 'Broken Nether Quartz',
  },
  {
    stat: 'b-amethyst_shard',
    translation: 'Broken Amethyst Shard',
  },
  {
    stat: 'b-raw_iron',
    translation: 'Broken Raw Iron',
  },
  {
    stat: 'b-iron_ingot',
    translation: 'Broken Iron Ingot',
  },
  {
    stat: 'b-raw_copper',
    translation: 'Broken Raw Copper',
  },
  {
    stat: 'b-copper_ingot',
    translation: 'Broken Copper Ingot',
  },
  {
    stat: 'b-raw_gold',
    translation: 'Broken Raw Gold',
  },
  {
    stat: 'b-gold_ingot',
    translation: 'Broken Gold Ingot',
  },
  {
    stat: 'b-netherite_ingot',
    translation: 'Broken Netherite Ingot',
  },
  {
    stat: 'b-netherite_scrap',
    translation: 'Broken Netherite Scrap',
  },
  {
    stat: 'b-wooden_sword',
    translation: 'Broken Wooden Sword',
  },
  {
    stat: 'b-wooden_shovel',
    translation: 'Broken Wooden Shovel',
  },
  {
    stat: 'b-wooden_pickaxe',
    translation: 'Broken Wooden Pickaxe',
  },
  {
    stat: 'b-wooden_axe',
    translation: 'Broken Wooden Axe',
  },
  {
    stat: 'b-wooden_hoe',
    translation: 'Broken Wooden Hoe',
  },
  {
    stat: 'b-stone_sword',
    translation: 'Broken Stone Sword',
  },
  {
    stat: 'b-stone_shovel',
    translation: 'Broken Stone Shovel',
  },
  {
    stat: 'b-stone_pickaxe',
    translation: 'Broken Stone Pickaxe',
  },
  {
    stat: 'b-stone_axe',
    translation: 'Broken Stone Axe',
  },
  {
    stat: 'b-stone_hoe',
    translation: 'Broken Stone Hoe',
  },
  {
    stat: 'b-golden_sword',
    translation: 'Broken Golden Sword',
  },
  {
    stat: 'b-golden_shovel',
    translation: 'Broken Golden Shovel',
  },
  {
    stat: 'b-golden_pickaxe',
    translation: 'Broken Golden Pickaxe',
  },
  {
    stat: 'b-golden_axe',
    translation: 'Broken Golden Axe',
  },
  {
    stat: 'b-golden_hoe',
    translation: 'Broken Golden Hoe',
  },
  {
    stat: 'b-iron_sword',
    translation: 'Broken Iron Sword',
  },
  {
    stat: 'b-iron_shovel',
    translation: 'Broken Iron Shovel',
  },
  {
    stat: 'b-iron_pickaxe',
    translation: 'Broken Iron Pickaxe',
  },
  {
    stat: 'b-iron_axe',
    translation: 'Broken Iron Axe',
  },
  {
    stat: 'b-iron_hoe',
    translation: 'Broken Iron Hoe',
  },
  {
    stat: 'b-diamond_sword',
    translation: 'Broken Diamond Sword',
  },
  {
    stat: 'b-diamond_shovel',
    translation: 'Broken Diamond Shovel',
  },
  {
    stat: 'b-diamond_pickaxe',
    translation: 'Broken Diamond Pickaxe',
  },
  {
    stat: 'b-diamond_axe',
    translation: 'Broken Diamond Axe',
  },
  {
    stat: 'b-diamond_hoe',
    translation: 'Broken Diamond Hoe',
  },
  {
    stat: 'b-netherite_sword',
    translation: 'Broken Netherite Sword',
  },
  {
    stat: 'b-netherite_shovel',
    translation: 'Broken Netherite Shovel',
  },
  {
    stat: 'b-netherite_pickaxe',
    translation: 'Broken Netherite Pickaxe',
  },
  {
    stat: 'b-netherite_axe',
    translation: 'Broken Netherite Axe',
  },
  {
    stat: 'b-netherite_hoe',
    translation: 'Broken Netherite Hoe',
  },
  {
    stat: 'b-stick',
    translation: 'Broken Stick',
  },
  {
    stat: 'b-bowl',
    translation: 'Broken Bowl',
  },
  {
    stat: 'b-mushroom_stew',
    translation: 'Broken Mushroom Stew',
  },
  {
    stat: 'b-string',
    translation: 'Broken String',
  },
  {
    stat: 'b-feather',
    translation: 'Broken Feather',
  },
  {
    stat: 'b-gunpowder',
    translation: 'Broken Gunpowder',
  },
  {
    stat: 'b-wheat_seeds',
    translation: 'Broken Wheat Seeds',
  },
  {
    stat: 'b-wheat',
    translation: 'Broken Wheat',
  },
  {
    stat: 'b-bread',
    translation: 'Broken Bread',
  },
  {
    stat: 'b-leather_helmet',
    translation: 'Broken Leather Cap',
  },
  {
    stat: 'b-leather_chestplate',
    translation: 'Broken Leather Tunic',
  },
  {
    stat: 'b-leather_leggings',
    translation: 'Broken Leather Pants',
  },
  {
    stat: 'b-leather_boots',
    translation: 'Broken Leather Boots',
  },
  {
    stat: 'b-chainmail_helmet',
    translation: 'Broken Chainmail Helmet',
  },
  {
    stat: 'b-chainmail_chestplate',
    translation: 'Broken Chainmail Chestplate',
  },
  {
    stat: 'b-chainmail_leggings',
    translation: 'Broken Chainmail Leggings',
  },
  {
    stat: 'b-chainmail_boots',
    translation: 'Broken Chainmail Boots',
  },
  {
    stat: 'b-iron_helmet',
    translation: 'Broken Iron Helmet',
  },
  {
    stat: 'b-iron_chestplate',
    translation: 'Broken Iron Chestplate',
  },
  {
    stat: 'b-iron_leggings',
    translation: 'Broken Iron Leggings',
  },
  {
    stat: 'b-iron_boots',
    translation: 'Broken Iron Boots',
  },
  {
    stat: 'b-diamond_helmet',
    translation: 'Broken Diamond Helmet',
  },
  {
    stat: 'b-diamond_chestplate',
    translation: 'Broken Diamond Chestplate',
  },
  {
    stat: 'b-diamond_leggings',
    translation: 'Broken Diamond Leggings',
  },
  {
    stat: 'b-diamond_boots',
    translation: 'Broken Diamond Boots',
  },
  {
    stat: 'b-golden_helmet',
    translation: 'Broken Golden Helmet',
  },
  {
    stat: 'b-golden_chestplate',
    translation: 'Broken Golden Chestplate',
  },
  {
    stat: 'b-golden_leggings',
    translation: 'Broken Golden Leggings',
  },
  {
    stat: 'b-golden_boots',
    translation: 'Broken Golden Boots',
  },
  {
    stat: 'b-netherite_helmet',
    translation: 'Broken Netherite Helmet',
  },
  {
    stat: 'b-netherite_chestplate',
    translation: 'Broken Netherite Chestplate',
  },
  {
    stat: 'b-netherite_leggings',
    translation: 'Broken Netherite Leggings',
  },
  {
    stat: 'b-netherite_boots',
    translation: 'Broken Netherite Boots',
  },
  {
    stat: 'b-flint',
    translation: 'Broken Flint',
  },
  {
    stat: 'b-porkchop',
    translation: 'Broken Raw Porkchop',
  },
  {
    stat: 'b-cooked_porkchop',
    translation: 'Broken Cooked Porkchop',
  },
  {
    stat: 'b-painting',
    translation: 'Broken Painting',
  },
  {
    stat: 'b-golden_apple',
    translation: 'Broken Golden Apple',
  },
  {
    stat: 'b-enchanted_golden_apple',
    translation: 'Broken Enchanted Golden Apple',
  },
  {
    stat: 'b-oak_sign',
    translation: 'Broken Oak Sign',
  },
  {
    stat: 'b-spruce_sign',
    translation: 'Broken Spruce Sign',
  },
  {
    stat: 'b-birch_sign',
    translation: 'Broken Birch Sign',
  },
  {
    stat: 'b-jungle_sign',
    translation: 'Broken Jungle Sign',
  },
  {
    stat: 'b-acacia_sign',
    translation: 'Broken Acacia Sign',
  },
  {
    stat: 'b-dark_oak_sign',
    translation: 'Broken Dark Oak Sign',
  },
  {
    stat: 'b-mangrove_sign',
    translation: 'Broken Mangrove Sign',
  },
  {
    stat: 'b-crimson_sign',
    translation: 'Broken Crimson Sign',
  },
  {
    stat: 'b-warped_sign',
    translation: 'Broken Warped Sign',
  },
  {
    stat: 'b-bucket',
    translation: 'Broken Bucket',
  },
  {
    stat: 'b-water_bucket',
    translation: 'Broken Water Bucket',
  },
  {
    stat: 'b-lava_bucket',
    translation: 'Broken Lava Bucket',
  },
  {
    stat: 'b-powder_snow_bucket',
    translation: 'Broken Powder Snow Bucket',
  },
  {
    stat: 'b-snowball',
    translation: 'Broken Snowball',
  },
  {
    stat: 'b-leather',
    translation: 'Broken Leather',
  },
  {
    stat: 'b-milk_bucket',
    translation: 'Broken Milk Bucket',
  },
  {
    stat: 'b-pufferfish_bucket',
    translation: 'Broken Bucket of Pufferfish',
  },
  {
    stat: 'b-salmon_bucket',
    translation: 'Broken Bucket of Salmon',
  },
  {
    stat: 'b-cod_bucket',
    translation: 'Broken Bucket of Cod',
  },
  {
    stat: 'b-tropical_fish_bucket',
    translation: 'Broken Bucket of Tropical Fish',
  },
  {
    stat: 'b-axolotl_bucket',
    translation: 'Broken Bucket of Axolotl',
  },
  {
    stat: 'b-tadpole_bucket',
    translation: 'Broken Bucket of Tadpole',
  },
  {
    stat: 'b-brick',
    translation: 'Broken Brick',
  },
  {
    stat: 'b-clay_ball',
    translation: 'Broken Clay Ball',
  },
  {
    stat: 'b-dried_kelp_block',
    translation: 'Broken Dried Kelp Block',
  },
  {
    stat: 'b-paper',
    translation: 'Broken Paper',
  },
  {
    stat: 'b-book',
    translation: 'Broken Book',
  },
  {
    stat: 'b-slime_ball',
    translation: 'Broken Slimeball',
  },
  {
    stat: 'b-egg',
    translation: 'Broken Egg',
  },
  {
    stat: 'b-compass',
    translation: 'Broken Compass',
  },
  {
    stat: 'b-recovery_compass',
    translation: 'Broken Recovery Compass',
  },
  {
    stat: 'b-bundle',
    translation: 'Broken Bundle',
  },
  {
    stat: 'b-fishing_rod',
    translation: 'Broken Fishing Rod',
  },
  {
    stat: 'b-clock',
    translation: 'Broken Clock',
  },
  {
    stat: 'b-spyglass',
    translation: 'Broken Spyglass',
  },
  {
    stat: 'b-glowstone_dust',
    translation: 'Broken Glowstone Dust',
  },
  {
    stat: 'b-cod',
    translation: 'Broken Raw Cod',
  },
  {
    stat: 'b-salmon',
    translation: 'Broken Raw Salmon',
  },
  {
    stat: 'b-tropical_fish',
    translation: 'Broken Tropical Fish',
  },
  {
    stat: 'b-pufferfish',
    translation: 'Broken Pufferfish',
  },
  {
    stat: 'b-cooked_cod',
    translation: 'Broken Cooked Cod',
  },
  {
    stat: 'b-cooked_salmon',
    translation: 'Broken Cooked Salmon',
  },
  {
    stat: 'b-ink_sac',
    translation: 'Broken Ink Sac',
  },
  {
    stat: 'b-glow_ink_sac',
    translation: 'Broken Glow Ink Sac',
  },
  {
    stat: 'b-cocoa_beans',
    translation: 'Broken Cocoa Beans',
  },
  {
    stat: 'b-white_dye',
    translation: 'Broken White Dye',
  },
  {
    stat: 'b-orange_dye',
    translation: 'Broken Orange Dye',
  },
  {
    stat: 'b-magenta_dye',
    translation: 'Broken Magenta Dye',
  },
  {
    stat: 'b-light_blue_dye',
    translation: 'Broken Light Blue Dye',
  },
  {
    stat: 'b-yellow_dye',
    translation: 'Broken Yellow Dye',
  },
  {
    stat: 'b-lime_dye',
    translation: 'Broken Lime Dye',
  },
  {
    stat: 'b-pink_dye',
    translation: 'Broken Pink Dye',
  },
  {
    stat: 'b-gray_dye',
    translation: 'Broken Gray Dye',
  },
  {
    stat: 'b-light_gray_dye',
    translation: 'Broken Light Gray Dye',
  },
  {
    stat: 'b-cyan_dye',
    translation: 'Broken Cyan Dye',
  },
  {
    stat: 'b-purple_dye',
    translation: 'Broken Purple Dye',
  },
  {
    stat: 'b-blue_dye',
    translation: 'Broken Blue Dye',
  },
  {
    stat: 'b-brown_dye',
    translation: 'Broken Brown Dye',
  },
  {
    stat: 'b-green_dye',
    translation: 'Broken Green Dye',
  },
  {
    stat: 'b-red_dye',
    translation: 'Broken Red Dye',
  },
  {
    stat: 'b-black_dye',
    translation: 'Broken Black Dye',
  },
  {
    stat: 'b-bone_meal',
    translation: 'Broken Bone Meal',
  },
  {
    stat: 'b-bone',
    translation: 'Broken Bone',
  },
  {
    stat: 'b-sugar',
    translation: 'Broken Sugar',
  },
  {
    stat: 'b-cake',
    translation: 'Broken Cake',
  },
  {
    stat: 'b-white_bed',
    translation: 'Broken White Bed',
  },
  {
    stat: 'b-orange_bed',
    translation: 'Broken Orange Bed',
  },
  {
    stat: 'b-magenta_bed',
    translation: 'Broken Magenta Bed',
  },
  {
    stat: 'b-light_blue_bed',
    translation: 'Broken Light Blue Bed',
  },
  {
    stat: 'b-yellow_bed',
    translation: 'Broken Yellow Bed',
  },
  {
    stat: 'b-lime_bed',
    translation: 'Broken Lime Bed',
  },
  {
    stat: 'b-pink_bed',
    translation: 'Broken Pink Bed',
  },
  {
    stat: 'b-gray_bed',
    translation: 'Broken Gray Bed',
  },
  {
    stat: 'b-light_gray_bed',
    translation: 'Broken Light Gray Bed',
  },
  {
    stat: 'b-cyan_bed',
    translation: 'Broken Cyan Bed',
  },
  {
    stat: 'b-purple_bed',
    translation: 'Broken Purple Bed',
  },
  {
    stat: 'b-blue_bed',
    translation: 'Broken Blue Bed',
  },
  {
    stat: 'b-brown_bed',
    translation: 'Broken Brown Bed',
  },
  {
    stat: 'b-green_bed',
    translation: 'Broken Green Bed',
  },
  {
    stat: 'b-red_bed',
    translation: 'Broken Red Bed',
  },
  {
    stat: 'b-black_bed',
    translation: 'Broken Black Bed',
  },
  {
    stat: 'b-cookie',
    translation: 'Broken Cookie',
  },
  {
    stat: 'b-filled_map',
    translation: 'Broken Map',
  },
  {
    stat: 'b-shears',
    translation: 'Broken Shears',
  },
  {
    stat: 'b-melon_slice',
    translation: 'Broken Melon Slice',
  },
  {
    stat: 'b-dried_kelp',
    translation: 'Broken Dried Kelp',
  },
  {
    stat: 'b-pumpkin_seeds',
    translation: 'Broken Pumpkin Seeds',
  },
  {
    stat: 'b-melon_seeds',
    translation: 'Broken Melon Seeds',
  },
  {
    stat: 'b-beef',
    translation: 'Broken Raw Beef',
  },
  {
    stat: 'b-cooked_beef',
    translation: 'Broken Steak',
  },
  {
    stat: 'b-chicken',
    translation: 'Broken Raw Chicken',
  },
  {
    stat: 'b-cooked_chicken',
    translation: 'Broken Cooked Chicken',
  },
  {
    stat: 'b-rotten_flesh',
    translation: 'Broken Rotten Flesh',
  },
  {
    stat: 'b-ender_pearl',
    translation: 'Broken Ender Pearl',
  },
  {
    stat: 'b-blaze_rod',
    translation: 'Broken Blaze Rod',
  },
  {
    stat: 'b-ghast_tear',
    translation: 'Broken Ghast Tear',
  },
  {
    stat: 'b-gold_nugget',
    translation: 'Broken Gold Nugget',
  },
  {
    stat: 'b-nether_wart',
    translation: 'Broken Nether Wart',
  },
  {
    stat: 'b-potion',
    translation: 'Broken Potion',
  },
  {
    stat: 'b-glass_bottle',
    translation: 'Broken Glass Bottle',
  },
  {
    stat: 'b-spider_eye',
    translation: 'Broken Spider Eye',
  },
  {
    stat: 'b-fermented_spider_eye',
    translation: 'Broken Fermented Spider Eye',
  },
  {
    stat: 'b-blaze_powder',
    translation: 'Broken Blaze Powder',
  },
  {
    stat: 'b-magma_cream',
    translation: 'Broken Magma Cream',
  },
  {
    stat: 'b-brewing_stand',
    translation: 'Broken Brewing Stand',
  },
  {
    stat: 'b-cauldron',
    translation: 'Broken Cauldron',
  },
  {
    stat: 'b-ender_eye',
    translation: 'Broken Eye of Ender',
  },
  {
    stat: 'b-glistering_melon_slice',
    translation: 'Broken Glistering Melon Slice',
  },
  {
    stat: 'b-allay_spawn_egg',
    translation: 'Broken Allay Spawn Egg',
  },
  {
    stat: 'b-axolotl_spawn_egg',
    translation: 'Broken Axolotl Spawn Egg',
  },
  {
    stat: 'b-bat_spawn_egg',
    translation: 'Broken Bat Spawn Egg',
  },
  {
    stat: 'b-bee_spawn_egg',
    translation: 'Broken Bee Spawn Egg',
  },
  {
    stat: 'b-blaze_spawn_egg',
    translation: 'Broken Blaze Spawn Egg',
  },
  {
    stat: 'b-cat_spawn_egg',
    translation: 'Broken Cat Spawn Egg',
  },
  {
    stat: 'b-cave_spider_spawn_egg',
    translation: 'Broken Cave Spider Spawn Egg',
  },
  {
    stat: 'b-chicken_spawn_egg',
    translation: 'Broken Chicken Spawn Egg',
  },
  {
    stat: 'b-cod_spawn_egg',
    translation: 'Broken Cod Spawn Egg',
  },
  {
    stat: 'b-cow_spawn_egg',
    translation: 'Broken Cow Spawn Egg',
  },
  {
    stat: 'b-creeper_spawn_egg',
    translation: 'Broken Creeper Spawn Egg',
  },
  {
    stat: 'b-dolphin_spawn_egg',
    translation: 'Broken Dolphin Spawn Egg',
  },
  {
    stat: 'b-donkey_spawn_egg',
    translation: 'Broken Donkey Spawn Egg',
  },
  {
    stat: 'b-drowned_spawn_egg',
    translation: 'Broken Drowned Spawn Egg',
  },
  {
    stat: 'b-elder_guardian_spawn_egg',
    translation: 'Broken Elder Guardian Spawn Egg',
  },
  {
    stat: 'b-enderman_spawn_egg',
    translation: 'Broken Enderman Spawn Egg',
  },
  {
    stat: 'b-endermite_spawn_egg',
    translation: 'Broken Endermite Spawn Egg',
  },
  {
    stat: 'b-evoker_spawn_egg',
    translation: 'Broken Evoker Spawn Egg',
  },
  {
    stat: 'b-fox_spawn_egg',
    translation: 'Broken Fox Spawn Egg',
  },
  {
    stat: 'b-frog_spawn_egg',
    translation: 'Broken Frog Spawn Egg',
  },
  {
    stat: 'b-ghast_spawn_egg',
    translation: 'Broken Ghast Spawn Egg',
  },
  {
    stat: 'b-glow_squid_spawn_egg',
    translation: 'Broken Glow Squid Spawn Egg',
  },
  {
    stat: 'b-goat_spawn_egg',
    translation: 'Broken Goat Spawn Egg',
  },
  {
    stat: 'b-guardian_spawn_egg',
    translation: 'Broken Guardian Spawn Egg',
  },
  {
    stat: 'b-hoglin_spawn_egg',
    translation: 'Broken Hoglin Spawn Egg',
  },
  {
    stat: 'b-horse_spawn_egg',
    translation: 'Broken Horse Spawn Egg',
  },
  {
    stat: 'b-husk_spawn_egg',
    translation: 'Broken Husk Spawn Egg',
  },
  {
    stat: 'b-llama_spawn_egg',
    translation: 'Broken Llama Spawn Egg',
  },
  {
    stat: 'b-magma_cube_spawn_egg',
    translation: 'Broken Magma Cube Spawn Egg',
  },
  {
    stat: 'b-mooshroom_spawn_egg',
    translation: 'Broken Mooshroom Spawn Egg',
  },
  {
    stat: 'b-mule_spawn_egg',
    translation: 'Broken Mule Spawn Egg',
  },
  {
    stat: 'b-ocelot_spawn_egg',
    translation: 'Broken Ocelot Spawn Egg',
  },
  {
    stat: 'b-panda_spawn_egg',
    translation: 'Broken Panda Spawn Egg',
  },
  {
    stat: 'b-parrot_spawn_egg',
    translation: 'Broken Parrot Spawn Egg',
  },
  {
    stat: 'b-phantom_spawn_egg',
    translation: 'Broken Phantom Spawn Egg',
  },
  {
    stat: 'b-pig_spawn_egg',
    translation: 'Broken Pig Spawn Egg',
  },
  {
    stat: 'b-piglin_spawn_egg',
    translation: 'Broken Piglin Spawn Egg',
  },
  {
    stat: 'b-piglin_brute_spawn_egg',
    translation: 'Broken Piglin Brute Spawn Egg',
  },
  {
    stat: 'b-pillager_spawn_egg',
    translation: 'Broken Pillager Spawn Egg',
  },
  {
    stat: 'b-polar_bear_spawn_egg',
    translation: 'Broken Polar Bear Spawn Egg',
  },
  {
    stat: 'b-pufferfish_spawn_egg',
    translation: 'Broken Pufferfish Spawn Egg',
  },
  {
    stat: 'b-rabbit_spawn_egg',
    translation: 'Broken Rabbit Spawn Egg',
  },
  {
    stat: 'b-ravager_spawn_egg',
    translation: 'Broken Ravager Spawn Egg',
  },
  {
    stat: 'b-salmon_spawn_egg',
    translation: 'Broken Salmon Spawn Egg',
  },
  {
    stat: 'b-sheep_spawn_egg',
    translation: 'Broken Sheep Spawn Egg',
  },
  {
    stat: 'b-shulker_spawn_egg',
    translation: 'Broken Shulker Spawn Egg',
  },
  {
    stat: 'b-silverfish_spawn_egg',
    translation: 'Broken Silverfish Spawn Egg',
  },
  {
    stat: 'b-skeleton_spawn_egg',
    translation: 'Broken Skeleton Spawn Egg',
  },
  {
    stat: 'b-skeleton_horse_spawn_egg',
    translation: 'Broken Skeleton Horse Spawn Egg',
  },
  {
    stat: 'b-slime_spawn_egg',
    translation: 'Broken Slime Spawn Egg',
  },
  {
    stat: 'b-spider_spawn_egg',
    translation: 'Broken Spider Spawn Egg',
  },
  {
    stat: 'b-squid_spawn_egg',
    translation: 'Broken Squid Spawn Egg',
  },
  {
    stat: 'b-stray_spawn_egg',
    translation: 'Broken Stray Spawn Egg',
  },
  {
    stat: 'b-strider_spawn_egg',
    translation: 'Broken Strider Spawn Egg',
  },
  {
    stat: 'b-tadpole_spawn_egg',
    translation: 'Broken Tadpole Spawn Egg',
  },
  {
    stat: 'b-trader_llama_spawn_egg',
    translation: 'Broken Trader Llama Spawn Egg',
  },
  {
    stat: 'b-tropical_fish_spawn_egg',
    translation: 'Broken Tropical Fish Spawn Egg',
  },
  {
    stat: 'b-turtle_spawn_egg',
    translation: 'Broken Turtle Spawn Egg',
  },
  {
    stat: 'b-vex_spawn_egg',
    translation: 'Broken Vex Spawn Egg',
  },
  {
    stat: 'b-villager_spawn_egg',
    translation: 'Broken Villager Spawn Egg',
  },
  {
    stat: 'b-vindicator_spawn_egg',
    translation: 'Broken Vindicator Spawn Egg',
  },
  {
    stat: 'b-wandering_trader_spawn_egg',
    translation: 'Broken Wandering Trader Spawn Egg',
  },
  {
    stat: 'b-warden_spawn_egg',
    translation: 'Broken Warden Spawn Egg',
  },
  {
    stat: 'b-witch_spawn_egg',
    translation: 'Broken Witch Spawn Egg',
  },
  {
    stat: 'b-wither_skeleton_spawn_egg',
    translation: 'Broken Wither Skeleton Spawn Egg',
  },
  {
    stat: 'b-wolf_spawn_egg',
    translation: 'Broken Wolf Spawn Egg',
  },
  {
    stat: 'b-zoglin_spawn_egg',
    translation: 'Broken Zoglin Spawn Egg',
  },
  {
    stat: 'b-zombie_spawn_egg',
    translation: 'Broken Zombie Spawn Egg',
  },
  {
    stat: 'b-zombie_horse_spawn_egg',
    translation: 'Broken Zombie Horse Spawn Egg',
  },
  {
    stat: 'b-zombie_villager_spawn_egg',
    translation: 'Broken Zombie Villager Spawn Egg',
  },
  {
    stat: 'b-zombified_piglin_spawn_egg',
    translation: 'Broken Zombified Piglin Spawn Egg',
  },
  {
    stat: 'b-experience_bottle',
    translation: "Broken Bottle o' Enchanting",
  },
  {
    stat: 'b-fire_charge',
    translation: 'Broken Fire Charge',
  },
  {
    stat: 'b-writable_book',
    translation: 'Broken Book and Quill',
  },
  {
    stat: 'b-written_book',
    translation: 'Broken Written Book',
  },
  {
    stat: 'b-item_frame',
    translation: 'Broken Item Frame',
  },
  {
    stat: 'b-glow_item_frame',
    translation: 'Broken Glow Item Frame',
  },
  {
    stat: 'b-flower_pot',
    translation: 'Broken Flower Pot',
  },
  {
    stat: 'b-carrot',
    translation: 'Broken Carrot',
  },
  {
    stat: 'b-potato',
    translation: 'Broken Potato',
  },
  {
    stat: 'b-baked_potato',
    translation: 'Broken Baked Potato',
  },
  {
    stat: 'b-poisonous_potato',
    translation: 'Broken Poisonous Potato',
  },
  {
    stat: 'b-map',
    translation: 'Broken Empty Map',
  },
  {
    stat: 'b-golden_carrot',
    translation: 'Broken Golden Carrot',
  },
  {
    stat: 'b-skeleton_skull',
    translation: 'Broken Skeleton Skull',
  },
  {
    stat: 'b-wither_skeleton_skull',
    translation: 'Broken Wither Skeleton Skull',
  },
  {
    stat: 'b-player_head',
    translation: 'Broken Player Head',
  },
  {
    stat: 'b-zombie_head',
    translation: 'Broken Zombie Head',
  },
  {
    stat: 'b-creeper_head',
    translation: 'Broken Creeper Head',
  },
  {
    stat: 'b-dragon_head',
    translation: 'Broken Dragon Head',
  },
  {
    stat: 'b-nether_star',
    translation: 'Broken Nether Star',
  },
  {
    stat: 'b-pumpkin_pie',
    translation: 'Broken Pumpkin Pie',
  },
  {
    stat: 'b-firework_rocket',
    translation: 'Broken Firework Rocket',
  },
  {
    stat: 'b-firework_star',
    translation: 'Broken Firework Star',
  },
  {
    stat: 'b-enchanted_book',
    translation: 'Broken Enchanted Book',
  },
  {
    stat: 'b-nether_brick',
    translation: 'Broken Nether Brick',
  },
  {
    stat: 'b-prismarine_shard',
    translation: 'Broken Prismarine Shard',
  },
  {
    stat: 'b-prismarine_crystals',
    translation: 'Broken Prismarine Crystals',
  },
  {
    stat: 'b-rabbit',
    translation: 'Broken Raw Rabbit',
  },
  {
    stat: 'b-cooked_rabbit',
    translation: 'Broken Cooked Rabbit',
  },
  {
    stat: 'b-rabbit_stew',
    translation: 'Broken Rabbit Stew',
  },
  {
    stat: 'b-rabbit_foot',
    translation: "Broken Rabbit's Foot",
  },
  {
    stat: 'b-rabbit_hide',
    translation: 'Broken Rabbit Hide',
  },
  {
    stat: 'b-armor_stand',
    translation: 'Broken Armor Stand',
  },
  {
    stat: 'b-iron_horse_armor',
    translation: 'Broken Iron Horse Armor',
  },
  {
    stat: 'b-golden_horse_armor',
    translation: 'Broken Golden Horse Armor',
  },
  {
    stat: 'b-diamond_horse_armor',
    translation: 'Broken Diamond Horse Armor',
  },
  {
    stat: 'b-leather_horse_armor',
    translation: 'Broken Leather Horse Armor',
  },
  {
    stat: 'b-lead',
    translation: 'Broken Lead',
  },
  {
    stat: 'b-name_tag',
    translation: 'Broken Name Tag',
  },
  {
    stat: 'b-command_block_minecart',
    translation: 'Broken Minecart with Command Block',
  },
  {
    stat: 'b-mutton',
    translation: 'Broken Raw Mutton',
  },
  {
    stat: 'b-cooked_mutton',
    translation: 'Broken Cooked Mutton',
  },
  {
    stat: 'b-white_banner',
    translation: 'Broken White Banner',
  },
  {
    stat: 'b-orange_banner',
    translation: 'Broken Orange Banner',
  },
  {
    stat: 'b-magenta_banner',
    translation: 'Broken Magenta Banner',
  },
  {
    stat: 'b-light_blue_banner',
    translation: 'Broken Light Blue Banner',
  },
  {
    stat: 'b-yellow_banner',
    translation: 'Broken Yellow Banner',
  },
  {
    stat: 'b-lime_banner',
    translation: 'Broken Lime Banner',
  },
  {
    stat: 'b-pink_banner',
    translation: 'Broken Pink Banner',
  },
  {
    stat: 'b-gray_banner',
    translation: 'Broken Gray Banner',
  },
  {
    stat: 'b-light_gray_banner',
    translation: 'Broken Light Gray Banner',
  },
  {
    stat: 'b-cyan_banner',
    translation: 'Broken Cyan Banner',
  },
  {
    stat: 'b-purple_banner',
    translation: 'Broken Purple Banner',
  },
  {
    stat: 'b-blue_banner',
    translation: 'Broken Blue Banner',
  },
  {
    stat: 'b-brown_banner',
    translation: 'Broken Brown Banner',
  },
  {
    stat: 'b-green_banner',
    translation: 'Broken Green Banner',
  },
  {
    stat: 'b-red_banner',
    translation: 'Broken Red Banner',
  },
  {
    stat: 'b-black_banner',
    translation: 'Broken Black Banner',
  },
  {
    stat: 'b-end_crystal',
    translation: 'Broken End Crystal',
  },
  {
    stat: 'b-chorus_fruit',
    translation: 'Broken Chorus Fruit',
  },
  {
    stat: 'b-popped_chorus_fruit',
    translation: 'Broken Popped Chorus Fruit',
  },
  {
    stat: 'b-beetroot',
    translation: 'Broken Beetroot',
  },
  {
    stat: 'b-beetroot_seeds',
    translation: 'Broken Beetroot Seeds',
  },
  {
    stat: 'b-beetroot_soup',
    translation: 'Broken Beetroot Soup',
  },
  {
    stat: 'b-dragon_breath',
    translation: "Broken Dragon's Breath",
  },
  {
    stat: 'b-splash_potion',
    translation: 'Broken Splash Potion',
  },
  {
    stat: 'b-spectral_arrow',
    translation: 'Broken Spectral Arrow',
  },
  {
    stat: 'b-tipped_arrow',
    translation: 'Broken Tipped Arrow',
  },
  {
    stat: 'b-lingering_potion',
    translation: 'Broken Lingering Potion',
  },
  {
    stat: 'b-shield',
    translation: 'Broken Shield',
  },
  {
    stat: 'b-totem_of_undying',
    translation: 'Broken Totem of Undying',
  },
  {
    stat: 'b-shulker_shell',
    translation: 'Broken Shulker Shell',
  },
  {
    stat: 'b-iron_nugget',
    translation: 'Broken Iron Nugget',
  },
  {
    stat: 'b-knowledge_book',
    translation: 'Broken Knowledge Book',
  },
  {
    stat: 'b-debug_stick',
    translation: 'Broken Debug Stick',
  },
  {
    stat: 'b-music_disc_13',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_cat',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_blocks',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_chirp',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_far',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_mall',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_mellohi',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_stal',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_strad',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_ward',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_11',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_wait',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_otherside',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_5',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-music_disc_pigstep',
    translation: 'Broken Music Disc',
  },
  {
    stat: 'b-disc_fragment_5',
    translation: 'Broken Disc Fragment',
  },
  {
    stat: 'b-trident',
    translation: 'Broken Trident',
  },
  {
    stat: 'b-phantom_membrane',
    translation: 'Broken Phantom Membrane',
  },
  {
    stat: 'b-nautilus_shell',
    translation: 'Broken Nautilus Shell',
  },
  {
    stat: 'b-heart_of_the_sea',
    translation: 'Broken Heart of the Sea',
  },
  {
    stat: 'b-crossbow',
    translation: 'Broken Crossbow',
  },
  {
    stat: 'b-suspicious_stew',
    translation: 'Broken Suspicious Stew',
  },
  {
    stat: 'b-loom',
    translation: 'Broken Loom',
  },
  {
    stat: 'b-flower_banner_pattern',
    translation: 'Broken Banner Pattern',
  },
  {
    stat: 'b-creeper_banner_pattern',
    translation: 'Broken Banner Pattern',
  },
  {
    stat: 'b-skull_banner_pattern',
    translation: 'Broken Banner Pattern',
  },
  {
    stat: 'b-mojang_banner_pattern',
    translation: 'Broken Banner Pattern',
  },
  {
    stat: 'b-globe_banner_pattern',
    translation: 'Broken Banner Pattern',
  },
  {
    stat: 'b-piglin_banner_pattern',
    translation: 'Broken Banner Pattern',
  },
  {
    stat: 'b-goat_horn',
    translation: 'Broken Goat Horn',
  },
  {
    stat: 'b-composter',
    translation: 'Broken Composter',
  },
  {
    stat: 'b-barrel',
    translation: 'Broken Barrel',
  },
  {
    stat: 'b-smoker',
    translation: 'Broken Smoker',
  },
  {
    stat: 'b-blast_furnace',
    translation: 'Broken Blast Furnace',
  },
  {
    stat: 'b-cartography_table',
    translation: 'Broken Cartography Table',
  },
  {
    stat: 'b-fletching_table',
    translation: 'Broken Fletching Table',
  },
  {
    stat: 'b-grindstone',
    translation: 'Broken Grindstone',
  },
  {
    stat: 'b-smithing_table',
    translation: 'Broken Smithing Table',
  },
  {
    stat: 'b-stonecutter',
    translation: 'Broken Stonecutter',
  },
  {
    stat: 'b-bell',
    translation: 'Broken Bell',
  },
  {
    stat: 'b-lantern',
    translation: 'Broken Lantern',
  },
  {
    stat: 'b-soul_lantern',
    translation: 'Broken Soul Lantern',
  },
  {
    stat: 'b-sweet_berries',
    translation: 'Broken Sweet Berries',
  },
  {
    stat: 'b-glow_berries',
    translation: 'Broken Glow Berries',
  },
  {
    stat: 'b-campfire',
    translation: 'Broken Campfire',
  },
  {
    stat: 'b-soul_campfire',
    translation: 'Broken Soul Campfire',
  },
  {
    stat: 'b-shroomlight',
    translation: 'Broken Shroomlight',
  },
  {
    stat: 'b-honeycomb',
    translation: 'Broken Honeycomb',
  },
  {
    stat: 'b-bee_nest',
    translation: 'Broken Bee Nest',
  },
  {
    stat: 'b-beehive',
    translation: 'Broken Beehive',
  },
  {
    stat: 'b-honey_bottle',
    translation: 'Broken Honey Bottle',
  },
  {
    stat: 'b-honeycomb_block',
    translation: 'Broken Honeycomb Block',
  },
  {
    stat: 'b-lodestone',
    translation: 'Broken Lodestone',
  },
  {
    stat: 'b-crying_obsidian',
    translation: 'Broken Crying Obsidian',
  },
  {
    stat: 'b-blackstone',
    translation: 'Broken Blackstone',
  },
  {
    stat: 'b-blackstone_slab',
    translation: 'Broken Blackstone Slab',
  },
  {
    stat: 'b-blackstone_stairs',
    translation: 'Broken Blackstone Stairs',
  },
  {
    stat: 'b-gilded_blackstone',
    translation: 'Broken Gilded Blackstone',
  },
  {
    stat: 'b-polished_blackstone',
    translation: 'Broken Polished Blackstone',
  },
  {
    stat: 'b-polished_blackstone_slab',
    translation: 'Broken Polished Blackstone Slab',
  },
  {
    stat: 'b-polished_blackstone_stairs',
    translation: 'Broken Polished Blackstone Stairs',
  },
  {
    stat: 'b-chiseled_polished_blackstone',
    translation: 'Broken Chiseled Polished Blackstone',
  },
  {
    stat: 'b-polished_blackstone_bricks',
    translation: 'Broken Polished Blackstone Bricks',
  },
  {
    stat: 'b-polished_blackstone_brick_slab',
    translation: 'Broken Polished Blackstone Brick Slab',
  },
  {
    stat: 'b-polished_blackstone_brick_stairs',
    translation: 'Broken Polished Blackstone Brick Stairs',
  },
  {
    stat: 'b-cracked_polished_blackstone_bricks',
    translation: 'Broken Cracked Polished Blackstone Bricks',
  },
  {
    stat: 'b-respawn_anchor',
    translation: 'Broken Respawn Anchor',
  },
  {
    stat: 'b-candle',
    translation: 'Broken Candle',
  },
  {
    stat: 'b-white_candle',
    translation: 'Broken White Candle',
  },
  {
    stat: 'b-orange_candle',
    translation: 'Broken Orange Candle',
  },
  {
    stat: 'b-magenta_candle',
    translation: 'Broken Magenta Candle',
  },
  {
    stat: 'b-light_blue_candle',
    translation: 'Broken Light Blue Candle',
  },
  {
    stat: 'b-yellow_candle',
    translation: 'Broken Yellow Candle',
  },
  {
    stat: 'b-lime_candle',
    translation: 'Broken Lime Candle',
  },
  {
    stat: 'b-pink_candle',
    translation: 'Broken Pink Candle',
  },
  {
    stat: 'b-gray_candle',
    translation: 'Broken Gray Candle',
  },
  {
    stat: 'b-light_gray_candle',
    translation: 'Broken Light Gray Candle',
  },
  {
    stat: 'b-cyan_candle',
    translation: 'Broken Cyan Candle',
  },
  {
    stat: 'b-purple_candle',
    translation: 'Broken Purple Candle',
  },
  {
    stat: 'b-blue_candle',
    translation: 'Broken Blue Candle',
  },
  {
    stat: 'b-brown_candle',
    translation: 'Broken Brown Candle',
  },
  {
    stat: 'b-green_candle',
    translation: 'Broken Green Candle',
  },
  {
    stat: 'b-red_candle',
    translation: 'Broken Red Candle',
  },
  {
    stat: 'b-black_candle',
    translation: 'Broken Black Candle',
  },
  {
    stat: 'b-small_amethyst_bud',
    translation: 'Broken Small Amethyst Bud',
  },
  {
    stat: 'b-medium_amethyst_bud',
    translation: 'Broken Medium Amethyst Bud',
  },
  {
    stat: 'b-large_amethyst_bud',
    translation: 'Broken Large Amethyst Bud',
  },
  {
    stat: 'b-amethyst_cluster',
    translation: 'Broken Amethyst Cluster',
  },
  {
    stat: 'b-pointed_dripstone',
    translation: 'Broken Pointed Dripstone',
  },
  {
    stat: 'b-ochre_froglight',
    translation: 'Broken Ochre Froglight',
  },
  {
    stat: 'b-verdant_froglight',
    translation: 'Broken Verdant Froglight',
  },
  {
    stat: 'b-pearlescent_froglight',
    translation: 'Broken Pearlescent Froglight',
  },
  {
    stat: 'b-frogspawn',
    translation: 'Broken Frogspawn',
  },
  {
    stat: 'b-echo_shard',
    translation: 'Broken Echo Shard',
  },
  {
    stat: 'p-air',
    translation: 'Picked Up Air',
  },
  {
    stat: 'p-stone',
    translation: 'Picked Up Stone',
  },
  {
    stat: 'p-granite',
    translation: 'Picked Up Granite',
  },
  {
    stat: 'p-polished_granite',
    translation: 'Picked Up Polished Granite',
  },
  {
    stat: 'p-diorite',
    translation: 'Picked Up Diorite',
  },
  {
    stat: 'p-polished_diorite',
    translation: 'Picked Up Polished Diorite',
  },
  {
    stat: 'p-andesite',
    translation: 'Picked Up Andesite',
  },
  {
    stat: 'p-polished_andesite',
    translation: 'Picked Up Polished Andesite',
  },
  {
    stat: 'p-deepslate',
    translation: 'Picked Up Deepslate',
  },
  {
    stat: 'p-cobbled_deepslate',
    translation: 'Picked Up Cobbled Deepslate',
  },
  {
    stat: 'p-polished_deepslate',
    translation: 'Picked Up Polished Deepslate',
  },
  {
    stat: 'p-calcite',
    translation: 'Picked Up Calcite',
  },
  {
    stat: 'p-tuff',
    translation: 'Picked Up Tuff',
  },
  {
    stat: 'p-dripstone_block',
    translation: 'Picked Up Dripstone Block',
  },
  {
    stat: 'p-grass_block',
    translation: 'Picked Up Grass Block',
  },
  {
    stat: 'p-dirt',
    translation: 'Picked Up Dirt',
  },
  {
    stat: 'p-coarse_dirt',
    translation: 'Picked Up Coarse Dirt',
  },
  {
    stat: 'p-podzol',
    translation: 'Picked Up Podzol',
  },
  {
    stat: 'p-rooted_dirt',
    translation: 'Picked Up Rooted Dirt',
  },
  {
    stat: 'p-mud',
    translation: 'Picked Up Mud',
  },
  {
    stat: 'p-crimson_nylium',
    translation: 'Picked Up Crimson Nylium',
  },
  {
    stat: 'p-warped_nylium',
    translation: 'Picked Up Warped Nylium',
  },
  {
    stat: 'p-cobblestone',
    translation: 'Picked Up Cobblestone',
  },
  {
    stat: 'p-oak_planks',
    translation: 'Picked Up Oak Planks',
  },
  {
    stat: 'p-spruce_planks',
    translation: 'Picked Up Spruce Planks',
  },
  {
    stat: 'p-birch_planks',
    translation: 'Picked Up Birch Planks',
  },
  {
    stat: 'p-jungle_planks',
    translation: 'Picked Up Jungle Planks',
  },
  {
    stat: 'p-acacia_planks',
    translation: 'Picked Up Acacia Planks',
  },
  {
    stat: 'p-dark_oak_planks',
    translation: 'Picked Up Dark Oak Planks',
  },
  {
    stat: 'p-mangrove_planks',
    translation: 'Picked Up Mangrove Planks',
  },
  {
    stat: 'p-crimson_planks',
    translation: 'Picked Up Crimson Planks',
  },
  {
    stat: 'p-warped_planks',
    translation: 'Picked Up Warped Planks',
  },
  {
    stat: 'p-oak_sapling',
    translation: 'Picked Up Oak Sapling',
  },
  {
    stat: 'p-spruce_sapling',
    translation: 'Picked Up Spruce Sapling',
  },
  {
    stat: 'p-birch_sapling',
    translation: 'Picked Up Birch Sapling',
  },
  {
    stat: 'p-jungle_sapling',
    translation: 'Picked Up Jungle Sapling',
  },
  {
    stat: 'p-acacia_sapling',
    translation: 'Picked Up Acacia Sapling',
  },
  {
    stat: 'p-dark_oak_sapling',
    translation: 'Picked Up Dark Oak Sapling',
  },
  {
    stat: 'p-mangrove_propagule',
    translation: 'Picked Up Mangrove Propagule',
  },
  {
    stat: 'p-bedrock',
    translation: 'Picked Up Bedrock',
  },
  {
    stat: 'p-sand',
    translation: 'Picked Up Sand',
  },
  {
    stat: 'p-red_sand',
    translation: 'Picked Up Red Sand',
  },
  {
    stat: 'p-gravel',
    translation: 'Picked Up Gravel',
  },
  {
    stat: 'p-coal_ore',
    translation: 'Picked Up Coal Ore',
  },
  {
    stat: 'p-deepslate_coal_ore',
    translation: 'Picked Up Deepslate Coal Ore',
  },
  {
    stat: 'p-iron_ore',
    translation: 'Picked Up Iron Ore',
  },
  {
    stat: 'p-deepslate_iron_ore',
    translation: 'Picked Up Deepslate Iron Ore',
  },
  {
    stat: 'p-copper_ore',
    translation: 'Picked Up Copper Ore',
  },
  {
    stat: 'p-deepslate_copper_ore',
    translation: 'Picked Up Deepslate Copper Ore',
  },
  {
    stat: 'p-gold_ore',
    translation: 'Picked Up Gold Ore',
  },
  {
    stat: 'p-deepslate_gold_ore',
    translation: 'Picked Up Deepslate Gold Ore',
  },
  {
    stat: 'p-redstone_ore',
    translation: 'Picked Up Redstone Ore',
  },
  {
    stat: 'p-deepslate_redstone_ore',
    translation: 'Picked Up Deepslate Redstone Ore',
  },
  {
    stat: 'p-emerald_ore',
    translation: 'Picked Up Emerald Ore',
  },
  {
    stat: 'p-deepslate_emerald_ore',
    translation: 'Picked Up Deepslate Emerald Ore',
  },
  {
    stat: 'p-lapis_ore',
    translation: 'Picked Up Lapis Lazuli Ore',
  },
  {
    stat: 'p-deepslate_lapis_ore',
    translation: 'Picked Up Deepslate Lapis Lazuli Ore',
  },
  {
    stat: 'p-diamond_ore',
    translation: 'Picked Up Diamond Ore',
  },
  {
    stat: 'p-deepslate_diamond_ore',
    translation: 'Picked Up Deepslate Diamond Ore',
  },
  {
    stat: 'p-nether_gold_ore',
    translation: 'Picked Up Nether Gold Ore',
  },
  {
    stat: 'p-nether_quartz_ore',
    translation: 'Picked Up Nether Quartz Ore',
  },
  {
    stat: 'p-ancient_debris',
    translation: 'Picked Up Ancient Debris',
  },
  {
    stat: 'p-coal_block',
    translation: 'Picked Up Block of Coal',
  },
  {
    stat: 'p-raw_iron_block',
    translation: 'Picked Up Block of Raw Iron',
  },
  {
    stat: 'p-raw_copper_block',
    translation: 'Picked Up Block of Raw Copper',
  },
  {
    stat: 'p-raw_gold_block',
    translation: 'Picked Up Block of Raw Gold',
  },
  {
    stat: 'p-amethyst_block',
    translation: 'Picked Up Block of Amethyst',
  },
  {
    stat: 'p-budding_amethyst',
    translation: 'Picked Up Budding Amethyst',
  },
  {
    stat: 'p-iron_block',
    translation: 'Picked Up Block of Iron',
  },
  {
    stat: 'p-copper_block',
    translation: 'Picked Up Block of Copper',
  },
  {
    stat: 'p-gold_block',
    translation: 'Picked Up Block of Gold',
  },
  {
    stat: 'p-diamond_block',
    translation: 'Picked Up Block of Diamond',
  },
  {
    stat: 'p-netherite_block',
    translation: 'Picked Up Block of Netherite',
  },
  {
    stat: 'p-exposed_copper',
    translation: 'Picked Up Exposed Copper',
  },
  {
    stat: 'p-weathered_copper',
    translation: 'Picked Up Weathered Copper',
  },
  {
    stat: 'p-oxidized_copper',
    translation: 'Picked Up Oxidized Copper',
  },
  {
    stat: 'p-cut_copper',
    translation: 'Picked Up Cut Copper',
  },
  {
    stat: 'p-exposed_cut_copper',
    translation: 'Picked Up Exposed Cut Copper',
  },
  {
    stat: 'p-weathered_cut_copper',
    translation: 'Picked Up Weathered Cut Copper',
  },
  {
    stat: 'p-oxidized_cut_copper',
    translation: 'Picked Up Oxidized Cut Copper',
  },
  {
    stat: 'p-cut_copper_stairs',
    translation: 'Picked Up Cut Copper Stairs',
  },
  {
    stat: 'p-exposed_cut_copper_stairs',
    translation: 'Picked Up Exposed Cut Copper Stairs',
  },
  {
    stat: 'p-weathered_cut_copper_stairs',
    translation: 'Picked Up Weathered Cut Copper Stairs',
  },
  {
    stat: 'p-oxidized_cut_copper_stairs',
    translation: 'Picked Up Oxidized Cut Copper Stairs',
  },
  {
    stat: 'p-cut_copper_slab',
    translation: 'Picked Up Cut Copper Slab',
  },
  {
    stat: 'p-exposed_cut_copper_slab',
    translation: 'Picked Up Exposed Cut Copper Slab',
  },
  {
    stat: 'p-weathered_cut_copper_slab',
    translation: 'Picked Up Weathered Cut Copper Slab',
  },
  {
    stat: 'p-oxidized_cut_copper_slab',
    translation: 'Picked Up Oxidized Cut Copper Slab',
  },
  {
    stat: 'p-waxed_copper_block',
    translation: 'Picked Up Waxed Block of Copper',
  },
  {
    stat: 'p-waxed_exposed_copper',
    translation: 'Picked Up Waxed Exposed Copper',
  },
  {
    stat: 'p-waxed_weathered_copper',
    translation: 'Picked Up Waxed Weathered Copper',
  },
  {
    stat: 'p-waxed_oxidized_copper',
    translation: 'Picked Up Waxed Oxidized Copper',
  },
  {
    stat: 'p-waxed_cut_copper',
    translation: 'Picked Up Waxed Cut Copper',
  },
  {
    stat: 'p-waxed_exposed_cut_copper',
    translation: 'Picked Up Waxed Exposed Cut Copper',
  },
  {
    stat: 'p-waxed_weathered_cut_copper',
    translation: 'Picked Up Waxed Weathered Cut Copper',
  },
  {
    stat: 'p-waxed_oxidized_cut_copper',
    translation: 'Picked Up Waxed Oxidized Cut Copper',
  },
  {
    stat: 'p-waxed_cut_copper_stairs',
    translation: 'Picked Up Waxed Cut Copper Stairs',
  },
  {
    stat: 'p-waxed_exposed_cut_copper_stairs',
    translation: 'Picked Up Waxed Exposed Cut Copper Stairs',
  },
  {
    stat: 'p-waxed_weathered_cut_copper_stairs',
    translation: 'Picked Up Waxed Weathered Cut Copper Stairs',
  },
  {
    stat: 'p-waxed_oxidized_cut_copper_stairs',
    translation: 'Picked Up Waxed Oxidized Cut Copper Stairs',
  },
  {
    stat: 'p-waxed_cut_copper_slab',
    translation: 'Picked Up Waxed Cut Copper Slab',
  },
  {
    stat: 'p-waxed_exposed_cut_copper_slab',
    translation: 'Picked Up Waxed Exposed Cut Copper Slab',
  },
  {
    stat: 'p-waxed_weathered_cut_copper_slab',
    translation: 'Picked Up Waxed Weathered Cut Copper Slab',
  },
  {
    stat: 'p-waxed_oxidized_cut_copper_slab',
    translation: 'Picked Up Waxed Oxidized Cut Copper Slab',
  },
  {
    stat: 'p-oak_log',
    translation: 'Picked Up Oak Log',
  },
  {
    stat: 'p-spruce_log',
    translation: 'Picked Up Spruce Log',
  },
  {
    stat: 'p-birch_log',
    translation: 'Picked Up Birch Log',
  },
  {
    stat: 'p-jungle_log',
    translation: 'Picked Up Jungle Log',
  },
  {
    stat: 'p-acacia_log',
    translation: 'Picked Up Acacia Log',
  },
  {
    stat: 'p-dark_oak_log',
    translation: 'Picked Up Dark Oak Log',
  },
  {
    stat: 'p-mangrove_log',
    translation: 'Picked Up Mangrove Log',
  },
  {
    stat: 'p-mangrove_roots',
    translation: 'Picked Up Mangrove Roots',
  },
  {
    stat: 'p-muddy_mangrove_roots',
    translation: 'Picked Up Muddy Mangrove Roots',
  },
  {
    stat: 'p-crimson_stem',
    translation: 'Picked Up Crimson Stem',
  },
  {
    stat: 'p-warped_stem',
    translation: 'Picked Up Warped Stem',
  },
  {
    stat: 'p-stripped_oak_log',
    translation: 'Picked Up Stripped Oak Log',
  },
  {
    stat: 'p-stripped_spruce_log',
    translation: 'Picked Up Stripped Spruce Log',
  },
  {
    stat: 'p-stripped_birch_log',
    translation: 'Picked Up Stripped Birch Log',
  },
  {
    stat: 'p-stripped_jungle_log',
    translation: 'Picked Up Stripped Jungle Log',
  },
  {
    stat: 'p-stripped_acacia_log',
    translation: 'Picked Up Stripped Acacia Log',
  },
  {
    stat: 'p-stripped_dark_oak_log',
    translation: 'Picked Up Stripped Dark Oak Log',
  },
  {
    stat: 'p-stripped_mangrove_log',
    translation: 'Picked Up Stripped Mangrove Log',
  },
  {
    stat: 'p-stripped_crimson_stem',
    translation: 'Picked Up Stripped Crimson Stem',
  },
  {
    stat: 'p-stripped_warped_stem',
    translation: 'Picked Up Stripped Warped Stem',
  },
  {
    stat: 'p-stripped_oak_wood',
    translation: 'Picked Up Stripped Oak Wood',
  },
  {
    stat: 'p-stripped_spruce_wood',
    translation: 'Picked Up Stripped Spruce Wood',
  },
  {
    stat: 'p-stripped_birch_wood',
    translation: 'Picked Up Stripped Birch Wood',
  },
  {
    stat: 'p-stripped_jungle_wood',
    translation: 'Picked Up Stripped Jungle Wood',
  },
  {
    stat: 'p-stripped_acacia_wood',
    translation: 'Picked Up Stripped Acacia Wood',
  },
  {
    stat: 'p-stripped_dark_oak_wood',
    translation: 'Picked Up Stripped Dark Oak Wood',
  },
  {
    stat: 'p-stripped_mangrove_wood',
    translation: 'Picked Up Stripped Mangrove Wood',
  },
  {
    stat: 'p-stripped_crimson_hyphae',
    translation: 'Picked Up Stripped Crimson Hyphae',
  },
  {
    stat: 'p-stripped_warped_hyphae',
    translation: 'Picked Up Stripped Warped Hyphae',
  },
  {
    stat: 'p-oak_wood',
    translation: 'Picked Up Oak Wood',
  },
  {
    stat: 'p-spruce_wood',
    translation: 'Picked Up Spruce Wood',
  },
  {
    stat: 'p-birch_wood',
    translation: 'Picked Up Birch Wood',
  },
  {
    stat: 'p-jungle_wood',
    translation: 'Picked Up Jungle Wood',
  },
  {
    stat: 'p-acacia_wood',
    translation: 'Picked Up Acacia Wood',
  },
  {
    stat: 'p-dark_oak_wood',
    translation: 'Picked Up Dark Oak Wood',
  },
  {
    stat: 'p-mangrove_wood',
    translation: 'Picked Up Mangrove Wood',
  },
  {
    stat: 'p-crimson_hyphae',
    translation: 'Picked Up Crimson Hyphae',
  },
  {
    stat: 'p-warped_hyphae',
    translation: 'Picked Up Warped Hyphae',
  },
  {
    stat: 'p-oak_leaves',
    translation: 'Picked Up Oak Leaves',
  },
  {
    stat: 'p-spruce_leaves',
    translation: 'Picked Up Spruce Leaves',
  },
  {
    stat: 'p-birch_leaves',
    translation: 'Picked Up Birch Leaves',
  },
  {
    stat: 'p-jungle_leaves',
    translation: 'Picked Up Jungle Leaves',
  },
  {
    stat: 'p-acacia_leaves',
    translation: 'Picked Up Acacia Leaves',
  },
  {
    stat: 'p-dark_oak_leaves',
    translation: 'Picked Up Dark Oak Leaves',
  },
  {
    stat: 'p-mangrove_leaves',
    translation: 'Picked Up Mangrove Leaves',
  },
  {
    stat: 'p-azalea_leaves',
    translation: 'Picked Up Azalea Leaves',
  },
  {
    stat: 'p-flowering_azalea_leaves',
    translation: 'Picked Up Flowering Azalea Leaves',
  },
  {
    stat: 'p-sponge',
    translation: 'Picked Up Sponge',
  },
  {
    stat: 'p-wet_sponge',
    translation: 'Picked Up Wet Sponge',
  },
  {
    stat: 'p-glass',
    translation: 'Picked Up Glass',
  },
  {
    stat: 'p-tinted_glass',
    translation: 'Picked Up Tinted Glass',
  },
  {
    stat: 'p-lapis_block',
    translation: 'Picked Up Block of Lapis Lazuli',
  },
  {
    stat: 'p-sandstone',
    translation: 'Picked Up Sandstone',
  },
  {
    stat: 'p-chiseled_sandstone',
    translation: 'Picked Up Chiseled Sandstone',
  },
  {
    stat: 'p-cut_sandstone',
    translation: 'Picked Up Cut Sandstone',
  },
  {
    stat: 'p-cobweb',
    translation: 'Picked Up Cobweb',
  },
  {
    stat: 'p-grass',
    translation: 'Picked Up Grass',
  },
  {
    stat: 'p-fern',
    translation: 'Picked Up Fern',
  },
  {
    stat: 'p-azalea',
    translation: 'Picked Up Azalea',
  },
  {
    stat: 'p-flowering_azalea',
    translation: 'Picked Up Flowering Azalea',
  },
  {
    stat: 'p-dead_bush',
    translation: 'Picked Up Dead Bush',
  },
  {
    stat: 'p-seagrass',
    translation: 'Picked Up Seagrass',
  },
  {
    stat: 'p-sea_pickle',
    translation: 'Picked Up Sea Pickle',
  },
  {
    stat: 'p-white_wool',
    translation: 'Picked Up White Wool',
  },
  {
    stat: 'p-orange_wool',
    translation: 'Picked Up Orange Wool',
  },
  {
    stat: 'p-magenta_wool',
    translation: 'Picked Up Magenta Wool',
  },
  {
    stat: 'p-light_blue_wool',
    translation: 'Picked Up Light Blue Wool',
  },
  {
    stat: 'p-yellow_wool',
    translation: 'Picked Up Yellow Wool',
  },
  {
    stat: 'p-lime_wool',
    translation: 'Picked Up Lime Wool',
  },
  {
    stat: 'p-pink_wool',
    translation: 'Picked Up Pink Wool',
  },
  {
    stat: 'p-gray_wool',
    translation: 'Picked Up Gray Wool',
  },
  {
    stat: 'p-light_gray_wool',
    translation: 'Picked Up Light Gray Wool',
  },
  {
    stat: 'p-cyan_wool',
    translation: 'Picked Up Cyan Wool',
  },
  {
    stat: 'p-purple_wool',
    translation: 'Picked Up Purple Wool',
  },
  {
    stat: 'p-blue_wool',
    translation: 'Picked Up Blue Wool',
  },
  {
    stat: 'p-brown_wool',
    translation: 'Picked Up Brown Wool',
  },
  {
    stat: 'p-green_wool',
    translation: 'Picked Up Green Wool',
  },
  {
    stat: 'p-red_wool',
    translation: 'Picked Up Red Wool',
  },
  {
    stat: 'p-black_wool',
    translation: 'Picked Up Black Wool',
  },
  {
    stat: 'p-dandelion',
    translation: 'Picked Up Dandelion',
  },
  {
    stat: 'p-poppy',
    translation: 'Picked Up Poppy',
  },
  {
    stat: 'p-blue_orchid',
    translation: 'Picked Up Blue Orchid',
  },
  {
    stat: 'p-allium',
    translation: 'Picked Up Allium',
  },
  {
    stat: 'p-azure_bluet',
    translation: 'Picked Up Azure Bluet',
  },
  {
    stat: 'p-red_tulip',
    translation: 'Picked Up Red Tulip',
  },
  {
    stat: 'p-orange_tulip',
    translation: 'Picked Up Orange Tulip',
  },
  {
    stat: 'p-white_tulip',
    translation: 'Picked Up White Tulip',
  },
  {
    stat: 'p-pink_tulip',
    translation: 'Picked Up Pink Tulip',
  },
  {
    stat: 'p-oxeye_daisy',
    translation: 'Picked Up Oxeye Daisy',
  },
  {
    stat: 'p-cornflower',
    translation: 'Picked Up Cornflower',
  },
  {
    stat: 'p-lily_of_the_valley',
    translation: 'Picked Up Lily of the Valley',
  },
  {
    stat: 'p-wither_rose',
    translation: 'Picked Up Wither Rose',
  },
  {
    stat: 'p-spore_blossom',
    translation: 'Picked Up Spore Blossom',
  },
  {
    stat: 'p-brown_mushroom',
    translation: 'Picked Up Brown Mushroom',
  },
  {
    stat: 'p-red_mushroom',
    translation: 'Picked Up Red Mushroom',
  },
  {
    stat: 'p-crimson_fungus',
    translation: 'Picked Up Crimson Fungus',
  },
  {
    stat: 'p-warped_fungus',
    translation: 'Picked Up Warped Fungus',
  },
  {
    stat: 'p-crimson_roots',
    translation: 'Picked Up Crimson Roots',
  },
  {
    stat: 'p-warped_roots',
    translation: 'Picked Up Warped Roots',
  },
  {
    stat: 'p-nether_sprouts',
    translation: 'Picked Up Nether Sprouts',
  },
  {
    stat: 'p-weeping_vines',
    translation: 'Picked Up Weeping Vines',
  },
  {
    stat: 'p-twisting_vines',
    translation: 'Picked Up Twisting Vines',
  },
  {
    stat: 'p-sugar_cane',
    translation: 'Picked Up Sugar Cane',
  },
  {
    stat: 'p-kelp',
    translation: 'Picked Up Kelp',
  },
  {
    stat: 'p-moss_carpet',
    translation: 'Picked Up Moss Carpet',
  },
  {
    stat: 'p-moss_block',
    translation: 'Picked Up Moss Block',
  },
  {
    stat: 'p-hanging_roots',
    translation: 'Picked Up Hanging Roots',
  },
  {
    stat: 'p-big_dripleaf',
    translation: 'Picked Up Big Dripleaf',
  },
  {
    stat: 'p-small_dripleaf',
    translation: 'Picked Up Small Dripleaf',
  },
  {
    stat: 'p-bamboo',
    translation: 'Picked Up Bamboo',
  },
  {
    stat: 'p-oak_slab',
    translation: 'Picked Up Oak Slab',
  },
  {
    stat: 'p-spruce_slab',
    translation: 'Picked Up Spruce Slab',
  },
  {
    stat: 'p-birch_slab',
    translation: 'Picked Up Birch Slab',
  },
  {
    stat: 'p-jungle_slab',
    translation: 'Picked Up Jungle Slab',
  },
  {
    stat: 'p-acacia_slab',
    translation: 'Picked Up Acacia Slab',
  },
  {
    stat: 'p-dark_oak_slab',
    translation: 'Picked Up Dark Oak Slab',
  },
  {
    stat: 'p-mangrove_slab',
    translation: 'Picked Up Mangrove Slab',
  },
  {
    stat: 'p-crimson_slab',
    translation: 'Picked Up Crimson Slab',
  },
  {
    stat: 'p-warped_slab',
    translation: 'Picked Up Warped Slab',
  },
  {
    stat: 'p-stone_slab',
    translation: 'Picked Up Stone Slab',
  },
  {
    stat: 'p-smooth_stone_slab',
    translation: 'Picked Up Smooth Stone Slab',
  },
  {
    stat: 'p-sandstone_slab',
    translation: 'Picked Up Sandstone Slab',
  },
  {
    stat: 'p-cut_sandstone_slab',
    translation: 'Picked Up Cut Sandstone Slab',
  },
  {
    stat: 'p-petrified_oak_slab',
    translation: 'Picked Up Petrified Oak Slab',
  },
  {
    stat: 'p-cobblestone_slab',
    translation: 'Picked Up Cobblestone Slab',
  },
  {
    stat: 'p-brick_slab',
    translation: 'Picked Up Brick Slab',
  },
  {
    stat: 'p-stone_brick_slab',
    translation: 'Picked Up Stone Brick Slab',
  },
  {
    stat: 'p-mud_brick_slab',
    translation: 'Picked Up Mud Brick Slab',
  },
  {
    stat: 'p-nether_brick_slab',
    translation: 'Picked Up Nether Brick Slab',
  },
  {
    stat: 'p-quartz_slab',
    translation: 'Picked Up Quartz Slab',
  },
  {
    stat: 'p-red_sandstone_slab',
    translation: 'Picked Up Red Sandstone Slab',
  },
  {
    stat: 'p-cut_red_sandstone_slab',
    translation: 'Picked Up Cut Red Sandstone Slab',
  },
  {
    stat: 'p-purpur_slab',
    translation: 'Picked Up Purpur Slab',
  },
  {
    stat: 'p-prismarine_slab',
    translation: 'Picked Up Prismarine Slab',
  },
  {
    stat: 'p-prismarine_brick_slab',
    translation: 'Picked Up Prismarine Brick Slab',
  },
  {
    stat: 'p-dark_prismarine_slab',
    translation: 'Picked Up Dark Prismarine Slab',
  },
  {
    stat: 'p-smooth_quartz',
    translation: 'Picked Up Smooth Quartz Block',
  },
  {
    stat: 'p-smooth_red_sandstone',
    translation: 'Picked Up Smooth Red Sandstone',
  },
  {
    stat: 'p-smooth_sandstone',
    translation: 'Picked Up Smooth Sandstone',
  },
  {
    stat: 'p-smooth_stone',
    translation: 'Picked Up Smooth Stone',
  },
  {
    stat: 'p-bricks',
    translation: 'Picked Up Bricks',
  },
  {
    stat: 'p-bookshelf',
    translation: 'Picked Up Bookshelf',
  },
  {
    stat: 'p-mossy_cobblestone',
    translation: 'Picked Up Mossy Cobblestone',
  },
  {
    stat: 'p-obsidian',
    translation: 'Picked Up Obsidian',
  },
  {
    stat: 'p-torch',
    translation: 'Picked Up Torch',
  },
  {
    stat: 'p-end_rod',
    translation: 'Picked Up End Rod',
  },
  {
    stat: 'p-chorus_plant',
    translation: 'Picked Up Chorus Plant',
  },
  {
    stat: 'p-chorus_flower',
    translation: 'Picked Up Chorus Flower',
  },
  {
    stat: 'p-purpur_block',
    translation: 'Picked Up Purpur Block',
  },
  {
    stat: 'p-purpur_pillar',
    translation: 'Picked Up Purpur Pillar',
  },
  {
    stat: 'p-purpur_stairs',
    translation: 'Picked Up Purpur Stairs',
  },
  {
    stat: 'p-spawner',
    translation: 'Picked Up Spawner',
  },
  {
    stat: 'p-chest',
    translation: 'Picked Up Chest',
  },
  {
    stat: 'p-crafting_table',
    translation: 'Picked Up Crafting Table',
  },
  {
    stat: 'p-farmland',
    translation: 'Picked Up Farmland',
  },
  {
    stat: 'p-furnace',
    translation: 'Picked Up Furnace',
  },
  {
    stat: 'p-ladder',
    translation: 'Picked Up Ladder',
  },
  {
    stat: 'p-cobblestone_stairs',
    translation: 'Picked Up Cobblestone Stairs',
  },
  {
    stat: 'p-snow',
    translation: 'Picked Up Snow',
  },
  {
    stat: 'p-ice',
    translation: 'Picked Up Ice',
  },
  {
    stat: 'p-snow_block',
    translation: 'Picked Up Snow Block',
  },
  {
    stat: 'p-cactus',
    translation: 'Picked Up Cactus',
  },
  {
    stat: 'p-clay',
    translation: 'Picked Up Clay',
  },
  {
    stat: 'p-jukebox',
    translation: 'Picked Up Jukebox',
  },
  {
    stat: 'p-oak_fence',
    translation: 'Picked Up Oak Fence',
  },
  {
    stat: 'p-spruce_fence',
    translation: 'Picked Up Spruce Fence',
  },
  {
    stat: 'p-birch_fence',
    translation: 'Picked Up Birch Fence',
  },
  {
    stat: 'p-jungle_fence',
    translation: 'Picked Up Jungle Fence',
  },
  {
    stat: 'p-acacia_fence',
    translation: 'Picked Up Acacia Fence',
  },
  {
    stat: 'p-dark_oak_fence',
    translation: 'Picked Up Dark Oak Fence',
  },
  {
    stat: 'p-mangrove_fence',
    translation: 'Picked Up Mangrove Fence',
  },
  {
    stat: 'p-crimson_fence',
    translation: 'Picked Up Crimson Fence',
  },
  {
    stat: 'p-warped_fence',
    translation: 'Picked Up Warped Fence',
  },
  {
    stat: 'p-pumpkin',
    translation: 'Picked Up Pumpkin',
  },
  {
    stat: 'p-carved_pumpkin',
    translation: 'Picked Up Carved Pumpkin',
  },
  {
    stat: 'p-jack_o_lantern',
    translation: "Picked Up Jack o'Lantern",
  },
  {
    stat: 'p-netherrack',
    translation: 'Picked Up Netherrack',
  },
  {
    stat: 'p-soul_sand',
    translation: 'Picked Up Soul Sand',
  },
  {
    stat: 'p-soul_soil',
    translation: 'Picked Up Soul Soil',
  },
  {
    stat: 'p-basalt',
    translation: 'Picked Up Basalt',
  },
  {
    stat: 'p-polished_basalt',
    translation: 'Picked Up Polished Basalt',
  },
  {
    stat: 'p-smooth_basalt',
    translation: 'Picked Up Smooth Basalt',
  },
  {
    stat: 'p-soul_torch',
    translation: 'Picked Up Soul Torch',
  },
  {
    stat: 'p-glowstone',
    translation: 'Picked Up Glowstone',
  },
  {
    stat: 'p-infested_stone',
    translation: 'Picked Up Infested Stone',
  },
  {
    stat: 'p-infested_cobblestone',
    translation: 'Picked Up Infested Cobblestone',
  },
  {
    stat: 'p-infested_stone_bricks',
    translation: 'Picked Up Infested Stone Bricks',
  },
  {
    stat: 'p-infested_mossy_stone_bricks',
    translation: 'Picked Up Infested Mossy Stone Bricks',
  },
  {
    stat: 'p-infested_cracked_stone_bricks',
    translation: 'Picked Up Infested Cracked Stone Bricks',
  },
  {
    stat: 'p-infested_chiseled_stone_bricks',
    translation: 'Picked Up Infested Chiseled Stone Bricks',
  },
  {
    stat: 'p-infested_deepslate',
    translation: 'Picked Up Infested Deepslate',
  },
  {
    stat: 'p-stone_bricks',
    translation: 'Picked Up Stone Bricks',
  },
  {
    stat: 'p-mossy_stone_bricks',
    translation: 'Picked Up Mossy Stone Bricks',
  },
  {
    stat: 'p-cracked_stone_bricks',
    translation: 'Picked Up Cracked Stone Bricks',
  },
  {
    stat: 'p-chiseled_stone_bricks',
    translation: 'Picked Up Chiseled Stone Bricks',
  },
  {
    stat: 'p-packed_mud',
    translation: 'Picked Up Packed Mud',
  },
  {
    stat: 'p-mud_bricks',
    translation: 'Picked Up Mud Bricks',
  },
  {
    stat: 'p-deepslate_bricks',
    translation: 'Picked Up Deepslate Bricks',
  },
  {
    stat: 'p-cracked_deepslate_bricks',
    translation: 'Picked Up Cracked Deepslate Bricks',
  },
  {
    stat: 'p-deepslate_tiles',
    translation: 'Picked Up Deepslate Tiles',
  },
  {
    stat: 'p-cracked_deepslate_tiles',
    translation: 'Picked Up Cracked Deepslate Tiles',
  },
  {
    stat: 'p-chiseled_deepslate',
    translation: 'Picked Up Chiseled Deepslate',
  },
  {
    stat: 'p-reinforced_deepslate',
    translation: 'Picked Up Reinforced Deepslate',
  },
  {
    stat: 'p-brown_mushroom_block',
    translation: 'Picked Up Brown Mushroom Block',
  },
  {
    stat: 'p-red_mushroom_block',
    translation: 'Picked Up Red Mushroom Block',
  },
  {
    stat: 'p-mushroom_stem',
    translation: 'Picked Up Mushroom Stem',
  },
  {
    stat: 'p-iron_bars',
    translation: 'Picked Up Iron Bars',
  },
  {
    stat: 'p-chain',
    translation: 'Picked Up Chain',
  },
  {
    stat: 'p-glass_pane',
    translation: 'Picked Up Glass Pane',
  },
  {
    stat: 'p-melon',
    translation: 'Picked Up Melon',
  },
  {
    stat: 'p-vine',
    translation: 'Picked Up Vines',
  },
  {
    stat: 'p-glow_lichen',
    translation: 'Picked Up Glow Lichen',
  },
  {
    stat: 'p-brick_stairs',
    translation: 'Picked Up Brick Stairs',
  },
  {
    stat: 'p-stone_brick_stairs',
    translation: 'Picked Up Stone Brick Stairs',
  },
  {
    stat: 'p-mud_brick_stairs',
    translation: 'Picked Up Mud Brick Stairs',
  },
  {
    stat: 'p-mycelium',
    translation: 'Picked Up Mycelium',
  },
  {
    stat: 'p-lily_pad',
    translation: 'Picked Up Lily Pad',
  },
  {
    stat: 'p-nether_bricks',
    translation: 'Picked Up Nether Bricks',
  },
  {
    stat: 'p-cracked_nether_bricks',
    translation: 'Picked Up Cracked Nether Bricks',
  },
  {
    stat: 'p-chiseled_nether_bricks',
    translation: 'Picked Up Chiseled Nether Bricks',
  },
  {
    stat: 'p-nether_brick_fence',
    translation: 'Picked Up Nether Brick Fence',
  },
  {
    stat: 'p-nether_brick_stairs',
    translation: 'Picked Up Nether Brick Stairs',
  },
  {
    stat: 'p-sculk',
    translation: 'Picked Up Sculk',
  },
  {
    stat: 'p-sculk_vein',
    translation: 'Picked Up Sculk Vein',
  },
  {
    stat: 'p-sculk_catalyst',
    translation: 'Picked Up Sculk Catalyst',
  },
  {
    stat: 'p-sculk_shrieker',
    translation: 'Picked Up Sculk Shrieker',
  },
  {
    stat: 'p-enchanting_table',
    translation: 'Picked Up Enchanting Table',
  },
  {
    stat: 'p-end_portal_frame',
    translation: 'Picked Up End Portal Frame',
  },
  {
    stat: 'p-end_stone',
    translation: 'Picked Up End Stone',
  },
  {
    stat: 'p-end_stone_bricks',
    translation: 'Picked Up End Stone Bricks',
  },
  {
    stat: 'p-dragon_egg',
    translation: 'Picked Up Dragon Egg',
  },
  {
    stat: 'p-sandstone_stairs',
    translation: 'Picked Up Sandstone Stairs',
  },
  {
    stat: 'p-ender_chest',
    translation: 'Picked Up Ender Chest',
  },
  {
    stat: 'p-emerald_block',
    translation: 'Picked Up Block of Emerald',
  },
  {
    stat: 'p-oak_stairs',
    translation: 'Picked Up Oak Stairs',
  },
  {
    stat: 'p-spruce_stairs',
    translation: 'Picked Up Spruce Stairs',
  },
  {
    stat: 'p-birch_stairs',
    translation: 'Picked Up Birch Stairs',
  },
  {
    stat: 'p-jungle_stairs',
    translation: 'Picked Up Jungle Stairs',
  },
  {
    stat: 'p-acacia_stairs',
    translation: 'Picked Up Acacia Stairs',
  },
  {
    stat: 'p-dark_oak_stairs',
    translation: 'Picked Up Dark Oak Stairs',
  },
  {
    stat: 'p-mangrove_stairs',
    translation: 'Picked Up Mangrove Stairs',
  },
  {
    stat: 'p-crimson_stairs',
    translation: 'Picked Up Crimson Stairs',
  },
  {
    stat: 'p-warped_stairs',
    translation: 'Picked Up Warped Stairs',
  },
  {
    stat: 'p-command_block',
    translation: 'Picked Up Command Block',
  },
  {
    stat: 'p-beacon',
    translation: 'Picked Up Beacon',
  },
  {
    stat: 'p-cobblestone_wall',
    translation: 'Picked Up Cobblestone Wall',
  },
  {
    stat: 'p-mossy_cobblestone_wall',
    translation: 'Picked Up Mossy Cobblestone Wall',
  },
  {
    stat: 'p-brick_wall',
    translation: 'Picked Up Brick Wall',
  },
  {
    stat: 'p-prismarine_wall',
    translation: 'Picked Up Prismarine Wall',
  },
  {
    stat: 'p-red_sandstone_wall',
    translation: 'Picked Up Red Sandstone Wall',
  },
  {
    stat: 'p-mossy_stone_brick_wall',
    translation: 'Picked Up Mossy Stone Brick Wall',
  },
  {
    stat: 'p-granite_wall',
    translation: 'Picked Up Granite Wall',
  },
  {
    stat: 'p-stone_brick_wall',
    translation: 'Picked Up Stone Brick Wall',
  },
  {
    stat: 'p-mud_brick_wall',
    translation: 'Picked Up Mud Brick Wall',
  },
  {
    stat: 'p-nether_brick_wall',
    translation: 'Picked Up Nether Brick Wall',
  },
  {
    stat: 'p-andesite_wall',
    translation: 'Picked Up Andesite Wall',
  },
  {
    stat: 'p-red_nether_brick_wall',
    translation: 'Picked Up Red Nether Brick Wall',
  },
  {
    stat: 'p-sandstone_wall',
    translation: 'Picked Up Sandstone Wall',
  },
  {
    stat: 'p-end_stone_brick_wall',
    translation: 'Picked Up End Stone Brick Wall',
  },
  {
    stat: 'p-diorite_wall',
    translation: 'Picked Up Diorite Wall',
  },
  {
    stat: 'p-blackstone_wall',
    translation: 'Picked Up Blackstone Wall',
  },
  {
    stat: 'p-polished_blackstone_wall',
    translation: 'Picked Up Polished Blackstone Wall',
  },
  {
    stat: 'p-polished_blackstone_brick_wall',
    translation: 'Picked Up Polished Blackstone Brick Wall',
  },
  {
    stat: 'p-cobbled_deepslate_wall',
    translation: 'Picked Up Cobbled Deepslate Wall',
  },
  {
    stat: 'p-polished_deepslate_wall',
    translation: 'Picked Up Polished Deepslate Wall',
  },
  {
    stat: 'p-deepslate_brick_wall',
    translation: 'Picked Up Deepslate Brick Wall',
  },
  {
    stat: 'p-deepslate_tile_wall',
    translation: 'Picked Up Deepslate Tile Wall',
  },
  {
    stat: 'p-anvil',
    translation: 'Picked Up Anvil',
  },
  {
    stat: 'p-chipped_anvil',
    translation: 'Picked Up Chipped Anvil',
  },
  {
    stat: 'p-damaged_anvil',
    translation: 'Picked Up Damaged Anvil',
  },
  {
    stat: 'p-chiseled_quartz_block',
    translation: 'Picked Up Chiseled Quartz Block',
  },
  {
    stat: 'p-quartz_block',
    translation: 'Picked Up Block of Quartz',
  },
  {
    stat: 'p-quartz_bricks',
    translation: 'Picked Up Quartz Bricks',
  },
  {
    stat: 'p-quartz_pillar',
    translation: 'Picked Up Quartz Pillar',
  },
  {
    stat: 'p-quartz_stairs',
    translation: 'Picked Up Quartz Stairs',
  },
  {
    stat: 'p-white_terracotta',
    translation: 'Picked Up White Terracotta',
  },
  {
    stat: 'p-orange_terracotta',
    translation: 'Picked Up Orange Terracotta',
  },
  {
    stat: 'p-magenta_terracotta',
    translation: 'Picked Up Magenta Terracotta',
  },
  {
    stat: 'p-light_blue_terracotta',
    translation: 'Picked Up Light Blue Terracotta',
  },
  {
    stat: 'p-yellow_terracotta',
    translation: 'Picked Up Yellow Terracotta',
  },
  {
    stat: 'p-lime_terracotta',
    translation: 'Picked Up Lime Terracotta',
  },
  {
    stat: 'p-pink_terracotta',
    translation: 'Picked Up Pink Terracotta',
  },
  {
    stat: 'p-gray_terracotta',
    translation: 'Picked Up Gray Terracotta',
  },
  {
    stat: 'p-light_gray_terracotta',
    translation: 'Picked Up Light Gray Terracotta',
  },
  {
    stat: 'p-cyan_terracotta',
    translation: 'Picked Up Cyan Terracotta',
  },
  {
    stat: 'p-purple_terracotta',
    translation: 'Picked Up Purple Terracotta',
  },
  {
    stat: 'p-blue_terracotta',
    translation: 'Picked Up Blue Terracotta',
  },
  {
    stat: 'p-brown_terracotta',
    translation: 'Picked Up Brown Terracotta',
  },
  {
    stat: 'p-green_terracotta',
    translation: 'Picked Up Green Terracotta',
  },
  {
    stat: 'p-red_terracotta',
    translation: 'Picked Up Red Terracotta',
  },
  {
    stat: 'p-black_terracotta',
    translation: 'Picked Up Black Terracotta',
  },
  {
    stat: 'p-barrier',
    translation: 'Picked Up Barrier',
  },
  {
    stat: 'p-light',
    translation: 'Picked Up Light',
  },
  {
    stat: 'p-hay_block',
    translation: 'Picked Up Hay Bale',
  },
  {
    stat: 'p-white_carpet',
    translation: 'Picked Up White Carpet',
  },
  {
    stat: 'p-orange_carpet',
    translation: 'Picked Up Orange Carpet',
  },
  {
    stat: 'p-magenta_carpet',
    translation: 'Picked Up Magenta Carpet',
  },
  {
    stat: 'p-light_blue_carpet',
    translation: 'Picked Up Light Blue Carpet',
  },
  {
    stat: 'p-yellow_carpet',
    translation: 'Picked Up Yellow Carpet',
  },
  {
    stat: 'p-lime_carpet',
    translation: 'Picked Up Lime Carpet',
  },
  {
    stat: 'p-pink_carpet',
    translation: 'Picked Up Pink Carpet',
  },
  {
    stat: 'p-gray_carpet',
    translation: 'Picked Up Gray Carpet',
  },
  {
    stat: 'p-light_gray_carpet',
    translation: 'Picked Up Light Gray Carpet',
  },
  {
    stat: 'p-cyan_carpet',
    translation: 'Picked Up Cyan Carpet',
  },
  {
    stat: 'p-purple_carpet',
    translation: 'Picked Up Purple Carpet',
  },
  {
    stat: 'p-blue_carpet',
    translation: 'Picked Up Blue Carpet',
  },
  {
    stat: 'p-brown_carpet',
    translation: 'Picked Up Brown Carpet',
  },
  {
    stat: 'p-green_carpet',
    translation: 'Picked Up Green Carpet',
  },
  {
    stat: 'p-red_carpet',
    translation: 'Picked Up Red Carpet',
  },
  {
    stat: 'p-black_carpet',
    translation: 'Picked Up Black Carpet',
  },
  {
    stat: 'p-terracotta',
    translation: 'Picked Up Terracotta',
  },
  {
    stat: 'p-packed_ice',
    translation: 'Picked Up Packed Ice',
  },
  {
    stat: 'p-dirt_path',
    translation: 'Picked Up Dirt Path',
  },
  {
    stat: 'p-sunflower',
    translation: 'Picked Up Sunflower',
  },
  {
    stat: 'p-lilac',
    translation: 'Picked Up Lilac',
  },
  {
    stat: 'p-rose_bush',
    translation: 'Picked Up Rose Bush',
  },
  {
    stat: 'p-peony',
    translation: 'Picked Up Peony',
  },
  {
    stat: 'p-tall_grass',
    translation: 'Picked Up Tall Grass',
  },
  {
    stat: 'p-large_fern',
    translation: 'Picked Up Large Fern',
  },
  {
    stat: 'p-white_stained_glass',
    translation: 'Picked Up White Stained Glass',
  },
  {
    stat: 'p-orange_stained_glass',
    translation: 'Picked Up Orange Stained Glass',
  },
  {
    stat: 'p-magenta_stained_glass',
    translation: 'Picked Up Magenta Stained Glass',
  },
  {
    stat: 'p-light_blue_stained_glass',
    translation: 'Picked Up Light Blue Stained Glass',
  },
  {
    stat: 'p-yellow_stained_glass',
    translation: 'Picked Up Yellow Stained Glass',
  },
  {
    stat: 'p-lime_stained_glass',
    translation: 'Picked Up Lime Stained Glass',
  },
  {
    stat: 'p-pink_stained_glass',
    translation: 'Picked Up Pink Stained Glass',
  },
  {
    stat: 'p-gray_stained_glass',
    translation: 'Picked Up Gray Stained Glass',
  },
  {
    stat: 'p-light_gray_stained_glass',
    translation: 'Picked Up Light Gray Stained Glass',
  },
  {
    stat: 'p-cyan_stained_glass',
    translation: 'Picked Up Cyan Stained Glass',
  },
  {
    stat: 'p-purple_stained_glass',
    translation: 'Picked Up Purple Stained Glass',
  },
  {
    stat: 'p-blue_stained_glass',
    translation: 'Picked Up Blue Stained Glass',
  },
  {
    stat: 'p-brown_stained_glass',
    translation: 'Picked Up Brown Stained Glass',
  },
  {
    stat: 'p-green_stained_glass',
    translation: 'Picked Up Green Stained Glass',
  },
  {
    stat: 'p-red_stained_glass',
    translation: 'Picked Up Red Stained Glass',
  },
  {
    stat: 'p-black_stained_glass',
    translation: 'Picked Up Black Stained Glass',
  },
  {
    stat: 'p-white_stained_glass_pane',
    translation: 'Picked Up White Stained Glass Pane',
  },
  {
    stat: 'p-orange_stained_glass_pane',
    translation: 'Picked Up Orange Stained Glass Pane',
  },
  {
    stat: 'p-magenta_stained_glass_pane',
    translation: 'Picked Up Magenta Stained Glass Pane',
  },
  {
    stat: 'p-light_blue_stained_glass_pane',
    translation: 'Picked Up Light Blue Stained Glass Pane',
  },
  {
    stat: 'p-yellow_stained_glass_pane',
    translation: 'Picked Up Yellow Stained Glass Pane',
  },
  {
    stat: 'p-lime_stained_glass_pane',
    translation: 'Picked Up Lime Stained Glass Pane',
  },
  {
    stat: 'p-pink_stained_glass_pane',
    translation: 'Picked Up Pink Stained Glass Pane',
  },
  {
    stat: 'p-gray_stained_glass_pane',
    translation: 'Picked Up Gray Stained Glass Pane',
  },
  {
    stat: 'p-light_gray_stained_glass_pane',
    translation: 'Picked Up Light Gray Stained Glass Pane',
  },
  {
    stat: 'p-cyan_stained_glass_pane',
    translation: 'Picked Up Cyan Stained Glass Pane',
  },
  {
    stat: 'p-purple_stained_glass_pane',
    translation: 'Picked Up Purple Stained Glass Pane',
  },
  {
    stat: 'p-blue_stained_glass_pane',
    translation: 'Picked Up Blue Stained Glass Pane',
  },
  {
    stat: 'p-brown_stained_glass_pane',
    translation: 'Picked Up Brown Stained Glass Pane',
  },
  {
    stat: 'p-green_stained_glass_pane',
    translation: 'Picked Up Green Stained Glass Pane',
  },
  {
    stat: 'p-red_stained_glass_pane',
    translation: 'Picked Up Red Stained Glass Pane',
  },
  {
    stat: 'p-black_stained_glass_pane',
    translation: 'Picked Up Black Stained Glass Pane',
  },
  {
    stat: 'p-prismarine',
    translation: 'Picked Up Prismarine',
  },
  {
    stat: 'p-prismarine_bricks',
    translation: 'Picked Up Prismarine Bricks',
  },
  {
    stat: 'p-dark_prismarine',
    translation: 'Picked Up Dark Prismarine',
  },
  {
    stat: 'p-prismarine_stairs',
    translation: 'Picked Up Prismarine Stairs',
  },
  {
    stat: 'p-prismarine_brick_stairs',
    translation: 'Picked Up Prismarine Brick Stairs',
  },
  {
    stat: 'p-dark_prismarine_stairs',
    translation: 'Picked Up Dark Prismarine Stairs',
  },
  {
    stat: 'p-sea_lantern',
    translation: 'Picked Up Sea Lantern',
  },
  {
    stat: 'p-red_sandstone',
    translation: 'Picked Up Red Sandstone',
  },
  {
    stat: 'p-chiseled_red_sandstone',
    translation: 'Picked Up Chiseled Red Sandstone',
  },
  {
    stat: 'p-cut_red_sandstone',
    translation: 'Picked Up Cut Red Sandstone',
  },
  {
    stat: 'p-red_sandstone_stairs',
    translation: 'Picked Up Red Sandstone Stairs',
  },
  {
    stat: 'p-repeating_command_block',
    translation: 'Picked Up Repeating Command Block',
  },
  {
    stat: 'p-chain_command_block',
    translation: 'Picked Up Chain Command Block',
  },
  {
    stat: 'p-magma_block',
    translation: 'Picked Up Magma Block',
  },
  {
    stat: 'p-nether_wart_block',
    translation: 'Picked Up Nether Wart Block',
  },
  {
    stat: 'p-warped_wart_block',
    translation: 'Picked Up Warped Wart Block',
  },
  {
    stat: 'p-red_nether_bricks',
    translation: 'Picked Up Red Nether Bricks',
  },
  {
    stat: 'p-bone_block',
    translation: 'Picked Up Bone Block',
  },
  {
    stat: 'p-structure_void',
    translation: 'Picked Up Structure Void',
  },
  {
    stat: 'p-shulker_box',
    translation: 'Picked Up Shulker Box',
  },
  {
    stat: 'p-white_shulker_box',
    translation: 'Picked Up White Shulker Box',
  },
  {
    stat: 'p-orange_shulker_box',
    translation: 'Picked Up Orange Shulker Box',
  },
  {
    stat: 'p-magenta_shulker_box',
    translation: 'Picked Up Magenta Shulker Box',
  },
  {
    stat: 'p-light_blue_shulker_box',
    translation: 'Picked Up Light Blue Shulker Box',
  },
  {
    stat: 'p-yellow_shulker_box',
    translation: 'Picked Up Yellow Shulker Box',
  },
  {
    stat: 'p-lime_shulker_box',
    translation: 'Picked Up Lime Shulker Box',
  },
  {
    stat: 'p-pink_shulker_box',
    translation: 'Picked Up Pink Shulker Box',
  },
  {
    stat: 'p-gray_shulker_box',
    translation: 'Picked Up Gray Shulker Box',
  },
  {
    stat: 'p-light_gray_shulker_box',
    translation: 'Picked Up Light Gray Shulker Box',
  },
  {
    stat: 'p-cyan_shulker_box',
    translation: 'Picked Up Cyan Shulker Box',
  },
  {
    stat: 'p-purple_shulker_box',
    translation: 'Picked Up Purple Shulker Box',
  },
  {
    stat: 'p-blue_shulker_box',
    translation: 'Picked Up Blue Shulker Box',
  },
  {
    stat: 'p-brown_shulker_box',
    translation: 'Picked Up Brown Shulker Box',
  },
  {
    stat: 'p-green_shulker_box',
    translation: 'Picked Up Green Shulker Box',
  },
  {
    stat: 'p-red_shulker_box',
    translation: 'Picked Up Red Shulker Box',
  },
  {
    stat: 'p-black_shulker_box',
    translation: 'Picked Up Black Shulker Box',
  },
  {
    stat: 'p-white_glazed_terracotta',
    translation: 'Picked Up White Glazed Terracotta',
  },
  {
    stat: 'p-orange_glazed_terracotta',
    translation: 'Picked Up Orange Glazed Terracotta',
  },
  {
    stat: 'p-magenta_glazed_terracotta',
    translation: 'Picked Up Magenta Glazed Terracotta',
  },
  {
    stat: 'p-light_blue_glazed_terracotta',
    translation: 'Picked Up Light Blue Glazed Terracotta',
  },
  {
    stat: 'p-yellow_glazed_terracotta',
    translation: 'Picked Up Yellow Glazed Terracotta',
  },
  {
    stat: 'p-lime_glazed_terracotta',
    translation: 'Picked Up Lime Glazed Terracotta',
  },
  {
    stat: 'p-pink_glazed_terracotta',
    translation: 'Picked Up Pink Glazed Terracotta',
  },
  {
    stat: 'p-gray_glazed_terracotta',
    translation: 'Picked Up Gray Glazed Terracotta',
  },
  {
    stat: 'p-light_gray_glazed_terracotta',
    translation: 'Picked Up Light Gray Glazed Terracotta',
  },
  {
    stat: 'p-cyan_glazed_terracotta',
    translation: 'Picked Up Cyan Glazed Terracotta',
  },
  {
    stat: 'p-purple_glazed_terracotta',
    translation: 'Picked Up Purple Glazed Terracotta',
  },
  {
    stat: 'p-blue_glazed_terracotta',
    translation: 'Picked Up Blue Glazed Terracotta',
  },
  {
    stat: 'p-brown_glazed_terracotta',
    translation: 'Picked Up Brown Glazed Terracotta',
  },
  {
    stat: 'p-green_glazed_terracotta',
    translation: 'Picked Up Green Glazed Terracotta',
  },
  {
    stat: 'p-red_glazed_terracotta',
    translation: 'Picked Up Red Glazed Terracotta',
  },
  {
    stat: 'p-black_glazed_terracotta',
    translation: 'Picked Up Black Glazed Terracotta',
  },
  {
    stat: 'p-white_concrete',
    translation: 'Picked Up White Concrete',
  },
  {
    stat: 'p-orange_concrete',
    translation: 'Picked Up Orange Concrete',
  },
  {
    stat: 'p-magenta_concrete',
    translation: 'Picked Up Magenta Concrete',
  },
  {
    stat: 'p-light_blue_concrete',
    translation: 'Picked Up Light Blue Concrete',
  },
  {
    stat: 'p-yellow_concrete',
    translation: 'Picked Up Yellow Concrete',
  },
  {
    stat: 'p-lime_concrete',
    translation: 'Picked Up Lime Concrete',
  },
  {
    stat: 'p-pink_concrete',
    translation: 'Picked Up Pink Concrete',
  },
  {
    stat: 'p-gray_concrete',
    translation: 'Picked Up Gray Concrete',
  },
  {
    stat: 'p-light_gray_concrete',
    translation: 'Picked Up Light Gray Concrete',
  },
  {
    stat: 'p-cyan_concrete',
    translation: 'Picked Up Cyan Concrete',
  },
  {
    stat: 'p-purple_concrete',
    translation: 'Picked Up Purple Concrete',
  },
  {
    stat: 'p-blue_concrete',
    translation: 'Picked Up Blue Concrete',
  },
  {
    stat: 'p-brown_concrete',
    translation: 'Picked Up Brown Concrete',
  },
  {
    stat: 'p-green_concrete',
    translation: 'Picked Up Green Concrete',
  },
  {
    stat: 'p-red_concrete',
    translation: 'Picked Up Red Concrete',
  },
  {
    stat: 'p-black_concrete',
    translation: 'Picked Up Black Concrete',
  },
  {
    stat: 'p-white_concrete_powder',
    translation: 'Picked Up White Concrete Powder',
  },
  {
    stat: 'p-orange_concrete_powder',
    translation: 'Picked Up Orange Concrete Powder',
  },
  {
    stat: 'p-magenta_concrete_powder',
    translation: 'Picked Up Magenta Concrete Powder',
  },
  {
    stat: 'p-light_blue_concrete_powder',
    translation: 'Picked Up Light Blue Concrete Powder',
  },
  {
    stat: 'p-yellow_concrete_powder',
    translation: 'Picked Up Yellow Concrete Powder',
  },
  {
    stat: 'p-lime_concrete_powder',
    translation: 'Picked Up Lime Concrete Powder',
  },
  {
    stat: 'p-pink_concrete_powder',
    translation: 'Picked Up Pink Concrete Powder',
  },
  {
    stat: 'p-gray_concrete_powder',
    translation: 'Picked Up Gray Concrete Powder',
  },
  {
    stat: 'p-light_gray_concrete_powder',
    translation: 'Picked Up Light Gray Concrete Powder',
  },
  {
    stat: 'p-cyan_concrete_powder',
    translation: 'Picked Up Cyan Concrete Powder',
  },
  {
    stat: 'p-purple_concrete_powder',
    translation: 'Picked Up Purple Concrete Powder',
  },
  {
    stat: 'p-blue_concrete_powder',
    translation: 'Picked Up Blue Concrete Powder',
  },
  {
    stat: 'p-brown_concrete_powder',
    translation: 'Picked Up Brown Concrete Powder',
  },
  {
    stat: 'p-green_concrete_powder',
    translation: 'Picked Up Green Concrete Powder',
  },
  {
    stat: 'p-red_concrete_powder',
    translation: 'Picked Up Red Concrete Powder',
  },
  {
    stat: 'p-black_concrete_powder',
    translation: 'Picked Up Black Concrete Powder',
  },
  {
    stat: 'p-turtle_egg',
    translation: 'Picked Up Turtle Egg',
  },
  {
    stat: 'p-dead_tube_coral_block',
    translation: 'Picked Up Dead Tube Coral Block',
  },
  {
    stat: 'p-dead_brain_coral_block',
    translation: 'Picked Up Dead Brain Coral Block',
  },
  {
    stat: 'p-dead_bubble_coral_block',
    translation: 'Picked Up Dead Bubble Coral Block',
  },
  {
    stat: 'p-dead_fire_coral_block',
    translation: 'Picked Up Dead Fire Coral Block',
  },
  {
    stat: 'p-dead_horn_coral_block',
    translation: 'Picked Up Dead Horn Coral Block',
  },
  {
    stat: 'p-tube_coral_block',
    translation: 'Picked Up Tube Coral Block',
  },
  {
    stat: 'p-brain_coral_block',
    translation: 'Picked Up Brain Coral Block',
  },
  {
    stat: 'p-bubble_coral_block',
    translation: 'Picked Up Bubble Coral Block',
  },
  {
    stat: 'p-fire_coral_block',
    translation: 'Picked Up Fire Coral Block',
  },
  {
    stat: 'p-horn_coral_block',
    translation: 'Picked Up Horn Coral Block',
  },
  {
    stat: 'p-tube_coral',
    translation: 'Picked Up Tube Coral',
  },
  {
    stat: 'p-brain_coral',
    translation: 'Picked Up Brain Coral',
  },
  {
    stat: 'p-bubble_coral',
    translation: 'Picked Up Bubble Coral',
  },
  {
    stat: 'p-fire_coral',
    translation: 'Picked Up Fire Coral',
  },
  {
    stat: 'p-horn_coral',
    translation: 'Picked Up Horn Coral',
  },
  {
    stat: 'p-dead_brain_coral',
    translation: 'Picked Up Dead Brain Coral',
  },
  {
    stat: 'p-dead_bubble_coral',
    translation: 'Picked Up Dead Bubble Coral',
  },
  {
    stat: 'p-dead_fire_coral',
    translation: 'Picked Up Dead Fire Coral',
  },
  {
    stat: 'p-dead_horn_coral',
    translation: 'Picked Up Dead Horn Coral',
  },
  {
    stat: 'p-dead_tube_coral',
    translation: 'Picked Up Dead Tube Coral',
  },
  {
    stat: 'p-tube_coral_fan',
    translation: 'Picked Up Tube Coral Fan',
  },
  {
    stat: 'p-brain_coral_fan',
    translation: 'Picked Up Brain Coral Fan',
  },
  {
    stat: 'p-bubble_coral_fan',
    translation: 'Picked Up Bubble Coral Fan',
  },
  {
    stat: 'p-fire_coral_fan',
    translation: 'Picked Up Fire Coral Fan',
  },
  {
    stat: 'p-horn_coral_fan',
    translation: 'Picked Up Horn Coral Fan',
  },
  {
    stat: 'p-dead_tube_coral_fan',
    translation: 'Picked Up Dead Tube Coral Fan',
  },
  {
    stat: 'p-dead_brain_coral_fan',
    translation: 'Picked Up Dead Brain Coral Fan',
  },
  {
    stat: 'p-dead_bubble_coral_fan',
    translation: 'Picked Up Dead Bubble Coral Fan',
  },
  {
    stat: 'p-dead_fire_coral_fan',
    translation: 'Picked Up Dead Fire Coral Fan',
  },
  {
    stat: 'p-dead_horn_coral_fan',
    translation: 'Picked Up Dead Horn Coral Fan',
  },
  {
    stat: 'p-blue_ice',
    translation: 'Picked Up Blue Ice',
  },
  {
    stat: 'p-conduit',
    translation: 'Picked Up Conduit',
  },
  {
    stat: 'p-polished_granite_stairs',
    translation: 'Picked Up Polished Granite Stairs',
  },
  {
    stat: 'p-smooth_red_sandstone_stairs',
    translation: 'Picked Up Smooth Red Sandstone Stairs',
  },
  {
    stat: 'p-mossy_stone_brick_stairs',
    translation: 'Picked Up Mossy Stone Brick Stairs',
  },
  {
    stat: 'p-polished_diorite_stairs',
    translation: 'Picked Up Polished Diorite Stairs',
  },
  {
    stat: 'p-mossy_cobblestone_stairs',
    translation: 'Picked Up Mossy Cobblestone Stairs',
  },
  {
    stat: 'p-end_stone_brick_stairs',
    translation: 'Picked Up End Stone Brick Stairs',
  },
  {
    stat: 'p-stone_stairs',
    translation: 'Picked Up Stone Stairs',
  },
  {
    stat: 'p-smooth_sandstone_stairs',
    translation: 'Picked Up Smooth Sandstone Stairs',
  },
  {
    stat: 'p-smooth_quartz_stairs',
    translation: 'Picked Up Smooth Quartz Stairs',
  },
  {
    stat: 'p-granite_stairs',
    translation: 'Picked Up Granite Stairs',
  },
  {
    stat: 'p-andesite_stairs',
    translation: 'Picked Up Andesite Stairs',
  },
  {
    stat: 'p-red_nether_brick_stairs',
    translation: 'Picked Up Red Nether Brick Stairs',
  },
  {
    stat: 'p-polished_andesite_stairs',
    translation: 'Picked Up Polished Andesite Stairs',
  },
  {
    stat: 'p-diorite_stairs',
    translation: 'Picked Up Diorite Stairs',
  },
  {
    stat: 'p-cobbled_deepslate_stairs',
    translation: 'Picked Up Cobbled Deepslate Stairs',
  },
  {
    stat: 'p-polished_deepslate_stairs',
    translation: 'Picked Up Polished Deepslate Stairs',
  },
  {
    stat: 'p-deepslate_brick_stairs',
    translation: 'Picked Up Deepslate Brick Stairs',
  },
  {
    stat: 'p-deepslate_tile_stairs',
    translation: 'Picked Up Deepslate Tile Stairs',
  },
  {
    stat: 'p-polished_granite_slab',
    translation: 'Picked Up Polished Granite Slab',
  },
  {
    stat: 'p-smooth_red_sandstone_slab',
    translation: 'Picked Up Smooth Red Sandstone Slab',
  },
  {
    stat: 'p-mossy_stone_brick_slab',
    translation: 'Picked Up Mossy Stone Brick Slab',
  },
  {
    stat: 'p-polished_diorite_slab',
    translation: 'Picked Up Polished Diorite Slab',
  },
  {
    stat: 'p-mossy_cobblestone_slab',
    translation: 'Picked Up Mossy Cobblestone Slab',
  },
  {
    stat: 'p-end_stone_brick_slab',
    translation: 'Picked Up End Stone Brick Slab',
  },
  {
    stat: 'p-smooth_sandstone_slab',
    translation: 'Picked Up Smooth Sandstone Slab',
  },
  {
    stat: 'p-smooth_quartz_slab',
    translation: 'Picked Up Smooth Quartz Slab',
  },
  {
    stat: 'p-granite_slab',
    translation: 'Picked Up Granite Slab',
  },
  {
    stat: 'p-andesite_slab',
    translation: 'Picked Up Andesite Slab',
  },
  {
    stat: 'p-red_nether_brick_slab',
    translation: 'Picked Up Red Nether Brick Slab',
  },
  {
    stat: 'p-polished_andesite_slab',
    translation: 'Picked Up Polished Andesite Slab',
  },
  {
    stat: 'p-diorite_slab',
    translation: 'Picked Up Diorite Slab',
  },
  {
    stat: 'p-cobbled_deepslate_slab',
    translation: 'Picked Up Cobbled Deepslate Slab',
  },
  {
    stat: 'p-polished_deepslate_slab',
    translation: 'Picked Up Polished Deepslate Slab',
  },
  {
    stat: 'p-deepslate_brick_slab',
    translation: 'Picked Up Deepslate Brick Slab',
  },
  {
    stat: 'p-deepslate_tile_slab',
    translation: 'Picked Up Deepslate Tile Slab',
  },
  {
    stat: 'p-scaffolding',
    translation: 'Picked Up Scaffolding',
  },
  {
    stat: 'p-redstone',
    translation: 'Picked Up Redstone Dust',
  },
  {
    stat: 'p-redstone_torch',
    translation: 'Picked Up Redstone Torch',
  },
  {
    stat: 'p-redstone_block',
    translation: 'Picked Up Block of Redstone',
  },
  {
    stat: 'p-repeater',
    translation: 'Picked Up Redstone Repeater',
  },
  {
    stat: 'p-comparator',
    translation: 'Picked Up Redstone Comparator',
  },
  {
    stat: 'p-piston',
    translation: 'Picked Up Piston',
  },
  {
    stat: 'p-sticky_piston',
    translation: 'Picked Up Sticky Piston',
  },
  {
    stat: 'p-slime_block',
    translation: 'Picked Up Slime Block',
  },
  {
    stat: 'p-honey_block',
    translation: 'Picked Up Honey Block',
  },
  {
    stat: 'p-observer',
    translation: 'Picked Up Observer',
  },
  {
    stat: 'p-hopper',
    translation: 'Picked Up Hopper',
  },
  {
    stat: 'p-dispenser',
    translation: 'Picked Up Dispenser',
  },
  {
    stat: 'p-dropper',
    translation: 'Picked Up Dropper',
  },
  {
    stat: 'p-lectern',
    translation: 'Picked Up Lectern',
  },
  {
    stat: 'p-target',
    translation: 'Picked Up Target',
  },
  {
    stat: 'p-lever',
    translation: 'Picked Up Lever',
  },
  {
    stat: 'p-lightning_rod',
    translation: 'Picked Up Lightning Rod',
  },
  {
    stat: 'p-daylight_detector',
    translation: 'Picked Up Daylight Detector',
  },
  {
    stat: 'p-sculk_sensor',
    translation: 'Picked Up Sculk Sensor',
  },
  {
    stat: 'p-tripwire_hook',
    translation: 'Picked Up Tripwire Hook',
  },
  {
    stat: 'p-trapped_chest',
    translation: 'Picked Up Trapped Chest',
  },
  {
    stat: 'p-tnt',
    translation: 'Picked Up TNT',
  },
  {
    stat: 'p-redstone_lamp',
    translation: 'Picked Up Redstone Lamp',
  },
  {
    stat: 'p-note_block',
    translation: 'Picked Up Note Block',
  },
  {
    stat: 'p-stone_button',
    translation: 'Picked Up Stone Button',
  },
  {
    stat: 'p-polished_blackstone_button',
    translation: 'Picked Up Polished Blackstone Button',
  },
  {
    stat: 'p-oak_button',
    translation: 'Picked Up Oak Button',
  },
  {
    stat: 'p-spruce_button',
    translation: 'Picked Up Spruce Button',
  },
  {
    stat: 'p-birch_button',
    translation: 'Picked Up Birch Button',
  },
  {
    stat: 'p-jungle_button',
    translation: 'Picked Up Jungle Button',
  },
  {
    stat: 'p-acacia_button',
    translation: 'Picked Up Acacia Button',
  },
  {
    stat: 'p-dark_oak_button',
    translation: 'Picked Up Dark Oak Button',
  },
  {
    stat: 'p-mangrove_button',
    translation: 'Picked Up Mangrove Button',
  },
  {
    stat: 'p-crimson_button',
    translation: 'Picked Up Crimson Button',
  },
  {
    stat: 'p-warped_button',
    translation: 'Picked Up Warped Button',
  },
  {
    stat: 'p-stone_pressure_plate',
    translation: 'Picked Up Stone Pressure Plate',
  },
  {
    stat: 'p-polished_blackstone_pressure_plate',
    translation: 'Picked Up Polished Blackstone Pressure Plate',
  },
  {
    stat: 'p-light_weighted_pressure_plate',
    translation: 'Picked Up Light Weighted Pressure Plate',
  },
  {
    stat: 'p-heavy_weighted_pressure_plate',
    translation: 'Picked Up Heavy Weighted Pressure Plate',
  },
  {
    stat: 'p-oak_pressure_plate',
    translation: 'Picked Up Oak Pressure Plate',
  },
  {
    stat: 'p-spruce_pressure_plate',
    translation: 'Picked Up Spruce Pressure Plate',
  },
  {
    stat: 'p-birch_pressure_plate',
    translation: 'Picked Up Birch Pressure Plate',
  },
  {
    stat: 'p-jungle_pressure_plate',
    translation: 'Picked Up Jungle Pressure Plate',
  },
  {
    stat: 'p-acacia_pressure_plate',
    translation: 'Picked Up Acacia Pressure Plate',
  },
  {
    stat: 'p-dark_oak_pressure_plate',
    translation: 'Picked Up Dark Oak Pressure Plate',
  },
  {
    stat: 'p-mangrove_pressure_plate',
    translation: 'Picked Up Mangrove Pressure Plate',
  },
  {
    stat: 'p-crimson_pressure_plate',
    translation: 'Picked Up Crimson Pressure Plate',
  },
  {
    stat: 'p-warped_pressure_plate',
    translation: 'Picked Up Warped Pressure Plate',
  },
  {
    stat: 'p-iron_door',
    translation: 'Picked Up Iron Door',
  },
  {
    stat: 'p-oak_door',
    translation: 'Picked Up Oak Door',
  },
  {
    stat: 'p-spruce_door',
    translation: 'Picked Up Spruce Door',
  },
  {
    stat: 'p-birch_door',
    translation: 'Picked Up Birch Door',
  },
  {
    stat: 'p-jungle_door',
    translation: 'Picked Up Jungle Door',
  },
  {
    stat: 'p-acacia_door',
    translation: 'Picked Up Acacia Door',
  },
  {
    stat: 'p-dark_oak_door',
    translation: 'Picked Up Dark Oak Door',
  },
  {
    stat: 'p-mangrove_door',
    translation: 'Picked Up Mangrove Door',
  },
  {
    stat: 'p-crimson_door',
    translation: 'Picked Up Crimson Door',
  },
  {
    stat: 'p-warped_door',
    translation: 'Picked Up Warped Door',
  },
  {
    stat: 'p-iron_trapdoor',
    translation: 'Picked Up Iron Trapdoor',
  },
  {
    stat: 'p-oak_trapdoor',
    translation: 'Picked Up Oak Trapdoor',
  },
  {
    stat: 'p-spruce_trapdoor',
    translation: 'Picked Up Spruce Trapdoor',
  },
  {
    stat: 'p-birch_trapdoor',
    translation: 'Picked Up Birch Trapdoor',
  },
  {
    stat: 'p-jungle_trapdoor',
    translation: 'Picked Up Jungle Trapdoor',
  },
  {
    stat: 'p-acacia_trapdoor',
    translation: 'Picked Up Acacia Trapdoor',
  },
  {
    stat: 'p-dark_oak_trapdoor',
    translation: 'Picked Up Dark Oak Trapdoor',
  },
  {
    stat: 'p-mangrove_trapdoor',
    translation: 'Picked Up Mangrove Trapdoor',
  },
  {
    stat: 'p-crimson_trapdoor',
    translation: 'Picked Up Crimson Trapdoor',
  },
  {
    stat: 'p-warped_trapdoor',
    translation: 'Picked Up Warped Trapdoor',
  },
  {
    stat: 'p-oak_fence_gate',
    translation: 'Picked Up Oak Fence Gate',
  },
  {
    stat: 'p-spruce_fence_gate',
    translation: 'Picked Up Spruce Fence Gate',
  },
  {
    stat: 'p-birch_fence_gate',
    translation: 'Picked Up Birch Fence Gate',
  },
  {
    stat: 'p-jungle_fence_gate',
    translation: 'Picked Up Jungle Fence Gate',
  },
  {
    stat: 'p-acacia_fence_gate',
    translation: 'Picked Up Acacia Fence Gate',
  },
  {
    stat: 'p-dark_oak_fence_gate',
    translation: 'Picked Up Dark Oak Fence Gate',
  },
  {
    stat: 'p-mangrove_fence_gate',
    translation: 'Picked Up Mangrove Fence Gate',
  },
  {
    stat: 'p-crimson_fence_gate',
    translation: 'Picked Up Crimson Fence Gate',
  },
  {
    stat: 'p-warped_fence_gate',
    translation: 'Picked Up Warped Fence Gate',
  },
  {
    stat: 'p-powered_rail',
    translation: 'Picked Up Powered Rail',
  },
  {
    stat: 'p-detector_rail',
    translation: 'Picked Up Detector Rail',
  },
  {
    stat: 'p-rail',
    translation: 'Picked Up Rail',
  },
  {
    stat: 'p-activator_rail',
    translation: 'Picked Up Activator Rail',
  },
  {
    stat: 'p-saddle',
    translation: 'Picked Up Saddle',
  },
  {
    stat: 'p-minecart',
    translation: 'Picked Up Minecart',
  },
  {
    stat: 'p-chest_minecart',
    translation: 'Picked Up Minecart with Chest',
  },
  {
    stat: 'p-furnace_minecart',
    translation: 'Picked Up Minecart with Furnace',
  },
  {
    stat: 'p-tnt_minecart',
    translation: 'Picked Up Minecart with TNT',
  },
  {
    stat: 'p-hopper_minecart',
    translation: 'Picked Up Minecart with Hopper',
  },
  {
    stat: 'p-carrot_on_a_stick',
    translation: 'Picked Up Carrot on a Stick',
  },
  {
    stat: 'p-warped_fungus_on_a_stick',
    translation: 'Picked Up Warped Fungus on a Stick',
  },
  {
    stat: 'p-elytra',
    translation: 'Picked Up Elytra',
  },
  {
    stat: 'p-oak_boat',
    translation: 'Picked Up Oak Boat',
  },
  {
    stat: 'p-oak_chest_boat',
    translation: 'Picked Up Oak Boat with Chest',
  },
  {
    stat: 'p-spruce_boat',
    translation: 'Picked Up Spruce Boat',
  },
  {
    stat: 'p-spruce_chest_boat',
    translation: 'Picked Up Spruce Boat with Chest',
  },
  {
    stat: 'p-birch_boat',
    translation: 'Picked Up Birch Boat',
  },
  {
    stat: 'p-birch_chest_boat',
    translation: 'Picked Up Birch Boat with Chest',
  },
  {
    stat: 'p-jungle_boat',
    translation: 'Picked Up Jungle Boat',
  },
  {
    stat: 'p-jungle_chest_boat',
    translation: 'Picked Up Jungle Boat with Chest',
  },
  {
    stat: 'p-acacia_boat',
    translation: 'Picked Up Acacia Boat',
  },
  {
    stat: 'p-acacia_chest_boat',
    translation: 'Picked Up Acacia Boat with Chest',
  },
  {
    stat: 'p-dark_oak_boat',
    translation: 'Picked Up Dark Oak Boat',
  },
  {
    stat: 'p-dark_oak_chest_boat',
    translation: 'Picked Up Dark Oak Boat with Chest',
  },
  {
    stat: 'p-mangrove_boat',
    translation: 'Picked Up Mangrove Boat',
  },
  {
    stat: 'p-mangrove_chest_boat',
    translation: 'Picked Up Mangrove Boat with Chest',
  },
  {
    stat: 'p-structure_block',
    translation: 'Picked Up Structure Block',
  },
  {
    stat: 'p-jigsaw',
    translation: 'Picked Up Jigsaw Block',
  },
  {
    stat: 'p-turtle_helmet',
    translation: 'Picked Up Turtle Shell',
  },
  {
    stat: 'p-scute',
    translation: 'Picked Up Scute',
  },
  {
    stat: 'p-flint_and_steel',
    translation: 'Picked Up Flint and Steel',
  },
  {
    stat: 'p-apple',
    translation: 'Picked Up Apple',
  },
  {
    stat: 'p-bow',
    translation: 'Picked Up Bow',
  },
  {
    stat: 'p-arrow',
    translation: 'Picked Up Arrow',
  },
  {
    stat: 'p-coal',
    translation: 'Picked Up Coal',
  },
  {
    stat: 'p-charcoal',
    translation: 'Picked Up Charcoal',
  },
  {
    stat: 'p-diamond',
    translation: 'Picked Up Diamond',
  },
  {
    stat: 'p-emerald',
    translation: 'Picked Up Emerald',
  },
  {
    stat: 'p-lapis_lazuli',
    translation: 'Picked Up Lapis Lazuli',
  },
  {
    stat: 'p-quartz',
    translation: 'Picked Up Nether Quartz',
  },
  {
    stat: 'p-amethyst_shard',
    translation: 'Picked Up Amethyst Shard',
  },
  {
    stat: 'p-raw_iron',
    translation: 'Picked Up Raw Iron',
  },
  {
    stat: 'p-iron_ingot',
    translation: 'Picked Up Iron Ingot',
  },
  {
    stat: 'p-raw_copper',
    translation: 'Picked Up Raw Copper',
  },
  {
    stat: 'p-copper_ingot',
    translation: 'Picked Up Copper Ingot',
  },
  {
    stat: 'p-raw_gold',
    translation: 'Picked Up Raw Gold',
  },
  {
    stat: 'p-gold_ingot',
    translation: 'Picked Up Gold Ingot',
  },
  {
    stat: 'p-netherite_ingot',
    translation: 'Picked Up Netherite Ingot',
  },
  {
    stat: 'p-netherite_scrap',
    translation: 'Picked Up Netherite Scrap',
  },
  {
    stat: 'p-wooden_sword',
    translation: 'Picked Up Wooden Sword',
  },
  {
    stat: 'p-wooden_shovel',
    translation: 'Picked Up Wooden Shovel',
  },
  {
    stat: 'p-wooden_pickaxe',
    translation: 'Picked Up Wooden Pickaxe',
  },
  {
    stat: 'p-wooden_axe',
    translation: 'Picked Up Wooden Axe',
  },
  {
    stat: 'p-wooden_hoe',
    translation: 'Picked Up Wooden Hoe',
  },
  {
    stat: 'p-stone_sword',
    translation: 'Picked Up Stone Sword',
  },
  {
    stat: 'p-stone_shovel',
    translation: 'Picked Up Stone Shovel',
  },
  {
    stat: 'p-stone_pickaxe',
    translation: 'Picked Up Stone Pickaxe',
  },
  {
    stat: 'p-stone_axe',
    translation: 'Picked Up Stone Axe',
  },
  {
    stat: 'p-stone_hoe',
    translation: 'Picked Up Stone Hoe',
  },
  {
    stat: 'p-golden_sword',
    translation: 'Picked Up Golden Sword',
  },
  {
    stat: 'p-golden_shovel',
    translation: 'Picked Up Golden Shovel',
  },
  {
    stat: 'p-golden_pickaxe',
    translation: 'Picked Up Golden Pickaxe',
  },
  {
    stat: 'p-golden_axe',
    translation: 'Picked Up Golden Axe',
  },
  {
    stat: 'p-golden_hoe',
    translation: 'Picked Up Golden Hoe',
  },
  {
    stat: 'p-iron_sword',
    translation: 'Picked Up Iron Sword',
  },
  {
    stat: 'p-iron_shovel',
    translation: 'Picked Up Iron Shovel',
  },
  {
    stat: 'p-iron_pickaxe',
    translation: 'Picked Up Iron Pickaxe',
  },
  {
    stat: 'p-iron_axe',
    translation: 'Picked Up Iron Axe',
  },
  {
    stat: 'p-iron_hoe',
    translation: 'Picked Up Iron Hoe',
  },
  {
    stat: 'p-diamond_sword',
    translation: 'Picked Up Diamond Sword',
  },
  {
    stat: 'p-diamond_shovel',
    translation: 'Picked Up Diamond Shovel',
  },
  {
    stat: 'p-diamond_pickaxe',
    translation: 'Picked Up Diamond Pickaxe',
  },
  {
    stat: 'p-diamond_axe',
    translation: 'Picked Up Diamond Axe',
  },
  {
    stat: 'p-diamond_hoe',
    translation: 'Picked Up Diamond Hoe',
  },
  {
    stat: 'p-netherite_sword',
    translation: 'Picked Up Netherite Sword',
  },
  {
    stat: 'p-netherite_shovel',
    translation: 'Picked Up Netherite Shovel',
  },
  {
    stat: 'p-netherite_pickaxe',
    translation: 'Picked Up Netherite Pickaxe',
  },
  {
    stat: 'p-netherite_axe',
    translation: 'Picked Up Netherite Axe',
  },
  {
    stat: 'p-netherite_hoe',
    translation: 'Picked Up Netherite Hoe',
  },
  {
    stat: 'p-stick',
    translation: 'Picked Up Stick',
  },
  {
    stat: 'p-bowl',
    translation: 'Picked Up Bowl',
  },
  {
    stat: 'p-mushroom_stew',
    translation: 'Picked Up Mushroom Stew',
  },
  {
    stat: 'p-string',
    translation: 'Picked Up String',
  },
  {
    stat: 'p-feather',
    translation: 'Picked Up Feather',
  },
  {
    stat: 'p-gunpowder',
    translation: 'Picked Up Gunpowder',
  },
  {
    stat: 'p-wheat_seeds',
    translation: 'Picked Up Wheat Seeds',
  },
  {
    stat: 'p-wheat',
    translation: 'Picked Up Wheat',
  },
  {
    stat: 'p-bread',
    translation: 'Picked Up Bread',
  },
  {
    stat: 'p-leather_helmet',
    translation: 'Picked Up Leather Cap',
  },
  {
    stat: 'p-leather_chestplate',
    translation: 'Picked Up Leather Tunic',
  },
  {
    stat: 'p-leather_leggings',
    translation: 'Picked Up Leather Pants',
  },
  {
    stat: 'p-leather_boots',
    translation: 'Picked Up Leather Boots',
  },
  {
    stat: 'p-chainmail_helmet',
    translation: 'Picked Up Chainmail Helmet',
  },
  {
    stat: 'p-chainmail_chestplate',
    translation: 'Picked Up Chainmail Chestplate',
  },
  {
    stat: 'p-chainmail_leggings',
    translation: 'Picked Up Chainmail Leggings',
  },
  {
    stat: 'p-chainmail_boots',
    translation: 'Picked Up Chainmail Boots',
  },
  {
    stat: 'p-iron_helmet',
    translation: 'Picked Up Iron Helmet',
  },
  {
    stat: 'p-iron_chestplate',
    translation: 'Picked Up Iron Chestplate',
  },
  {
    stat: 'p-iron_leggings',
    translation: 'Picked Up Iron Leggings',
  },
  {
    stat: 'p-iron_boots',
    translation: 'Picked Up Iron Boots',
  },
  {
    stat: 'p-diamond_helmet',
    translation: 'Picked Up Diamond Helmet',
  },
  {
    stat: 'p-diamond_chestplate',
    translation: 'Picked Up Diamond Chestplate',
  },
  {
    stat: 'p-diamond_leggings',
    translation: 'Picked Up Diamond Leggings',
  },
  {
    stat: 'p-diamond_boots',
    translation: 'Picked Up Diamond Boots',
  },
  {
    stat: 'p-golden_helmet',
    translation: 'Picked Up Golden Helmet',
  },
  {
    stat: 'p-golden_chestplate',
    translation: 'Picked Up Golden Chestplate',
  },
  {
    stat: 'p-golden_leggings',
    translation: 'Picked Up Golden Leggings',
  },
  {
    stat: 'p-golden_boots',
    translation: 'Picked Up Golden Boots',
  },
  {
    stat: 'p-netherite_helmet',
    translation: 'Picked Up Netherite Helmet',
  },
  {
    stat: 'p-netherite_chestplate',
    translation: 'Picked Up Netherite Chestplate',
  },
  {
    stat: 'p-netherite_leggings',
    translation: 'Picked Up Netherite Leggings',
  },
  {
    stat: 'p-netherite_boots',
    translation: 'Picked Up Netherite Boots',
  },
  {
    stat: 'p-flint',
    translation: 'Picked Up Flint',
  },
  {
    stat: 'p-porkchop',
    translation: 'Picked Up Raw Porkchop',
  },
  {
    stat: 'p-cooked_porkchop',
    translation: 'Picked Up Cooked Porkchop',
  },
  {
    stat: 'p-painting',
    translation: 'Picked Up Painting',
  },
  {
    stat: 'p-golden_apple',
    translation: 'Picked Up Golden Apple',
  },
  {
    stat: 'p-enchanted_golden_apple',
    translation: 'Picked Up Enchanted Golden Apple',
  },
  {
    stat: 'p-oak_sign',
    translation: 'Picked Up Oak Sign',
  },
  {
    stat: 'p-spruce_sign',
    translation: 'Picked Up Spruce Sign',
  },
  {
    stat: 'p-birch_sign',
    translation: 'Picked Up Birch Sign',
  },
  {
    stat: 'p-jungle_sign',
    translation: 'Picked Up Jungle Sign',
  },
  {
    stat: 'p-acacia_sign',
    translation: 'Picked Up Acacia Sign',
  },
  {
    stat: 'p-dark_oak_sign',
    translation: 'Picked Up Dark Oak Sign',
  },
  {
    stat: 'p-mangrove_sign',
    translation: 'Picked Up Mangrove Sign',
  },
  {
    stat: 'p-crimson_sign',
    translation: 'Picked Up Crimson Sign',
  },
  {
    stat: 'p-warped_sign',
    translation: 'Picked Up Warped Sign',
  },
  {
    stat: 'p-bucket',
    translation: 'Picked Up Bucket',
  },
  {
    stat: 'p-water_bucket',
    translation: 'Picked Up Water Bucket',
  },
  {
    stat: 'p-lava_bucket',
    translation: 'Picked Up Lava Bucket',
  },
  {
    stat: 'p-powder_snow_bucket',
    translation: 'Picked Up Powder Snow Bucket',
  },
  {
    stat: 'p-snowball',
    translation: 'Picked Up Snowball',
  },
  {
    stat: 'p-leather',
    translation: 'Picked Up Leather',
  },
  {
    stat: 'p-milk_bucket',
    translation: 'Picked Up Milk Bucket',
  },
  {
    stat: 'p-pufferfish_bucket',
    translation: 'Picked Up Bucket of Pufferfish',
  },
  {
    stat: 'p-salmon_bucket',
    translation: 'Picked Up Bucket of Salmon',
  },
  {
    stat: 'p-cod_bucket',
    translation: 'Picked Up Bucket of Cod',
  },
  {
    stat: 'p-tropical_fish_bucket',
    translation: 'Picked Up Bucket of Tropical Fish',
  },
  {
    stat: 'p-axolotl_bucket',
    translation: 'Picked Up Bucket of Axolotl',
  },
  {
    stat: 'p-tadpole_bucket',
    translation: 'Picked Up Bucket of Tadpole',
  },
  {
    stat: 'p-brick',
    translation: 'Picked Up Brick',
  },
  {
    stat: 'p-clay_ball',
    translation: 'Picked Up Clay Ball',
  },
  {
    stat: 'p-dried_kelp_block',
    translation: 'Picked Up Dried Kelp Block',
  },
  {
    stat: 'p-paper',
    translation: 'Picked Up Paper',
  },
  {
    stat: 'p-book',
    translation: 'Picked Up Book',
  },
  {
    stat: 'p-slime_ball',
    translation: 'Picked Up Slimeball',
  },
  {
    stat: 'p-egg',
    translation: 'Picked Up Egg',
  },
  {
    stat: 'p-compass',
    translation: 'Picked Up Compass',
  },
  {
    stat: 'p-recovery_compass',
    translation: 'Picked Up Recovery Compass',
  },
  {
    stat: 'p-bundle',
    translation: 'Picked Up Bundle',
  },
  {
    stat: 'p-fishing_rod',
    translation: 'Picked Up Fishing Rod',
  },
  {
    stat: 'p-clock',
    translation: 'Picked Up Clock',
  },
  {
    stat: 'p-spyglass',
    translation: 'Picked Up Spyglass',
  },
  {
    stat: 'p-glowstone_dust',
    translation: 'Picked Up Glowstone Dust',
  },
  {
    stat: 'p-cod',
    translation: 'Picked Up Raw Cod',
  },
  {
    stat: 'p-salmon',
    translation: 'Picked Up Raw Salmon',
  },
  {
    stat: 'p-tropical_fish',
    translation: 'Picked Up Tropical Fish',
  },
  {
    stat: 'p-pufferfish',
    translation: 'Picked Up Pufferfish',
  },
  {
    stat: 'p-cooked_cod',
    translation: 'Picked Up Cooked Cod',
  },
  {
    stat: 'p-cooked_salmon',
    translation: 'Picked Up Cooked Salmon',
  },
  {
    stat: 'p-ink_sac',
    translation: 'Picked Up Ink Sac',
  },
  {
    stat: 'p-glow_ink_sac',
    translation: 'Picked Up Glow Ink Sac',
  },
  {
    stat: 'p-cocoa_beans',
    translation: 'Picked Up Cocoa Beans',
  },
  {
    stat: 'p-white_dye',
    translation: 'Picked Up White Dye',
  },
  {
    stat: 'p-orange_dye',
    translation: 'Picked Up Orange Dye',
  },
  {
    stat: 'p-magenta_dye',
    translation: 'Picked Up Magenta Dye',
  },
  {
    stat: 'p-light_blue_dye',
    translation: 'Picked Up Light Blue Dye',
  },
  {
    stat: 'p-yellow_dye',
    translation: 'Picked Up Yellow Dye',
  },
  {
    stat: 'p-lime_dye',
    translation: 'Picked Up Lime Dye',
  },
  {
    stat: 'p-pink_dye',
    translation: 'Picked Up Pink Dye',
  },
  {
    stat: 'p-gray_dye',
    translation: 'Picked Up Gray Dye',
  },
  {
    stat: 'p-light_gray_dye',
    translation: 'Picked Up Light Gray Dye',
  },
  {
    stat: 'p-cyan_dye',
    translation: 'Picked Up Cyan Dye',
  },
  {
    stat: 'p-purple_dye',
    translation: 'Picked Up Purple Dye',
  },
  {
    stat: 'p-blue_dye',
    translation: 'Picked Up Blue Dye',
  },
  {
    stat: 'p-brown_dye',
    translation: 'Picked Up Brown Dye',
  },
  {
    stat: 'p-green_dye',
    translation: 'Picked Up Green Dye',
  },
  {
    stat: 'p-red_dye',
    translation: 'Picked Up Red Dye',
  },
  {
    stat: 'p-black_dye',
    translation: 'Picked Up Black Dye',
  },
  {
    stat: 'p-bone_meal',
    translation: 'Picked Up Bone Meal',
  },
  {
    stat: 'p-bone',
    translation: 'Picked Up Bone',
  },
  {
    stat: 'p-sugar',
    translation: 'Picked Up Sugar',
  },
  {
    stat: 'p-cake',
    translation: 'Picked Up Cake',
  },
  {
    stat: 'p-white_bed',
    translation: 'Picked Up White Bed',
  },
  {
    stat: 'p-orange_bed',
    translation: 'Picked Up Orange Bed',
  },
  {
    stat: 'p-magenta_bed',
    translation: 'Picked Up Magenta Bed',
  },
  {
    stat: 'p-light_blue_bed',
    translation: 'Picked Up Light Blue Bed',
  },
  {
    stat: 'p-yellow_bed',
    translation: 'Picked Up Yellow Bed',
  },
  {
    stat: 'p-lime_bed',
    translation: 'Picked Up Lime Bed',
  },
  {
    stat: 'p-pink_bed',
    translation: 'Picked Up Pink Bed',
  },
  {
    stat: 'p-gray_bed',
    translation: 'Picked Up Gray Bed',
  },
  {
    stat: 'p-light_gray_bed',
    translation: 'Picked Up Light Gray Bed',
  },
  {
    stat: 'p-cyan_bed',
    translation: 'Picked Up Cyan Bed',
  },
  {
    stat: 'p-purple_bed',
    translation: 'Picked Up Purple Bed',
  },
  {
    stat: 'p-blue_bed',
    translation: 'Picked Up Blue Bed',
  },
  {
    stat: 'p-brown_bed',
    translation: 'Picked Up Brown Bed',
  },
  {
    stat: 'p-green_bed',
    translation: 'Picked Up Green Bed',
  },
  {
    stat: 'p-red_bed',
    translation: 'Picked Up Red Bed',
  },
  {
    stat: 'p-black_bed',
    translation: 'Picked Up Black Bed',
  },
  {
    stat: 'p-cookie',
    translation: 'Picked Up Cookie',
  },
  {
    stat: 'p-filled_map',
    translation: 'Picked Up Map',
  },
  {
    stat: 'p-shears',
    translation: 'Picked Up Shears',
  },
  {
    stat: 'p-melon_slice',
    translation: 'Picked Up Melon Slice',
  },
  {
    stat: 'p-dried_kelp',
    translation: 'Picked Up Dried Kelp',
  },
  {
    stat: 'p-pumpkin_seeds',
    translation: 'Picked Up Pumpkin Seeds',
  },
  {
    stat: 'p-melon_seeds',
    translation: 'Picked Up Melon Seeds',
  },
  {
    stat: 'p-beef',
    translation: 'Picked Up Raw Beef',
  },
  {
    stat: 'p-cooked_beef',
    translation: 'Picked Up Steak',
  },
  {
    stat: 'p-chicken',
    translation: 'Picked Up Raw Chicken',
  },
  {
    stat: 'p-cooked_chicken',
    translation: 'Picked Up Cooked Chicken',
  },
  {
    stat: 'p-rotten_flesh',
    translation: 'Picked Up Rotten Flesh',
  },
  {
    stat: 'p-ender_pearl',
    translation: 'Picked Up Ender Pearl',
  },
  {
    stat: 'p-blaze_rod',
    translation: 'Picked Up Blaze Rod',
  },
  {
    stat: 'p-ghast_tear',
    translation: 'Picked Up Ghast Tear',
  },
  {
    stat: 'p-gold_nugget',
    translation: 'Picked Up Gold Nugget',
  },
  {
    stat: 'p-nether_wart',
    translation: 'Picked Up Nether Wart',
  },
  {
    stat: 'p-potion',
    translation: 'Picked Up Potion',
  },
  {
    stat: 'p-glass_bottle',
    translation: 'Picked Up Glass Bottle',
  },
  {
    stat: 'p-spider_eye',
    translation: 'Picked Up Spider Eye',
  },
  {
    stat: 'p-fermented_spider_eye',
    translation: 'Picked Up Fermented Spider Eye',
  },
  {
    stat: 'p-blaze_powder',
    translation: 'Picked Up Blaze Powder',
  },
  {
    stat: 'p-magma_cream',
    translation: 'Picked Up Magma Cream',
  },
  {
    stat: 'p-brewing_stand',
    translation: 'Picked Up Brewing Stand',
  },
  {
    stat: 'p-cauldron',
    translation: 'Picked Up Cauldron',
  },
  {
    stat: 'p-ender_eye',
    translation: 'Picked Up Eye of Ender',
  },
  {
    stat: 'p-glistering_melon_slice',
    translation: 'Picked Up Glistering Melon Slice',
  },
  {
    stat: 'p-allay_spawn_egg',
    translation: 'Picked Up Allay Spawn Egg',
  },
  {
    stat: 'p-axolotl_spawn_egg',
    translation: 'Picked Up Axolotl Spawn Egg',
  },
  {
    stat: 'p-bat_spawn_egg',
    translation: 'Picked Up Bat Spawn Egg',
  },
  {
    stat: 'p-bee_spawn_egg',
    translation: 'Picked Up Bee Spawn Egg',
  },
  {
    stat: 'p-blaze_spawn_egg',
    translation: 'Picked Up Blaze Spawn Egg',
  },
  {
    stat: 'p-cat_spawn_egg',
    translation: 'Picked Up Cat Spawn Egg',
  },
  {
    stat: 'p-cave_spider_spawn_egg',
    translation: 'Picked Up Cave Spider Spawn Egg',
  },
  {
    stat: 'p-chicken_spawn_egg',
    translation: 'Picked Up Chicken Spawn Egg',
  },
  {
    stat: 'p-cod_spawn_egg',
    translation: 'Picked Up Cod Spawn Egg',
  },
  {
    stat: 'p-cow_spawn_egg',
    translation: 'Picked Up Cow Spawn Egg',
  },
  {
    stat: 'p-creeper_spawn_egg',
    translation: 'Picked Up Creeper Spawn Egg',
  },
  {
    stat: 'p-dolphin_spawn_egg',
    translation: 'Picked Up Dolphin Spawn Egg',
  },
  {
    stat: 'p-donkey_spawn_egg',
    translation: 'Picked Up Donkey Spawn Egg',
  },
  {
    stat: 'p-drowned_spawn_egg',
    translation: 'Picked Up Drowned Spawn Egg',
  },
  {
    stat: 'p-elder_guardian_spawn_egg',
    translation: 'Picked Up Elder Guardian Spawn Egg',
  },
  {
    stat: 'p-enderman_spawn_egg',
    translation: 'Picked Up Enderman Spawn Egg',
  },
  {
    stat: 'p-endermite_spawn_egg',
    translation: 'Picked Up Endermite Spawn Egg',
  },
  {
    stat: 'p-evoker_spawn_egg',
    translation: 'Picked Up Evoker Spawn Egg',
  },
  {
    stat: 'p-fox_spawn_egg',
    translation: 'Picked Up Fox Spawn Egg',
  },
  {
    stat: 'p-frog_spawn_egg',
    translation: 'Picked Up Frog Spawn Egg',
  },
  {
    stat: 'p-ghast_spawn_egg',
    translation: 'Picked Up Ghast Spawn Egg',
  },
  {
    stat: 'p-glow_squid_spawn_egg',
    translation: 'Picked Up Glow Squid Spawn Egg',
  },
  {
    stat: 'p-goat_spawn_egg',
    translation: 'Picked Up Goat Spawn Egg',
  },
  {
    stat: 'p-guardian_spawn_egg',
    translation: 'Picked Up Guardian Spawn Egg',
  },
  {
    stat: 'p-hoglin_spawn_egg',
    translation: 'Picked Up Hoglin Spawn Egg',
  },
  {
    stat: 'p-horse_spawn_egg',
    translation: 'Picked Up Horse Spawn Egg',
  },
  {
    stat: 'p-husk_spawn_egg',
    translation: 'Picked Up Husk Spawn Egg',
  },
  {
    stat: 'p-llama_spawn_egg',
    translation: 'Picked Up Llama Spawn Egg',
  },
  {
    stat: 'p-magma_cube_spawn_egg',
    translation: 'Picked Up Magma Cube Spawn Egg',
  },
  {
    stat: 'p-mooshroom_spawn_egg',
    translation: 'Picked Up Mooshroom Spawn Egg',
  },
  {
    stat: 'p-mule_spawn_egg',
    translation: 'Picked Up Mule Spawn Egg',
  },
  {
    stat: 'p-ocelot_spawn_egg',
    translation: 'Picked Up Ocelot Spawn Egg',
  },
  {
    stat: 'p-panda_spawn_egg',
    translation: 'Picked Up Panda Spawn Egg',
  },
  {
    stat: 'p-parrot_spawn_egg',
    translation: 'Picked Up Parrot Spawn Egg',
  },
  {
    stat: 'p-phantom_spawn_egg',
    translation: 'Picked Up Phantom Spawn Egg',
  },
  {
    stat: 'p-pig_spawn_egg',
    translation: 'Picked Up Pig Spawn Egg',
  },
  {
    stat: 'p-piglin_spawn_egg',
    translation: 'Picked Up Piglin Spawn Egg',
  },
  {
    stat: 'p-piglin_brute_spawn_egg',
    translation: 'Picked Up Piglin Brute Spawn Egg',
  },
  {
    stat: 'p-pillager_spawn_egg',
    translation: 'Picked Up Pillager Spawn Egg',
  },
  {
    stat: 'p-polar_bear_spawn_egg',
    translation: 'Picked Up Polar Bear Spawn Egg',
  },
  {
    stat: 'p-pufferfish_spawn_egg',
    translation: 'Picked Up Pufferfish Spawn Egg',
  },
  {
    stat: 'p-rabbit_spawn_egg',
    translation: 'Picked Up Rabbit Spawn Egg',
  },
  {
    stat: 'p-ravager_spawn_egg',
    translation: 'Picked Up Ravager Spawn Egg',
  },
  {
    stat: 'p-salmon_spawn_egg',
    translation: 'Picked Up Salmon Spawn Egg',
  },
  {
    stat: 'p-sheep_spawn_egg',
    translation: 'Picked Up Sheep Spawn Egg',
  },
  {
    stat: 'p-shulker_spawn_egg',
    translation: 'Picked Up Shulker Spawn Egg',
  },
  {
    stat: 'p-silverfish_spawn_egg',
    translation: 'Picked Up Silverfish Spawn Egg',
  },
  {
    stat: 'p-skeleton_spawn_egg',
    translation: 'Picked Up Skeleton Spawn Egg',
  },
  {
    stat: 'p-skeleton_horse_spawn_egg',
    translation: 'Picked Up Skeleton Horse Spawn Egg',
  },
  {
    stat: 'p-slime_spawn_egg',
    translation: 'Picked Up Slime Spawn Egg',
  },
  {
    stat: 'p-spider_spawn_egg',
    translation: 'Picked Up Spider Spawn Egg',
  },
  {
    stat: 'p-squid_spawn_egg',
    translation: 'Picked Up Squid Spawn Egg',
  },
  {
    stat: 'p-stray_spawn_egg',
    translation: 'Picked Up Stray Spawn Egg',
  },
  {
    stat: 'p-strider_spawn_egg',
    translation: 'Picked Up Strider Spawn Egg',
  },
  {
    stat: 'p-tadpole_spawn_egg',
    translation: 'Picked Up Tadpole Spawn Egg',
  },
  {
    stat: 'p-trader_llama_spawn_egg',
    translation: 'Picked Up Trader Llama Spawn Egg',
  },
  {
    stat: 'p-tropical_fish_spawn_egg',
    translation: 'Picked Up Tropical Fish Spawn Egg',
  },
  {
    stat: 'p-turtle_spawn_egg',
    translation: 'Picked Up Turtle Spawn Egg',
  },
  {
    stat: 'p-vex_spawn_egg',
    translation: 'Picked Up Vex Spawn Egg',
  },
  {
    stat: 'p-villager_spawn_egg',
    translation: 'Picked Up Villager Spawn Egg',
  },
  {
    stat: 'p-vindicator_spawn_egg',
    translation: 'Picked Up Vindicator Spawn Egg',
  },
  {
    stat: 'p-wandering_trader_spawn_egg',
    translation: 'Picked Up Wandering Trader Spawn Egg',
  },
  {
    stat: 'p-warden_spawn_egg',
    translation: 'Picked Up Warden Spawn Egg',
  },
  {
    stat: 'p-witch_spawn_egg',
    translation: 'Picked Up Witch Spawn Egg',
  },
  {
    stat: 'p-wither_skeleton_spawn_egg',
    translation: 'Picked Up Wither Skeleton Spawn Egg',
  },
  {
    stat: 'p-wolf_spawn_egg',
    translation: 'Picked Up Wolf Spawn Egg',
  },
  {
    stat: 'p-zoglin_spawn_egg',
    translation: 'Picked Up Zoglin Spawn Egg',
  },
  {
    stat: 'p-zombie_spawn_egg',
    translation: 'Picked Up Zombie Spawn Egg',
  },
  {
    stat: 'p-zombie_horse_spawn_egg',
    translation: 'Picked Up Zombie Horse Spawn Egg',
  },
  {
    stat: 'p-zombie_villager_spawn_egg',
    translation: 'Picked Up Zombie Villager Spawn Egg',
  },
  {
    stat: 'p-zombified_piglin_spawn_egg',
    translation: 'Picked Up Zombified Piglin Spawn Egg',
  },
  {
    stat: 'p-experience_bottle',
    translation: "Picked Up Bottle o' Enchanting",
  },
  {
    stat: 'p-fire_charge',
    translation: 'Picked Up Fire Charge',
  },
  {
    stat: 'p-writable_book',
    translation: 'Picked Up Book and Quill',
  },
  {
    stat: 'p-written_book',
    translation: 'Picked Up Written Book',
  },
  {
    stat: 'p-item_frame',
    translation: 'Picked Up Item Frame',
  },
  {
    stat: 'p-glow_item_frame',
    translation: 'Picked Up Glow Item Frame',
  },
  {
    stat: 'p-flower_pot',
    translation: 'Picked Up Flower Pot',
  },
  {
    stat: 'p-carrot',
    translation: 'Picked Up Carrot',
  },
  {
    stat: 'p-potato',
    translation: 'Picked Up Potato',
  },
  {
    stat: 'p-baked_potato',
    translation: 'Picked Up Baked Potato',
  },
  {
    stat: 'p-poisonous_potato',
    translation: 'Picked Up Poisonous Potato',
  },
  {
    stat: 'p-map',
    translation: 'Picked Up Empty Map',
  },
  {
    stat: 'p-golden_carrot',
    translation: 'Picked Up Golden Carrot',
  },
  {
    stat: 'p-skeleton_skull',
    translation: 'Picked Up Skeleton Skull',
  },
  {
    stat: 'p-wither_skeleton_skull',
    translation: 'Picked Up Wither Skeleton Skull',
  },
  {
    stat: 'p-player_head',
    translation: 'Picked Up Player Head',
  },
  {
    stat: 'p-zombie_head',
    translation: 'Picked Up Zombie Head',
  },
  {
    stat: 'p-creeper_head',
    translation: 'Picked Up Creeper Head',
  },
  {
    stat: 'p-dragon_head',
    translation: 'Picked Up Dragon Head',
  },
  {
    stat: 'p-nether_star',
    translation: 'Picked Up Nether Star',
  },
  {
    stat: 'p-pumpkin_pie',
    translation: 'Picked Up Pumpkin Pie',
  },
  {
    stat: 'p-firework_rocket',
    translation: 'Picked Up Firework Rocket',
  },
  {
    stat: 'p-firework_star',
    translation: 'Picked Up Firework Star',
  },
  {
    stat: 'p-enchanted_book',
    translation: 'Picked Up Enchanted Book',
  },
  {
    stat: 'p-nether_brick',
    translation: 'Picked Up Nether Brick',
  },
  {
    stat: 'p-prismarine_shard',
    translation: 'Picked Up Prismarine Shard',
  },
  {
    stat: 'p-prismarine_crystals',
    translation: 'Picked Up Prismarine Crystals',
  },
  {
    stat: 'p-rabbit',
    translation: 'Picked Up Raw Rabbit',
  },
  {
    stat: 'p-cooked_rabbit',
    translation: 'Picked Up Cooked Rabbit',
  },
  {
    stat: 'p-rabbit_stew',
    translation: 'Picked Up Rabbit Stew',
  },
  {
    stat: 'p-rabbit_foot',
    translation: "Picked Up Rabbit's Foot",
  },
  {
    stat: 'p-rabbit_hide',
    translation: 'Picked Up Rabbit Hide',
  },
  {
    stat: 'p-armor_stand',
    translation: 'Picked Up Armor Stand',
  },
  {
    stat: 'p-iron_horse_armor',
    translation: 'Picked Up Iron Horse Armor',
  },
  {
    stat: 'p-golden_horse_armor',
    translation: 'Picked Up Golden Horse Armor',
  },
  {
    stat: 'p-diamond_horse_armor',
    translation: 'Picked Up Diamond Horse Armor',
  },
  {
    stat: 'p-leather_horse_armor',
    translation: 'Picked Up Leather Horse Armor',
  },
  {
    stat: 'p-lead',
    translation: 'Picked Up Lead',
  },
  {
    stat: 'p-name_tag',
    translation: 'Picked Up Name Tag',
  },
  {
    stat: 'p-command_block_minecart',
    translation: 'Picked Up Minecart with Command Block',
  },
  {
    stat: 'p-mutton',
    translation: 'Picked Up Raw Mutton',
  },
  {
    stat: 'p-cooked_mutton',
    translation: 'Picked Up Cooked Mutton',
  },
  {
    stat: 'p-white_banner',
    translation: 'Picked Up White Banner',
  },
  {
    stat: 'p-orange_banner',
    translation: 'Picked Up Orange Banner',
  },
  {
    stat: 'p-magenta_banner',
    translation: 'Picked Up Magenta Banner',
  },
  {
    stat: 'p-light_blue_banner',
    translation: 'Picked Up Light Blue Banner',
  },
  {
    stat: 'p-yellow_banner',
    translation: 'Picked Up Yellow Banner',
  },
  {
    stat: 'p-lime_banner',
    translation: 'Picked Up Lime Banner',
  },
  {
    stat: 'p-pink_banner',
    translation: 'Picked Up Pink Banner',
  },
  {
    stat: 'p-gray_banner',
    translation: 'Picked Up Gray Banner',
  },
  {
    stat: 'p-light_gray_banner',
    translation: 'Picked Up Light Gray Banner',
  },
  {
    stat: 'p-cyan_banner',
    translation: 'Picked Up Cyan Banner',
  },
  {
    stat: 'p-purple_banner',
    translation: 'Picked Up Purple Banner',
  },
  {
    stat: 'p-blue_banner',
    translation: 'Picked Up Blue Banner',
  },
  {
    stat: 'p-brown_banner',
    translation: 'Picked Up Brown Banner',
  },
  {
    stat: 'p-green_banner',
    translation: 'Picked Up Green Banner',
  },
  {
    stat: 'p-red_banner',
    translation: 'Picked Up Red Banner',
  },
  {
    stat: 'p-black_banner',
    translation: 'Picked Up Black Banner',
  },
  {
    stat: 'p-end_crystal',
    translation: 'Picked Up End Crystal',
  },
  {
    stat: 'p-chorus_fruit',
    translation: 'Picked Up Chorus Fruit',
  },
  {
    stat: 'p-popped_chorus_fruit',
    translation: 'Picked Up Popped Chorus Fruit',
  },
  {
    stat: 'p-beetroot',
    translation: 'Picked Up Beetroot',
  },
  {
    stat: 'p-beetroot_seeds',
    translation: 'Picked Up Beetroot Seeds',
  },
  {
    stat: 'p-beetroot_soup',
    translation: 'Picked Up Beetroot Soup',
  },
  {
    stat: 'p-dragon_breath',
    translation: "Picked Up Dragon's Breath",
  },
  {
    stat: 'p-splash_potion',
    translation: 'Picked Up Splash Potion',
  },
  {
    stat: 'p-spectral_arrow',
    translation: 'Picked Up Spectral Arrow',
  },
  {
    stat: 'p-tipped_arrow',
    translation: 'Picked Up Tipped Arrow',
  },
  {
    stat: 'p-lingering_potion',
    translation: 'Picked Up Lingering Potion',
  },
  {
    stat: 'p-shield',
    translation: 'Picked Up Shield',
  },
  {
    stat: 'p-totem_of_undying',
    translation: 'Picked Up Totem of Undying',
  },
  {
    stat: 'p-shulker_shell',
    translation: 'Picked Up Shulker Shell',
  },
  {
    stat: 'p-iron_nugget',
    translation: 'Picked Up Iron Nugget',
  },
  {
    stat: 'p-knowledge_book',
    translation: 'Picked Up Knowledge Book',
  },
  {
    stat: 'p-debug_stick',
    translation: 'Picked Up Debug Stick',
  },
  {
    stat: 'p-music_disc_13',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_cat',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_blocks',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_chirp',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_far',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_mall',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_mellohi',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_stal',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_strad',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_ward',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_11',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_wait',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_otherside',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_5',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-music_disc_pigstep',
    translation: 'Picked Up Music Disc',
  },
  {
    stat: 'p-disc_fragment_5',
    translation: 'Picked Up Disc Fragment',
  },
  {
    stat: 'p-trident',
    translation: 'Picked Up Trident',
  },
  {
    stat: 'p-phantom_membrane',
    translation: 'Picked Up Phantom Membrane',
  },
  {
    stat: 'p-nautilus_shell',
    translation: 'Picked Up Nautilus Shell',
  },
  {
    stat: 'p-heart_of_the_sea',
    translation: 'Picked Up Heart of the Sea',
  },
  {
    stat: 'p-crossbow',
    translation: 'Picked Up Crossbow',
  },
  {
    stat: 'p-suspicious_stew',
    translation: 'Picked Up Suspicious Stew',
  },
  {
    stat: 'p-loom',
    translation: 'Picked Up Loom',
  },
  {
    stat: 'p-flower_banner_pattern',
    translation: 'Picked Up Banner Pattern',
  },
  {
    stat: 'p-creeper_banner_pattern',
    translation: 'Picked Up Banner Pattern',
  },
  {
    stat: 'p-skull_banner_pattern',
    translation: 'Picked Up Banner Pattern',
  },
  {
    stat: 'p-mojang_banner_pattern',
    translation: 'Picked Up Banner Pattern',
  },
  {
    stat: 'p-globe_banner_pattern',
    translation: 'Picked Up Banner Pattern',
  },
  {
    stat: 'p-piglin_banner_pattern',
    translation: 'Picked Up Banner Pattern',
  },
  {
    stat: 'p-goat_horn',
    translation: 'Picked Up Goat Horn',
  },
  {
    stat: 'p-composter',
    translation: 'Picked Up Composter',
  },
  {
    stat: 'p-barrel',
    translation: 'Picked Up Barrel',
  },
  {
    stat: 'p-smoker',
    translation: 'Picked Up Smoker',
  },
  {
    stat: 'p-blast_furnace',
    translation: 'Picked Up Blast Furnace',
  },
  {
    stat: 'p-cartography_table',
    translation: 'Picked Up Cartography Table',
  },
  {
    stat: 'p-fletching_table',
    translation: 'Picked Up Fletching Table',
  },
  {
    stat: 'p-grindstone',
    translation: 'Picked Up Grindstone',
  },
  {
    stat: 'p-smithing_table',
    translation: 'Picked Up Smithing Table',
  },
  {
    stat: 'p-stonecutter',
    translation: 'Picked Up Stonecutter',
  },
  {
    stat: 'p-bell',
    translation: 'Picked Up Bell',
  },
  {
    stat: 'p-lantern',
    translation: 'Picked Up Lantern',
  },
  {
    stat: 'p-soul_lantern',
    translation: 'Picked Up Soul Lantern',
  },
  {
    stat: 'p-sweet_berries',
    translation: 'Picked Up Sweet Berries',
  },
  {
    stat: 'p-glow_berries',
    translation: 'Picked Up Glow Berries',
  },
  {
    stat: 'p-campfire',
    translation: 'Picked Up Campfire',
  },
  {
    stat: 'p-soul_campfire',
    translation: 'Picked Up Soul Campfire',
  },
  {
    stat: 'p-shroomlight',
    translation: 'Picked Up Shroomlight',
  },
  {
    stat: 'p-honeycomb',
    translation: 'Picked Up Honeycomb',
  },
  {
    stat: 'p-bee_nest',
    translation: 'Picked Up Bee Nest',
  },
  {
    stat: 'p-beehive',
    translation: 'Picked Up Beehive',
  },
  {
    stat: 'p-honey_bottle',
    translation: 'Picked Up Honey Bottle',
  },
  {
    stat: 'p-honeycomb_block',
    translation: 'Picked Up Honeycomb Block',
  },
  {
    stat: 'p-lodestone',
    translation: 'Picked Up Lodestone',
  },
  {
    stat: 'p-crying_obsidian',
    translation: 'Picked Up Crying Obsidian',
  },
  {
    stat: 'p-blackstone',
    translation: 'Picked Up Blackstone',
  },
  {
    stat: 'p-blackstone_slab',
    translation: 'Picked Up Blackstone Slab',
  },
  {
    stat: 'p-blackstone_stairs',
    translation: 'Picked Up Blackstone Stairs',
  },
  {
    stat: 'p-gilded_blackstone',
    translation: 'Picked Up Gilded Blackstone',
  },
  {
    stat: 'p-polished_blackstone',
    translation: 'Picked Up Polished Blackstone',
  },
  {
    stat: 'p-polished_blackstone_slab',
    translation: 'Picked Up Polished Blackstone Slab',
  },
  {
    stat: 'p-polished_blackstone_stairs',
    translation: 'Picked Up Polished Blackstone Stairs',
  },
  {
    stat: 'p-chiseled_polished_blackstone',
    translation: 'Picked Up Chiseled Polished Blackstone',
  },
  {
    stat: 'p-polished_blackstone_bricks',
    translation: 'Picked Up Polished Blackstone Bricks',
  },
  {
    stat: 'p-polished_blackstone_brick_slab',
    translation: 'Picked Up Polished Blackstone Brick Slab',
  },
  {
    stat: 'p-polished_blackstone_brick_stairs',
    translation: 'Picked Up Polished Blackstone Brick Stairs',
  },
  {
    stat: 'p-cracked_polished_blackstone_bricks',
    translation: 'Picked Up Cracked Polished Blackstone Bricks',
  },
  {
    stat: 'p-respawn_anchor',
    translation: 'Picked Up Respawn Anchor',
  },
  {
    stat: 'p-candle',
    translation: 'Picked Up Candle',
  },
  {
    stat: 'p-white_candle',
    translation: 'Picked Up White Candle',
  },
  {
    stat: 'p-orange_candle',
    translation: 'Picked Up Orange Candle',
  },
  {
    stat: 'p-magenta_candle',
    translation: 'Picked Up Magenta Candle',
  },
  {
    stat: 'p-light_blue_candle',
    translation: 'Picked Up Light Blue Candle',
  },
  {
    stat: 'p-yellow_candle',
    translation: 'Picked Up Yellow Candle',
  },
  {
    stat: 'p-lime_candle',
    translation: 'Picked Up Lime Candle',
  },
  {
    stat: 'p-pink_candle',
    translation: 'Picked Up Pink Candle',
  },
  {
    stat: 'p-gray_candle',
    translation: 'Picked Up Gray Candle',
  },
  {
    stat: 'p-light_gray_candle',
    translation: 'Picked Up Light Gray Candle',
  },
  {
    stat: 'p-cyan_candle',
    translation: 'Picked Up Cyan Candle',
  },
  {
    stat: 'p-purple_candle',
    translation: 'Picked Up Purple Candle',
  },
  {
    stat: 'p-blue_candle',
    translation: 'Picked Up Blue Candle',
  },
  {
    stat: 'p-brown_candle',
    translation: 'Picked Up Brown Candle',
  },
  {
    stat: 'p-green_candle',
    translation: 'Picked Up Green Candle',
  },
  {
    stat: 'p-red_candle',
    translation: 'Picked Up Red Candle',
  },
  {
    stat: 'p-black_candle',
    translation: 'Picked Up Black Candle',
  },
  {
    stat: 'p-small_amethyst_bud',
    translation: 'Picked Up Small Amethyst Bud',
  },
  {
    stat: 'p-medium_amethyst_bud',
    translation: 'Picked Up Medium Amethyst Bud',
  },
  {
    stat: 'p-large_amethyst_bud',
    translation: 'Picked Up Large Amethyst Bud',
  },
  {
    stat: 'p-amethyst_cluster',
    translation: 'Picked Up Amethyst Cluster',
  },
  {
    stat: 'p-pointed_dripstone',
    translation: 'Picked Up Pointed Dripstone',
  },
  {
    stat: 'p-ochre_froglight',
    translation: 'Picked Up Ochre Froglight',
  },
  {
    stat: 'p-verdant_froglight',
    translation: 'Picked Up Verdant Froglight',
  },
  {
    stat: 'p-pearlescent_froglight',
    translation: 'Picked Up Pearlescent Froglight',
  },
  {
    stat: 'p-frogspawn',
    translation: 'Picked Up Frogspawn',
  },
  {
    stat: 'p-echo_shard',
    translation: 'Picked Up Echo Shard',
  },
  {
    stat: 'd-air',
    translation: 'Dropped Air',
  },
  {
    stat: 'd-stone',
    translation: 'Dropped Stone',
  },
  {
    stat: 'd-granite',
    translation: 'Dropped Granite',
  },
  {
    stat: 'd-polished_granite',
    translation: 'Dropped Polished Granite',
  },
  {
    stat: 'd-diorite',
    translation: 'Dropped Diorite',
  },
  {
    stat: 'd-polished_diorite',
    translation: 'Dropped Polished Diorite',
  },
  {
    stat: 'd-andesite',
    translation: 'Dropped Andesite',
  },
  {
    stat: 'd-polished_andesite',
    translation: 'Dropped Polished Andesite',
  },
  {
    stat: 'd-deepslate',
    translation: 'Dropped Deepslate',
  },
  {
    stat: 'd-cobbled_deepslate',
    translation: 'Dropped Cobbled Deepslate',
  },
  {
    stat: 'd-polished_deepslate',
    translation: 'Dropped Polished Deepslate',
  },
  {
    stat: 'd-calcite',
    translation: 'Dropped Calcite',
  },
  {
    stat: 'd-tuff',
    translation: 'Dropped Tuff',
  },
  {
    stat: 'd-dripstone_block',
    translation: 'Dropped Dripstone Block',
  },
  {
    stat: 'd-grass_block',
    translation: 'Dropped Grass Block',
  },
  {
    stat: 'd-dirt',
    translation: 'Dropped Dirt',
  },
  {
    stat: 'd-coarse_dirt',
    translation: 'Dropped Coarse Dirt',
  },
  {
    stat: 'd-podzol',
    translation: 'Dropped Podzol',
  },
  {
    stat: 'd-rooted_dirt',
    translation: 'Dropped Rooted Dirt',
  },
  {
    stat: 'd-mud',
    translation: 'Dropped Mud',
  },
  {
    stat: 'd-crimson_nylium',
    translation: 'Dropped Crimson Nylium',
  },
  {
    stat: 'd-warped_nylium',
    translation: 'Dropped Warped Nylium',
  },
  {
    stat: 'd-cobblestone',
    translation: 'Dropped Cobblestone',
  },
  {
    stat: 'd-oak_planks',
    translation: 'Dropped Oak Planks',
  },
  {
    stat: 'd-spruce_planks',
    translation: 'Dropped Spruce Planks',
  },
  {
    stat: 'd-birch_planks',
    translation: 'Dropped Birch Planks',
  },
  {
    stat: 'd-jungle_planks',
    translation: 'Dropped Jungle Planks',
  },
  {
    stat: 'd-acacia_planks',
    translation: 'Dropped Acacia Planks',
  },
  {
    stat: 'd-dark_oak_planks',
    translation: 'Dropped Dark Oak Planks',
  },
  {
    stat: 'd-mangrove_planks',
    translation: 'Dropped Mangrove Planks',
  },
  {
    stat: 'd-crimson_planks',
    translation: 'Dropped Crimson Planks',
  },
  {
    stat: 'd-warped_planks',
    translation: 'Dropped Warped Planks',
  },
  {
    stat: 'd-oak_sapling',
    translation: 'Dropped Oak Sapling',
  },
  {
    stat: 'd-spruce_sapling',
    translation: 'Dropped Spruce Sapling',
  },
  {
    stat: 'd-birch_sapling',
    translation: 'Dropped Birch Sapling',
  },
  {
    stat: 'd-jungle_sapling',
    translation: 'Dropped Jungle Sapling',
  },
  {
    stat: 'd-acacia_sapling',
    translation: 'Dropped Acacia Sapling',
  },
  {
    stat: 'd-dark_oak_sapling',
    translation: 'Dropped Dark Oak Sapling',
  },
  {
    stat: 'd-mangrove_propagule',
    translation: 'Dropped Mangrove Propagule',
  },
  {
    stat: 'd-bedrock',
    translation: 'Dropped Bedrock',
  },
  {
    stat: 'd-sand',
    translation: 'Dropped Sand',
  },
  {
    stat: 'd-red_sand',
    translation: 'Dropped Red Sand',
  },
  {
    stat: 'd-gravel',
    translation: 'Dropped Gravel',
  },
  {
    stat: 'd-coal_ore',
    translation: 'Dropped Coal Ore',
  },
  {
    stat: 'd-deepslate_coal_ore',
    translation: 'Dropped Deepslate Coal Ore',
  },
  {
    stat: 'd-iron_ore',
    translation: 'Dropped Iron Ore',
  },
  {
    stat: 'd-deepslate_iron_ore',
    translation: 'Dropped Deepslate Iron Ore',
  },
  {
    stat: 'd-copper_ore',
    translation: 'Dropped Copper Ore',
  },
  {
    stat: 'd-deepslate_copper_ore',
    translation: 'Dropped Deepslate Copper Ore',
  },
  {
    stat: 'd-gold_ore',
    translation: 'Dropped Gold Ore',
  },
  {
    stat: 'd-deepslate_gold_ore',
    translation: 'Dropped Deepslate Gold Ore',
  },
  {
    stat: 'd-redstone_ore',
    translation: 'Dropped Redstone Ore',
  },
  {
    stat: 'd-deepslate_redstone_ore',
    translation: 'Dropped Deepslate Redstone Ore',
  },
  {
    stat: 'd-emerald_ore',
    translation: 'Dropped Emerald Ore',
  },
  {
    stat: 'd-deepslate_emerald_ore',
    translation: 'Dropped Deepslate Emerald Ore',
  },
  {
    stat: 'd-lapis_ore',
    translation: 'Dropped Lapis Lazuli Ore',
  },
  {
    stat: 'd-deepslate_lapis_ore',
    translation: 'Dropped Deepslate Lapis Lazuli Ore',
  },
  {
    stat: 'd-diamond_ore',
    translation: 'Dropped Diamond Ore',
  },
  {
    stat: 'd-deepslate_diamond_ore',
    translation: 'Dropped Deepslate Diamond Ore',
  },
  {
    stat: 'd-nether_gold_ore',
    translation: 'Dropped Nether Gold Ore',
  },
  {
    stat: 'd-nether_quartz_ore',
    translation: 'Dropped Nether Quartz Ore',
  },
  {
    stat: 'd-ancient_debris',
    translation: 'Dropped Ancient Debris',
  },
  {
    stat: 'd-coal_block',
    translation: 'Dropped Block of Coal',
  },
  {
    stat: 'd-raw_iron_block',
    translation: 'Dropped Block of Raw Iron',
  },
  {
    stat: 'd-raw_copper_block',
    translation: 'Dropped Block of Raw Copper',
  },
  {
    stat: 'd-raw_gold_block',
    translation: 'Dropped Block of Raw Gold',
  },
  {
    stat: 'd-amethyst_block',
    translation: 'Dropped Block of Amethyst',
  },
  {
    stat: 'd-budding_amethyst',
    translation: 'Dropped Budding Amethyst',
  },
  {
    stat: 'd-iron_block',
    translation: 'Dropped Block of Iron',
  },
  {
    stat: 'd-copper_block',
    translation: 'Dropped Block of Copper',
  },
  {
    stat: 'd-gold_block',
    translation: 'Dropped Block of Gold',
  },
  {
    stat: 'd-diamond_block',
    translation: 'Dropped Block of Diamond',
  },
  {
    stat: 'd-netherite_block',
    translation: 'Dropped Block of Netherite',
  },
  {
    stat: 'd-exposed_copper',
    translation: 'Dropped Exposed Copper',
  },
  {
    stat: 'd-weathered_copper',
    translation: 'Dropped Weathered Copper',
  },
  {
    stat: 'd-oxidized_copper',
    translation: 'Dropped Oxidized Copper',
  },
  {
    stat: 'd-cut_copper',
    translation: 'Dropped Cut Copper',
  },
  {
    stat: 'd-exposed_cut_copper',
    translation: 'Dropped Exposed Cut Copper',
  },
  {
    stat: 'd-weathered_cut_copper',
    translation: 'Dropped Weathered Cut Copper',
  },
  {
    stat: 'd-oxidized_cut_copper',
    translation: 'Dropped Oxidized Cut Copper',
  },
  {
    stat: 'd-cut_copper_stairs',
    translation: 'Dropped Cut Copper Stairs',
  },
  {
    stat: 'd-exposed_cut_copper_stairs',
    translation: 'Dropped Exposed Cut Copper Stairs',
  },
  {
    stat: 'd-weathered_cut_copper_stairs',
    translation: 'Dropped Weathered Cut Copper Stairs',
  },
  {
    stat: 'd-oxidized_cut_copper_stairs',
    translation: 'Dropped Oxidized Cut Copper Stairs',
  },
  {
    stat: 'd-cut_copper_slab',
    translation: 'Dropped Cut Copper Slab',
  },
  {
    stat: 'd-exposed_cut_copper_slab',
    translation: 'Dropped Exposed Cut Copper Slab',
  },
  {
    stat: 'd-weathered_cut_copper_slab',
    translation: 'Dropped Weathered Cut Copper Slab',
  },
  {
    stat: 'd-oxidized_cut_copper_slab',
    translation: 'Dropped Oxidized Cut Copper Slab',
  },
  {
    stat: 'd-waxed_copper_block',
    translation: 'Dropped Waxed Block of Copper',
  },
  {
    stat: 'd-waxed_exposed_copper',
    translation: 'Dropped Waxed Exposed Copper',
  },
  {
    stat: 'd-waxed_weathered_copper',
    translation: 'Dropped Waxed Weathered Copper',
  },
  {
    stat: 'd-waxed_oxidized_copper',
    translation: 'Dropped Waxed Oxidized Copper',
  },
  {
    stat: 'd-waxed_cut_copper',
    translation: 'Dropped Waxed Cut Copper',
  },
  {
    stat: 'd-waxed_exposed_cut_copper',
    translation: 'Dropped Waxed Exposed Cut Copper',
  },
  {
    stat: 'd-waxed_weathered_cut_copper',
    translation: 'Dropped Waxed Weathered Cut Copper',
  },
  {
    stat: 'd-waxed_oxidized_cut_copper',
    translation: 'Dropped Waxed Oxidized Cut Copper',
  },
  {
    stat: 'd-waxed_cut_copper_stairs',
    translation: 'Dropped Waxed Cut Copper Stairs',
  },
  {
    stat: 'd-waxed_exposed_cut_copper_stairs',
    translation: 'Dropped Waxed Exposed Cut Copper Stairs',
  },
  {
    stat: 'd-waxed_weathered_cut_copper_stairs',
    translation: 'Dropped Waxed Weathered Cut Copper Stairs',
  },
  {
    stat: 'd-waxed_oxidized_cut_copper_stairs',
    translation: 'Dropped Waxed Oxidized Cut Copper Stairs',
  },
  {
    stat: 'd-waxed_cut_copper_slab',
    translation: 'Dropped Waxed Cut Copper Slab',
  },
  {
    stat: 'd-waxed_exposed_cut_copper_slab',
    translation: 'Dropped Waxed Exposed Cut Copper Slab',
  },
  {
    stat: 'd-waxed_weathered_cut_copper_slab',
    translation: 'Dropped Waxed Weathered Cut Copper Slab',
  },
  {
    stat: 'd-waxed_oxidized_cut_copper_slab',
    translation: 'Dropped Waxed Oxidized Cut Copper Slab',
  },
  {
    stat: 'd-oak_log',
    translation: 'Dropped Oak Log',
  },
  {
    stat: 'd-spruce_log',
    translation: 'Dropped Spruce Log',
  },
  {
    stat: 'd-birch_log',
    translation: 'Dropped Birch Log',
  },
  {
    stat: 'd-jungle_log',
    translation: 'Dropped Jungle Log',
  },
  {
    stat: 'd-acacia_log',
    translation: 'Dropped Acacia Log',
  },
  {
    stat: 'd-dark_oak_log',
    translation: 'Dropped Dark Oak Log',
  },
  {
    stat: 'd-mangrove_log',
    translation: 'Dropped Mangrove Log',
  },
  {
    stat: 'd-mangrove_roots',
    translation: 'Dropped Mangrove Roots',
  },
  {
    stat: 'd-muddy_mangrove_roots',
    translation: 'Dropped Muddy Mangrove Roots',
  },
  {
    stat: 'd-crimson_stem',
    translation: 'Dropped Crimson Stem',
  },
  {
    stat: 'd-warped_stem',
    translation: 'Dropped Warped Stem',
  },
  {
    stat: 'd-stripped_oak_log',
    translation: 'Dropped Stripped Oak Log',
  },
  {
    stat: 'd-stripped_spruce_log',
    translation: 'Dropped Stripped Spruce Log',
  },
  {
    stat: 'd-stripped_birch_log',
    translation: 'Dropped Stripped Birch Log',
  },
  {
    stat: 'd-stripped_jungle_log',
    translation: 'Dropped Stripped Jungle Log',
  },
  {
    stat: 'd-stripped_acacia_log',
    translation: 'Dropped Stripped Acacia Log',
  },
  {
    stat: 'd-stripped_dark_oak_log',
    translation: 'Dropped Stripped Dark Oak Log',
  },
  {
    stat: 'd-stripped_mangrove_log',
    translation: 'Dropped Stripped Mangrove Log',
  },
  {
    stat: 'd-stripped_crimson_stem',
    translation: 'Dropped Stripped Crimson Stem',
  },
  {
    stat: 'd-stripped_warped_stem',
    translation: 'Dropped Stripped Warped Stem',
  },
  {
    stat: 'd-stripped_oak_wood',
    translation: 'Dropped Stripped Oak Wood',
  },
  {
    stat: 'd-stripped_spruce_wood',
    translation: 'Dropped Stripped Spruce Wood',
  },
  {
    stat: 'd-stripped_birch_wood',
    translation: 'Dropped Stripped Birch Wood',
  },
  {
    stat: 'd-stripped_jungle_wood',
    translation: 'Dropped Stripped Jungle Wood',
  },
  {
    stat: 'd-stripped_acacia_wood',
    translation: 'Dropped Stripped Acacia Wood',
  },
  {
    stat: 'd-stripped_dark_oak_wood',
    translation: 'Dropped Stripped Dark Oak Wood',
  },
  {
    stat: 'd-stripped_mangrove_wood',
    translation: 'Dropped Stripped Mangrove Wood',
  },
  {
    stat: 'd-stripped_crimson_hyphae',
    translation: 'Dropped Stripped Crimson Hyphae',
  },
  {
    stat: 'd-stripped_warped_hyphae',
    translation: 'Dropped Stripped Warped Hyphae',
  },
  {
    stat: 'd-oak_wood',
    translation: 'Dropped Oak Wood',
  },
  {
    stat: 'd-spruce_wood',
    translation: 'Dropped Spruce Wood',
  },
  {
    stat: 'd-birch_wood',
    translation: 'Dropped Birch Wood',
  },
  {
    stat: 'd-jungle_wood',
    translation: 'Dropped Jungle Wood',
  },
  {
    stat: 'd-acacia_wood',
    translation: 'Dropped Acacia Wood',
  },
  {
    stat: 'd-dark_oak_wood',
    translation: 'Dropped Dark Oak Wood',
  },
  {
    stat: 'd-mangrove_wood',
    translation: 'Dropped Mangrove Wood',
  },
  {
    stat: 'd-crimson_hyphae',
    translation: 'Dropped Crimson Hyphae',
  },
  {
    stat: 'd-warped_hyphae',
    translation: 'Dropped Warped Hyphae',
  },
  {
    stat: 'd-oak_leaves',
    translation: 'Dropped Oak Leaves',
  },
  {
    stat: 'd-spruce_leaves',
    translation: 'Dropped Spruce Leaves',
  },
  {
    stat: 'd-birch_leaves',
    translation: 'Dropped Birch Leaves',
  },
  {
    stat: 'd-jungle_leaves',
    translation: 'Dropped Jungle Leaves',
  },
  {
    stat: 'd-acacia_leaves',
    translation: 'Dropped Acacia Leaves',
  },
  {
    stat: 'd-dark_oak_leaves',
    translation: 'Dropped Dark Oak Leaves',
  },
  {
    stat: 'd-mangrove_leaves',
    translation: 'Dropped Mangrove Leaves',
  },
  {
    stat: 'd-azalea_leaves',
    translation: 'Dropped Azalea Leaves',
  },
  {
    stat: 'd-flowering_azalea_leaves',
    translation: 'Dropped Flowering Azalea Leaves',
  },
  {
    stat: 'd-sponge',
    translation: 'Dropped Sponge',
  },
  {
    stat: 'd-wet_sponge',
    translation: 'Dropped Wet Sponge',
  },
  {
    stat: 'd-glass',
    translation: 'Dropped Glass',
  },
  {
    stat: 'd-tinted_glass',
    translation: 'Dropped Tinted Glass',
  },
  {
    stat: 'd-lapis_block',
    translation: 'Dropped Block of Lapis Lazuli',
  },
  {
    stat: 'd-sandstone',
    translation: 'Dropped Sandstone',
  },
  {
    stat: 'd-chiseled_sandstone',
    translation: 'Dropped Chiseled Sandstone',
  },
  {
    stat: 'd-cut_sandstone',
    translation: 'Dropped Cut Sandstone',
  },
  {
    stat: 'd-cobweb',
    translation: 'Dropped Cobweb',
  },
  {
    stat: 'd-grass',
    translation: 'Dropped Grass',
  },
  {
    stat: 'd-fern',
    translation: 'Dropped Fern',
  },
  {
    stat: 'd-azalea',
    translation: 'Dropped Azalea',
  },
  {
    stat: 'd-flowering_azalea',
    translation: 'Dropped Flowering Azalea',
  },
  {
    stat: 'd-dead_bush',
    translation: 'Dropped Dead Bush',
  },
  {
    stat: 'd-seagrass',
    translation: 'Dropped Seagrass',
  },
  {
    stat: 'd-sea_pickle',
    translation: 'Dropped Sea Pickle',
  },
  {
    stat: 'd-white_wool',
    translation: 'Dropped White Wool',
  },
  {
    stat: 'd-orange_wool',
    translation: 'Dropped Orange Wool',
  },
  {
    stat: 'd-magenta_wool',
    translation: 'Dropped Magenta Wool',
  },
  {
    stat: 'd-light_blue_wool',
    translation: 'Dropped Light Blue Wool',
  },
  {
    stat: 'd-yellow_wool',
    translation: 'Dropped Yellow Wool',
  },
  {
    stat: 'd-lime_wool',
    translation: 'Dropped Lime Wool',
  },
  {
    stat: 'd-pink_wool',
    translation: 'Dropped Pink Wool',
  },
  {
    stat: 'd-gray_wool',
    translation: 'Dropped Gray Wool',
  },
  {
    stat: 'd-light_gray_wool',
    translation: 'Dropped Light Gray Wool',
  },
  {
    stat: 'd-cyan_wool',
    translation: 'Dropped Cyan Wool',
  },
  {
    stat: 'd-purple_wool',
    translation: 'Dropped Purple Wool',
  },
  {
    stat: 'd-blue_wool',
    translation: 'Dropped Blue Wool',
  },
  {
    stat: 'd-brown_wool',
    translation: 'Dropped Brown Wool',
  },
  {
    stat: 'd-green_wool',
    translation: 'Dropped Green Wool',
  },
  {
    stat: 'd-red_wool',
    translation: 'Dropped Red Wool',
  },
  {
    stat: 'd-black_wool',
    translation: 'Dropped Black Wool',
  },
  {
    stat: 'd-dandelion',
    translation: 'Dropped Dandelion',
  },
  {
    stat: 'd-poppy',
    translation: 'Dropped Poppy',
  },
  {
    stat: 'd-blue_orchid',
    translation: 'Dropped Blue Orchid',
  },
  {
    stat: 'd-allium',
    translation: 'Dropped Allium',
  },
  {
    stat: 'd-azure_bluet',
    translation: 'Dropped Azure Bluet',
  },
  {
    stat: 'd-red_tulip',
    translation: 'Dropped Red Tulip',
  },
  {
    stat: 'd-orange_tulip',
    translation: 'Dropped Orange Tulip',
  },
  {
    stat: 'd-white_tulip',
    translation: 'Dropped White Tulip',
  },
  {
    stat: 'd-pink_tulip',
    translation: 'Dropped Pink Tulip',
  },
  {
    stat: 'd-oxeye_daisy',
    translation: 'Dropped Oxeye Daisy',
  },
  {
    stat: 'd-cornflower',
    translation: 'Dropped Cornflower',
  },
  {
    stat: 'd-lily_of_the_valley',
    translation: 'Dropped Lily of the Valley',
  },
  {
    stat: 'd-wither_rose',
    translation: 'Dropped Wither Rose',
  },
  {
    stat: 'd-spore_blossom',
    translation: 'Dropped Spore Blossom',
  },
  {
    stat: 'd-brown_mushroom',
    translation: 'Dropped Brown Mushroom',
  },
  {
    stat: 'd-red_mushroom',
    translation: 'Dropped Red Mushroom',
  },
  {
    stat: 'd-crimson_fungus',
    translation: 'Dropped Crimson Fungus',
  },
  {
    stat: 'd-warped_fungus',
    translation: 'Dropped Warped Fungus',
  },
  {
    stat: 'd-crimson_roots',
    translation: 'Dropped Crimson Roots',
  },
  {
    stat: 'd-warped_roots',
    translation: 'Dropped Warped Roots',
  },
  {
    stat: 'd-nether_sprouts',
    translation: 'Dropped Nether Sprouts',
  },
  {
    stat: 'd-weeping_vines',
    translation: 'Dropped Weeping Vines',
  },
  {
    stat: 'd-twisting_vines',
    translation: 'Dropped Twisting Vines',
  },
  {
    stat: 'd-sugar_cane',
    translation: 'Dropped Sugar Cane',
  },
  {
    stat: 'd-kelp',
    translation: 'Dropped Kelp',
  },
  {
    stat: 'd-moss_carpet',
    translation: 'Dropped Moss Carpet',
  },
  {
    stat: 'd-moss_block',
    translation: 'Dropped Moss Block',
  },
  {
    stat: 'd-hanging_roots',
    translation: 'Dropped Hanging Roots',
  },
  {
    stat: 'd-big_dripleaf',
    translation: 'Dropped Big Dripleaf',
  },
  {
    stat: 'd-small_dripleaf',
    translation: 'Dropped Small Dripleaf',
  },
  {
    stat: 'd-bamboo',
    translation: 'Dropped Bamboo',
  },
  {
    stat: 'd-oak_slab',
    translation: 'Dropped Oak Slab',
  },
  {
    stat: 'd-spruce_slab',
    translation: 'Dropped Spruce Slab',
  },
  {
    stat: 'd-birch_slab',
    translation: 'Dropped Birch Slab',
  },
  {
    stat: 'd-jungle_slab',
    translation: 'Dropped Jungle Slab',
  },
  {
    stat: 'd-acacia_slab',
    translation: 'Dropped Acacia Slab',
  },
  {
    stat: 'd-dark_oak_slab',
    translation: 'Dropped Dark Oak Slab',
  },
  {
    stat: 'd-mangrove_slab',
    translation: 'Dropped Mangrove Slab',
  },
  {
    stat: 'd-crimson_slab',
    translation: 'Dropped Crimson Slab',
  },
  {
    stat: 'd-warped_slab',
    translation: 'Dropped Warped Slab',
  },
  {
    stat: 'd-stone_slab',
    translation: 'Dropped Stone Slab',
  },
  {
    stat: 'd-smooth_stone_slab',
    translation: 'Dropped Smooth Stone Slab',
  },
  {
    stat: 'd-sandstone_slab',
    translation: 'Dropped Sandstone Slab',
  },
  {
    stat: 'd-cut_sandstone_slab',
    translation: 'Dropped Cut Sandstone Slab',
  },
  {
    stat: 'd-petrified_oak_slab',
    translation: 'Dropped Petrified Oak Slab',
  },
  {
    stat: 'd-cobblestone_slab',
    translation: 'Dropped Cobblestone Slab',
  },
  {
    stat: 'd-brick_slab',
    translation: 'Dropped Brick Slab',
  },
  {
    stat: 'd-stone_brick_slab',
    translation: 'Dropped Stone Brick Slab',
  },
  {
    stat: 'd-mud_brick_slab',
    translation: 'Dropped Mud Brick Slab',
  },
  {
    stat: 'd-nether_brick_slab',
    translation: 'Dropped Nether Brick Slab',
  },
  {
    stat: 'd-quartz_slab',
    translation: 'Dropped Quartz Slab',
  },
  {
    stat: 'd-red_sandstone_slab',
    translation: 'Dropped Red Sandstone Slab',
  },
  {
    stat: 'd-cut_red_sandstone_slab',
    translation: 'Dropped Cut Red Sandstone Slab',
  },
  {
    stat: 'd-purpur_slab',
    translation: 'Dropped Purpur Slab',
  },
  {
    stat: 'd-prismarine_slab',
    translation: 'Dropped Prismarine Slab',
  },
  {
    stat: 'd-prismarine_brick_slab',
    translation: 'Dropped Prismarine Brick Slab',
  },
  {
    stat: 'd-dark_prismarine_slab',
    translation: 'Dropped Dark Prismarine Slab',
  },
  {
    stat: 'd-smooth_quartz',
    translation: 'Dropped Smooth Quartz Block',
  },
  {
    stat: 'd-smooth_red_sandstone',
    translation: 'Dropped Smooth Red Sandstone',
  },
  {
    stat: 'd-smooth_sandstone',
    translation: 'Dropped Smooth Sandstone',
  },
  {
    stat: 'd-smooth_stone',
    translation: 'Dropped Smooth Stone',
  },
  {
    stat: 'd-bricks',
    translation: 'Dropped Bricks',
  },
  {
    stat: 'd-bookshelf',
    translation: 'Dropped Bookshelf',
  },
  {
    stat: 'd-mossy_cobblestone',
    translation: 'Dropped Mossy Cobblestone',
  },
  {
    stat: 'd-obsidian',
    translation: 'Dropped Obsidian',
  },
  {
    stat: 'd-torch',
    translation: 'Dropped Torch',
  },
  {
    stat: 'd-end_rod',
    translation: 'Dropped End Rod',
  },
  {
    stat: 'd-chorus_plant',
    translation: 'Dropped Chorus Plant',
  },
  {
    stat: 'd-chorus_flower',
    translation: 'Dropped Chorus Flower',
  },
  {
    stat: 'd-purpur_block',
    translation: 'Dropped Purpur Block',
  },
  {
    stat: 'd-purpur_pillar',
    translation: 'Dropped Purpur Pillar',
  },
  {
    stat: 'd-purpur_stairs',
    translation: 'Dropped Purpur Stairs',
  },
  {
    stat: 'd-spawner',
    translation: 'Dropped Spawner',
  },
  {
    stat: 'd-chest',
    translation: 'Dropped Chest',
  },
  {
    stat: 'd-crafting_table',
    translation: 'Dropped Crafting Table',
  },
  {
    stat: 'd-farmland',
    translation: 'Dropped Farmland',
  },
  {
    stat: 'd-furnace',
    translation: 'Dropped Furnace',
  },
  {
    stat: 'd-ladder',
    translation: 'Dropped Ladder',
  },
  {
    stat: 'd-cobblestone_stairs',
    translation: 'Dropped Cobblestone Stairs',
  },
  {
    stat: 'd-snow',
    translation: 'Dropped Snow',
  },
  {
    stat: 'd-ice',
    translation: 'Dropped Ice',
  },
  {
    stat: 'd-snow_block',
    translation: 'Dropped Snow Block',
  },
  {
    stat: 'd-cactus',
    translation: 'Dropped Cactus',
  },
  {
    stat: 'd-clay',
    translation: 'Dropped Clay',
  },
  {
    stat: 'd-jukebox',
    translation: 'Dropped Jukebox',
  },
  {
    stat: 'd-oak_fence',
    translation: 'Dropped Oak Fence',
  },
  {
    stat: 'd-spruce_fence',
    translation: 'Dropped Spruce Fence',
  },
  {
    stat: 'd-birch_fence',
    translation: 'Dropped Birch Fence',
  },
  {
    stat: 'd-jungle_fence',
    translation: 'Dropped Jungle Fence',
  },
  {
    stat: 'd-acacia_fence',
    translation: 'Dropped Acacia Fence',
  },
  {
    stat: 'd-dark_oak_fence',
    translation: 'Dropped Dark Oak Fence',
  },
  {
    stat: 'd-mangrove_fence',
    translation: 'Dropped Mangrove Fence',
  },
  {
    stat: 'd-crimson_fence',
    translation: 'Dropped Crimson Fence',
  },
  {
    stat: 'd-warped_fence',
    translation: 'Dropped Warped Fence',
  },
  {
    stat: 'd-pumpkin',
    translation: 'Dropped Pumpkin',
  },
  {
    stat: 'd-carved_pumpkin',
    translation: 'Dropped Carved Pumpkin',
  },
  {
    stat: 'd-jack_o_lantern',
    translation: "Dropped Jack o'Lantern",
  },
  {
    stat: 'd-netherrack',
    translation: 'Dropped Netherrack',
  },
  {
    stat: 'd-soul_sand',
    translation: 'Dropped Soul Sand',
  },
  {
    stat: 'd-soul_soil',
    translation: 'Dropped Soul Soil',
  },
  {
    stat: 'd-basalt',
    translation: 'Dropped Basalt',
  },
  {
    stat: 'd-polished_basalt',
    translation: 'Dropped Polished Basalt',
  },
  {
    stat: 'd-smooth_basalt',
    translation: 'Dropped Smooth Basalt',
  },
  {
    stat: 'd-soul_torch',
    translation: 'Dropped Soul Torch',
  },
  {
    stat: 'd-glowstone',
    translation: 'Dropped Glowstone',
  },
  {
    stat: 'd-infested_stone',
    translation: 'Dropped Infested Stone',
  },
  {
    stat: 'd-infested_cobblestone',
    translation: 'Dropped Infested Cobblestone',
  },
  {
    stat: 'd-infested_stone_bricks',
    translation: 'Dropped Infested Stone Bricks',
  },
  {
    stat: 'd-infested_mossy_stone_bricks',
    translation: 'Dropped Infested Mossy Stone Bricks',
  },
  {
    stat: 'd-infested_cracked_stone_bricks',
    translation: 'Dropped Infested Cracked Stone Bricks',
  },
  {
    stat: 'd-infested_chiseled_stone_bricks',
    translation: 'Dropped Infested Chiseled Stone Bricks',
  },
  {
    stat: 'd-infested_deepslate',
    translation: 'Dropped Infested Deepslate',
  },
  {
    stat: 'd-stone_bricks',
    translation: 'Dropped Stone Bricks',
  },
  {
    stat: 'd-mossy_stone_bricks',
    translation: 'Dropped Mossy Stone Bricks',
  },
  {
    stat: 'd-cracked_stone_bricks',
    translation: 'Dropped Cracked Stone Bricks',
  },
  {
    stat: 'd-chiseled_stone_bricks',
    translation: 'Dropped Chiseled Stone Bricks',
  },
  {
    stat: 'd-packed_mud',
    translation: 'Dropped Packed Mud',
  },
  {
    stat: 'd-mud_bricks',
    translation: 'Dropped Mud Bricks',
  },
  {
    stat: 'd-deepslate_bricks',
    translation: 'Dropped Deepslate Bricks',
  },
  {
    stat: 'd-cracked_deepslate_bricks',
    translation: 'Dropped Cracked Deepslate Bricks',
  },
  {
    stat: 'd-deepslate_tiles',
    translation: 'Dropped Deepslate Tiles',
  },
  {
    stat: 'd-cracked_deepslate_tiles',
    translation: 'Dropped Cracked Deepslate Tiles',
  },
  {
    stat: 'd-chiseled_deepslate',
    translation: 'Dropped Chiseled Deepslate',
  },
  {
    stat: 'd-reinforced_deepslate',
    translation: 'Dropped Reinforced Deepslate',
  },
  {
    stat: 'd-brown_mushroom_block',
    translation: 'Dropped Brown Mushroom Block',
  },
  {
    stat: 'd-red_mushroom_block',
    translation: 'Dropped Red Mushroom Block',
  },
  {
    stat: 'd-mushroom_stem',
    translation: 'Dropped Mushroom Stem',
  },
  {
    stat: 'd-iron_bars',
    translation: 'Dropped Iron Bars',
  },
  {
    stat: 'd-chain',
    translation: 'Dropped Chain',
  },
  {
    stat: 'd-glass_pane',
    translation: 'Dropped Glass Pane',
  },
  {
    stat: 'd-melon',
    translation: 'Dropped Melon',
  },
  {
    stat: 'd-vine',
    translation: 'Dropped Vines',
  },
  {
    stat: 'd-glow_lichen',
    translation: 'Dropped Glow Lichen',
  },
  {
    stat: 'd-brick_stairs',
    translation: 'Dropped Brick Stairs',
  },
  {
    stat: 'd-stone_brick_stairs',
    translation: 'Dropped Stone Brick Stairs',
  },
  {
    stat: 'd-mud_brick_stairs',
    translation: 'Dropped Mud Brick Stairs',
  },
  {
    stat: 'd-mycelium',
    translation: 'Dropped Mycelium',
  },
  {
    stat: 'd-lily_pad',
    translation: 'Dropped Lily Pad',
  },
  {
    stat: 'd-nether_bricks',
    translation: 'Dropped Nether Bricks',
  },
  {
    stat: 'd-cracked_nether_bricks',
    translation: 'Dropped Cracked Nether Bricks',
  },
  {
    stat: 'd-chiseled_nether_bricks',
    translation: 'Dropped Chiseled Nether Bricks',
  },
  {
    stat: 'd-nether_brick_fence',
    translation: 'Dropped Nether Brick Fence',
  },
  {
    stat: 'd-nether_brick_stairs',
    translation: 'Dropped Nether Brick Stairs',
  },
  {
    stat: 'd-sculk',
    translation: 'Dropped Sculk',
  },
  {
    stat: 'd-sculk_vein',
    translation: 'Dropped Sculk Vein',
  },
  {
    stat: 'd-sculk_catalyst',
    translation: 'Dropped Sculk Catalyst',
  },
  {
    stat: 'd-sculk_shrieker',
    translation: 'Dropped Sculk Shrieker',
  },
  {
    stat: 'd-enchanting_table',
    translation: 'Dropped Enchanting Table',
  },
  {
    stat: 'd-end_portal_frame',
    translation: 'Dropped End Portal Frame',
  },
  {
    stat: 'd-end_stone',
    translation: 'Dropped End Stone',
  },
  {
    stat: 'd-end_stone_bricks',
    translation: 'Dropped End Stone Bricks',
  },
  {
    stat: 'd-dragon_egg',
    translation: 'Dropped Dragon Egg',
  },
  {
    stat: 'd-sandstone_stairs',
    translation: 'Dropped Sandstone Stairs',
  },
  {
    stat: 'd-ender_chest',
    translation: 'Dropped Ender Chest',
  },
  {
    stat: 'd-emerald_block',
    translation: 'Dropped Block of Emerald',
  },
  {
    stat: 'd-oak_stairs',
    translation: 'Dropped Oak Stairs',
  },
  {
    stat: 'd-spruce_stairs',
    translation: 'Dropped Spruce Stairs',
  },
  {
    stat: 'd-birch_stairs',
    translation: 'Dropped Birch Stairs',
  },
  {
    stat: 'd-jungle_stairs',
    translation: 'Dropped Jungle Stairs',
  },
  {
    stat: 'd-acacia_stairs',
    translation: 'Dropped Acacia Stairs',
  },
  {
    stat: 'd-dark_oak_stairs',
    translation: 'Dropped Dark Oak Stairs',
  },
  {
    stat: 'd-mangrove_stairs',
    translation: 'Dropped Mangrove Stairs',
  },
  {
    stat: 'd-crimson_stairs',
    translation: 'Dropped Crimson Stairs',
  },
  {
    stat: 'd-warped_stairs',
    translation: 'Dropped Warped Stairs',
  },
  {
    stat: 'd-command_block',
    translation: 'Dropped Command Block',
  },
  {
    stat: 'd-beacon',
    translation: 'Dropped Beacon',
  },
  {
    stat: 'd-cobblestone_wall',
    translation: 'Dropped Cobblestone Wall',
  },
  {
    stat: 'd-mossy_cobblestone_wall',
    translation: 'Dropped Mossy Cobblestone Wall',
  },
  {
    stat: 'd-brick_wall',
    translation: 'Dropped Brick Wall',
  },
  {
    stat: 'd-prismarine_wall',
    translation: 'Dropped Prismarine Wall',
  },
  {
    stat: 'd-red_sandstone_wall',
    translation: 'Dropped Red Sandstone Wall',
  },
  {
    stat: 'd-mossy_stone_brick_wall',
    translation: 'Dropped Mossy Stone Brick Wall',
  },
  {
    stat: 'd-granite_wall',
    translation: 'Dropped Granite Wall',
  },
  {
    stat: 'd-stone_brick_wall',
    translation: 'Dropped Stone Brick Wall',
  },
  {
    stat: 'd-mud_brick_wall',
    translation: 'Dropped Mud Brick Wall',
  },
  {
    stat: 'd-nether_brick_wall',
    translation: 'Dropped Nether Brick Wall',
  },
  {
    stat: 'd-andesite_wall',
    translation: 'Dropped Andesite Wall',
  },
  {
    stat: 'd-red_nether_brick_wall',
    translation: 'Dropped Red Nether Brick Wall',
  },
  {
    stat: 'd-sandstone_wall',
    translation: 'Dropped Sandstone Wall',
  },
  {
    stat: 'd-end_stone_brick_wall',
    translation: 'Dropped End Stone Brick Wall',
  },
  {
    stat: 'd-diorite_wall',
    translation: 'Dropped Diorite Wall',
  },
  {
    stat: 'd-blackstone_wall',
    translation: 'Dropped Blackstone Wall',
  },
  {
    stat: 'd-polished_blackstone_wall',
    translation: 'Dropped Polished Blackstone Wall',
  },
  {
    stat: 'd-polished_blackstone_brick_wall',
    translation: 'Dropped Polished Blackstone Brick Wall',
  },
  {
    stat: 'd-cobbled_deepslate_wall',
    translation: 'Dropped Cobbled Deepslate Wall',
  },
  {
    stat: 'd-polished_deepslate_wall',
    translation: 'Dropped Polished Deepslate Wall',
  },
  {
    stat: 'd-deepslate_brick_wall',
    translation: 'Dropped Deepslate Brick Wall',
  },
  {
    stat: 'd-deepslate_tile_wall',
    translation: 'Dropped Deepslate Tile Wall',
  },
  {
    stat: 'd-anvil',
    translation: 'Dropped Anvil',
  },
  {
    stat: 'd-chipped_anvil',
    translation: 'Dropped Chipped Anvil',
  },
  {
    stat: 'd-damaged_anvil',
    translation: 'Dropped Damaged Anvil',
  },
  {
    stat: 'd-chiseled_quartz_block',
    translation: 'Dropped Chiseled Quartz Block',
  },
  {
    stat: 'd-quartz_block',
    translation: 'Dropped Block of Quartz',
  },
  {
    stat: 'd-quartz_bricks',
    translation: 'Dropped Quartz Bricks',
  },
  {
    stat: 'd-quartz_pillar',
    translation: 'Dropped Quartz Pillar',
  },
  {
    stat: 'd-quartz_stairs',
    translation: 'Dropped Quartz Stairs',
  },
  {
    stat: 'd-white_terracotta',
    translation: 'Dropped White Terracotta',
  },
  {
    stat: 'd-orange_terracotta',
    translation: 'Dropped Orange Terracotta',
  },
  {
    stat: 'd-magenta_terracotta',
    translation: 'Dropped Magenta Terracotta',
  },
  {
    stat: 'd-light_blue_terracotta',
    translation: 'Dropped Light Blue Terracotta',
  },
  {
    stat: 'd-yellow_terracotta',
    translation: 'Dropped Yellow Terracotta',
  },
  {
    stat: 'd-lime_terracotta',
    translation: 'Dropped Lime Terracotta',
  },
  {
    stat: 'd-pink_terracotta',
    translation: 'Dropped Pink Terracotta',
  },
  {
    stat: 'd-gray_terracotta',
    translation: 'Dropped Gray Terracotta',
  },
  {
    stat: 'd-light_gray_terracotta',
    translation: 'Dropped Light Gray Terracotta',
  },
  {
    stat: 'd-cyan_terracotta',
    translation: 'Dropped Cyan Terracotta',
  },
  {
    stat: 'd-purple_terracotta',
    translation: 'Dropped Purple Terracotta',
  },
  {
    stat: 'd-blue_terracotta',
    translation: 'Dropped Blue Terracotta',
  },
  {
    stat: 'd-brown_terracotta',
    translation: 'Dropped Brown Terracotta',
  },
  {
    stat: 'd-green_terracotta',
    translation: 'Dropped Green Terracotta',
  },
  {
    stat: 'd-red_terracotta',
    translation: 'Dropped Red Terracotta',
  },
  {
    stat: 'd-black_terracotta',
    translation: 'Dropped Black Terracotta',
  },
  {
    stat: 'd-barrier',
    translation: 'Dropped Barrier',
  },
  {
    stat: 'd-light',
    translation: 'Dropped Light',
  },
  {
    stat: 'd-hay_block',
    translation: 'Dropped Hay Bale',
  },
  {
    stat: 'd-white_carpet',
    translation: 'Dropped White Carpet',
  },
  {
    stat: 'd-orange_carpet',
    translation: 'Dropped Orange Carpet',
  },
  {
    stat: 'd-magenta_carpet',
    translation: 'Dropped Magenta Carpet',
  },
  {
    stat: 'd-light_blue_carpet',
    translation: 'Dropped Light Blue Carpet',
  },
  {
    stat: 'd-yellow_carpet',
    translation: 'Dropped Yellow Carpet',
  },
  {
    stat: 'd-lime_carpet',
    translation: 'Dropped Lime Carpet',
  },
  {
    stat: 'd-pink_carpet',
    translation: 'Dropped Pink Carpet',
  },
  {
    stat: 'd-gray_carpet',
    translation: 'Dropped Gray Carpet',
  },
  {
    stat: 'd-light_gray_carpet',
    translation: 'Dropped Light Gray Carpet',
  },
  {
    stat: 'd-cyan_carpet',
    translation: 'Dropped Cyan Carpet',
  },
  {
    stat: 'd-purple_carpet',
    translation: 'Dropped Purple Carpet',
  },
  {
    stat: 'd-blue_carpet',
    translation: 'Dropped Blue Carpet',
  },
  {
    stat: 'd-brown_carpet',
    translation: 'Dropped Brown Carpet',
  },
  {
    stat: 'd-green_carpet',
    translation: 'Dropped Green Carpet',
  },
  {
    stat: 'd-red_carpet',
    translation: 'Dropped Red Carpet',
  },
  {
    stat: 'd-black_carpet',
    translation: 'Dropped Black Carpet',
  },
  {
    stat: 'd-terracotta',
    translation: 'Dropped Terracotta',
  },
  {
    stat: 'd-packed_ice',
    translation: 'Dropped Packed Ice',
  },
  {
    stat: 'd-dirt_path',
    translation: 'Dropped Dirt Path',
  },
  {
    stat: 'd-sunflower',
    translation: 'Dropped Sunflower',
  },
  {
    stat: 'd-lilac',
    translation: 'Dropped Lilac',
  },
  {
    stat: 'd-rose_bush',
    translation: 'Dropped Rose Bush',
  },
  {
    stat: 'd-peony',
    translation: 'Dropped Peony',
  },
  {
    stat: 'd-tall_grass',
    translation: 'Dropped Tall Grass',
  },
  {
    stat: 'd-large_fern',
    translation: 'Dropped Large Fern',
  },
  {
    stat: 'd-white_stained_glass',
    translation: 'Dropped White Stained Glass',
  },
  {
    stat: 'd-orange_stained_glass',
    translation: 'Dropped Orange Stained Glass',
  },
  {
    stat: 'd-magenta_stained_glass',
    translation: 'Dropped Magenta Stained Glass',
  },
  {
    stat: 'd-light_blue_stained_glass',
    translation: 'Dropped Light Blue Stained Glass',
  },
  {
    stat: 'd-yellow_stained_glass',
    translation: 'Dropped Yellow Stained Glass',
  },
  {
    stat: 'd-lime_stained_glass',
    translation: 'Dropped Lime Stained Glass',
  },
  {
    stat: 'd-pink_stained_glass',
    translation: 'Dropped Pink Stained Glass',
  },
  {
    stat: 'd-gray_stained_glass',
    translation: 'Dropped Gray Stained Glass',
  },
  {
    stat: 'd-light_gray_stained_glass',
    translation: 'Dropped Light Gray Stained Glass',
  },
  {
    stat: 'd-cyan_stained_glass',
    translation: 'Dropped Cyan Stained Glass',
  },
  {
    stat: 'd-purple_stained_glass',
    translation: 'Dropped Purple Stained Glass',
  },
  {
    stat: 'd-blue_stained_glass',
    translation: 'Dropped Blue Stained Glass',
  },
  {
    stat: 'd-brown_stained_glass',
    translation: 'Dropped Brown Stained Glass',
  },
  {
    stat: 'd-green_stained_glass',
    translation: 'Dropped Green Stained Glass',
  },
  {
    stat: 'd-red_stained_glass',
    translation: 'Dropped Red Stained Glass',
  },
  {
    stat: 'd-black_stained_glass',
    translation: 'Dropped Black Stained Glass',
  },
  {
    stat: 'd-white_stained_glass_pane',
    translation: 'Dropped White Stained Glass Pane',
  },
  {
    stat: 'd-orange_stained_glass_pane',
    translation: 'Dropped Orange Stained Glass Pane',
  },
  {
    stat: 'd-magenta_stained_glass_pane',
    translation: 'Dropped Magenta Stained Glass Pane',
  },
  {
    stat: 'd-light_blue_stained_glass_pane',
    translation: 'Dropped Light Blue Stained Glass Pane',
  },
  {
    stat: 'd-yellow_stained_glass_pane',
    translation: 'Dropped Yellow Stained Glass Pane',
  },
  {
    stat: 'd-lime_stained_glass_pane',
    translation: 'Dropped Lime Stained Glass Pane',
  },
  {
    stat: 'd-pink_stained_glass_pane',
    translation: 'Dropped Pink Stained Glass Pane',
  },
  {
    stat: 'd-gray_stained_glass_pane',
    translation: 'Dropped Gray Stained Glass Pane',
  },
  {
    stat: 'd-light_gray_stained_glass_pane',
    translation: 'Dropped Light Gray Stained Glass Pane',
  },
  {
    stat: 'd-cyan_stained_glass_pane',
    translation: 'Dropped Cyan Stained Glass Pane',
  },
  {
    stat: 'd-purple_stained_glass_pane',
    translation: 'Dropped Purple Stained Glass Pane',
  },
  {
    stat: 'd-blue_stained_glass_pane',
    translation: 'Dropped Blue Stained Glass Pane',
  },
  {
    stat: 'd-brown_stained_glass_pane',
    translation: 'Dropped Brown Stained Glass Pane',
  },
  {
    stat: 'd-green_stained_glass_pane',
    translation: 'Dropped Green Stained Glass Pane',
  },
  {
    stat: 'd-red_stained_glass_pane',
    translation: 'Dropped Red Stained Glass Pane',
  },
  {
    stat: 'd-black_stained_glass_pane',
    translation: 'Dropped Black Stained Glass Pane',
  },
  {
    stat: 'd-prismarine',
    translation: 'Dropped Prismarine',
  },
  {
    stat: 'd-prismarine_bricks',
    translation: 'Dropped Prismarine Bricks',
  },
  {
    stat: 'd-dark_prismarine',
    translation: 'Dropped Dark Prismarine',
  },
  {
    stat: 'd-prismarine_stairs',
    translation: 'Dropped Prismarine Stairs',
  },
  {
    stat: 'd-prismarine_brick_stairs',
    translation: 'Dropped Prismarine Brick Stairs',
  },
  {
    stat: 'd-dark_prismarine_stairs',
    translation: 'Dropped Dark Prismarine Stairs',
  },
  {
    stat: 'd-sea_lantern',
    translation: 'Dropped Sea Lantern',
  },
  {
    stat: 'd-red_sandstone',
    translation: 'Dropped Red Sandstone',
  },
  {
    stat: 'd-chiseled_red_sandstone',
    translation: 'Dropped Chiseled Red Sandstone',
  },
  {
    stat: 'd-cut_red_sandstone',
    translation: 'Dropped Cut Red Sandstone',
  },
  {
    stat: 'd-red_sandstone_stairs',
    translation: 'Dropped Red Sandstone Stairs',
  },
  {
    stat: 'd-repeating_command_block',
    translation: 'Dropped Repeating Command Block',
  },
  {
    stat: 'd-chain_command_block',
    translation: 'Dropped Chain Command Block',
  },
  {
    stat: 'd-magma_block',
    translation: 'Dropped Magma Block',
  },
  {
    stat: 'd-nether_wart_block',
    translation: 'Dropped Nether Wart Block',
  },
  {
    stat: 'd-warped_wart_block',
    translation: 'Dropped Warped Wart Block',
  },
  {
    stat: 'd-red_nether_bricks',
    translation: 'Dropped Red Nether Bricks',
  },
  {
    stat: 'd-bone_block',
    translation: 'Dropped Bone Block',
  },
  {
    stat: 'd-structure_void',
    translation: 'Dropped Structure Void',
  },
  {
    stat: 'd-shulker_box',
    translation: 'Dropped Shulker Box',
  },
  {
    stat: 'd-white_shulker_box',
    translation: 'Dropped White Shulker Box',
  },
  {
    stat: 'd-orange_shulker_box',
    translation: 'Dropped Orange Shulker Box',
  },
  {
    stat: 'd-magenta_shulker_box',
    translation: 'Dropped Magenta Shulker Box',
  },
  {
    stat: 'd-light_blue_shulker_box',
    translation: 'Dropped Light Blue Shulker Box',
  },
  {
    stat: 'd-yellow_shulker_box',
    translation: 'Dropped Yellow Shulker Box',
  },
  {
    stat: 'd-lime_shulker_box',
    translation: 'Dropped Lime Shulker Box',
  },
  {
    stat: 'd-pink_shulker_box',
    translation: 'Dropped Pink Shulker Box',
  },
  {
    stat: 'd-gray_shulker_box',
    translation: 'Dropped Gray Shulker Box',
  },
  {
    stat: 'd-light_gray_shulker_box',
    translation: 'Dropped Light Gray Shulker Box',
  },
  {
    stat: 'd-cyan_shulker_box',
    translation: 'Dropped Cyan Shulker Box',
  },
  {
    stat: 'd-purple_shulker_box',
    translation: 'Dropped Purple Shulker Box',
  },
  {
    stat: 'd-blue_shulker_box',
    translation: 'Dropped Blue Shulker Box',
  },
  {
    stat: 'd-brown_shulker_box',
    translation: 'Dropped Brown Shulker Box',
  },
  {
    stat: 'd-green_shulker_box',
    translation: 'Dropped Green Shulker Box',
  },
  {
    stat: 'd-red_shulker_box',
    translation: 'Dropped Red Shulker Box',
  },
  {
    stat: 'd-black_shulker_box',
    translation: 'Dropped Black Shulker Box',
  },
  {
    stat: 'd-white_glazed_terracotta',
    translation: 'Dropped White Glazed Terracotta',
  },
  {
    stat: 'd-orange_glazed_terracotta',
    translation: 'Dropped Orange Glazed Terracotta',
  },
  {
    stat: 'd-magenta_glazed_terracotta',
    translation: 'Dropped Magenta Glazed Terracotta',
  },
  {
    stat: 'd-light_blue_glazed_terracotta',
    translation: 'Dropped Light Blue Glazed Terracotta',
  },
  {
    stat: 'd-yellow_glazed_terracotta',
    translation: 'Dropped Yellow Glazed Terracotta',
  },
  {
    stat: 'd-lime_glazed_terracotta',
    translation: 'Dropped Lime Glazed Terracotta',
  },
  {
    stat: 'd-pink_glazed_terracotta',
    translation: 'Dropped Pink Glazed Terracotta',
  },
  {
    stat: 'd-gray_glazed_terracotta',
    translation: 'Dropped Gray Glazed Terracotta',
  },
  {
    stat: 'd-light_gray_glazed_terracotta',
    translation: 'Dropped Light Gray Glazed Terracotta',
  },
  {
    stat: 'd-cyan_glazed_terracotta',
    translation: 'Dropped Cyan Glazed Terracotta',
  },
  {
    stat: 'd-purple_glazed_terracotta',
    translation: 'Dropped Purple Glazed Terracotta',
  },
  {
    stat: 'd-blue_glazed_terracotta',
    translation: 'Dropped Blue Glazed Terracotta',
  },
  {
    stat: 'd-brown_glazed_terracotta',
    translation: 'Dropped Brown Glazed Terracotta',
  },
  {
    stat: 'd-green_glazed_terracotta',
    translation: 'Dropped Green Glazed Terracotta',
  },
  {
    stat: 'd-red_glazed_terracotta',
    translation: 'Dropped Red Glazed Terracotta',
  },
  {
    stat: 'd-black_glazed_terracotta',
    translation: 'Dropped Black Glazed Terracotta',
  },
  {
    stat: 'd-white_concrete',
    translation: 'Dropped White Concrete',
  },
  {
    stat: 'd-orange_concrete',
    translation: 'Dropped Orange Concrete',
  },
  {
    stat: 'd-magenta_concrete',
    translation: 'Dropped Magenta Concrete',
  },
  {
    stat: 'd-light_blue_concrete',
    translation: 'Dropped Light Blue Concrete',
  },
  {
    stat: 'd-yellow_concrete',
    translation: 'Dropped Yellow Concrete',
  },
  {
    stat: 'd-lime_concrete',
    translation: 'Dropped Lime Concrete',
  },
  {
    stat: 'd-pink_concrete',
    translation: 'Dropped Pink Concrete',
  },
  {
    stat: 'd-gray_concrete',
    translation: 'Dropped Gray Concrete',
  },
  {
    stat: 'd-light_gray_concrete',
    translation: 'Dropped Light Gray Concrete',
  },
  {
    stat: 'd-cyan_concrete',
    translation: 'Dropped Cyan Concrete',
  },
  {
    stat: 'd-purple_concrete',
    translation: 'Dropped Purple Concrete',
  },
  {
    stat: 'd-blue_concrete',
    translation: 'Dropped Blue Concrete',
  },
  {
    stat: 'd-brown_concrete',
    translation: 'Dropped Brown Concrete',
  },
  {
    stat: 'd-green_concrete',
    translation: 'Dropped Green Concrete',
  },
  {
    stat: 'd-red_concrete',
    translation: 'Dropped Red Concrete',
  },
  {
    stat: 'd-black_concrete',
    translation: 'Dropped Black Concrete',
  },
  {
    stat: 'd-white_concrete_powder',
    translation: 'Dropped White Concrete Powder',
  },
  {
    stat: 'd-orange_concrete_powder',
    translation: 'Dropped Orange Concrete Powder',
  },
  {
    stat: 'd-magenta_concrete_powder',
    translation: 'Dropped Magenta Concrete Powder',
  },
  {
    stat: 'd-light_blue_concrete_powder',
    translation: 'Dropped Light Blue Concrete Powder',
  },
  {
    stat: 'd-yellow_concrete_powder',
    translation: 'Dropped Yellow Concrete Powder',
  },
  {
    stat: 'd-lime_concrete_powder',
    translation: 'Dropped Lime Concrete Powder',
  },
  {
    stat: 'd-pink_concrete_powder',
    translation: 'Dropped Pink Concrete Powder',
  },
  {
    stat: 'd-gray_concrete_powder',
    translation: 'Dropped Gray Concrete Powder',
  },
  {
    stat: 'd-light_gray_concrete_powder',
    translation: 'Dropped Light Gray Concrete Powder',
  },
  {
    stat: 'd-cyan_concrete_powder',
    translation: 'Dropped Cyan Concrete Powder',
  },
  {
    stat: 'd-purple_concrete_powder',
    translation: 'Dropped Purple Concrete Powder',
  },
  {
    stat: 'd-blue_concrete_powder',
    translation: 'Dropped Blue Concrete Powder',
  },
  {
    stat: 'd-brown_concrete_powder',
    translation: 'Dropped Brown Concrete Powder',
  },
  {
    stat: 'd-green_concrete_powder',
    translation: 'Dropped Green Concrete Powder',
  },
  {
    stat: 'd-red_concrete_powder',
    translation: 'Dropped Red Concrete Powder',
  },
  {
    stat: 'd-black_concrete_powder',
    translation: 'Dropped Black Concrete Powder',
  },
  {
    stat: 'd-turtle_egg',
    translation: 'Dropped Turtle Egg',
  },
  {
    stat: 'd-dead_tube_coral_block',
    translation: 'Dropped Dead Tube Coral Block',
  },
  {
    stat: 'd-dead_brain_coral_block',
    translation: 'Dropped Dead Brain Coral Block',
  },
  {
    stat: 'd-dead_bubble_coral_block',
    translation: 'Dropped Dead Bubble Coral Block',
  },
  {
    stat: 'd-dead_fire_coral_block',
    translation: 'Dropped Dead Fire Coral Block',
  },
  {
    stat: 'd-dead_horn_coral_block',
    translation: 'Dropped Dead Horn Coral Block',
  },
  {
    stat: 'd-tube_coral_block',
    translation: 'Dropped Tube Coral Block',
  },
  {
    stat: 'd-brain_coral_block',
    translation: 'Dropped Brain Coral Block',
  },
  {
    stat: 'd-bubble_coral_block',
    translation: 'Dropped Bubble Coral Block',
  },
  {
    stat: 'd-fire_coral_block',
    translation: 'Dropped Fire Coral Block',
  },
  {
    stat: 'd-horn_coral_block',
    translation: 'Dropped Horn Coral Block',
  },
  {
    stat: 'd-tube_coral',
    translation: 'Dropped Tube Coral',
  },
  {
    stat: 'd-brain_coral',
    translation: 'Dropped Brain Coral',
  },
  {
    stat: 'd-bubble_coral',
    translation: 'Dropped Bubble Coral',
  },
  {
    stat: 'd-fire_coral',
    translation: 'Dropped Fire Coral',
  },
  {
    stat: 'd-horn_coral',
    translation: 'Dropped Horn Coral',
  },
  {
    stat: 'd-dead_brain_coral',
    translation: 'Dropped Dead Brain Coral',
  },
  {
    stat: 'd-dead_bubble_coral',
    translation: 'Dropped Dead Bubble Coral',
  },
  {
    stat: 'd-dead_fire_coral',
    translation: 'Dropped Dead Fire Coral',
  },
  {
    stat: 'd-dead_horn_coral',
    translation: 'Dropped Dead Horn Coral',
  },
  {
    stat: 'd-dead_tube_coral',
    translation: 'Dropped Dead Tube Coral',
  },
  {
    stat: 'd-tube_coral_fan',
    translation: 'Dropped Tube Coral Fan',
  },
  {
    stat: 'd-brain_coral_fan',
    translation: 'Dropped Brain Coral Fan',
  },
  {
    stat: 'd-bubble_coral_fan',
    translation: 'Dropped Bubble Coral Fan',
  },
  {
    stat: 'd-fire_coral_fan',
    translation: 'Dropped Fire Coral Fan',
  },
  {
    stat: 'd-horn_coral_fan',
    translation: 'Dropped Horn Coral Fan',
  },
  {
    stat: 'd-dead_tube_coral_fan',
    translation: 'Dropped Dead Tube Coral Fan',
  },
  {
    stat: 'd-dead_brain_coral_fan',
    translation: 'Dropped Dead Brain Coral Fan',
  },
  {
    stat: 'd-dead_bubble_coral_fan',
    translation: 'Dropped Dead Bubble Coral Fan',
  },
  {
    stat: 'd-dead_fire_coral_fan',
    translation: 'Dropped Dead Fire Coral Fan',
  },
  {
    stat: 'd-dead_horn_coral_fan',
    translation: 'Dropped Dead Horn Coral Fan',
  },
  {
    stat: 'd-blue_ice',
    translation: 'Dropped Blue Ice',
  },
  {
    stat: 'd-conduit',
    translation: 'Dropped Conduit',
  },
  {
    stat: 'd-polished_granite_stairs',
    translation: 'Dropped Polished Granite Stairs',
  },
  {
    stat: 'd-smooth_red_sandstone_stairs',
    translation: 'Dropped Smooth Red Sandstone Stairs',
  },
  {
    stat: 'd-mossy_stone_brick_stairs',
    translation: 'Dropped Mossy Stone Brick Stairs',
  },
  {
    stat: 'd-polished_diorite_stairs',
    translation: 'Dropped Polished Diorite Stairs',
  },
  {
    stat: 'd-mossy_cobblestone_stairs',
    translation: 'Dropped Mossy Cobblestone Stairs',
  },
  {
    stat: 'd-end_stone_brick_stairs',
    translation: 'Dropped End Stone Brick Stairs',
  },
  {
    stat: 'd-stone_stairs',
    translation: 'Dropped Stone Stairs',
  },
  {
    stat: 'd-smooth_sandstone_stairs',
    translation: 'Dropped Smooth Sandstone Stairs',
  },
  {
    stat: 'd-smooth_quartz_stairs',
    translation: 'Dropped Smooth Quartz Stairs',
  },
  {
    stat: 'd-granite_stairs',
    translation: 'Dropped Granite Stairs',
  },
  {
    stat: 'd-andesite_stairs',
    translation: 'Dropped Andesite Stairs',
  },
  {
    stat: 'd-red_nether_brick_stairs',
    translation: 'Dropped Red Nether Brick Stairs',
  },
  {
    stat: 'd-polished_andesite_stairs',
    translation: 'Dropped Polished Andesite Stairs',
  },
  {
    stat: 'd-diorite_stairs',
    translation: 'Dropped Diorite Stairs',
  },
  {
    stat: 'd-cobbled_deepslate_stairs',
    translation: 'Dropped Cobbled Deepslate Stairs',
  },
  {
    stat: 'd-polished_deepslate_stairs',
    translation: 'Dropped Polished Deepslate Stairs',
  },
  {
    stat: 'd-deepslate_brick_stairs',
    translation: 'Dropped Deepslate Brick Stairs',
  },
  {
    stat: 'd-deepslate_tile_stairs',
    translation: 'Dropped Deepslate Tile Stairs',
  },
  {
    stat: 'd-polished_granite_slab',
    translation: 'Dropped Polished Granite Slab',
  },
  {
    stat: 'd-smooth_red_sandstone_slab',
    translation: 'Dropped Smooth Red Sandstone Slab',
  },
  {
    stat: 'd-mossy_stone_brick_slab',
    translation: 'Dropped Mossy Stone Brick Slab',
  },
  {
    stat: 'd-polished_diorite_slab',
    translation: 'Dropped Polished Diorite Slab',
  },
  {
    stat: 'd-mossy_cobblestone_slab',
    translation: 'Dropped Mossy Cobblestone Slab',
  },
  {
    stat: 'd-end_stone_brick_slab',
    translation: 'Dropped End Stone Brick Slab',
  },
  {
    stat: 'd-smooth_sandstone_slab',
    translation: 'Dropped Smooth Sandstone Slab',
  },
  {
    stat: 'd-smooth_quartz_slab',
    translation: 'Dropped Smooth Quartz Slab',
  },
  {
    stat: 'd-granite_slab',
    translation: 'Dropped Granite Slab',
  },
  {
    stat: 'd-andesite_slab',
    translation: 'Dropped Andesite Slab',
  },
  {
    stat: 'd-red_nether_brick_slab',
    translation: 'Dropped Red Nether Brick Slab',
  },
  {
    stat: 'd-polished_andesite_slab',
    translation: 'Dropped Polished Andesite Slab',
  },
  {
    stat: 'd-diorite_slab',
    translation: 'Dropped Diorite Slab',
  },
  {
    stat: 'd-cobbled_deepslate_slab',
    translation: 'Dropped Cobbled Deepslate Slab',
  },
  {
    stat: 'd-polished_deepslate_slab',
    translation: 'Dropped Polished Deepslate Slab',
  },
  {
    stat: 'd-deepslate_brick_slab',
    translation: 'Dropped Deepslate Brick Slab',
  },
  {
    stat: 'd-deepslate_tile_slab',
    translation: 'Dropped Deepslate Tile Slab',
  },
  {
    stat: 'd-scaffolding',
    translation: 'Dropped Scaffolding',
  },
  {
    stat: 'd-redstone',
    translation: 'Dropped Redstone Dust',
  },
  {
    stat: 'd-redstone_torch',
    translation: 'Dropped Redstone Torch',
  },
  {
    stat: 'd-redstone_block',
    translation: 'Dropped Block of Redstone',
  },
  {
    stat: 'd-repeater',
    translation: 'Dropped Redstone Repeater',
  },
  {
    stat: 'd-comparator',
    translation: 'Dropped Redstone Comparator',
  },
  {
    stat: 'd-piston',
    translation: 'Dropped Piston',
  },
  {
    stat: 'd-sticky_piston',
    translation: 'Dropped Sticky Piston',
  },
  {
    stat: 'd-slime_block',
    translation: 'Dropped Slime Block',
  },
  {
    stat: 'd-honey_block',
    translation: 'Dropped Honey Block',
  },
  {
    stat: 'd-observer',
    translation: 'Dropped Observer',
  },
  {
    stat: 'd-hopper',
    translation: 'Dropped Hopper',
  },
  {
    stat: 'd-dispenser',
    translation: 'Dropped Dispenser',
  },
  {
    stat: 'd-dropper',
    translation: 'Dropped Dropper',
  },
  {
    stat: 'd-lectern',
    translation: 'Dropped Lectern',
  },
  {
    stat: 'd-target',
    translation: 'Dropped Target',
  },
  {
    stat: 'd-lever',
    translation: 'Dropped Lever',
  },
  {
    stat: 'd-lightning_rod',
    translation: 'Dropped Lightning Rod',
  },
  {
    stat: 'd-daylight_detector',
    translation: 'Dropped Daylight Detector',
  },
  {
    stat: 'd-sculk_sensor',
    translation: 'Dropped Sculk Sensor',
  },
  {
    stat: 'd-tripwire_hook',
    translation: 'Dropped Tripwire Hook',
  },
  {
    stat: 'd-trapped_chest',
    translation: 'Dropped Trapped Chest',
  },
  {
    stat: 'd-tnt',
    translation: 'Dropped TNT',
  },
  {
    stat: 'd-redstone_lamp',
    translation: 'Dropped Redstone Lamp',
  },
  {
    stat: 'd-note_block',
    translation: 'Dropped Note Block',
  },
  {
    stat: 'd-stone_button',
    translation: 'Dropped Stone Button',
  },
  {
    stat: 'd-polished_blackstone_button',
    translation: 'Dropped Polished Blackstone Button',
  },
  {
    stat: 'd-oak_button',
    translation: 'Dropped Oak Button',
  },
  {
    stat: 'd-spruce_button',
    translation: 'Dropped Spruce Button',
  },
  {
    stat: 'd-birch_button',
    translation: 'Dropped Birch Button',
  },
  {
    stat: 'd-jungle_button',
    translation: 'Dropped Jungle Button',
  },
  {
    stat: 'd-acacia_button',
    translation: 'Dropped Acacia Button',
  },
  {
    stat: 'd-dark_oak_button',
    translation: 'Dropped Dark Oak Button',
  },
  {
    stat: 'd-mangrove_button',
    translation: 'Dropped Mangrove Button',
  },
  {
    stat: 'd-crimson_button',
    translation: 'Dropped Crimson Button',
  },
  {
    stat: 'd-warped_button',
    translation: 'Dropped Warped Button',
  },
  {
    stat: 'd-stone_pressure_plate',
    translation: 'Dropped Stone Pressure Plate',
  },
  {
    stat: 'd-polished_blackstone_pressure_plate',
    translation: 'Dropped Polished Blackstone Pressure Plate',
  },
  {
    stat: 'd-light_weighted_pressure_plate',
    translation: 'Dropped Light Weighted Pressure Plate',
  },
  {
    stat: 'd-heavy_weighted_pressure_plate',
    translation: 'Dropped Heavy Weighted Pressure Plate',
  },
  {
    stat: 'd-oak_pressure_plate',
    translation: 'Dropped Oak Pressure Plate',
  },
  {
    stat: 'd-spruce_pressure_plate',
    translation: 'Dropped Spruce Pressure Plate',
  },
  {
    stat: 'd-birch_pressure_plate',
    translation: 'Dropped Birch Pressure Plate',
  },
  {
    stat: 'd-jungle_pressure_plate',
    translation: 'Dropped Jungle Pressure Plate',
  },
  {
    stat: 'd-acacia_pressure_plate',
    translation: 'Dropped Acacia Pressure Plate',
  },
  {
    stat: 'd-dark_oak_pressure_plate',
    translation: 'Dropped Dark Oak Pressure Plate',
  },
  {
    stat: 'd-mangrove_pressure_plate',
    translation: 'Dropped Mangrove Pressure Plate',
  },
  {
    stat: 'd-crimson_pressure_plate',
    translation: 'Dropped Crimson Pressure Plate',
  },
  {
    stat: 'd-warped_pressure_plate',
    translation: 'Dropped Warped Pressure Plate',
  },
  {
    stat: 'd-iron_door',
    translation: 'Dropped Iron Door',
  },
  {
    stat: 'd-oak_door',
    translation: 'Dropped Oak Door',
  },
  {
    stat: 'd-spruce_door',
    translation: 'Dropped Spruce Door',
  },
  {
    stat: 'd-birch_door',
    translation: 'Dropped Birch Door',
  },
  {
    stat: 'd-jungle_door',
    translation: 'Dropped Jungle Door',
  },
  {
    stat: 'd-acacia_door',
    translation: 'Dropped Acacia Door',
  },
  {
    stat: 'd-dark_oak_door',
    translation: 'Dropped Dark Oak Door',
  },
  {
    stat: 'd-mangrove_door',
    translation: 'Dropped Mangrove Door',
  },
  {
    stat: 'd-crimson_door',
    translation: 'Dropped Crimson Door',
  },
  {
    stat: 'd-warped_door',
    translation: 'Dropped Warped Door',
  },
  {
    stat: 'd-iron_trapdoor',
    translation: 'Dropped Iron Trapdoor',
  },
  {
    stat: 'd-oak_trapdoor',
    translation: 'Dropped Oak Trapdoor',
  },
  {
    stat: 'd-spruce_trapdoor',
    translation: 'Dropped Spruce Trapdoor',
  },
  {
    stat: 'd-birch_trapdoor',
    translation: 'Dropped Birch Trapdoor',
  },
  {
    stat: 'd-jungle_trapdoor',
    translation: 'Dropped Jungle Trapdoor',
  },
  {
    stat: 'd-acacia_trapdoor',
    translation: 'Dropped Acacia Trapdoor',
  },
  {
    stat: 'd-dark_oak_trapdoor',
    translation: 'Dropped Dark Oak Trapdoor',
  },
  {
    stat: 'd-mangrove_trapdoor',
    translation: 'Dropped Mangrove Trapdoor',
  },
  {
    stat: 'd-crimson_trapdoor',
    translation: 'Dropped Crimson Trapdoor',
  },
  {
    stat: 'd-warped_trapdoor',
    translation: 'Dropped Warped Trapdoor',
  },
  {
    stat: 'd-oak_fence_gate',
    translation: 'Dropped Oak Fence Gate',
  },
  {
    stat: 'd-spruce_fence_gate',
    translation: 'Dropped Spruce Fence Gate',
  },
  {
    stat: 'd-birch_fence_gate',
    translation: 'Dropped Birch Fence Gate',
  },
  {
    stat: 'd-jungle_fence_gate',
    translation: 'Dropped Jungle Fence Gate',
  },
  {
    stat: 'd-acacia_fence_gate',
    translation: 'Dropped Acacia Fence Gate',
  },
  {
    stat: 'd-dark_oak_fence_gate',
    translation: 'Dropped Dark Oak Fence Gate',
  },
  {
    stat: 'd-mangrove_fence_gate',
    translation: 'Dropped Mangrove Fence Gate',
  },
  {
    stat: 'd-crimson_fence_gate',
    translation: 'Dropped Crimson Fence Gate',
  },
  {
    stat: 'd-warped_fence_gate',
    translation: 'Dropped Warped Fence Gate',
  },
  {
    stat: 'd-powered_rail',
    translation: 'Dropped Powered Rail',
  },
  {
    stat: 'd-detector_rail',
    translation: 'Dropped Detector Rail',
  },
  {
    stat: 'd-rail',
    translation: 'Dropped Rail',
  },
  {
    stat: 'd-activator_rail',
    translation: 'Dropped Activator Rail',
  },
  {
    stat: 'd-saddle',
    translation: 'Dropped Saddle',
  },
  {
    stat: 'd-minecart',
    translation: 'Dropped Minecart',
  },
  {
    stat: 'd-chest_minecart',
    translation: 'Dropped Minecart with Chest',
  },
  {
    stat: 'd-furnace_minecart',
    translation: 'Dropped Minecart with Furnace',
  },
  {
    stat: 'd-tnt_minecart',
    translation: 'Dropped Minecart with TNT',
  },
  {
    stat: 'd-hopper_minecart',
    translation: 'Dropped Minecart with Hopper',
  },
  {
    stat: 'd-carrot_on_a_stick',
    translation: 'Dropped Carrot on a Stick',
  },
  {
    stat: 'd-warped_fungus_on_a_stick',
    translation: 'Dropped Warped Fungus on a Stick',
  },
  {
    stat: 'd-elytra',
    translation: 'Dropped Elytra',
  },
  {
    stat: 'd-oak_boat',
    translation: 'Dropped Oak Boat',
  },
  {
    stat: 'd-oak_chest_boat',
    translation: 'Dropped Oak Boat with Chest',
  },
  {
    stat: 'd-spruce_boat',
    translation: 'Dropped Spruce Boat',
  },
  {
    stat: 'd-spruce_chest_boat',
    translation: 'Dropped Spruce Boat with Chest',
  },
  {
    stat: 'd-birch_boat',
    translation: 'Dropped Birch Boat',
  },
  {
    stat: 'd-birch_chest_boat',
    translation: 'Dropped Birch Boat with Chest',
  },
  {
    stat: 'd-jungle_boat',
    translation: 'Dropped Jungle Boat',
  },
  {
    stat: 'd-jungle_chest_boat',
    translation: 'Dropped Jungle Boat with Chest',
  },
  {
    stat: 'd-acacia_boat',
    translation: 'Dropped Acacia Boat',
  },
  {
    stat: 'd-acacia_chest_boat',
    translation: 'Dropped Acacia Boat with Chest',
  },
  {
    stat: 'd-dark_oak_boat',
    translation: 'Dropped Dark Oak Boat',
  },
  {
    stat: 'd-dark_oak_chest_boat',
    translation: 'Dropped Dark Oak Boat with Chest',
  },
  {
    stat: 'd-mangrove_boat',
    translation: 'Dropped Mangrove Boat',
  },
  {
    stat: 'd-mangrove_chest_boat',
    translation: 'Dropped Mangrove Boat with Chest',
  },
  {
    stat: 'd-structure_block',
    translation: 'Dropped Structure Block',
  },
  {
    stat: 'd-jigsaw',
    translation: 'Dropped Jigsaw Block',
  },
  {
    stat: 'd-turtle_helmet',
    translation: 'Dropped Turtle Shell',
  },
  {
    stat: 'd-scute',
    translation: 'Dropped Scute',
  },
  {
    stat: 'd-flint_and_steel',
    translation: 'Dropped Flint and Steel',
  },
  {
    stat: 'd-apple',
    translation: 'Dropped Apple',
  },
  {
    stat: 'd-bow',
    translation: 'Dropped Bow',
  },
  {
    stat: 'd-arrow',
    translation: 'Dropped Arrow',
  },
  {
    stat: 'd-coal',
    translation: 'Dropped Coal',
  },
  {
    stat: 'd-charcoal',
    translation: 'Dropped Charcoal',
  },
  {
    stat: 'd-diamond',
    translation: 'Dropped Diamond',
  },
  {
    stat: 'd-emerald',
    translation: 'Dropped Emerald',
  },
  {
    stat: 'd-lapis_lazuli',
    translation: 'Dropped Lapis Lazuli',
  },
  {
    stat: 'd-quartz',
    translation: 'Dropped Nether Quartz',
  },
  {
    stat: 'd-amethyst_shard',
    translation: 'Dropped Amethyst Shard',
  },
  {
    stat: 'd-raw_iron',
    translation: 'Dropped Raw Iron',
  },
  {
    stat: 'd-iron_ingot',
    translation: 'Dropped Iron Ingot',
  },
  {
    stat: 'd-raw_copper',
    translation: 'Dropped Raw Copper',
  },
  {
    stat: 'd-copper_ingot',
    translation: 'Dropped Copper Ingot',
  },
  {
    stat: 'd-raw_gold',
    translation: 'Dropped Raw Gold',
  },
  {
    stat: 'd-gold_ingot',
    translation: 'Dropped Gold Ingot',
  },
  {
    stat: 'd-netherite_ingot',
    translation: 'Dropped Netherite Ingot',
  },
  {
    stat: 'd-netherite_scrap',
    translation: 'Dropped Netherite Scrap',
  },
  {
    stat: 'd-wooden_sword',
    translation: 'Dropped Wooden Sword',
  },
  {
    stat: 'd-wooden_shovel',
    translation: 'Dropped Wooden Shovel',
  },
  {
    stat: 'd-wooden_pickaxe',
    translation: 'Dropped Wooden Pickaxe',
  },
  {
    stat: 'd-wooden_axe',
    translation: 'Dropped Wooden Axe',
  },
  {
    stat: 'd-wooden_hoe',
    translation: 'Dropped Wooden Hoe',
  },
  {
    stat: 'd-stone_sword',
    translation: 'Dropped Stone Sword',
  },
  {
    stat: 'd-stone_shovel',
    translation: 'Dropped Stone Shovel',
  },
  {
    stat: 'd-stone_pickaxe',
    translation: 'Dropped Stone Pickaxe',
  },
  {
    stat: 'd-stone_axe',
    translation: 'Dropped Stone Axe',
  },
  {
    stat: 'd-stone_hoe',
    translation: 'Dropped Stone Hoe',
  },
  {
    stat: 'd-golden_sword',
    translation: 'Dropped Golden Sword',
  },
  {
    stat: 'd-golden_shovel',
    translation: 'Dropped Golden Shovel',
  },
  {
    stat: 'd-golden_pickaxe',
    translation: 'Dropped Golden Pickaxe',
  },
  {
    stat: 'd-golden_axe',
    translation: 'Dropped Golden Axe',
  },
  {
    stat: 'd-golden_hoe',
    translation: 'Dropped Golden Hoe',
  },
  {
    stat: 'd-iron_sword',
    translation: 'Dropped Iron Sword',
  },
  {
    stat: 'd-iron_shovel',
    translation: 'Dropped Iron Shovel',
  },
  {
    stat: 'd-iron_pickaxe',
    translation: 'Dropped Iron Pickaxe',
  },
  {
    stat: 'd-iron_axe',
    translation: 'Dropped Iron Axe',
  },
  {
    stat: 'd-iron_hoe',
    translation: 'Dropped Iron Hoe',
  },
  {
    stat: 'd-diamond_sword',
    translation: 'Dropped Diamond Sword',
  },
  {
    stat: 'd-diamond_shovel',
    translation: 'Dropped Diamond Shovel',
  },
  {
    stat: 'd-diamond_pickaxe',
    translation: 'Dropped Diamond Pickaxe',
  },
  {
    stat: 'd-diamond_axe',
    translation: 'Dropped Diamond Axe',
  },
  {
    stat: 'd-diamond_hoe',
    translation: 'Dropped Diamond Hoe',
  },
  {
    stat: 'd-netherite_sword',
    translation: 'Dropped Netherite Sword',
  },
  {
    stat: 'd-netherite_shovel',
    translation: 'Dropped Netherite Shovel',
  },
  {
    stat: 'd-netherite_pickaxe',
    translation: 'Dropped Netherite Pickaxe',
  },
  {
    stat: 'd-netherite_axe',
    translation: 'Dropped Netherite Axe',
  },
  {
    stat: 'd-netherite_hoe',
    translation: 'Dropped Netherite Hoe',
  },
  {
    stat: 'd-stick',
    translation: 'Dropped Stick',
  },
  {
    stat: 'd-bowl',
    translation: 'Dropped Bowl',
  },
  {
    stat: 'd-mushroom_stew',
    translation: 'Dropped Mushroom Stew',
  },
  {
    stat: 'd-string',
    translation: 'Dropped String',
  },
  {
    stat: 'd-feather',
    translation: 'Dropped Feather',
  },
  {
    stat: 'd-gunpowder',
    translation: 'Dropped Gunpowder',
  },
  {
    stat: 'd-wheat_seeds',
    translation: 'Dropped Wheat Seeds',
  },
  {
    stat: 'd-wheat',
    translation: 'Dropped Wheat',
  },
  {
    stat: 'd-bread',
    translation: 'Dropped Bread',
  },
  {
    stat: 'd-leather_helmet',
    translation: 'Dropped Leather Cap',
  },
  {
    stat: 'd-leather_chestplate',
    translation: 'Dropped Leather Tunic',
  },
  {
    stat: 'd-leather_leggings',
    translation: 'Dropped Leather Pants',
  },
  {
    stat: 'd-leather_boots',
    translation: 'Dropped Leather Boots',
  },
  {
    stat: 'd-chainmail_helmet',
    translation: 'Dropped Chainmail Helmet',
  },
  {
    stat: 'd-chainmail_chestplate',
    translation: 'Dropped Chainmail Chestplate',
  },
  {
    stat: 'd-chainmail_leggings',
    translation: 'Dropped Chainmail Leggings',
  },
  {
    stat: 'd-chainmail_boots',
    translation: 'Dropped Chainmail Boots',
  },
  {
    stat: 'd-iron_helmet',
    translation: 'Dropped Iron Helmet',
  },
  {
    stat: 'd-iron_chestplate',
    translation: 'Dropped Iron Chestplate',
  },
  {
    stat: 'd-iron_leggings',
    translation: 'Dropped Iron Leggings',
  },
  {
    stat: 'd-iron_boots',
    translation: 'Dropped Iron Boots',
  },
  {
    stat: 'd-diamond_helmet',
    translation: 'Dropped Diamond Helmet',
  },
  {
    stat: 'd-diamond_chestplate',
    translation: 'Dropped Diamond Chestplate',
  },
  {
    stat: 'd-diamond_leggings',
    translation: 'Dropped Diamond Leggings',
  },
  {
    stat: 'd-diamond_boots',
    translation: 'Dropped Diamond Boots',
  },
  {
    stat: 'd-golden_helmet',
    translation: 'Dropped Golden Helmet',
  },
  {
    stat: 'd-golden_chestplate',
    translation: 'Dropped Golden Chestplate',
  },
  {
    stat: 'd-golden_leggings',
    translation: 'Dropped Golden Leggings',
  },
  {
    stat: 'd-golden_boots',
    translation: 'Dropped Golden Boots',
  },
  {
    stat: 'd-netherite_helmet',
    translation: 'Dropped Netherite Helmet',
  },
  {
    stat: 'd-netherite_chestplate',
    translation: 'Dropped Netherite Chestplate',
  },
  {
    stat: 'd-netherite_leggings',
    translation: 'Dropped Netherite Leggings',
  },
  {
    stat: 'd-netherite_boots',
    translation: 'Dropped Netherite Boots',
  },
  {
    stat: 'd-flint',
    translation: 'Dropped Flint',
  },
  {
    stat: 'd-porkchop',
    translation: 'Dropped Raw Porkchop',
  },
  {
    stat: 'd-cooked_porkchop',
    translation: 'Dropped Cooked Porkchop',
  },
  {
    stat: 'd-painting',
    translation: 'Dropped Painting',
  },
  {
    stat: 'd-golden_apple',
    translation: 'Dropped Golden Apple',
  },
  {
    stat: 'd-enchanted_golden_apple',
    translation: 'Dropped Enchanted Golden Apple',
  },
  {
    stat: 'd-oak_sign',
    translation: 'Dropped Oak Sign',
  },
  {
    stat: 'd-spruce_sign',
    translation: 'Dropped Spruce Sign',
  },
  {
    stat: 'd-birch_sign',
    translation: 'Dropped Birch Sign',
  },
  {
    stat: 'd-jungle_sign',
    translation: 'Dropped Jungle Sign',
  },
  {
    stat: 'd-acacia_sign',
    translation: 'Dropped Acacia Sign',
  },
  {
    stat: 'd-dark_oak_sign',
    translation: 'Dropped Dark Oak Sign',
  },
  {
    stat: 'd-mangrove_sign',
    translation: 'Dropped Mangrove Sign',
  },
  {
    stat: 'd-crimson_sign',
    translation: 'Dropped Crimson Sign',
  },
  {
    stat: 'd-warped_sign',
    translation: 'Dropped Warped Sign',
  },
  {
    stat: 'd-bucket',
    translation: 'Dropped Bucket',
  },
  {
    stat: 'd-water_bucket',
    translation: 'Dropped Water Bucket',
  },
  {
    stat: 'd-lava_bucket',
    translation: 'Dropped Lava Bucket',
  },
  {
    stat: 'd-powder_snow_bucket',
    translation: 'Dropped Powder Snow Bucket',
  },
  {
    stat: 'd-snowball',
    translation: 'Dropped Snowball',
  },
  {
    stat: 'd-leather',
    translation: 'Dropped Leather',
  },
  {
    stat: 'd-milk_bucket',
    translation: 'Dropped Milk Bucket',
  },
  {
    stat: 'd-pufferfish_bucket',
    translation: 'Dropped Bucket of Pufferfish',
  },
  {
    stat: 'd-salmon_bucket',
    translation: 'Dropped Bucket of Salmon',
  },
  {
    stat: 'd-cod_bucket',
    translation: 'Dropped Bucket of Cod',
  },
  {
    stat: 'd-tropical_fish_bucket',
    translation: 'Dropped Bucket of Tropical Fish',
  },
  {
    stat: 'd-axolotl_bucket',
    translation: 'Dropped Bucket of Axolotl',
  },
  {
    stat: 'd-tadpole_bucket',
    translation: 'Dropped Bucket of Tadpole',
  },
  {
    stat: 'd-brick',
    translation: 'Dropped Brick',
  },
  {
    stat: 'd-clay_ball',
    translation: 'Dropped Clay Ball',
  },
  {
    stat: 'd-dried_kelp_block',
    translation: 'Dropped Dried Kelp Block',
  },
  {
    stat: 'd-paper',
    translation: 'Dropped Paper',
  },
  {
    stat: 'd-book',
    translation: 'Dropped Book',
  },
  {
    stat: 'd-slime_ball',
    translation: 'Dropped Slimeball',
  },
  {
    stat: 'd-egg',
    translation: 'Dropped Egg',
  },
  {
    stat: 'd-compass',
    translation: 'Dropped Compass',
  },
  {
    stat: 'd-recovery_compass',
    translation: 'Dropped Recovery Compass',
  },
  {
    stat: 'd-bundle',
    translation: 'Dropped Bundle',
  },
  {
    stat: 'd-fishing_rod',
    translation: 'Dropped Fishing Rod',
  },
  {
    stat: 'd-clock',
    translation: 'Dropped Clock',
  },
  {
    stat: 'd-spyglass',
    translation: 'Dropped Spyglass',
  },
  {
    stat: 'd-glowstone_dust',
    translation: 'Dropped Glowstone Dust',
  },
  {
    stat: 'd-cod',
    translation: 'Dropped Raw Cod',
  },
  {
    stat: 'd-salmon',
    translation: 'Dropped Raw Salmon',
  },
  {
    stat: 'd-tropical_fish',
    translation: 'Dropped Tropical Fish',
  },
  {
    stat: 'd-pufferfish',
    translation: 'Dropped Pufferfish',
  },
  {
    stat: 'd-cooked_cod',
    translation: 'Dropped Cooked Cod',
  },
  {
    stat: 'd-cooked_salmon',
    translation: 'Dropped Cooked Salmon',
  },
  {
    stat: 'd-ink_sac',
    translation: 'Dropped Ink Sac',
  },
  {
    stat: 'd-glow_ink_sac',
    translation: 'Dropped Glow Ink Sac',
  },
  {
    stat: 'd-cocoa_beans',
    translation: 'Dropped Cocoa Beans',
  },
  {
    stat: 'd-white_dye',
    translation: 'Dropped White Dye',
  },
  {
    stat: 'd-orange_dye',
    translation: 'Dropped Orange Dye',
  },
  {
    stat: 'd-magenta_dye',
    translation: 'Dropped Magenta Dye',
  },
  {
    stat: 'd-light_blue_dye',
    translation: 'Dropped Light Blue Dye',
  },
  {
    stat: 'd-yellow_dye',
    translation: 'Dropped Yellow Dye',
  },
  {
    stat: 'd-lime_dye',
    translation: 'Dropped Lime Dye',
  },
  {
    stat: 'd-pink_dye',
    translation: 'Dropped Pink Dye',
  },
  {
    stat: 'd-gray_dye',
    translation: 'Dropped Gray Dye',
  },
  {
    stat: 'd-light_gray_dye',
    translation: 'Dropped Light Gray Dye',
  },
  {
    stat: 'd-cyan_dye',
    translation: 'Dropped Cyan Dye',
  },
  {
    stat: 'd-purple_dye',
    translation: 'Dropped Purple Dye',
  },
  {
    stat: 'd-blue_dye',
    translation: 'Dropped Blue Dye',
  },
  {
    stat: 'd-brown_dye',
    translation: 'Dropped Brown Dye',
  },
  {
    stat: 'd-green_dye',
    translation: 'Dropped Green Dye',
  },
  {
    stat: 'd-red_dye',
    translation: 'Dropped Red Dye',
  },
  {
    stat: 'd-black_dye',
    translation: 'Dropped Black Dye',
  },
  {
    stat: 'd-bone_meal',
    translation: 'Dropped Bone Meal',
  },
  {
    stat: 'd-bone',
    translation: 'Dropped Bone',
  },
  {
    stat: 'd-sugar',
    translation: 'Dropped Sugar',
  },
  {
    stat: 'd-cake',
    translation: 'Dropped Cake',
  },
  {
    stat: 'd-white_bed',
    translation: 'Dropped White Bed',
  },
  {
    stat: 'd-orange_bed',
    translation: 'Dropped Orange Bed',
  },
  {
    stat: 'd-magenta_bed',
    translation: 'Dropped Magenta Bed',
  },
  {
    stat: 'd-light_blue_bed',
    translation: 'Dropped Light Blue Bed',
  },
  {
    stat: 'd-yellow_bed',
    translation: 'Dropped Yellow Bed',
  },
  {
    stat: 'd-lime_bed',
    translation: 'Dropped Lime Bed',
  },
  {
    stat: 'd-pink_bed',
    translation: 'Dropped Pink Bed',
  },
  {
    stat: 'd-gray_bed',
    translation: 'Dropped Gray Bed',
  },
  {
    stat: 'd-light_gray_bed',
    translation: 'Dropped Light Gray Bed',
  },
  {
    stat: 'd-cyan_bed',
    translation: 'Dropped Cyan Bed',
  },
  {
    stat: 'd-purple_bed',
    translation: 'Dropped Purple Bed',
  },
  {
    stat: 'd-blue_bed',
    translation: 'Dropped Blue Bed',
  },
  {
    stat: 'd-brown_bed',
    translation: 'Dropped Brown Bed',
  },
  {
    stat: 'd-green_bed',
    translation: 'Dropped Green Bed',
  },
  {
    stat: 'd-red_bed',
    translation: 'Dropped Red Bed',
  },
  {
    stat: 'd-black_bed',
    translation: 'Dropped Black Bed',
  },
  {
    stat: 'd-cookie',
    translation: 'Dropped Cookie',
  },
  {
    stat: 'd-filled_map',
    translation: 'Dropped Map',
  },
  {
    stat: 'd-shears',
    translation: 'Dropped Shears',
  },
  {
    stat: 'd-melon_slice',
    translation: 'Dropped Melon Slice',
  },
  {
    stat: 'd-dried_kelp',
    translation: 'Dropped Dried Kelp',
  },
  {
    stat: 'd-pumpkin_seeds',
    translation: 'Dropped Pumpkin Seeds',
  },
  {
    stat: 'd-melon_seeds',
    translation: 'Dropped Melon Seeds',
  },
  {
    stat: 'd-beef',
    translation: 'Dropped Raw Beef',
  },
  {
    stat: 'd-cooked_beef',
    translation: 'Dropped Steak',
  },
  {
    stat: 'd-chicken',
    translation: 'Dropped Raw Chicken',
  },
  {
    stat: 'd-cooked_chicken',
    translation: 'Dropped Cooked Chicken',
  },
  {
    stat: 'd-rotten_flesh',
    translation: 'Dropped Rotten Flesh',
  },
  {
    stat: 'd-ender_pearl',
    translation: 'Dropped Ender Pearl',
  },
  {
    stat: 'd-blaze_rod',
    translation: 'Dropped Blaze Rod',
  },
  {
    stat: 'd-ghast_tear',
    translation: 'Dropped Ghast Tear',
  },
  {
    stat: 'd-gold_nugget',
    translation: 'Dropped Gold Nugget',
  },
  {
    stat: 'd-nether_wart',
    translation: 'Dropped Nether Wart',
  },
  {
    stat: 'd-potion',
    translation: 'Dropped Potion',
  },
  {
    stat: 'd-glass_bottle',
    translation: 'Dropped Glass Bottle',
  },
  {
    stat: 'd-spider_eye',
    translation: 'Dropped Spider Eye',
  },
  {
    stat: 'd-fermented_spider_eye',
    translation: 'Dropped Fermented Spider Eye',
  },
  {
    stat: 'd-blaze_powder',
    translation: 'Dropped Blaze Powder',
  },
  {
    stat: 'd-magma_cream',
    translation: 'Dropped Magma Cream',
  },
  {
    stat: 'd-brewing_stand',
    translation: 'Dropped Brewing Stand',
  },
  {
    stat: 'd-cauldron',
    translation: 'Dropped Cauldron',
  },
  {
    stat: 'd-ender_eye',
    translation: 'Dropped Eye of Ender',
  },
  {
    stat: 'd-glistering_melon_slice',
    translation: 'Dropped Glistering Melon Slice',
  },
  {
    stat: 'd-allay_spawn_egg',
    translation: 'Dropped Allay Spawn Egg',
  },
  {
    stat: 'd-axolotl_spawn_egg',
    translation: 'Dropped Axolotl Spawn Egg',
  },
  {
    stat: 'd-bat_spawn_egg',
    translation: 'Dropped Bat Spawn Egg',
  },
  {
    stat: 'd-bee_spawn_egg',
    translation: 'Dropped Bee Spawn Egg',
  },
  {
    stat: 'd-blaze_spawn_egg',
    translation: 'Dropped Blaze Spawn Egg',
  },
  {
    stat: 'd-cat_spawn_egg',
    translation: 'Dropped Cat Spawn Egg',
  },
  {
    stat: 'd-cave_spider_spawn_egg',
    translation: 'Dropped Cave Spider Spawn Egg',
  },
  {
    stat: 'd-chicken_spawn_egg',
    translation: 'Dropped Chicken Spawn Egg',
  },
  {
    stat: 'd-cod_spawn_egg',
    translation: 'Dropped Cod Spawn Egg',
  },
  {
    stat: 'd-cow_spawn_egg',
    translation: 'Dropped Cow Spawn Egg',
  },
  {
    stat: 'd-creeper_spawn_egg',
    translation: 'Dropped Creeper Spawn Egg',
  },
  {
    stat: 'd-dolphin_spawn_egg',
    translation: 'Dropped Dolphin Spawn Egg',
  },
  {
    stat: 'd-donkey_spawn_egg',
    translation: 'Dropped Donkey Spawn Egg',
  },
  {
    stat: 'd-drowned_spawn_egg',
    translation: 'Dropped Drowned Spawn Egg',
  },
  {
    stat: 'd-elder_guardian_spawn_egg',
    translation: 'Dropped Elder Guardian Spawn Egg',
  },
  {
    stat: 'd-enderman_spawn_egg',
    translation: 'Dropped Enderman Spawn Egg',
  },
  {
    stat: 'd-endermite_spawn_egg',
    translation: 'Dropped Endermite Spawn Egg',
  },
  {
    stat: 'd-evoker_spawn_egg',
    translation: 'Dropped Evoker Spawn Egg',
  },
  {
    stat: 'd-fox_spawn_egg',
    translation: 'Dropped Fox Spawn Egg',
  },
  {
    stat: 'd-frog_spawn_egg',
    translation: 'Dropped Frog Spawn Egg',
  },
  {
    stat: 'd-ghast_spawn_egg',
    translation: 'Dropped Ghast Spawn Egg',
  },
  {
    stat: 'd-glow_squid_spawn_egg',
    translation: 'Dropped Glow Squid Spawn Egg',
  },
  {
    stat: 'd-goat_spawn_egg',
    translation: 'Dropped Goat Spawn Egg',
  },
  {
    stat: 'd-guardian_spawn_egg',
    translation: 'Dropped Guardian Spawn Egg',
  },
  {
    stat: 'd-hoglin_spawn_egg',
    translation: 'Dropped Hoglin Spawn Egg',
  },
  {
    stat: 'd-horse_spawn_egg',
    translation: 'Dropped Horse Spawn Egg',
  },
  {
    stat: 'd-husk_spawn_egg',
    translation: 'Dropped Husk Spawn Egg',
  },
  {
    stat: 'd-llama_spawn_egg',
    translation: 'Dropped Llama Spawn Egg',
  },
  {
    stat: 'd-magma_cube_spawn_egg',
    translation: 'Dropped Magma Cube Spawn Egg',
  },
  {
    stat: 'd-mooshroom_spawn_egg',
    translation: 'Dropped Mooshroom Spawn Egg',
  },
  {
    stat: 'd-mule_spawn_egg',
    translation: 'Dropped Mule Spawn Egg',
  },
  {
    stat: 'd-ocelot_spawn_egg',
    translation: 'Dropped Ocelot Spawn Egg',
  },
  {
    stat: 'd-panda_spawn_egg',
    translation: 'Dropped Panda Spawn Egg',
  },
  {
    stat: 'd-parrot_spawn_egg',
    translation: 'Dropped Parrot Spawn Egg',
  },
  {
    stat: 'd-phantom_spawn_egg',
    translation: 'Dropped Phantom Spawn Egg',
  },
  {
    stat: 'd-pig_spawn_egg',
    translation: 'Dropped Pig Spawn Egg',
  },
  {
    stat: 'd-piglin_spawn_egg',
    translation: 'Dropped Piglin Spawn Egg',
  },
  {
    stat: 'd-piglin_brute_spawn_egg',
    translation: 'Dropped Piglin Brute Spawn Egg',
  },
  {
    stat: 'd-pillager_spawn_egg',
    translation: 'Dropped Pillager Spawn Egg',
  },
  {
    stat: 'd-polar_bear_spawn_egg',
    translation: 'Dropped Polar Bear Spawn Egg',
  },
  {
    stat: 'd-pufferfish_spawn_egg',
    translation: 'Dropped Pufferfish Spawn Egg',
  },
  {
    stat: 'd-rabbit_spawn_egg',
    translation: 'Dropped Rabbit Spawn Egg',
  },
  {
    stat: 'd-ravager_spawn_egg',
    translation: 'Dropped Ravager Spawn Egg',
  },
  {
    stat: 'd-salmon_spawn_egg',
    translation: 'Dropped Salmon Spawn Egg',
  },
  {
    stat: 'd-sheep_spawn_egg',
    translation: 'Dropped Sheep Spawn Egg',
  },
  {
    stat: 'd-shulker_spawn_egg',
    translation: 'Dropped Shulker Spawn Egg',
  },
  {
    stat: 'd-silverfish_spawn_egg',
    translation: 'Dropped Silverfish Spawn Egg',
  },
  {
    stat: 'd-skeleton_spawn_egg',
    translation: 'Dropped Skeleton Spawn Egg',
  },
  {
    stat: 'd-skeleton_horse_spawn_egg',
    translation: 'Dropped Skeleton Horse Spawn Egg',
  },
  {
    stat: 'd-slime_spawn_egg',
    translation: 'Dropped Slime Spawn Egg',
  },
  {
    stat: 'd-spider_spawn_egg',
    translation: 'Dropped Spider Spawn Egg',
  },
  {
    stat: 'd-squid_spawn_egg',
    translation: 'Dropped Squid Spawn Egg',
  },
  {
    stat: 'd-stray_spawn_egg',
    translation: 'Dropped Stray Spawn Egg',
  },
  {
    stat: 'd-strider_spawn_egg',
    translation: 'Dropped Strider Spawn Egg',
  },
  {
    stat: 'd-tadpole_spawn_egg',
    translation: 'Dropped Tadpole Spawn Egg',
  },
  {
    stat: 'd-trader_llama_spawn_egg',
    translation: 'Dropped Trader Llama Spawn Egg',
  },
  {
    stat: 'd-tropical_fish_spawn_egg',
    translation: 'Dropped Tropical Fish Spawn Egg',
  },
  {
    stat: 'd-turtle_spawn_egg',
    translation: 'Dropped Turtle Spawn Egg',
  },
  {
    stat: 'd-vex_spawn_egg',
    translation: 'Dropped Vex Spawn Egg',
  },
  {
    stat: 'd-villager_spawn_egg',
    translation: 'Dropped Villager Spawn Egg',
  },
  {
    stat: 'd-vindicator_spawn_egg',
    translation: 'Dropped Vindicator Spawn Egg',
  },
  {
    stat: 'd-wandering_trader_spawn_egg',
    translation: 'Dropped Wandering Trader Spawn Egg',
  },
  {
    stat: 'd-warden_spawn_egg',
    translation: 'Dropped Warden Spawn Egg',
  },
  {
    stat: 'd-witch_spawn_egg',
    translation: 'Dropped Witch Spawn Egg',
  },
  {
    stat: 'd-wither_skeleton_spawn_egg',
    translation: 'Dropped Wither Skeleton Spawn Egg',
  },
  {
    stat: 'd-wolf_spawn_egg',
    translation: 'Dropped Wolf Spawn Egg',
  },
  {
    stat: 'd-zoglin_spawn_egg',
    translation: 'Dropped Zoglin Spawn Egg',
  },
  {
    stat: 'd-zombie_spawn_egg',
    translation: 'Dropped Zombie Spawn Egg',
  },
  {
    stat: 'd-zombie_horse_spawn_egg',
    translation: 'Dropped Zombie Horse Spawn Egg',
  },
  {
    stat: 'd-zombie_villager_spawn_egg',
    translation: 'Dropped Zombie Villager Spawn Egg',
  },
  {
    stat: 'd-zombified_piglin_spawn_egg',
    translation: 'Dropped Zombified Piglin Spawn Egg',
  },
  {
    stat: 'd-experience_bottle',
    translation: "Dropped Bottle o' Enchanting",
  },
  {
    stat: 'd-fire_charge',
    translation: 'Dropped Fire Charge',
  },
  {
    stat: 'd-writable_book',
    translation: 'Dropped Book and Quill',
  },
  {
    stat: 'd-written_book',
    translation: 'Dropped Written Book',
  },
  {
    stat: 'd-item_frame',
    translation: 'Dropped Item Frame',
  },
  {
    stat: 'd-glow_item_frame',
    translation: 'Dropped Glow Item Frame',
  },
  {
    stat: 'd-flower_pot',
    translation: 'Dropped Flower Pot',
  },
  {
    stat: 'd-carrot',
    translation: 'Dropped Carrot',
  },
  {
    stat: 'd-potato',
    translation: 'Dropped Potato',
  },
  {
    stat: 'd-baked_potato',
    translation: 'Dropped Baked Potato',
  },
  {
    stat: 'd-poisonous_potato',
    translation: 'Dropped Poisonous Potato',
  },
  {
    stat: 'd-map',
    translation: 'Dropped Empty Map',
  },
  {
    stat: 'd-golden_carrot',
    translation: 'Dropped Golden Carrot',
  },
  {
    stat: 'd-skeleton_skull',
    translation: 'Dropped Skeleton Skull',
  },
  {
    stat: 'd-wither_skeleton_skull',
    translation: 'Dropped Wither Skeleton Skull',
  },
  {
    stat: 'd-player_head',
    translation: 'Dropped Player Head',
  },
  {
    stat: 'd-zombie_head',
    translation: 'Dropped Zombie Head',
  },
  {
    stat: 'd-creeper_head',
    translation: 'Dropped Creeper Head',
  },
  {
    stat: 'd-dragon_head',
    translation: 'Dropped Dragon Head',
  },
  {
    stat: 'd-nether_star',
    translation: 'Dropped Nether Star',
  },
  {
    stat: 'd-pumpkin_pie',
    translation: 'Dropped Pumpkin Pie',
  },
  {
    stat: 'd-firework_rocket',
    translation: 'Dropped Firework Rocket',
  },
  {
    stat: 'd-firework_star',
    translation: 'Dropped Firework Star',
  },
  {
    stat: 'd-enchanted_book',
    translation: 'Dropped Enchanted Book',
  },
  {
    stat: 'd-nether_brick',
    translation: 'Dropped Nether Brick',
  },
  {
    stat: 'd-prismarine_shard',
    translation: 'Dropped Prismarine Shard',
  },
  {
    stat: 'd-prismarine_crystals',
    translation: 'Dropped Prismarine Crystals',
  },
  {
    stat: 'd-rabbit',
    translation: 'Dropped Raw Rabbit',
  },
  {
    stat: 'd-cooked_rabbit',
    translation: 'Dropped Cooked Rabbit',
  },
  {
    stat: 'd-rabbit_stew',
    translation: 'Dropped Rabbit Stew',
  },
  {
    stat: 'd-rabbit_foot',
    translation: "Dropped Rabbit's Foot",
  },
  {
    stat: 'd-rabbit_hide',
    translation: 'Dropped Rabbit Hide',
  },
  {
    stat: 'd-armor_stand',
    translation: 'Dropped Armor Stand',
  },
  {
    stat: 'd-iron_horse_armor',
    translation: 'Dropped Iron Horse Armor',
  },
  {
    stat: 'd-golden_horse_armor',
    translation: 'Dropped Golden Horse Armor',
  },
  {
    stat: 'd-diamond_horse_armor',
    translation: 'Dropped Diamond Horse Armor',
  },
  {
    stat: 'd-leather_horse_armor',
    translation: 'Dropped Leather Horse Armor',
  },
  {
    stat: 'd-lead',
    translation: 'Dropped Lead',
  },
  {
    stat: 'd-name_tag',
    translation: 'Dropped Name Tag',
  },
  {
    stat: 'd-command_block_minecart',
    translation: 'Dropped Minecart with Command Block',
  },
  {
    stat: 'd-mutton',
    translation: 'Dropped Raw Mutton',
  },
  {
    stat: 'd-cooked_mutton',
    translation: 'Dropped Cooked Mutton',
  },
  {
    stat: 'd-white_banner',
    translation: 'Dropped White Banner',
  },
  {
    stat: 'd-orange_banner',
    translation: 'Dropped Orange Banner',
  },
  {
    stat: 'd-magenta_banner',
    translation: 'Dropped Magenta Banner',
  },
  {
    stat: 'd-light_blue_banner',
    translation: 'Dropped Light Blue Banner',
  },
  {
    stat: 'd-yellow_banner',
    translation: 'Dropped Yellow Banner',
  },
  {
    stat: 'd-lime_banner',
    translation: 'Dropped Lime Banner',
  },
  {
    stat: 'd-pink_banner',
    translation: 'Dropped Pink Banner',
  },
  {
    stat: 'd-gray_banner',
    translation: 'Dropped Gray Banner',
  },
  {
    stat: 'd-light_gray_banner',
    translation: 'Dropped Light Gray Banner',
  },
  {
    stat: 'd-cyan_banner',
    translation: 'Dropped Cyan Banner',
  },
  {
    stat: 'd-purple_banner',
    translation: 'Dropped Purple Banner',
  },
  {
    stat: 'd-blue_banner',
    translation: 'Dropped Blue Banner',
  },
  {
    stat: 'd-brown_banner',
    translation: 'Dropped Brown Banner',
  },
  {
    stat: 'd-green_banner',
    translation: 'Dropped Green Banner',
  },
  {
    stat: 'd-red_banner',
    translation: 'Dropped Red Banner',
  },
  {
    stat: 'd-black_banner',
    translation: 'Dropped Black Banner',
  },
  {
    stat: 'd-end_crystal',
    translation: 'Dropped End Crystal',
  },
  {
    stat: 'd-chorus_fruit',
    translation: 'Dropped Chorus Fruit',
  },
  {
    stat: 'd-popped_chorus_fruit',
    translation: 'Dropped Popped Chorus Fruit',
  },
  {
    stat: 'd-beetroot',
    translation: 'Dropped Beetroot',
  },
  {
    stat: 'd-beetroot_seeds',
    translation: 'Dropped Beetroot Seeds',
  },
  {
    stat: 'd-beetroot_soup',
    translation: 'Dropped Beetroot Soup',
  },
  {
    stat: 'd-dragon_breath',
    translation: "Dropped Dragon's Breath",
  },
  {
    stat: 'd-splash_potion',
    translation: 'Dropped Splash Potion',
  },
  {
    stat: 'd-spectral_arrow',
    translation: 'Dropped Spectral Arrow',
  },
  {
    stat: 'd-tipped_arrow',
    translation: 'Dropped Tipped Arrow',
  },
  {
    stat: 'd-lingering_potion',
    translation: 'Dropped Lingering Potion',
  },
  {
    stat: 'd-shield',
    translation: 'Dropped Shield',
  },
  {
    stat: 'd-totem_of_undying',
    translation: 'Dropped Totem of Undying',
  },
  {
    stat: 'd-shulker_shell',
    translation: 'Dropped Shulker Shell',
  },
  {
    stat: 'd-iron_nugget',
    translation: 'Dropped Iron Nugget',
  },
  {
    stat: 'd-knowledge_book',
    translation: 'Dropped Knowledge Book',
  },
  {
    stat: 'd-debug_stick',
    translation: 'Dropped Debug Stick',
  },
  {
    stat: 'd-music_disc_13',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_cat',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_blocks',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_chirp',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_far',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_mall',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_mellohi',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_stal',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_strad',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_ward',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_11',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_wait',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_otherside',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_5',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-music_disc_pigstep',
    translation: 'Dropped Music Disc',
  },
  {
    stat: 'd-disc_fragment_5',
    translation: 'Dropped Disc Fragment',
  },
  {
    stat: 'd-trident',
    translation: 'Dropped Trident',
  },
  {
    stat: 'd-phantom_membrane',
    translation: 'Dropped Phantom Membrane',
  },
  {
    stat: 'd-nautilus_shell',
    translation: 'Dropped Nautilus Shell',
  },
  {
    stat: 'd-heart_of_the_sea',
    translation: 'Dropped Heart of the Sea',
  },
  {
    stat: 'd-crossbow',
    translation: 'Dropped Crossbow',
  },
  {
    stat: 'd-suspicious_stew',
    translation: 'Dropped Suspicious Stew',
  },
  {
    stat: 'd-loom',
    translation: 'Dropped Loom',
  },
  {
    stat: 'd-flower_banner_pattern',
    translation: 'Dropped Banner Pattern',
  },
  {
    stat: 'd-creeper_banner_pattern',
    translation: 'Dropped Banner Pattern',
  },
  {
    stat: 'd-skull_banner_pattern',
    translation: 'Dropped Banner Pattern',
  },
  {
    stat: 'd-mojang_banner_pattern',
    translation: 'Dropped Banner Pattern',
  },
  {
    stat: 'd-globe_banner_pattern',
    translation: 'Dropped Banner Pattern',
  },
  {
    stat: 'd-piglin_banner_pattern',
    translation: 'Dropped Banner Pattern',
  },
  {
    stat: 'd-goat_horn',
    translation: 'Dropped Goat Horn',
  },
  {
    stat: 'd-composter',
    translation: 'Dropped Composter',
  },
  {
    stat: 'd-barrel',
    translation: 'Dropped Barrel',
  },
  {
    stat: 'd-smoker',
    translation: 'Dropped Smoker',
  },
  {
    stat: 'd-blast_furnace',
    translation: 'Dropped Blast Furnace',
  },
  {
    stat: 'd-cartography_table',
    translation: 'Dropped Cartography Table',
  },
  {
    stat: 'd-fletching_table',
    translation: 'Dropped Fletching Table',
  },
  {
    stat: 'd-grindstone',
    translation: 'Dropped Grindstone',
  },
  {
    stat: 'd-smithing_table',
    translation: 'Dropped Smithing Table',
  },
  {
    stat: 'd-stonecutter',
    translation: 'Dropped Stonecutter',
  },
  {
    stat: 'd-bell',
    translation: 'Dropped Bell',
  },
  {
    stat: 'd-lantern',
    translation: 'Dropped Lantern',
  },
  {
    stat: 'd-soul_lantern',
    translation: 'Dropped Soul Lantern',
  },
  {
    stat: 'd-sweet_berries',
    translation: 'Dropped Sweet Berries',
  },
  {
    stat: 'd-glow_berries',
    translation: 'Dropped Glow Berries',
  },
  {
    stat: 'd-campfire',
    translation: 'Dropped Campfire',
  },
  {
    stat: 'd-soul_campfire',
    translation: 'Dropped Soul Campfire',
  },
  {
    stat: 'd-shroomlight',
    translation: 'Dropped Shroomlight',
  },
  {
    stat: 'd-honeycomb',
    translation: 'Dropped Honeycomb',
  },
  {
    stat: 'd-bee_nest',
    translation: 'Dropped Bee Nest',
  },
  {
    stat: 'd-beehive',
    translation: 'Dropped Beehive',
  },
  {
    stat: 'd-honey_bottle',
    translation: 'Dropped Honey Bottle',
  },
  {
    stat: 'd-honeycomb_block',
    translation: 'Dropped Honeycomb Block',
  },
  {
    stat: 'd-lodestone',
    translation: 'Dropped Lodestone',
  },
  {
    stat: 'd-crying_obsidian',
    translation: 'Dropped Crying Obsidian',
  },
  {
    stat: 'd-blackstone',
    translation: 'Dropped Blackstone',
  },
  {
    stat: 'd-blackstone_slab',
    translation: 'Dropped Blackstone Slab',
  },
  {
    stat: 'd-blackstone_stairs',
    translation: 'Dropped Blackstone Stairs',
  },
  {
    stat: 'd-gilded_blackstone',
    translation: 'Dropped Gilded Blackstone',
  },
  {
    stat: 'd-polished_blackstone',
    translation: 'Dropped Polished Blackstone',
  },
  {
    stat: 'd-polished_blackstone_slab',
    translation: 'Dropped Polished Blackstone Slab',
  },
  {
    stat: 'd-polished_blackstone_stairs',
    translation: 'Dropped Polished Blackstone Stairs',
  },
  {
    stat: 'd-chiseled_polished_blackstone',
    translation: 'Dropped Chiseled Polished Blackstone',
  },
  {
    stat: 'd-polished_blackstone_bricks',
    translation: 'Dropped Polished Blackstone Bricks',
  },
  {
    stat: 'd-polished_blackstone_brick_slab',
    translation: 'Dropped Polished Blackstone Brick Slab',
  },
  {
    stat: 'd-polished_blackstone_brick_stairs',
    translation: 'Dropped Polished Blackstone Brick Stairs',
  },
  {
    stat: 'd-cracked_polished_blackstone_bricks',
    translation: 'Dropped Cracked Polished Blackstone Bricks',
  },
  {
    stat: 'd-respawn_anchor',
    translation: 'Dropped Respawn Anchor',
  },
  {
    stat: 'd-candle',
    translation: 'Dropped Candle',
  },
  {
    stat: 'd-white_candle',
    translation: 'Dropped White Candle',
  },
  {
    stat: 'd-orange_candle',
    translation: 'Dropped Orange Candle',
  },
  {
    stat: 'd-magenta_candle',
    translation: 'Dropped Magenta Candle',
  },
  {
    stat: 'd-light_blue_candle',
    translation: 'Dropped Light Blue Candle',
  },
  {
    stat: 'd-yellow_candle',
    translation: 'Dropped Yellow Candle',
  },
  {
    stat: 'd-lime_candle',
    translation: 'Dropped Lime Candle',
  },
  {
    stat: 'd-pink_candle',
    translation: 'Dropped Pink Candle',
  },
  {
    stat: 'd-gray_candle',
    translation: 'Dropped Gray Candle',
  },
  {
    stat: 'd-light_gray_candle',
    translation: 'Dropped Light Gray Candle',
  },
  {
    stat: 'd-cyan_candle',
    translation: 'Dropped Cyan Candle',
  },
  {
    stat: 'd-purple_candle',
    translation: 'Dropped Purple Candle',
  },
  {
    stat: 'd-blue_candle',
    translation: 'Dropped Blue Candle',
  },
  {
    stat: 'd-brown_candle',
    translation: 'Dropped Brown Candle',
  },
  {
    stat: 'd-green_candle',
    translation: 'Dropped Green Candle',
  },
  {
    stat: 'd-red_candle',
    translation: 'Dropped Red Candle',
  },
  {
    stat: 'd-black_candle',
    translation: 'Dropped Black Candle',
  },
  {
    stat: 'd-small_amethyst_bud',
    translation: 'Dropped Small Amethyst Bud',
  },
  {
    stat: 'd-medium_amethyst_bud',
    translation: 'Dropped Medium Amethyst Bud',
  },
  {
    stat: 'd-large_amethyst_bud',
    translation: 'Dropped Large Amethyst Bud',
  },
  {
    stat: 'd-amethyst_cluster',
    translation: 'Dropped Amethyst Cluster',
  },
  {
    stat: 'd-pointed_dripstone',
    translation: 'Dropped Pointed Dripstone',
  },
  {
    stat: 'd-ochre_froglight',
    translation: 'Dropped Ochre Froglight',
  },
  {
    stat: 'd-verdant_froglight',
    translation: 'Dropped Verdant Froglight',
  },
  {
    stat: 'd-pearlescent_froglight',
    translation: 'Dropped Pearlescent Froglight',
  },
  {
    stat: 'd-frogspawn',
    translation: 'Dropped Frogspawn',
  },
  {
    stat: 'd-echo_shard',
    translation: 'Dropped Echo Shard',
  },
  {
    stat: 'k-allay',
    translation: 'Killed Allay',
  },
  {
    stat: 'k-area_effect_cloud',
    translation: 'Killed Area Effect Cloud',
  },
  {
    stat: 'k-armor_stand',
    translation: 'Killed Armor Stand',
  },
  {
    stat: 'k-arrow',
    translation: 'Killed Arrow',
  },
  {
    stat: 'k-axolotl',
    translation: 'Killed Axolotl',
  },
  {
    stat: 'k-bat',
    translation: 'Killed Bat',
  },
  {
    stat: 'k-bee',
    translation: 'Killed Bee',
  },
  {
    stat: 'k-blaze',
    translation: 'Killed Blaze',
  },
  {
    stat: 'k-boat',
    translation: 'Killed Boat',
  },
  {
    stat: 'k-chest_boat',
    translation: 'Killed Boat with Chest',
  },
  {
    stat: 'k-cat',
    translation: 'Killed Cat',
  },
  {
    stat: 'k-cave_spider',
    translation: 'Killed Cave Spider',
  },
  {
    stat: 'k-chicken',
    translation: 'Killed Chicken',
  },
  {
    stat: 'k-cod',
    translation: 'Killed Cod',
  },
  {
    stat: 'k-cow',
    translation: 'Killed Cow',
  },
  {
    stat: 'k-creeper',
    translation: 'Killed Creeper',
  },
  {
    stat: 'k-dolphin',
    translation: 'Killed Dolphin',
  },
  {
    stat: 'k-donkey',
    translation: 'Killed Donkey',
  },
  {
    stat: 'k-dragon_fireball',
    translation: 'Killed Dragon Fireball',
  },
  {
    stat: 'k-drowned',
    translation: 'Killed Drowned',
  },
  {
    stat: 'k-elder_guardian',
    translation: 'Killed Elder Guardian',
  },
  {
    stat: 'k-end_crystal',
    translation: 'Killed End Crystal',
  },
  {
    stat: 'k-ender_dragon',
    translation: 'Killed Ender Dragon',
  },
  {
    stat: 'k-enderman',
    translation: 'Killed Enderman',
  },
  {
    stat: 'k-endermite',
    translation: 'Killed Endermite',
  },
  {
    stat: 'k-evoker',
    translation: 'Killed Evoker',
  },
  {
    stat: 'k-evoker_fangs',
    translation: 'Killed Evoker Fangs',
  },
  {
    stat: 'k-experience_orb',
    translation: 'Killed Experience Orb',
  },
  {
    stat: 'k-eye_of_ender',
    translation: 'Killed Eye of Ender',
  },
  {
    stat: 'k-falling_block',
    translation: 'Killed Falling Block',
  },
  {
    stat: 'k-firework_rocket',
    translation: 'Killed Firework Rocket',
  },
  {
    stat: 'k-fox',
    translation: 'Killed Fox',
  },
  {
    stat: 'k-frog',
    translation: 'Killed Frog',
  },
  {
    stat: 'k-ghast',
    translation: 'Killed Ghast',
  },
  {
    stat: 'k-giant',
    translation: 'Killed Giant',
  },
  {
    stat: 'k-glow_item_frame',
    translation: 'Killed Glow Item Frame',
  },
  {
    stat: 'k-glow_squid',
    translation: 'Killed Glow Squid',
  },
  {
    stat: 'k-goat',
    translation: 'Killed Goat',
  },
  {
    stat: 'k-guardian',
    translation: 'Killed Guardian',
  },
  {
    stat: 'k-hoglin',
    translation: 'Killed Hoglin',
  },
  {
    stat: 'k-horse',
    translation: 'Killed Horse',
  },
  {
    stat: 'k-husk',
    translation: 'Killed Husk',
  },
  {
    stat: 'k-illusioner',
    translation: 'Killed Illusioner',
  },
  {
    stat: 'k-iron_golem',
    translation: 'Killed Iron Golem',
  },
  {
    stat: 'k-item',
    translation: 'Killed Item',
  },
  {
    stat: 'k-item_frame',
    translation: 'Killed Item Frame',
  },
  {
    stat: 'k-fireball',
    translation: 'Killed Fireball',
  },
  {
    stat: 'k-leash_knot',
    translation: 'Killed Leash Knot',
  },
  {
    stat: 'k-lightning_bolt',
    translation: 'Killed Lightning Bolt',
  },
  {
    stat: 'k-llama',
    translation: 'Killed Llama',
  },
  {
    stat: 'k-llama_spit',
    translation: 'Killed Llama Spit',
  },
  {
    stat: 'k-magma_cube',
    translation: 'Killed Magma Cube',
  },
  {
    stat: 'k-marker',
    translation: 'Killed Marker',
  },
  {
    stat: 'k-minecart',
    translation: 'Killed Minecart',
  },
  {
    stat: 'k-chest_minecart',
    translation: 'Killed Minecart with Chest',
  },
  {
    stat: 'k-command_block_minecart',
    translation: 'Killed Minecart with Command Block',
  },
  {
    stat: 'k-furnace_minecart',
    translation: 'Killed Minecart with Furnace',
  },
  {
    stat: 'k-hopper_minecart',
    translation: 'Killed Minecart with Hopper',
  },
  {
    stat: 'k-spawner_minecart',
    translation: 'Killed Minecart with Spawner',
  },
  {
    stat: 'k-tnt_minecart',
    translation: 'Killed Minecart with TNT',
  },
  {
    stat: 'k-mule',
    translation: 'Killed Mule',
  },
  {
    stat: 'k-mooshroom',
    translation: 'Killed Mooshroom',
  },
  {
    stat: 'k-ocelot',
    translation: 'Killed Ocelot',
  },
  {
    stat: 'k-painting',
    translation: 'Killed Painting',
  },
  {
    stat: 'k-panda',
    translation: 'Killed Panda',
  },
  {
    stat: 'k-parrot',
    translation: 'Killed Parrot',
  },
  {
    stat: 'k-phantom',
    translation: 'Killed Phantom',
  },
  {
    stat: 'k-pig',
    translation: 'Killed Pig',
  },
  {
    stat: 'k-piglin',
    translation: 'Killed Piglin',
  },
  {
    stat: 'k-piglin_brute',
    translation: 'Killed Piglin Brute',
  },
  {
    stat: 'k-pillager',
    translation: 'Killed Pillager',
  },
  {
    stat: 'k-polar_bear',
    translation: 'Killed Polar Bear',
  },
  {
    stat: 'k-tnt',
    translation: 'Killed Primed TNT',
  },
  {
    stat: 'k-pufferfish',
    translation: 'Killed Pufferfish',
  },
  {
    stat: 'k-rabbit',
    translation: 'Killed Rabbit',
  },
  {
    stat: 'k-ravager',
    translation: 'Killed Ravager',
  },
  {
    stat: 'k-salmon',
    translation: 'Killed Salmon',
  },
  {
    stat: 'k-sheep',
    translation: 'Killed Sheep',
  },
  {
    stat: 'k-shulker',
    translation: 'Killed Shulker',
  },
  {
    stat: 'k-shulker_bullet',
    translation: 'Killed Shulker Bullet',
  },
  {
    stat: 'k-silverfish',
    translation: 'Killed Silverfish',
  },
  {
    stat: 'k-skeleton',
    translation: 'Killed Skeleton',
  },
  {
    stat: 'k-skeleton_horse',
    translation: 'Killed Skeleton Horse',
  },
  {
    stat: 'k-slime',
    translation: 'Killed Slime',
  },
  {
    stat: 'k-small_fireball',
    translation: 'Killed Small Fireball',
  },
  {
    stat: 'k-snow_golem',
    translation: 'Killed Snow Golem',
  },
  {
    stat: 'k-snowball',
    translation: 'Killed Snowball',
  },
  {
    stat: 'k-spectral_arrow',
    translation: 'Killed Spectral Arrow',
  },
  {
    stat: 'k-spider',
    translation: 'Killed Spider',
  },
  {
    stat: 'k-squid',
    translation: 'Killed Squid',
  },
  {
    stat: 'k-stray',
    translation: 'Killed Stray',
  },
  {
    stat: 'k-strider',
    translation: 'Killed Strider',
  },
  {
    stat: 'k-tadpole',
    translation: 'Killed Tadpole',
  },
  {
    stat: 'k-egg',
    translation: 'Killed Thrown Egg',
  },
  {
    stat: 'k-ender_pearl',
    translation: 'Killed Thrown Ender Pearl',
  },
  {
    stat: 'k-experience_bottle',
    translation: "Killed Thrown Bottle o' Enchanting",
  },
  {
    stat: 'k-potion',
    translation: 'Killed Potion',
  },
  {
    stat: 'k-trident',
    translation: 'Killed Trident',
  },
  {
    stat: 'k-trader_llama',
    translation: 'Killed Trader Llama',
  },
  {
    stat: 'k-tropical_fish',
    translation: 'Killed Tropical Fish',
  },
  {
    stat: 'k-turtle',
    translation: 'Killed Turtle',
  },
  {
    stat: 'k-vex',
    translation: 'Killed Vex',
  },
  {
    stat: 'k-villager',
    translation: 'Killed Villager',
  },
  {
    stat: 'k-vindicator',
    translation: 'Killed Vindicator',
  },
  {
    stat: 'k-wandering_trader',
    translation: 'Killed Wandering Trader',
  },
  {
    stat: 'k-warden',
    translation: 'Killed Warden',
  },
  {
    stat: 'k-witch',
    translation: 'Killed Witch',
  },
  {
    stat: 'k-wither',
    translation: 'Killed Wither',
  },
  {
    stat: 'k-wither_skeleton',
    translation: 'Killed Wither Skeleton',
  },
  {
    stat: 'k-wither_skull',
    translation: 'Killed Wither Skull',
  },
  {
    stat: 'k-wolf',
    translation: 'Killed Wolf',
  },
  {
    stat: 'k-zoglin',
    translation: 'Killed Zoglin',
  },
  {
    stat: 'k-zombie',
    translation: 'Killed Zombie',
  },
  {
    stat: 'k-zombie_horse',
    translation: 'Killed Zombie Horse',
  },
  {
    stat: 'k-zombie_villager',
    translation: 'Killed Zombie Villager',
  },
  {
    stat: 'k-zombified_piglin',
    translation: 'Killed Zombified Piglin',
  },
  {
    stat: 'k-player',
    translation: 'Killed Player',
  },
  {
    stat: 'k-fishing_bobber',
    translation: 'Killed Fishing Bobber',
  },
  {
    stat: 'kb-allay',
    translation: 'Killed By Allay',
  },
  {
    stat: 'kb-area_effect_cloud',
    translation: 'Killed By Area Effect Cloud',
  },
  {
    stat: 'kb-armor_stand',
    translation: 'Killed By Armor Stand',
  },
  {
    stat: 'kb-arrow',
    translation: 'Killed By Arrow',
  },
  {
    stat: 'kb-axolotl',
    translation: 'Killed By Axolotl',
  },
  {
    stat: 'kb-bat',
    translation: 'Killed By Bat',
  },
  {
    stat: 'kb-bee',
    translation: 'Killed By Bee',
  },
  {
    stat: 'kb-blaze',
    translation: 'Killed By Blaze',
  },
  {
    stat: 'kb-boat',
    translation: 'Killed By Boat',
  },
  {
    stat: 'kb-chest_boat',
    translation: 'Killed By Boat with Chest',
  },
  {
    stat: 'kb-cat',
    translation: 'Killed By Cat',
  },
  {
    stat: 'kb-cave_spider',
    translation: 'Killed By Cave Spider',
  },
  {
    stat: 'kb-chicken',
    translation: 'Killed By Chicken',
  },
  {
    stat: 'kb-cod',
    translation: 'Killed By Cod',
  },
  {
    stat: 'kb-cow',
    translation: 'Killed By Cow',
  },
  {
    stat: 'kb-creeper',
    translation: 'Killed By Creeper',
  },
  {
    stat: 'kb-dolphin',
    translation: 'Killed By Dolphin',
  },
  {
    stat: 'kb-donkey',
    translation: 'Killed By Donkey',
  },
  {
    stat: 'kb-dragon_fireball',
    translation: 'Killed By Dragon Fireball',
  },
  {
    stat: 'kb-drowned',
    translation: 'Killed By Drowned',
  },
  {
    stat: 'kb-elder_guardian',
    translation: 'Killed By Elder Guardian',
  },
  {
    stat: 'kb-end_crystal',
    translation: 'Killed By End Crystal',
  },
  {
    stat: 'kb-ender_dragon',
    translation: 'Killed By Ender Dragon',
  },
  {
    stat: 'kb-enderman',
    translation: 'Killed By Enderman',
  },
  {
    stat: 'kb-endermite',
    translation: 'Killed By Endermite',
  },
  {
    stat: 'kb-evoker',
    translation: 'Killed By Evoker',
  },
  {
    stat: 'kb-evoker_fangs',
    translation: 'Killed By Evoker Fangs',
  },
  {
    stat: 'kb-experience_orb',
    translation: 'Killed By Experience Orb',
  },
  {
    stat: 'kb-eye_of_ender',
    translation: 'Killed By Eye of Ender',
  },
  {
    stat: 'kb-falling_block',
    translation: 'Killed By Falling Block',
  },
  {
    stat: 'kb-firework_rocket',
    translation: 'Killed By Firework Rocket',
  },
  {
    stat: 'kb-fox',
    translation: 'Killed By Fox',
  },
  {
    stat: 'kb-frog',
    translation: 'Killed By Frog',
  },
  {
    stat: 'kb-ghast',
    translation: 'Killed By Ghast',
  },
  {
    stat: 'kb-giant',
    translation: 'Killed By Giant',
  },
  {
    stat: 'kb-glow_item_frame',
    translation: 'Killed By Glow Item Frame',
  },
  {
    stat: 'kb-glow_squid',
    translation: 'Killed By Glow Squid',
  },
  {
    stat: 'kb-goat',
    translation: 'Killed By Goat',
  },
  {
    stat: 'kb-guardian',
    translation: 'Killed By Guardian',
  },
  {
    stat: 'kb-hoglin',
    translation: 'Killed By Hoglin',
  },
  {
    stat: 'kb-horse',
    translation: 'Killed By Horse',
  },
  {
    stat: 'kb-husk',
    translation: 'Killed By Husk',
  },
  {
    stat: 'kb-illusioner',
    translation: 'Killed By Illusioner',
  },
  {
    stat: 'kb-iron_golem',
    translation: 'Killed By Iron Golem',
  },
  {
    stat: 'kb-item',
    translation: 'Killed By Item',
  },
  {
    stat: 'kb-item_frame',
    translation: 'Killed By Item Frame',
  },
  {
    stat: 'kb-fireball',
    translation: 'Killed By Fireball',
  },
  {
    stat: 'kb-leash_knot',
    translation: 'Killed By Leash Knot',
  },
  {
    stat: 'kb-lightning_bolt',
    translation: 'Killed By Lightning Bolt',
  },
  {
    stat: 'kb-llama',
    translation: 'Killed By Llama',
  },
  {
    stat: 'kb-llama_spit',
    translation: 'Killed By Llama Spit',
  },
  {
    stat: 'kb-magma_cube',
    translation: 'Killed By Magma Cube',
  },
  {
    stat: 'kb-marker',
    translation: 'Killed By Marker',
  },
  {
    stat: 'kb-minecart',
    translation: 'Killed By Minecart',
  },
  {
    stat: 'kb-chest_minecart',
    translation: 'Killed By Minecart with Chest',
  },
  {
    stat: 'kb-command_block_minecart',
    translation: 'Killed By Minecart with Command Block',
  },
  {
    stat: 'kb-furnace_minecart',
    translation: 'Killed By Minecart with Furnace',
  },
  {
    stat: 'kb-hopper_minecart',
    translation: 'Killed By Minecart with Hopper',
  },
  {
    stat: 'kb-spawner_minecart',
    translation: 'Killed By Minecart with Spawner',
  },
  {
    stat: 'kb-tnt_minecart',
    translation: 'Killed By Minecart with TNT',
  },
  {
    stat: 'kb-mule',
    translation: 'Killed By Mule',
  },
  {
    stat: 'kb-mooshroom',
    translation: 'Killed By Mooshroom',
  },
  {
    stat: 'kb-ocelot',
    translation: 'Killed By Ocelot',
  },
  {
    stat: 'kb-painting',
    translation: 'Killed By Painting',
  },
  {
    stat: 'kb-panda',
    translation: 'Killed By Panda',
  },
  {
    stat: 'kb-parrot',
    translation: 'Killed By Parrot',
  },
  {
    stat: 'kb-phantom',
    translation: 'Killed By Phantom',
  },
  {
    stat: 'kb-pig',
    translation: 'Killed By Pig',
  },
  {
    stat: 'kb-piglin',
    translation: 'Killed By Piglin',
  },
  {
    stat: 'kb-piglin_brute',
    translation: 'Killed By Piglin Brute',
  },
  {
    stat: 'kb-pillager',
    translation: 'Killed By Pillager',
  },
  {
    stat: 'kb-polar_bear',
    translation: 'Killed By Polar Bear',
  },
  {
    stat: 'kb-tnt',
    translation: 'Killed By Primed TNT',
  },
  {
    stat: 'kb-pufferfish',
    translation: 'Killed By Pufferfish',
  },
  {
    stat: 'kb-rabbit',
    translation: 'Killed By Rabbit',
  },
  {
    stat: 'kb-ravager',
    translation: 'Killed By Ravager',
  },
  {
    stat: 'kb-salmon',
    translation: 'Killed By Salmon',
  },
  {
    stat: 'kb-sheep',
    translation: 'Killed By Sheep',
  },
  {
    stat: 'kb-shulker',
    translation: 'Killed By Shulker',
  },
  {
    stat: 'kb-shulker_bullet',
    translation: 'Killed By Shulker Bullet',
  },
  {
    stat: 'kb-silverfish',
    translation: 'Killed By Silverfish',
  },
  {
    stat: 'kb-skeleton',
    translation: 'Killed By Skeleton',
  },
  {
    stat: 'kb-skeleton_horse',
    translation: 'Killed By Skeleton Horse',
  },
  {
    stat: 'kb-slime',
    translation: 'Killed By Slime',
  },
  {
    stat: 'kb-small_fireball',
    translation: 'Killed By Small Fireball',
  },
  {
    stat: 'kb-snow_golem',
    translation: 'Killed By Snow Golem',
  },
  {
    stat: 'kb-snowball',
    translation: 'Killed By Snowball',
  },
  {
    stat: 'kb-spectral_arrow',
    translation: 'Killed By Spectral Arrow',
  },
  {
    stat: 'kb-spider',
    translation: 'Killed By Spider',
  },
  {
    stat: 'kb-squid',
    translation: 'Killed By Squid',
  },
  {
    stat: 'kb-stray',
    translation: 'Killed By Stray',
  },
  {
    stat: 'kb-strider',
    translation: 'Killed By Strider',
  },
  {
    stat: 'kb-tadpole',
    translation: 'Killed By Tadpole',
  },
  {
    stat: 'kb-egg',
    translation: 'Killed By Thrown Egg',
  },
  {
    stat: 'kb-ender_pearl',
    translation: 'Killed By Thrown Ender Pearl',
  },
  {
    stat: 'kb-experience_bottle',
    translation: "Killed By Thrown Bottle o' Enchanting",
  },
  {
    stat: 'kb-potion',
    translation: 'Killed By Potion',
  },
  {
    stat: 'kb-trident',
    translation: 'Killed By Trident',
  },
  {
    stat: 'kb-trader_llama',
    translation: 'Killed By Trader Llama',
  },
  {
    stat: 'kb-tropical_fish',
    translation: 'Killed By Tropical Fish',
  },
  {
    stat: 'kb-turtle',
    translation: 'Killed By Turtle',
  },
  {
    stat: 'kb-vex',
    translation: 'Killed By Vex',
  },
  {
    stat: 'kb-villager',
    translation: 'Killed By Villager',
  },
  {
    stat: 'kb-vindicator',
    translation: 'Killed By Vindicator',
  },
  {
    stat: 'kb-wandering_trader',
    translation: 'Killed By Wandering Trader',
  },
  {
    stat: 'kb-warden',
    translation: 'Killed By Warden',
  },
  {
    stat: 'kb-witch',
    translation: 'Killed By Witch',
  },
  {
    stat: 'kb-wither',
    translation: 'Killed By Wither',
  },
  {
    stat: 'kb-wither_skeleton',
    translation: 'Killed By Wither Skeleton',
  },
  {
    stat: 'kb-wither_skull',
    translation: 'Killed By Wither Skull',
  },
  {
    stat: 'kb-wolf',
    translation: 'Killed By Wolf',
  },
  {
    stat: 'kb-zoglin',
    translation: 'Killed By Zoglin',
  },
  {
    stat: 'kb-zombie',
    translation: 'Killed By Zombie',
  },
  {
    stat: 'kb-zombie_horse',
    translation: 'Killed By Zombie Horse',
  },
  {
    stat: 'kb-zombie_villager',
    translation: 'Killed By Zombie Villager',
  },
  {
    stat: 'kb-zombified_piglin',
    translation: 'Killed By Zombified Piglin',
  },
  {
    stat: 'kb-player',
    translation: 'Killed By Player',
  },
  {
    stat: 'kb-fishing_bobber',
    translation: 'Killed By Fishing Bobber',
  },
  {
    stat: 'z-leave_game',
    translation: 'Games Quit',
  },
  {
    stat: 'z-play_time',
    translation: 'Time Played',
  },
  {
    stat: 'z-total_world_time',
    translation: 'Time with World Open',
  },
  {
    stat: 'z-time_since_death',
    translation: 'Time Since Last Death',
  },
  {
    stat: 'z-time_since_rest',
    translation: 'Time Since Last Rest',
  },
  {
    stat: 'z-sneak_time',
    translation: 'Sneak Time',
  },
  {
    stat: 'z-walk_one_cm',
    translation: 'Distance Walked',
  },
  {
    stat: 'z-crouch_one_cm',
    translation: 'Distance Crouched',
  },
  {
    stat: 'z-sprint_one_cm',
    translation: 'Distance Sprinted',
  },
  {
    stat: 'z-walk_on_water_one_cm',
    translation: 'Distance Walked on Water',
  },
  {
    stat: 'z-fall_one_cm',
    translation: 'Distance Fallen',
  },
  {
    stat: 'z-climb_one_cm',
    translation: 'Distance Climbed',
  },
  {
    stat: 'z-fly_one_cm',
    translation: 'Distance Flown',
  },
  {
    stat: 'z-walk_under_water_one_cm',
    translation: 'Distance Walked under Water',
  },
  {
    stat: 'z-minecart_one_cm',
    translation: 'Distance by Minecart',
  },
  {
    stat: 'z-boat_one_cm',
    translation: 'Distance by Boat',
  },
  {
    stat: 'z-pig_one_cm',
    translation: 'Distance by Pig',
  },
  {
    stat: 'z-horse_one_cm',
    translation: 'Distance by Horse',
  },
  {
    stat: 'z-aviate_one_cm',
    translation: 'Distance by Elytra',
  },
  {
    stat: 'z-swim_one_cm',
    translation: 'Distance Swum',
  },
  {
    stat: 'z-strider_one_cm',
    translation: 'Distance by Strider',
  },
  {
    stat: 'z-jump',
    translation: 'Jumps',
  },
  {
    stat: 'z-drop',
    translation: 'Items Dropped',
  },
  {
    stat: 'z-damage_dealt',
    translation: 'Damage Dealt',
  },
  {
    stat: 'z-damage_dealt_absorbed',
    translation: 'Damage Dealt (Absorbed)',
  },
  {
    stat: 'z-damage_dealt_resisted',
    translation: 'Damage Dealt (Resisted)',
  },
  {
    stat: 'z-damage_taken',
    translation: 'Damage Taken',
  },
  {
    stat: 'z-damage_blocked_by_shield',
    translation: 'Damage Blocked by Shield',
  },
  {
    stat: 'z-damage_absorbed',
    translation: 'Damage Absorbed',
  },
  {
    stat: 'z-damage_resisted',
    translation: 'Damage Resisted',
  },
  {
    stat: 'z-deaths',
    translation: 'Number of Deaths',
  },
  {
    stat: 'z-mob_kills',
    translation: 'Mob Kills',
  },
  {
    stat: 'z-animals_bred',
    translation: 'Animals Bred',
  },
  {
    stat: 'z-player_kills',
    translation: 'Player Kills',
  },
  {
    stat: 'z-fish_caught',
    translation: 'Fish Caught',
  },
  {
    stat: 'z-talked_to_villager',
    translation: 'Talked to Villagers',
  },
  {
    stat: 'z-traded_with_villager',
    translation: 'Traded with Villagers',
  },
  {
    stat: 'z-eat_cake_slice',
    translation: 'Cake Slices Eaten',
  },
  {
    stat: 'z-fill_cauldron',
    translation: 'Cauldrons Filled',
  },
  {
    stat: 'z-use_cauldron',
    translation: 'Water Taken from Cauldron',
  },
  {
    stat: 'z-clean_armor',
    translation: 'Armor Pieces Cleaned',
  },
  {
    stat: 'z-clean_banner',
    translation: 'Banners Cleaned',
  },
  {
    stat: 'z-clean_shulker_box',
    translation: 'Shulker Boxes Cleaned',
  },
  {
    stat: 'z-interact_with_brewingstand',
    translation: 'Interactions with Brewing Stand',
  },
  {
    stat: 'z-interact_with_beacon',
    translation: 'Interactions with Beacon',
  },
  {
    stat: 'z-inspect_dropper',
    translation: 'Droppers Searched',
  },
  {
    stat: 'z-inspect_hopper',
    translation: 'Hoppers Searched',
  },
  {
    stat: 'z-inspect_dispenser',
    translation: 'Dispensers Searched',
  },
  {
    stat: 'z-play_noteblock',
    translation: 'Note Blocks Played',
  },
  {
    stat: 'z-tune_noteblock',
    translation: 'Note Blocks Tuned',
  },
  {
    stat: 'z-pot_flower',
    translation: 'Plants Potted',
  },
  {
    stat: 'z-trigger_trapped_chest',
    translation: 'Trapped Chests Triggered',
  },
  {
    stat: 'z-open_enderchest',
    translation: 'Ender Chests Opened',
  },
  {
    stat: 'z-enchant_item',
    translation: 'Items Enchanted',
  },
  {
    stat: 'z-play_record',
    translation: 'Music Discs Played',
  },
  {
    stat: 'z-interact_with_furnace',
    translation: 'Interactions with Furnace',
  },
  {
    stat: 'z-interact_with_crafting_table',
    translation: 'Interactions with Crafting Table',
  },
  {
    stat: 'z-open_chest',
    translation: 'Chests Opened',
  },
  {
    stat: 'z-sleep_in_bed',
    translation: 'Times Slept in a Bed',
  },
  {
    stat: 'z-open_shulker_box',
    translation: 'Shulker Boxes Opened',
  },
  {
    stat: 'z-open_barrel',
    translation: 'Barrels Opened',
  },
  {
    stat: 'z-interact_with_blast_furnace',
    translation: 'Interactions with Blast Furnace',
  },
  {
    stat: 'z-interact_with_smoker',
    translation: 'Interactions with Smoker',
  },
  {
    stat: 'z-interact_with_lectern',
    translation: 'Interactions with Lectern',
  },
  {
    stat: 'z-interact_with_campfire',
    translation: 'Interactions with Campfire',
  },
  {
    stat: 'z-interact_with_cartography_table',
    translation: 'Interactions with Cartography Table',
  },
  {
    stat: 'z-interact_with_loom',
    translation: 'Interactions with Loom',
  },
  {
    stat: 'z-interact_with_stonecutter',
    translation: 'Interactions with Stonecutter',
  },
  {
    stat: 'z-bell_ring',
    translation: 'Bells Rung',
  },
  {
    stat: 'z-raid_trigger',
    translation: 'Raids Triggered',
  },
  {
    stat: 'z-raid_win',
    translation: 'Raids Won',
  },
  {
    stat: 'z-interact_with_anvil',
    translation: 'Interactions with Anvil',
  },
  {
    stat: 'z-interact_with_grindstone',
    translation: 'Interactions with Grindstone',
  },
  {
    stat: 'z-target_hit',
    translation: 'Targets Hit',
  },
  {
    stat: 'z-interact_with_smithing_table',
    translation: 'Interactions with Smithing Table',
  },
] as const;

export default allScboreboards;
