/**
	Basstss
	Fill in the data.  Use single quotes for strings.
	Don't make numbers into strings.
	
	TODO: Improve damage calculation for weapons.
	Choices from level 6 to 7:
	+1 Proficiency (from career level): Hurled Forte
	Class Choice:
	Class         BAB Fort Ref Will Def Init Life Leg Skills Special
	Scout (3-4):   +1   +1  +1   0   0    +1   0   0    +6   +1d6 sneak attack
	Soldier (3-4): +1    0   0  +1   0     0   0   0    +4   Armor use I (+1 Def when using armor)
	So, duh, scout.  Skills: 2 in Ride (because I've had Ground Mounts listed as a focus since the
	beginning, but I really can't get that until I have 1 rank in Ride), 2 in search, 1 in sneak,
	1 in tactics.
	Choices from level 7 to 8:
	+1 Attribute (from career level): Strength
	Class Choice:
	Class         BAB Fort Ref Will Def Init Life Leg Skills Special
	Scout (3-4):   0    0   0   0   +1    0   0   0    +6   Additional terrain or ranged feat.
	Soldier (3-4): +1   0   0  +1   0     0   0   0    +4   Armor use I (+1 Def when using armor)
	Close call, but I'll go with Soldier this time.  Skills: +2 Bluff, +2 Intimidate
	Also, I get a bonus terrain feat from the game master as a boon from Orla.
*/

