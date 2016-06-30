var data = new Object();

data['character_name'] = 'Basstss';
data['species_talent'] = 'Saurian';
data['speciality'] = 'Tribesman';
data['class_1'] = 'Scout';
data['level_1'] = 3;
data['class_2'] = 'Soldier';
data['level_2'] = 2;
data['class_level_1'] = data['class_1'] + ' / ' + data['level_1'];
data['class_level_2'] = data['class_2'] + ' / ' + data['level_2'];
data['class_level_3'] = '';
data['level_total'] = data['level_1'] + data['level_2'];
data['player_name'] = 'Steve Rowe';
data['current_xp'] = '10,000';
data['next_level_xp'] = '15,000';
data['gender'] = 'Male';
data['age'] = '18';
data['height'] = '5\' 9\"';
data['weight'] = '165#';
data['eyes'] = 'Yellow';
data['hair'] = 'No';
data['skin'] = 'Green/Brown';
data['action_dice'] = 3;
data['action_die_type'] = 4;
data['str'] = 17;
data['dex'] = 16;
data['con'] = 12;
data['int'] = 14;
data['wis'] = 12;
data['cha'] = 10;
data['str_mod'] = 3;
data['dex_mod'] = 3;
data['con_mod'] = 1;
data['int_mod'] = 2;
data['wis_mod'] = 1;
data['cha_mod'] = 0;

data['legend'] = 2;
data['reputation'] = 51;
data['heroic_renown'] = 0;
data['military_renown'] = 1;
data['noble_renown'] = 0;
data['renown_total'] = 
    data['heroic_renown'] + 
    data['military_renown'] +
    data['noble_renown'];

data['total_studies'] = 2;

data['acrobatics_org'] = true;
data['acrobatics_ranks'] = 5;
data['acrobatics_misc'] = 0;
data['acrobatics_attr'] = data['dex_mod'];
data['acrobatics_total'] = 
  data['acrobatics_ranks'] +
  data['acrobatics_misc'] +
  data['acrobatics_attr'];
data['acrobatics_threat'] = 20;
 
data['athletics_org'] = true;
data['athletics_ranks'] = 7;
data['athletics_misc'] = 2; // Skill Mastery: Athlete
data['athletics_attr'] = data['str_mod'];
data['athletics_total'] =
  data['athletics_ranks'] +
  data['athletics_misc'] +
  data['athletics_attr'];
data['athletics_threat'] = 19;
 
data['blend_org'] = true;
data['blend_ranks'] = 5;
data['blend_misc'] = 0;
data['blend_attr'] = data['cha_mod'];
data['blend_total'] =
  data['blend_ranks'] +
  data['blend_misc'] +
  data['blend_attr'];
data['blend_threat'] = 20;
 
data['bluff_org'] = true;
data['bluff_ranks'] = 4;
data['bluff_misc'] = 0;
data['bluff_attr'] = data['cha_mod'];
data['bluff_total'] =
  data['bluff_ranks'] +
  data['bluff_misc'] +
  data['bluff_attr'];
data['bluff_threat'] = 20;
 
data['crafting_org'] = true;
data['crafting_ranks'] = 1;
data['crafting_misc'] = 0;
data['crafting_attr'] = data['int_mod'];
data['crafting_total'] =
  data['crafting_ranks'] +
  data['crafting_misc'] +
  data['crafting_attr'];
data['crafting_threat'] = 20;
  
data['disguise_org'] = false;
data['disguise_ranks'] = 0;
data['disguise_misc'] = -6;
data['disguise_attr'] = data['cha_mod'];
data['disguise_total'] =
  data['disguise_ranks'] +
  data['disguise_misc'] +
  data['disguise_attr'];
data['disguise_threat'] = 20;

data['haggle_org'] = false;
data['haggle_ranks'] = 0;
data['haggle_misc'] = 0;
data['haggle_attr'] = data['wis_mod'];
data['haggle_total'] =
  data['haggle_ranks'] +
  data['haggle_misc'] +
  data['haggle_attr'];
data['haggle_threat'] = 20;

