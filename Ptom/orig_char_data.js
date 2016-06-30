var data = new Object();

data['character_name'] = 'Ptom';
data['species_talent'] = 'Halfling';
data['speciality'] = 'Warden';
data['class_1'] = 'Scout';
data['level_1'] = 1;
data['class_level_1'] = data['class_1'] + ' / ' + data['level_1'];
data['class_2'] = 'Priest';
data['level_2'] = 7;
data['class_level_2'] = data['class_2'] + ' / ' + data['level_2'];
data['class_3'] = 'Mage';
data['level_3'] = 7;
data['class_level_3'] = data['class_3'] + ' / ' + data['level_3'];
data['caster_level'] = data['level_2'] + data['level_3'];
data['player_name'] = 'Steve Rowe';
data['current_xp'] = '200,000';
data['next_level_xp'] = '250,000';
data['gender'] = 'M';
data['age'] = '30';
data['height'] = '3\' 0\"';
data['weight'] = '34#';
data['eyes'] = 'Green';
data['hair'] = 'Brown';
data['skin'] = 'Tan';
data['action_dice'] = 5;
data['action_die_type'] = 8;
data['action_die_explode'] = data['action_die_type']; // For Lady Luck's smile, put a -1 in here.
data['str'] = 14;
data['dex'] = 14;
data['con'] = 14;
data['int'] = 18;
data['wis'] = 14;
data['cha'] = 13;
data['str_mod'] = 2;
data['dex_mod'] = 2;
data['con_mod'] = 2;
data['int_mod'] = 4;
data['wis_mod'] = 2;
data['cha_mod'] = 1;

data['acrobatics_org'] = true;
data['acrobatics_ranks'] = 5;
data['acrobatics_misc'] = 0;
data['acrobatics_attr'] = data['dex_mod'];
data['acrobatics_total'] = 
  data['acrobatics_ranks'] +
  data['acrobatics_misc'] +
  data['acrobatics_attr'];
data['acrobatics_threat'] = 20;
data['acrobatics_notes'] = '';
 
data['athletics_org'] = true;
data['athletics_ranks'] = 18;
data['athletics_misc'] = 2;
data['athletics_attr'] = data['str_mod'];
data['athletics_total'] =
  data['athletics_ranks'] +
  data['athletics_misc'] +
  data['athletics_attr'];
data['athletics_threat'] = 19;
data['athletics_notes'] = 'Add +2 to climb.';;
 
data['blend_org'] = true;
data['blend_ranks'] = 8;
data['blend_misc'] = 8;
data['blend_attr'] = data['cha_mod'];
data['blend_total'] =
  data['blend_ranks'] +
  data['blend_misc'] +
  data['blend_attr'];
data['blend_threat'] = 20;
data['blend_notes'] = '-4 when not terrain';
 
data['bluff_org'] = true;
data['bluff_ranks'] = 8;
data['bluff_misc'] = 0;
data['bluff_attr'] = data['cha_mod'];
data['bluff_total'] =
  data['bluff_ranks'] +
  data['bluff_misc'] +
  data['bluff_attr'];
data['bluff_threat'] = 20;
data['bluff_notes'] = '';

 
data['crafting_org'] = true;
data['crafting_ranks'] = 1;
data['crafting_misc'] = 0;
data['crafting_attr'] = data['int_mod'];
data['crafting_total'] =
  data['crafting_ranks'] +
  data['crafting_misc'] +
  data['crafting_attr'];
data['crafting_threat'] = 20;
data['crafting_notes'] = '';
  
data['disguise_org'] = true;
data['disguise_ranks'] = 0;
data['disguise_misc'] = 0;
data['disguise_attr'] = data['cha_mod'];
data['disguise_total'] =
  data['disguise_ranks'] +
  data['disguise_misc'] +
  data['disguise_attr'];
data['disguise_threat'] = 20;
data['disguise_notes'] = '';