function defineCharacterData(context) {
	var I = 0; // Generic index variable
	var tempX; // Temporary object storage

	with(context) {
	
	data['character_name'] = 'Basstss';
	data['species_talent'] = 'Saurian';
	data['speciality'] = 'Tribesman';
	data['class_1'] = 'Scout';
	data['level_1'] = 4;
	data['class_2'] = 'Soldier';
	data['level_2'] = 4;
	data['class_3'] = '';
	data['level_3'] = '';
	
	data['career_level'] = data['level_1'] + data['level_2'] + data['level_3'];
	data['caster_level'] = 0;
	
	data['player_name'] = 'Steve Rowe';
	data['current_xp'] = '40,000';
	data['next_level_xp'] = '60,000';
	data['gender'] = 'Male';
	data['age'] = '18';
	data['height'] = '5\' 9\"';
	data['weight'] = '165#';
	data['eyes'] = 'Yellow';
	data['hair'] = 'N/A';
	data['skin'] = 'Green/Brown';
	data['starting_action_dice'] = 4;
	data['action_die_type'] = 6;
	data['action_die_explode'] = data['action_die_type'];
	data['action_die_bonus'] = 2;
	
	data['str'] = 18;
	data['dex'] = 16;
	data['con'] = 12;
	data['int'] = 14;
	data['wis'] = 12;
	data['cha'] = 10;

	// These are used for calculating things like vitality, wounds,
	// skill points, known spells, and Lifestyle, which are only affected
	// by permanent attribute changes. (FC2P pg 9 under Impairment).
	data['perm_str_mod'] = Math.floor(data['str'] / 2) - 5;
	data['perm_dex_mod'] = Math.floor(data['dex'] / 2) - 5;
	data['perm_con_mod'] = Math.floor(data['con'] / 2) - 5;
	data['perm_int_mod'] = Math.floor(data['int'] / 2) - 5;
	data['perm_wis_mod'] = Math.floor(data['wis'] / 2) - 5;
	data['perm_cha_mod'] = Math.floor(data['cha'] / 2) - 5;

	data['skills'] = {};
	data['skills']['acrobatics'] = new Skill( { name: 'acrobatics', isOrigin: true, ranks: 5, misc: 3 } );
	data['skills']['athletics'] = new Skill( { name: 'athletics', isOrigin: true, ranks: 7, 
			misc: 2, threat: 19, notes: 'Add +2 to climb' } );
	data['skills']['blend'] = new Skill( { name: 'blend', isOrigin: true, ranks: 5 } );
	data['skills']['bluff'] = new Skill( { name: 'bluff', isOrigin: true, ranks: 5 } );
	data['skills']['crafting'] = new Skill( { name: 'crafting', isOrigin: true, ranks: 1 } );
	data['skills']['disguise'] = new Skill( { name: 'disguise', isOrigin: false } );
	data['skills']['haggle'] = new Skill( { name: 'haggle', isOrigin: false, ranks: 0 } );
	data['skills']['impress'] = new Skill( { name: 'impress', isOrigin: false, ranks: 0 } );
	data['skills']['intimidate'] = new Skill( { name: 'intimidate', isOrigin: true, ranks: 6 } );
	data['skills']['investigate'] = new Skill( { name: 'investigate', isOrigin: false, ranks: 1 } );
	data['skills']['medicine'] = new Skill( { name: 'medicine', isOrigin: true, ranks: 1 } );
	data['skills']['notice'] = new Skill( { name: 'notice', isOrigin: true, ranks: 8 } );
	data['skills']['prestidigitation'] = new Skill( { name: 'prestidigitation', isOrigin: false, ranks: 0 } );
	data['skills']['resolve'] = new Skill( { name: 'resolve', isOrigin: true, ranks: 7, misc: 2, threat: 19, 
	notes: 'Skill Mastery (Athlete)' } );
	data['skills']['ride'] = new Skill( { name: 'ride', isOrigin: true, ranks: 4 } );
	data['skills']['search'] = new Skill( { name: 'search', isOrigin: true, ranks: 5 } );
	data['skills']['sense motive'] = new Skill( { name: 'sense motive', isOrigin: true, ranks: 7 } );
	data['skills']['sneak'] = new Skill( { name: 'sneak', isOrigin: true, ranks: 4, misc: 4, 
	notes: '-2 if not in forest/jungle.' } );
	data['skills']['spellcasting'] = new Skill( { name: 'spellcasting', isOrigin: false, ranks: 0 } );
	data['skills']['survival'] = new Skill( { name: 'survival', isOrigin: true, ranks: 7 } );
	data['skills']['tactics'] = new Skill( { name: 'tactics', isOrigin: true, ranks: 6 } );

	data['interests'] = [];
	data['interests'].push( 'Native Language: Saurian' );
	data['interests'].push( 'Language: Human' );
	data['interests'].push( 'Study: Saurian Culture' );
	data['interests'].push( 'Study: Quelya Culture' );
	data['interests'].push( 'Study: Quelya History' );

	data['crafts'] = [];
	data['crafts'].push( 'Wood (traps)' );

	data['vehicles'] = [];

	data['vehicles'].push( 'Ground Mounts' );
	data['vehicles'].push( 'Sailing Vessels' );

	var class_vitality_per_level = new Object();
	class_vitality_per_level[''] = 0;
	class_vitality_per_level['Scout'] = 9;
	class_vitality_per_level['Soldier'] = 12;
	class_vitality_per_level['Mage'] = 6;
	
	data['max_vitality'] = data['level_1'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_1']]);

	if (data['level_2']) {
		data['max_vitality'] += data['level_2'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_2']]);
	}

	if (data['level_3']) {
		data['max_vitality'] += data['level_3'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_3']]);
	}

	data['max_wounds'] = Math.ceil(data['con'] * 1); // This varies based on race.

	data['legend'] = 3;
	data['reputation'] = 20;
	data['heroic_renown'] = 1;
	data['military_renown'] = 5;
	data['noble_renown'] = 1;
	data['total_renown'] = data['heroic_renown'] + data['military_renown'] + data['noble_renown'];
	data['heroic_title'] = 'Swordsman';
	data['military_title'] = 'Lieutenant';
	data['noble_title'] = 'Lord';
	
	data['armor'] = {};
	data['armor']['dr'] = 3;
	data['armor']['dp'] = -1;
	data['armor']['acp'] = 0;
	data['armor']['special'] = "Edged 2";
	data['armor']['qualities'] = "Fitted, Light";
	data['defense_class_bonus'] = 4;
	data['defense_size_mod'] = 0;
	data['defense_misc_mod'] = 5; // +1 for agile defense, +1 for guard with spear, +2 for rough living, +1 for Armor I
	data['defense_dodge_mod'] = 0;
	data['defense_armor_mod'] = -1;

	data['dr'] = '4 (+2 edged, +1 dramatic)';
	data['initiative_class_bonus'] = 7;
	data['initiative_misc_mod'] = 0;
	data['initiative_attribute'] = 'dex';

	// Saving Throws
	data['fortitude_base'] = 6;
	data['fortitude_misc_mod'] = 0;

	data['reflex_base'] = 5;
	data['reflex_misc_mod'] = 0;

	data['will_base'] = 4;
	data['will_misc_mod'] = 0;

	// Proficiencies
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
	data['hurled_fort'] = true;
	
	// Basic Combat (weapons are later)
	data['base_attack'] = 6;

	// +1 for fortes are added automatically elsewhere, so don't put
	// that here.  These are attack check (To-Hit) bonuses.
	data['unarmed_misc_mod'] = 0;
	data['melee_misc_mod'] = 0; // For example, +1 for Martial Spirit
	data['ranged_misc_mod'] = 0;

	// Damage bonuses for attributes are added automatically elsewhere,
	// so don't put those here. These are going to be things like magic
	// that apply to all attacks (bonuses for a specific weapon go on the
	// weapon).
	data['unarmed_dmg_misc_mod'] = 0;
	data['melee_dmg_misc_mod'] = 0; // For example, +3 for Martial Spirit.
	data['ranged_dmg_misc_mod'] = 0;

	// Shouldn't have to change these unless you have a feat that changes
	// which attribute gives the bonus for attack checks (To-Hit) 
	//(e.g. Martial Arts)
	data['unarmed_attr'] = 'str'; // Normally 'str'.
	data['melee_attr'] = 'str';
	data['ranged_attr'] = 'dex';

	// Weapons!
	data.weapons = [];

	data.weapons.push( new Weapon( {
		name: 'Tail Slap',
		style: 'unarmed',
		damageType: 'b',
		damageBase: '1d8',
		damageAttr: 'str', // Master's Art
		threat: 20,
		size: 'N/A',
		weight: 0,
		props: 'Reach +1'
	}));
		
	data.weapons.push( new Weapon( {
		name: 'Bite',
		style: 'melee',
		damageType: 'p',
		damageBase: '1d8',
		damageAttr: 'str',
		threat: 20,
		size: 'N/A',
		weight: 0,
		props: ''
	}));
		
	data.weapons.push( new Weapon( {
		name: 'Boar Spear',
		style: 'melee',
		damageType: 'p',
		damageBase: '1d8',
		damageAttr: 'str', // If this had finesse, it might be 'dex'.
		threat: 19,
		size: 'M/2h',
		weight: 10.0,
		props: 'Reach +1, Guard +1'
	}));
		
	// Condition Definitions (assumes defineConditionFunctionality() already called
	// on the given context.

	// Spells
	data['spell_feats'] = 0;
	data['spell points'] = 0; //data['caster_level'] * 2 + data['starting_action_dice'];


	data.spells = [];

	// Do the same for BRAWN.
	var brawn = lookupSpell('BRAWN I');
	brawn.setPathSpell(); // This is an ability that requires no magic roll.
	
	clickFn = function(event, scope) {
		scope.data.conditions.buff.addGrade(event, 3);
		scope.popup.show('STR increased by 3', event);
	};

	brawn.aux = makeLink('STR', clickFn);

	clickFn = function(event, scope) {
		scope.data.conditions.quick.addGrade(event, 3);
		scope.popup.show('DEX increased by 3', event);
	};
	
	brawn.aux = brawn.aux + ' or ' + makeLink('DEX', clickFn);
	
	clickFn = function(event, scope) {
		scope.data.conditions.tough.addGrade(event, 3);
		scope.popup.show('CON increased by 3', event);
	};

	brawn.aux = brawn.aux + ' or ' + makeLink('CON', clickFn);
	
	data.spells.push(brawn);

	// Miscellaneous Abilities
	data.abilities = [];

	data.abilities.push( [ 'Stalker', 'Always get at least 21 on survival and tactics' ] );
	data.abilities.push( [ 'Tribesman', 'Basic Skill Mastery: Athlete (+2, 19 threat on Athletics and Resolve)' ] );
	data.abilities.push( [ 'Linked Skills', 'Resolve & Survival' ] );
	data.abilities.push( [ 'Agile Defense', '+1 Defense' ] );
	data.abilities.push( [ 'Cold-Blooded', 'Only eat 1/day.  Sickened by cold attacks' ] );
	data.abilities.push( [ 'Darkvision I', 'Ignore penalties for dim and feint light' ] );
	data.abilities.push( [ 'Jungle Clutch', '+2 with climb, Chameleon (1 min cast)' ] );
	data.abilities.push( [ 'Cameleon I', '+4 with Stealth and Hide in Jungle/Forest (1 min cast)' ] );
	data.abilities.push( [ 'Pathfinder Basics (Jungle)', '+2 bonus with sneak checks' ] );
	data.abilities.push( [ 'Contempt', 'Free attack against std character 4 times per combat' ]);
	data.abilities.push( [ 'Fortunes of War I', 'DR 1 (DR 2 during dramatic scenes)' ]);
	data.abilities.push( [ 'Rough Living', '+2 Defense, +2 to Saves prompted by environment' ]);
	data.abilities.push( [ 'Armor of Regeneration', 'Regeneration II (Heal 2 damage per round et al' ]);
	data.abilities.push( [ 'Charging Basics', 'Speed +5, Make free attack during run 4 times per combat' ]);
	data.abilities.push( [ 'Fortune Favors the Bold', '+2 on all Action Dice rolls' ]);
	data.abilities.push( [ 'Night Fighting', 'Ignore Blinded Condition within 20 feet, gain Darkvision I' ]);
	data.abilities.push( [ 'Sneak Attack', '+1d6 damage vs Flanked, Flat-Footed, or Helpless (pg 211)' ]);

	// Junk
	data['panache'] = 2;
	data['prudence'] = 0;
	data['total_lifestyle'] = data['panache'] + data['prudence'];

	data['appearance_bonus'] = Math.floor((data['panache']+1)/3); // Maybe add the panache table
	data['money_saved'] = '15%';  // Maybe add the prudence table
	data['income'] = 10 * data['panache'];
	data['coin_in_hand'] = '20 s';
	data['stake'] = '1650 s';

	data['walk_speed'] = 35;
	data['other_speed'] = 7;
	data['other_speed_mode'] = 'swim';
	data['travel_speed'] = 3.5;
	
	}; // End "with" block.
} // End defineCharacterData function.