data['impress_org'] = false;
data['impress_ranks'] = 0;
data['impress_attr'] = data['cha_mod'];
data['impress_misc'] = 0;
data['impress_total'] =
  data['impress_ranks'] +
  data['impress_misc'] +
  data['impress_attr'];
data['impress_threat'] = 20;

data['intimidate_org'] = true;
data['intimidate_ranks'] = 4;
data['intimidate_attr'] = data['wis_mod'];
data['intimidate_misc'] = 0;
data['intimidate_total'] =
  data['intimidate_ranks'] +
  data['intimidate_misc'] +
  data['intimidate_attr'];
data['intimidate_threat'] = 20;

data['investigate_org'] = false;
data['investigate_ranks'] = 0;
data['investigate_attr'] = data['wis_mod'];
data['investigate_misc'] = 0;
data['investigate_total'] =
  data['investigate_ranks'] +
  data['investigate_misc'] +
  data['investigate_attr'];
data['investigate_threat'] = 20;

data['knowledge_org'] = true;
data['knowledge_ranks'] = 0;
data['knowledge_attr'] = data['int_mod'];
data['knowledge_misc'] = data['total_studies'];
data['knowledge_threat'] = 20;
data['knowledge_total'] = data['knowledge_ranks'] + data['knowledge_attr'] + data['knowledge_misc'];

data['medicine_org'] = true;
data['medicine_ranks'] = 1;
data['medicine_attr'] = data['int_mod'];
data['medicine_misc'] = 0;
data['medicine_total'] = 
  data['medicine_ranks'] +
  data['medicine_misc'] +
  data['medicine_attr'];
data['medicine_threat'] = 20;

data['notice_org'] = true;
data['notice_ranks'] = 6;
data['notice_attr'] = data['wis_mod'];
data['notice_misc'] = 0;
data['notice_total'] = 
  data['notice_ranks'] +
  data['notice_misc'] +
  data['notice_attr'];
data['notice_threat'] = 20;

data['prestidigitation_org'] = false;
data['prestidigitation_ranks'] = 0;
data['prestidigitation_attr'] = data['dex_mod'];
data['prestidigitation_misc'] = 0;
data['prestidigitation_total'] =
  data['prestidigitation_ranks'] +
  data['prestidigitation_misc'] +
  data['prestidigitation_attr'];
data['prestidigitation_threat'] = 20;

data['resolve_org'] = true;
data['resolve_ranks'] = 7;
data['resolve_attr'] = data['con_mod'];
data['resolve_misc'] = 2; // Skill Mastery: Athlete
data['resolve_total'] =
  data['resolve_ranks'] +
  data['resolve_misc'] +
  data['resolve_attr'];
data['resolve_threat'] = 19;

data['ride_org'] = true;
data['ride_ranks'] = 0;
data['ride_attr'] = data['dex_mod'];
data['ride_misc'] = 0;
data['ride_total'] =
  data['ride_ranks'] +
  data['ride_misc'] +
  data['ride_attr'];
data['ride_threat'] = 20;

data['search_org'] = true;
data['search_total'] = 6;
data['search_ranks'] = 3;
data['search_attr'] = data['int_mod'];
data['search_misc'] = 0;
data['search_total'] =
  data['search_ranks'] +
  data['search_misc'] +
  data['search_attr'];
data['search_threat'] = 20;

data['sense motive_org'] = true;
data['sense motive_ranks'] = 5;
data['sense motive_attr'] = data['wis_mod'];
data['sense motive_misc'] = 0;
data['sense motive_total'] =
  data['sense motive_ranks'] +
  data['sense motive_misc'] +
  data['sense motive_attr'];
data['sense motive_threat'] = 20;

data['sneak_org'] = true;
data['sneak_ranks'] = 3;
data['sneak_attr'] = data['dex_mod'];
data['sneak_misc'] = 4;
data['sneak_total'] =
  data['sneak_ranks'] +
  data['sneak_misc'] +
  data['sneak_attr'];
data['sneak_threat'] = 20;