data['haggle_org'] = true;
data['haggle_ranks'] = 1;
data['haggle_misc'] = 0;
data['haggle_attr'] = data['wis_mod'];
data['haggle_total'] =
  data['haggle_ranks'] +
  data['haggle_misc'] +
  data['haggle_attr'];
data['haggle_threat'] = 20;
data['haggle_notes'] = '';

data['impress_org'] = true;
data['impress_ranks'] = 17;
data['impress_attr'] = data['cha_mod'];
data['impress_misc'] = 0;
data['impress_total'] =
  data['impress_ranks'] +
  data['impress_misc'] +
  data['impress_attr'];
data['impress_threat'] = 20;
data['impress_notes'] = '';

data['intimidate_org'] = true;
data['intimidate_ranks'] = 12;
data['intimidate_attr'] = data['wis_mod'];
data['intimidate_misc'] = 0;
data['intimidate_total'] =
  data['intimidate_ranks'] +
  data['intimidate_misc'] +
  data['intimidate_attr'];
data['intimidate_threat'] = 20;
data['intimidate_notes'] = '';

data['investigate_org'] = true;
data['investigate_ranks'] = 15;
data['investigate_attr'] = data['wis_mod'];
data['investigate_misc'] = 0;
data['investigate_total'] =
  data['investigate_ranks'] +
  data['investigate_misc'] +
  data['investigate_attr'];
data['investigate_threat'] = 20;
data['investigate_notes'] = 'Practiced';

data['medicine_org'] = true;
data['medicine_ranks'] = 10;
data['medicine_attr'] = data['int_mod'];
data['medicine_misc'] = 0;
data['medicine_total'] = 
  data['medicine_ranks'] +
  data['medicine_misc'] +
  data['medicine_attr'];
data['medicine_threat'] = 20;
data['medicine_notes'] = '';

data['notice_org'] = true;
data['notice_ranks'] = 13;
data['notice_attr'] = data['wis_mod'];
data['notice_misc'] = 0;
data['notice_total'] = 
  data['notice_ranks'] +
  data['notice_misc'] +
  data['notice_attr'];
data['notice_threat'] = 20;
data['notice_notes'] = '';

data['prestidigitation_org'] = true;
data['prestidigitation_ranks'] = 4;
data['prestidigitation_attr'] = data['dex_mod'];
data['prestidigitation_misc'] = 0;
data['prestidigitation_total'] =
  data['prestidigitation_ranks'] +
  data['prestidigitation_misc'] +
  data['prestidigitation_attr'];
data['prestidigitation_threat'] = 20;
data['prestidigitation_notes'] = '';

data['resolve_org'] = true;
data['resolve_ranks'] = 18;
data['resolve_attr'] = data['con_mod'];
data['resolve_misc'] = 2;
data['resolve_total'] =
  data['resolve_ranks'] +
  data['resolve_misc'] +
  data['resolve_attr'];
data['resolve_threat'] = 19;
data['resolve_notes'] = 'SM: Athlete';

data['ride_org'] = true;
data['ride_ranks'] = 6;
data['ride_attr'] = data['dex_mod'];
data['ride_misc'] = 0;
data['ride_total'] =
  data['ride_ranks'] +
  data['ride_misc'] +
  data['ride_attr'];
data['ride_threat'] = 20;
data['ride_notes'] = 'Alignment';

data['search_org'] = true;
data['search_ranks'] = 10;
data['search_attr'] = data['int_mod'];
data['search_misc'] = 0;
data['search_total'] =
  data['search_ranks'] +
  data['search_misc'] +
  data['search_attr'];
data['search_threat'] = 20;
data['search_notes'] = 'Alignment';

data['sense motive_org'] = true;
data['sense motive_ranks'] = 13;
data['sense motive_attr'] = data['wis_mod'];
data['sense motive_misc'] = 0;
data['sense motive_total'] =
  data['sense motive_ranks'] +
  data['sense motive_misc'] +
  data['sense motive_attr'];
data['sense motive_threat'] = 20;
data['sense motive_notes'] = '';

