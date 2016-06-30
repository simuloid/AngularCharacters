/**
	Frankie
	Fill in the data.  Use single quotes for strings.
	Don't make numbers into strings.
	Level 7 to 8:
	Skill Points: +10
	        BAB  Fort Ref  Will  Def  Init  Lifestyle Legend  Special
	+1 Dex, +1    +0   +1   +0   +1    +1      +0       +0     Uncanny Dodge II
	
*/

function defineCharacterData(context) {
	var I = 0; // Generic index variable
	var tempX; // Temporary object storage

	with(context) {
	
	data['character_name'] = 'Frankie';
	data['species_talent'] = 'Pech';
	data['speciality'] = 'Rogue';
	data['class_1'] = 'Burglar';
	data['level_1'] = 7;
	data['class_2'] = '';
	data['level_2'] = '';
	data['class_3'] = '';
	data['level_3'] = '';
	
	data['career_level'] = data['level_1'] + data['level_2'] + data['level_3'];
	data['caster_level'] = 0;
	
	data['player_name'] = 'Susan Rowe';
	data['current_xp'] = '25,000';
	data['next_level_xp'] = '40,000';
	data['gender'] = 'Female';
	data['age'] = '18';
	data['height'] = '2\' 11\"';
	data['weight'] = '60#';
	data['eyes'] = 'Brown';
	data['hair'] = 'Brown';
	data['skin'] = 'Caucasian';
	data['starting_action_dice'] = 4;
	data['action_die_type'] = 6;
	data['action_die_explode'] = data['action_die_type'];
	data['action_die_bonus'] = 2;
	
	data['str'] = 12;
	data['dex'] = 18;
	data['con'] = 14;
	data['int'] = 14;
	data['wis'] = 10;
	data['cha'] = 14;

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
	data['skills']['acrobatics'] = new Skill( { name: 'acrobatics', isOrigin: true, ranks: 10, misc: 2, threat: 19 } );
	data['skills']['athletics'] = new Skill( { name: 'athletics', isOrigin: true, ranks: 10 }); 
	data['skills']['blend'] = new Skill( { name: 'blend', isOrigin: true, ranks: 10 } );
	data['skills']['bluff'] = new Skill( { name: 'bluff', isOrigin: true, ranks: 10 } );
	data['skills']['crafting'] = new Skill( { name: 'crafting', isOrigin: true, ranks: 1 } );
	data['skills']['disguise'] = new Skill( { name: 'disguise', isOrigin: false } );
	data['skills']['haggle'] = new Skill( { name: 'haggle', isOrigin: false, ranks: 10 } );
	data['skills']['impress'] = new Skill( { name: 'impress', isOrigin: false, ranks: 0 } );
	data['skills']['intimidate'] = new Skill( { name: 'intimidate', isOrigin: false, ranks: 0 } );
	data['skills']['investigate'] = new Skill( { name: 'investigate', isOrigin: true, ranks: 7 } );
	data['skills']['medicine'] = new Skill( { name: 'medicine', isOrigin: false, ranks: 0 } );
	data['skills']['notice'] = new Skill( { name: 'notice', isOrigin: true, ranks: 10 } );
	data['skills']['prestidigitation'] = new Skill( { name: 'prestidigitation', isOrigin: true, ranks: 11, misc: 4 } );
	data['skills']['resolve'] = new Skill( { name: 'resolve', isOrigin: false, ranks: 0 } );
	data['skills']['ride'] = new Skill( { name: 'ride', isOrigin: false } );
	data['skills']['search'] = new Skill( { name: 'search', isOrigin: true, ranks: 11 } );
	data['skills']['sense motive'] = new Skill( { name: 'sense motive', isOrigin: true, ranks: 11 } );
	data['skills']['sneak'] = new Skill( { name: 'sneak', isOrigin: true, ranks: 11, misc: 2, threat: 19 } );
	data['skills']['spellcasting'] = new Skill( { name: 'spellcasting', isOrigin: false, ranks: 0 } );
	data['skills']['survival'] = new Skill( { name: 'survival', isOrigin: false, ranks: 0 } );
	data['skills']['tactics'] = new Skill( { name: 'tactics', isOrigin: true, ranks: 4 } );

	data['interests'] = [];
	data['interests'].push( 'Native Language: Quelyan' );
	data['interests'].push( 'Language: Elven' );
	data['interests'].push( 'Study: Quelya Culture' );
	data['interests'].push( 'Study: Economics' );
	data['interests'].push( 'Study: Poisons' );
	data['interests'].push( 'Study: Politics' );
	data['interests'].push( 'Study: Legendary Loot' );

	data['crafts'] = [];
	data['crafts'].push( 'Chemistry' );

	data['vehicles'] = [];

	var class_vitality_per_level = new Object();
	class_vitality_per_level[''] = 0;
	class_vitality_per_level['Scout'] = 9;
	class_vitality_per_level['Soldier'] = 12;
	class_vitality_per_level['Mage'] = 6;
	class_vitality_per_level['Burglar'] = 6;
	
	data['max_vitality'] = data['level_1'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_1']]);

	if (data['level_2']) {
		data['max_vitality'] += data['level_2'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_2']]);
	}

	if (data['level_3']) {
		data['max_vitality'] += data['level_3'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_3']]);
	}

	data['max_wounds'] = Math.ceil(data['con'] * 2 / 3); // This varies based on race.

	data['legend'] = 3;
	data['reputation'] = 40;
	data['heroic_renown'] = 4;
	data['military_renown'] = 0;
	data['noble_renown'] = 0;
	data['total_renown'] = data['heroic_renown'] + data['military_renown'] + data['noble_renown'];
	data['heroic_title'] = 'Champion';
	data['military_title'] = '';
	data['noble_title'] = '';
	
	data['armor'] = {};
	data['armor']['type'] = 'Leather';
	data['armor']['dr'] = 3;
	data['armor']['dp'] = -1;
	data['armor']['acp'] = 0;
	data['armor']['special'] = "Edged 2";
	data['armor']['qualities'] = "Fitted, Light";
	data['defense_class_bonus'] = 6;
	data['defense_size_mod'] = 1;
	data['defense_misc_mod'] = 1; // +1 for agile defense
	data['defense_dodge_mod'] = 0;
	data['defense_armor_mod'] = -1;

	data['dr'] = '4 (+2 edged)';
	data['initiative_class_bonus'] = 7;
	data['initiative_misc_mod'] = 0;
	data['initiative_attribute'] = 'dex';

	// Saving Throws
	data['fortitude_base'] = 2;
	data['fortitude_misc_mod'] = 0;

	data['reflex_base'] = 5;
	data['reflex_misc_mod'] = 0;

	data['will_base'] = 2;
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
	data['base_attack'] = 5;

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
		name: 'Dagger',
		style: 'melee',
		damageType: 'p',
		damageBase: '1d6',
		damageAttr: 'str', // Master's Art
		threat: 19,
		size: 'D/1h',
		weight: 1,
		props: 'Bleed, Hurl, AP 8'
	}));
		
	data.weapons.push( new Weapon( {
		name: 'Stiletto',
		style: 'melee',
		damageType: 'p',
		damageBase: '1d4',
		damageAttr: 'dex', // Finesse, allows this to be 'dex'.
		threat: 18,
		size: 'D/1h',
		weight: 0.5,
		props: 'AP 8, Finesse'
	}));
		
	data.weapons.push( new Weapon( {
		name: 'Sap',
		style: 'melee',
		damageType: 'subdual',
		damageBase: '1d6',
		damageAttr: 'dex', // Finesse, allows this to be 'dex'.
		threat: 19,
		size: 'D/1h',
		weight: 2.0,
		props: 'Finesse, Pummeling'
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

	data.abilities.push( [ 'Evasion I', 'If not flat-footed, reflex saves to reduce damage instead negate damage' ] );
	data.abilities.push( [ 'Uncanny Dodge', 'Retain DEX bonus to defense, even when flat-footed' ] );
	data.abilities.push( [ 'Stick Close and Don\'t Make a Sound', 'Share your stealth roll with an ally' ] );
	data.abilities.push( [ 'Agile Defense', '+1 Defense' ] );
	data.abilities.push( [ 'Very, very sneaky', 'Don\'t fail sneak or acrobatics with DC <= 27.' ] );
	data.abilities.push( [ 'Darkvision I', 'Ignore penalties for dim and faint light' ] );
	data.abilities.push( [ 'Dextrous', 'If you spend an action die on a DEX skill, roll 2 action dice.' ] );
	data.abilities.push( [ 'Ambush Basics', '+1 Sneak Attack dice, Ambush takes 2 rds to set up' ] ); // Free from Rogue
	data.abilities.push( [ 'Practiced Sneak', 'If you spend an action die on Sneak and it fails, get the die back' ] );
	data.abilities.push( [ 'Sharp Mind', '+1 skill point per Level' ]);
	data.abilities.push( [ 'Trap Sense', 'Roll 2 reflex saves to avoid trap damage.' ]);
	data.abilities.push( [ 'Elusive', 'Can take -4 penalty on attack and skill for +4 Defense' ]);
	data.abilities.push( [ 'Ring of the Barbarian', 'Brawn I 2/scene, Cold Damage Aura (1d6)' ]);
	data.abilities.push( [ 'Knife Basics', 'Knives are equipped at all times.  +2d6 Sneak Atk dmg when not moving' ]);
	data.abilities.push( [ 'Ghost Basics', 'Sneak movement penalties halved.  Move twice as fast when sneaking.' ]);
	data.abilities.push( [ 'Ghost Mastery', 'Sneak ambient light and sound penalties halved. Can hide in the open.' ]);
	data.abilities.push( [ 'Ghost Supremacy', 'Sneak penalties for attack, blind, and deafened halved. When hidden, cannot be targeted by perception.' ]);
	data.abilities.push( [ 'Sneak Attack', '+1d6 damage vs Flanked, Flat-Footed, or Helpless (pg 211)' ]);
	data.abilities.push( [ 'Fortune Favors the Bold', '+2 on Action Dice rolls' ]);

	// Junk
	data['panache'] = 2;
	data['prudence'] = 0;
	data['total_lifestyle'] = data['panache'] + data['prudence'];

	data['appearance_bonus'] = Math.floor((data['panache']+1)/3); // Maybe add the panache table
	data['money_saved'] = '15%';  // Maybe add the prudence table
	data['income'] = 10 * data['panache'];
	data['coin_in_hand'] = '10 s';
	data['stake'] = '900 s';

	data['walk_speed'] = 35;
	data['other_speed'] = 7;
	data['other_speed_mode'] = 'swim';
	data['travel_speed'] = 3.5;
	
	}; // End "with" block.
} // End defineCharacterData function.