data['spellcasting_org'] = false;
data['spellcasting_ranks'] = 0;
data['spellcasting_attr'] = 0;
data['spellcasting_misc'] = 0;
data['spellcasting_total'] = 0;
data['spellcasting_threat'] = 21;

data['survival_org'] = true;
data['survival_ranks'] = 7;
data['survival_attr'] = data['wis_mod'];
data['survival_misc'] = 0;
data['survival_total'] =
  data['survival_ranks'] +
  data['survival_misc'] +
  data['survival_attr'];
data['survival_threat'] = 20;

data['tactics_org'] = true;
data['tactics_ranks'] = 4;
data['tactics_attr'] = data['int_mod'];
data['tactics_misc'] = 0;
data['tactics_total'] =
  data['tactics_ranks'] +
  data['tactics_misc'] +
  data['tactics_attr'];
data['tactics_threat'] = 20;

data['interest_0'] = 'Native Language: Saurian';
data['interest_1'] = 'Study: Saurian Culture';
data['interest_2'] = 'Study: Quelya Culture';
data['interest_3'] = 'Language: Human';
data['interest_4'] = '';
data['interest_5'] = '';
data['interest_6'] = '';
data['interest_7'] = '';
data['interest_8'] = '';
data['interest_9'] = '';

data['craft_0'] = 'Wood (traps)';
data['craft_1'] = '';
data['craft_2'] = '';
data['craft_3'] = '';

data['vehicle_0'] = 'Ground Mounts';
data['vehicle_1'] = '';
data['vehicle_2'] = '';
data['vehicle_3'] = '';

data['max_vitality'] = 3*(9 + data['con_mod']) + 2*(12 + data['con_mod']);
data['lost_vitality'] = 0;
data['cur_vitality'] = data['max_vitality'];

data['max_wounds'] = data['con'];
data['lost_wounds'] = 0;
data['cur_wounds'] = data['max_wounds'];

data['armor_type'] = 'Armor of Regeneration (Fitted Scale Mail)';
data['armor_acp'] = 0;
data['armor_dp'] = 0;
data['armor_mp'] = -5;

data['defense_class_bonus'] = 3;
data['defense_dex_mod'] = data['dex_mod'];
data['defense_size_mod'] = 0;
data['defense_misc_mod'] = 4; // +1 for agile defense, +1 for guard with spear, +2 for rough living
data['defense_armor_mod'] = data['armor_dp'];
data['defense_total'] = 10 + data['defense_class_bonus'] +
  data['defense_dex_mod'] + data['defense_size_mod'] +
  data['defense_misc_mod'] + data['defense_armor_mod'];

data['dr'] = '4 (7)';
data['initiative_class_bonus'] = 5;
data['initiative_dex_mod'] = 3;
data['initiative_misc_mod'] = 0;
data['initiative_total'] = data['initiative_class_bonus'] + 
  data['initiative_dex_mod'] + data['initiative_misc_mod'];

data['fortitude_base'] = 5;
data['fortitude_attr_mod'] = data['con_mod'];
data['fortitude_misc_mod'] = 0;
data['fortitude_total'] = data['fortitude_base'] + 
  data['fortitude_attr_mod'] + data['fortitude_misc_mod'];

data['reflex_base'] = 3;
data['reflex_attr_mod'] = data['dex_mod'];
data['reflex_misc_mod'] = 0;
data['reflex_total'] = data['reflex_base'] +
  data['reflex_attr_mod'] + data['reflex_misc_mod'];

data['will_base'] = 4;
data['will_attr_mod'] = data['wis_mod'];
data['will_misc_mod'] = 0;
data['will_total'] = data['will_base'] +
  data['will_attr_mod'] + data['will_misc_mod'];

data['base_attack'] = 4;

data['unarmed_attr_mod'] = data['str_mod'];
data['unarmed_misc_mod'] = 1;
data['unarmed_total'] = data['base_attack'] +
  data['unarmed_attr_mod'] + data['unarmed_misc_mod'];

data['melee_attr_mod'] = data['str_mod'];
data['melee_misc_mod'] = 1;
data['melee_total'] = data['base_attack'] +
  data['melee_attr_mod'] + data['melee_misc_mod'];