data['sneak_org'] = true;
data['sneak_ranks'] = 10;
data['sneak_attr'] = data['dex_mod'];
data['sneak_misc'] = 6;
data['sneak_total'] =
  data['sneak_ranks'] +
  data['sneak_misc'] +
  data['sneak_attr'];
data['sneak_threat'] = 20;
data['sneak_notes'] = '-2 if not terrain, Alignment';

data['spellcasting_org'] = true;
data['spellcasting_ranks'] = 18;
data['spellcasting_attr'] = data['int_mod'];
data['spellcasting_misc'] = 0;
data['spellcasting_total'] = data['spellcasting_ranks'] + data['spellcasting_attr'] + data['spellcasting_misc'];
data['spellcasting_threat'] = 20;
data['spellcasting_notes'] = '';

data['survival_org'] = true;
data['survival_ranks'] = 14;
data['survival_attr'] = data['wis_mod'];
data['survival_misc'] = 9;
data['survival_total'] =
  data['survival_ranks'] +
  data['survival_misc'] +
  data['survival_attr'];
data['survival_threat'] = 20;
data['survival_notes'] = '-4 if not terrain.  Stalker.  Alignment';

data['tactics_org'] = true;
data['tactics_ranks'] = 11;
data['tactics_attr'] = data['int_mod'];
data['tactics_misc'] = 0;
data['tactics_total'] =
  data['tactics_ranks'] +
  data['tactics_misc'] +
  data['tactics_attr'];
data['tactics_threat'] = 20;
data['tactics_notes'] = 'Stalker';

data['interest_0'] = 'Native Language: Pterran';
data['interest_1'] = 'Language: Human';
data['interest_2'] = 'Language: Halfling';
data['interest_3'] = 'Alignment: Nature';
data['interest_4'] = 'Study: New Scale Culture';
data['interest_5'] = 'Study: History';
data['interest_6'] = 'Study: Nature';
data['interest_7'] = 'Study: Sorcerer Kings';
data['interest_8'] = 'Study: Life Manipulation';
data['interest_9'] = 'Study: Rhul-Thaun Culture';
data['interest_10'] = '';
data['interest_11'] = '';

data['total_studies'] = 0;
for (i = 0; i < 10; ++i)
{
	ix = 'interest_' + i;
	if (data[ix].indexOf('Study:') == 0) // This interest is a study
	{
		++data['total_studies'];
	}
}

/*
	NOTE: We define Knowledge like a skill so that we can make "knowledge checks".  You
	can't have ranks in it, but its misc modifier is the total number of studies.
*/
data['knowledge_org'] = true;
data['knowledge_ranks'] = 0;
data['knowledge_attr'] = data['int_mod'];
data['knowledge_misc'] = data['total_studies'];
data['knowledge_threat'] = 20;
data['knowledge_notes'] = '';
data['knowledge_total'] = data['knowledge_ranks'] + data['knowledge_attr'] + data['knowledge_misc'];

data['craft_0'] = 'Pharmacy';
data['craft_1'] = '';
data['craft_2'] = '';
data['craft_3'] = '';

data['vehicle_0'] = 'Ground Mounts';
data['vehicle_1'] = 'Flying Mounts';
data['vehicle_2'] = '';
data['vehicle_3'] = '';

var class_vitality_per_level = new Object();
class_vitality_per_level[''] = 0;
class_vitality_per_level['Scout'] = 9;
class_vitality_per_level['Priest'] = 9;
class_vitality_per_level['Mage'] = 6;

data['max_vitality'] = data['level_1'] * (data['con_mod'] + class_vitality_per_level[data['class_1']]);

if (data['level_2']) {
	data['max_vitality'] += data['level_2'] * (data['con_mod'] + class_vitality_per_level[data['class_2']]);
}

if (data['level_3']) {
	data['max_vitality'] += data['level_3'] * (data['con_mod'] + class_vitality_per_level[data['class_3']]);
}

data['legend'] = 12;
data['reputation'] = '';
data['heroic_renown'] = 4;
data['military_renown'] = 0;
data['noble_renown'] = 0;
data['total_renown'] = data['heroic_renown'] + data['military_renown'] + data['noble_renown'];
data['heroic_title'] = 'Champion';
data['military_title'] = '';
data['noble_title'] = '';

data['lost_vitality'] = 0;
data['cur_vitality'] = data['max_vitality'];

data['max_wounds'] = Math.ceil(data['con'] * 2 / 3); // This varies based on race.
data['lost_wounds'] = 0;
data['cur_wounds'] = data['max_wounds'];

data['defense_class_bonus'] = 10;
data['defense_dex_mod'] = data['int_mod']; // INT here because I have Martial Arts / Master's Art
data['defense_size_mod'] = 1;
data['defense_misc_mod'] = 0;
data['defense_armor_mod'] = 0;
data['defense_total'] = 10 + data['defense_class_bonus'] +
  data['defense_dex_mod'] + data['defense_size_mod'] +
  data['defense_misc_mod'] + data['defense_armor_mod'];

data['dr'] = '2 (4)';
data['initiative_class_bonus'] = 8;
data['initiative_dex_mod'] = data['int_mod'];  // INT here because I have Martial Arts / Master's Art
data['initiative_misc_mod'] = 5;  // Warden Specialty
data['initiative_total'] = data['initiative_class_bonus'] + 
  data['initiative_dex_mod'] + data['initiative_misc_mod'];

data['fortitude_base'] = 8;
data['fortitude_attr_mod'] = data['con_mod'];
data['fortitude_misc_mod'] = 0;
data['fortitude_total'] = data['fortitude_base'] + 
  data['fortitude_attr_mod'] + data['fortitude_misc_mod'];

data['reflex_base'] = 6;
data['reflex_attr_mod'] = data['dex_mod'];
data['reflex_misc_mod'] = 0;
data['reflex_total'] = data['reflex_base'] +
  data['reflex_attr_mod'] + data['reflex_misc_mod'];

data['will_base'] = 9;
data['will_attr_mod'] = data['wis_mod'];
data['will_misc_mod'] = 0;
data['will_total'] = data['will_base'] +
  data['will_attr_mod'] + data['will_misc_mod'];

data['base_attack'] = 8;

data['unarmed_attr_mod'] = data['int_mod']; // Using INT because of Martial Arts
data['unarmed_misc_mod'] = 1; // Forte
data['unarmed_total'] = data['base_attack'] +
  data['unarmed_attr_mod'] + data['unarmed_misc_mod'];

data['melee_attr_mod'] = data['str_mod'];
data['melee_misc_mod'] = 0;
data['melee_total'] = data['base_attack'] +
  data['melee_attr_mod'] + data['melee_misc_mod'];

data['ranged_attr_mod'] = data['dex_mod'];
data['ranged_misc_mod'] = 0;
data['ranged_total'] = data['base_attack'] +
  data['ranged_attr_mod'] + data['ranged_misc_mod'];

data['weapon1_name'] = 'Unarmed';
data['weapon1_type'] = 'b';
data['weapon1_bonus'] = data['unarmed_total'];
data['weapon1_damage'] = '1d4+8';
data['weapon1_threat'] = 18;
data['weapon1_size'] = 'N/A';
data['weapon1_weight'] = 0;
data['weapon1_range'] = 'N/A';
data['weapon1_shots'] = 'N/A';
data['weapon1_props'] = '<input type="checkbox" id="aligned">Aligned</input>, Mix-Up (Pummel), Mix-Up (Bullrush), Mix-Up (Trip)';

data['weapon2_name'] = 'Short Staff';
data['weapon2_type'] = 'b';
data['weapon2_bonus'] = data['melee_total'];
data['weapon2_damage'] = '1d6+2';
data['weapon2_threat'] = 20;
data['weapon2_size'] = 'S/1h';
data['weapon2_weight'] = 3;
data['weapon2_range'] = 'N/A';
data['weapon2_shots'] = 'N/A';
data['weapon2_props'] = 'Aligned, Double, Trip, Parry';