data['ranged_attr_mod'] = data['dex_mod'];
data['ranged_misc_mod'] = 0;
data['ranged_total'] = data['base_attack'] +
  data['ranged_attr_mod'] + data['ranged_misc_mod'];

data['weapon1_name'] = 'Tail Slap';
data['weapon1_type'] = 'b';
data['weapon1_bonus'] = data['unarmed_total'];
data['weapon1_damage'] = '1d8+3';
data['weapon1_threat'] = 20;
data['weapon1_size'] = 'N/A';
data['weapon1_weight'] = 0;
data['weapon1_range'] = 'N/A';
data['weapon1_shots'] = 'N/A';
data['weapon1_props'] = 'Reach +1';

data['weapon2_name'] = 'Bite';
data['weapon2_type'] = 'p';
data['weapon2_bonus'] = data['melee_total'];
data['weapon2_damage'] = '1d8+3';
data['weapon2_threat'] = 18;
data['weapon2_size'] = 'N/A';
data['weapon2_weight'] = 0;
data['weapon2_range'] = 'N/A';
data['weapon2_shots'] = 'N/A';
data['weapon2_props'] = '';

data['weapon3_name'] = 'Boar Spear';
data['weapon3_type'] = 'p';
data['weapon3_bonus'] = data['melee_total'];
data['weapon3_damage'] = '1d8+3';
data['weapon3_threat'] = 19;
data['weapon3_size'] = 'M/2h';
data['weapon3_weight'] = 10.0;
data['weapon3_range'] = 'N/A';
data['weapon3_shots'] = 'N/A';
data['weapon3_props'] = 'Reach +1, Guard +1';

data['panache'] = 1;
data['prudence'] = 0;
data['total_lifestyle'] = data['panache'] + data['prudence'] + data['cha_mod'];

data['cash_in_hand'] = 6510;
data['stake'] = 0;

data['appearance_bonus'] = 0;
data['money_saved'] = '15%';
data['income'] = 10 * data['panache'];

data['walk_speed'] = 30;
data['other_speed'] = 'N/A';
data['travel_speed'] = 3;

data['unarmed_prof'] = true;
data['unarmed_fort'] = true;
data['bows_prof'] = true;
data['bows_fort'] = true;
data['blunt_prof'] = false;
data['blunt_fort'] = false;
data['black_powder_prof'] = false;
data['black_powder_fort'] = false;
data['edged_prof'] = true;
data['edged_fort'] = true;
data['siege_prof'] = false;
data['siege_fort'] = false;
data['hurled_prof'] = true;
data['hurled_fort'] = false;

var abilities = new Array();

abilities.push( [ 'Stalker', 'Always get at least 21 on survival and tactics' ] );
abilities.push( [ 'Tribesman', 'Basic Skill Mastery: Athlete (+2, 19 threat on Athletics and Resolve)' ] );
abilities.push( [ 'Linked Skills', 'Resolve &amp; Survival' ] );
abilities.push( [ 'Agile Defense', '+1 Defense' ] );
abilities.push( [ 'Cold-Blooded', 'Only eat 1/day.  Sickened by cold attacks' ] );
abilities.push( [ 'Darkvision I', 'Ignore penalties for dim and feint light' ] );
abilities.push( [ 'Jungle Clutch', '+2 with climb, Chameleon (1 min cast)' ] );
abilities.push( [ 'Pathfinder Basics (Jungle)', '+2 bonus with sneak checks' ] );
abilities.push( [ 'Contempt', 'Free attack against std character 3 times per combat' ]);
abilities.push( [ 'Fortunes of War I', 'DR 1 (DR 2 during dramatic scenes)' ]);
abilities.push( [ 'Rough Living', '+2 Defense, +2 to Saves prompted by environment' ]);
abilities.push( [ 'Ring of the Barbarian', 'Brawn I 2/scene, Cold Damage Aura (1d6)' ]);
abilities.push( [ 'Armor of Regeneration', 'Regeneration II' ]);