data['weapon3_name'] = 'Dagger';
data['weapon3_type'] = 's/p';
data['weapon3_bonus'] = data['melee_total'];
data['weapon3_damage'] = '1d6+2';
data['weapon3_threat'] = 19;
data['weapon3_size'] = 'D/1h';
data['weapon3_weight'] = 1;
data['weapon3_range'] = 'N/A';
data['weapon3_shots'] = 'N/A';
data['weapon3_props'] = 'Bleed, Hurl';

data['panache'] = 1;
data['prudence'] = 8;
data['total_lifestyle'] = data['panache'] + data['prudence'];

data['appearance_bonus'] = Math.floor((data['panache']+1)/3); // Maybe add the panache table
data['money_saved'] = '50%';  // Maybe add the prudence table
data['income'] = 10 * data['panache'];
data['coin_in_hand'] = '10 c';
data['stake'] = '900 c';

data['walk_speed'] = '30\'';
data['other_speed'] = '7\' (swim)';
data['travel_speed'] = '3 MPH (5 in desert/forest)';

data['unarmed_prof'] = true;
data['unarmed_fort'] = true;
data['bows_prof'] = false;
data['bows_fort'] = false;
data['blunt_prof'] = true;
data['blunt_fort'] = true;
data['black_powder_prof'] = false;
data['black_powder_fort'] = false;
data['edged_prof'] = true;
data['edged_fort'] = false;
data['siege_prof'] = false;
data['siege_fort'] = false;
data['hurled_prof'] = true;
data['hurled_fort'] = true;


var spells = new Array();

// These are the psionic talents every Athasian PC gets.
spells.push(lookupSpell('DETECT ALIGNMENT'));
spells.push(lookupSpell('GLOW I'));

// These are my Mage spells
spells.push(lookupSpell('ALARM'));
spells.push(lookupSpell('BRAWN I'));
spells.push(lookupSpell('CALL LIGHTNING I'));
spells.push(lookupSpell('CALM EMOTIONS'));
spells.push(lookupSpell('CHILL STORM I'));
spells.push(lookupSpell('CONJURE ELEMENTAL I'));
spells.push(lookupSpell('CONJURE ELEMENTAL II'));
spells.push(lookupSpell('CONTROL WEATHER II'));

// Need to fix Create Water to be a 2nd level spell per
// Dark Sun house rules.
var s = lookupSpell('CREATE WATER');
s.setLevel('2');
s.effect = s.effect.replace('up to 2 gallons','up to 1/2 gallon');
spells.push(s);

spells.push(lookupSpell('CURE WOUNDS II'));
spells.push(lookupSpell('DEADLY DRAFT I'));
spells.push(lookupSpell('DETECT MAGIC'));
spells.push(lookupSpell('DETECT SECRET DOORS'));
spells.push(lookupSpell('DIVINE FAVOR'));
spells.push(lookupSpell('EXPEDITIOUS RETREAT'));

s = lookupSpell('FEATHER FALL');
s.castingTime = 'Instant*';
spells.push(s);

// Need to update Freedom of Movement to be Level 3 per
// Spell Secret.
s = lookupSpell('FREEDOM OF MOVEMENT');
s.setLevel('3');
spells.push(s);

spells.push(lookupSpell('GOODBERRY'));
spells.push(lookupSpell('HASTE'));
spells.push(lookupSpell('HOLD ANIMAL'));
spells.push(lookupSpell('NATURE\'S ALLY I'));
spells.push(lookupSpell('NEUTRALIZE POISON'));
spells.push(lookupSpell('ORIENT SELF'));
spells.push(lookupSpell('PRAYER'));
spells.push(lookupSpell('READ MAGIC'));
spells.push(lookupSpell('RESTORATION I'));
spells.push(lookupSpell('SEE INVISIBLE'));
spells.push(lookupSpell('SHAPE CHANGE I'));
spells.push(lookupSpell('SHAPE STONE'));
spells.push(lookupSpell('TONGUES I'));
spells.push(lookupSpell('WIT I'));
spells.push(lookupSpell('ZONE OF TRUTH'));

// These are my Priest spell-like abilities that require no roll
// and cost no magic points.  I will simulate that by
s = lookupSpell('ENTANGLE');
s.setPathSpell();
spells.push(s);

s = lookupSpell('PASS WITHOUT TRACE');
s.setPathSpell();
spells.push(s);

s = lookupSpell('VERDURE');
s.setPathSpell();
spells.push(s);

s = lookupSpell('TREE WALK');
s.setPathSpell();
spells.push(s);

data['spell points'] = data['caster_level'] * 2 + data['action_dice'];
data['cur_spellpoints'] = data['spell points'];
data['spell_feats_save_dc'] = 'Spell Feats: 1<br/>Save DC: 12';

var abilities = new Array();

abilities.push( [ 'Trailblazer', 'Once per scene as a free action, grant teammates 1 of my Terrain feats until the end of the scene.' ] );
abilities.push( [ 'Stalker', 'Non-error Survival and Tactics checks have a minimum of Scout_Level + 20' ] );
abilities.push( [ 'Signs and Portents', '5 times/adventure, As a 1-minute action, ask the GM for a hint.  Gain an action die on refusal.' ] );
abilities.push( [ 'Jungle Clutch', '+2 to climb, don\'t need climbing gear.  Gain chameleon I as a 1 minute action' ] );
abilities.push( [ 'Chameleon I', '+4 bonus with stealth and hide in current terrain.' ] );
abilities.push( [ 'Path of Nature I', '+5 to Survival' ] );
abilities.push( [ 'Path of Nature II', 'Cast Entangle and Pass Without Trace once each per scene' ] );
abilities.push( [ 'Path of Nature III', 'Cast Verdure and Tree Walk once each per scene' ] );
abilities.push( [ 'Congregation', 'Summon 4 25 XP NPCs (worshippers) with threat level 10.' ] );
abilities.push( [ 'Basic Skill Mastery: Athlete', '+2 and 19-20 threat for Athletics and Resolve.' ] );
abilities.push( [ 'Talented Athlete', 'Increase both Athletics and Resolve for 1 skill point.' ] );
abilities.push( [ 'Inquisitive Mind', 'Gain 2 additional interests.' ] );
abilities.push( [ 'Pathfinder Basics: Desert', '+2 MPH Travel, Heat resistance 5, 1/2 water needs.' ] );
abilities.push( [ 'Pathfinder Basics: Forest/Jungle', '+2 MPH Travel, +2 with Sneak Checks.' ] );
abilities.push( [ 'Pathfinder Mastery', '+4 Blend, +4 Survival in all of my terrains.' ] );
abilities.push( [ 'Spell Power', '5 extra spell points per scene' ] );
abilities.push( [ 'Personal Lieutenant', 'Pensi' ] );
abilities.push( [ 'Martial Arts', '+2 Unarmed damage, 19 threat, Use INT bonus for defense and attack roll bonuses' ] );
abilities.push( [ 'Master\'s Art', '+2 more Unarmed damage, 18 threat, Use INT bonus for initiative and damage modifier' ] );
abilities.push( [ 'Cheap Shot', '-2 to specific attribute or speed on hit -4' ] );
abilities.push( [ 'Mix-up Bullrush', '+3 to hit with bullrush once per 3 rounds' ] );
abilities.push( [ 'Mix-up Pummel', '+3 to hit with pummel (triple damage as subdual) once per 3 rounds' ] );
abilities.push( [ 'Mix-up Trip', '+3 to Acrobatics with trip once per 3 rounds' ] );
abilities.push( [ 'Relentless Attack', '+2 to hit an opponent if I missed him last time.' ] );
