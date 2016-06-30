/**
	Fill in the data.  Use single quotes for strings.
	Don't make numbers into strings.
	
	TODO: Improve damage calculation for weapons.
*/

function defineCharacterData(context) {
	var I = 0; // Generic index variable
	var tempX; // Temporary object storage

	with(context) {
	
	data['character_name'] = 'Ptom';
	data['species_talent'] = 'Halfling';
	data['speciality'] = 'Warden';
	data['class_1'] = 'Scout';
	data['level_1'] = 1;
	data['class_2'] = 'Priest';
	data['level_2'] = 7;
	data['class_3'] = 'Mage';
	data['level_3'] = 7;
	
	data['career_level'] = data['level_1'] + data['level_2'] + data['level_3'];
	data['caster_level'] = data['level_2'] + data['level_3'];
	
	data['player_name'] = 'Steve Rowe';
	data['current_xp'] = '250,000';
	data['next_level_xp'] = '300,000';
	data['gender'] = 'Male';
	data['age'] = '30';
	data['height'] = '3\' 0\"';
	data['weight'] = '34#';
	data['eyes'] = 'Green';
	data['hair'] = 'Brown';
	data['skin'] = 'Tan';
	data['starting_action_dice'] = 5;
	data['action_die_type'] = 8;
	data['action_die_explode']	= data['action_die_type'];
	data['action_die_bonus'] = 0;
	
	data['str'] = 14;
	data['dex'] = 14;
	data['con'] = 14;
	data['int'] = 18;
	data['wis'] = 14;
	data['cha'] = 13;

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
	data['skills']['acrobatics'] = new Skill( { name: 'acrobatics', isOrigin: true, ranks: 5 } );
	data['skills']['athletics'] = new Skill( { name: 'athletics', isOrigin: true, ranks: 18, 
			misc: 2, threat: 19, notes: 'Add +2 to climb' } );
	data['skills']['blend'] = new Skill( { name: 'blend', isOrigin: true, ranks: 8,
			misc: 8, notes: '-4 if not in forest/jungle/desert' } );
	data['skills']['bluff'] = new Skill( { name: 'bluff', isOrigin: true, ranks: 8 } );
	data['skills']['crafting'] = new Skill( { name: 'crafting', isOrigin: true, ranks: 1 } );
	data['skills']['disguise'] = new Skill( { name: 'disguise', isOrigin: true } );
	data['skills']['haggle'] = new Skill( { name: 'haggle', isOrigin: true, ranks: 1 } );
	data['skills']['impress'] = new Skill( { name: 'impress', isOrigin: true, ranks: 17 } );
	data['skills']['intimidate'] = new Skill( { name: 'intimidate', isOrigin: true, ranks: 12 } );
	data['skills']['investigate'] = new Skill( { name: 'investigate', isOrigin: true, ranks: 15,
			notes: 'Practiced' } );
	data['skills']['medicine'] = new Skill( { name: 'medicine', isOrigin: true, ranks: 10 } );
	data['skills']['notice'] = new Skill( { name: 'notice', isOrigin: true, ranks: 13 } );
	data['skills']['prestidigitation'] = new Skill( { name: 'prestidigitation', isOrigin: true, ranks: 4 } );
	data['skills']['resolve'] = new Skill( { name: 'resolve', isOrigin: true, ranks: 18,
			misc: 2, threat: 19, notes: 'Skill Mastery (Athlete)' } );
	data['skills']['ride'] = new Skill( { name: 'ride', isOrigin: true, ranks: 6, notes: 'Alignment Skill' } );
	data['skills']['search'] = new Skill( { name: 'search', isOrigin: true, ranks: 10, notes: 'Alignment Skill' } );
	data['skills']['sense motive'] = new Skill( { name: 'sense motive', isOrigin: true, ranks: 13 } );
	data['skills']['sneak'] = new Skill( { name: 'sneak', isOrigin: true, ranks: 10, misc: 6, 
			notes: '-2 if not in forest/jungle/desert.  Alignment Skill.' } );
	data['skills']['spellcasting'] = new Skill( { name: 'spellcasting', isOrigin: true, ranks: 18 } );
	data['skills']['survival'] = new Skill( { name: 'survival', isOrigin: true, ranks: 14,
			misc: 9, notes: '-4 if not forest/jungle/desert. Stalker. Alignment Skill' } );
	data['skills']['tactics'] = new Skill( { name: 'tactics', isOrigin: true, ranks: 11, notes: 'Stalker' } );

	data['interests'] = [];
	data['interests'].push( 'Native Language: Pterran' );
	data['interests'].push( 'Language: Human' );
	data['interests'].push( 'Language: Halfling' );
	data['interests'].push( 'Alignment: Nature' );
	data['interests'].push( 'Study: New Scale Culture' );
	data['interests'].push( 'Study: History' );
	data['interests'].push( 'Study: Nature');
	data['interests'].push( 'Study: Sorcerer Kings');
	data['interests'].push( 'Study: Life Manipulation');
	data['interests'].push( 'Study: Rhul-Thaun Culture');

	data['crafts'] = [];
	data['crafts'].push( 'Pharmacy' );

	data['vehicles'] = [];

	data['vehicles'].push( 'Flying Mounts' );
	data['vehicles'].push( 'Ground Mounts' );

	var class_vitality_per_level = new Object();
	class_vitality_per_level[''] = 0;
	class_vitality_per_level['Scout'] = 9;
	class_vitality_per_level['Priest'] = 9;
	class_vitality_per_level['Mage'] = 6;
	
	data['max_vitality'] = data['level_1'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_1']]);

	if (data['level_2']) {
		data['max_vitality'] += data['level_2'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_2']]);
	}

	if (data['level_3']) {
		data['max_vitality'] += data['level_3'] * (data['perm_con_mod'] + class_vitality_per_level[data['class_3']]);
	}

	data['max_wounds'] = Math.ceil(data['con'] * 2 / 3); // This varies based on race.

	data['legend'] = 12;
	data['reputation'] = '';
	data['heroic_renown'] = 4;
	data['military_renown'] = 0;
	data['noble_renown'] = 0;
	data['total_renown'] = data['heroic_renown'] + data['military_renown'] + data['noble_renown'];
	data['heroic_title'] = 'Champion';
	data['military_title'] = '';
	data['noble_title'] = '';
	
	data['defense_class_bonus'] = 10;
	data['defense_size_mod'] = 1;
	data['defense_misc_mod'] = 0;
	data['defense_dodge_mod'] = 0;
	data['defense_armor_mod'] = 0;

	data['dr'] = '2 (4)';
	data['initiative_class_bonus'] = 8;
	data['initiative_misc_mod'] = 5; // warden
	data['initiative_attribute'] = 'int'; // martial arts

	// Saving Throws
	data['fortitude_base'] = 8;
	data['fortitude_misc_mod'] = 0;

	data['reflex_base'] = 6;
	data['reflex_misc_mod'] = 0;

	data['will_base'] = 9;
	data['will_misc_mod'] = 0;

	// Proficiencies
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

	// Basic Combat (weapons are later)
	data['base_attack'] = 8;

	// +1 for fortes are added automatically elsewhere, so don't put
	// that here.  These are attack check (To-Hit) bonuses.
	data['unarmed_misc_mod'] = 0;
	data['melee_misc_mod'] = 0; // For example, +1 for Martial Spirit
	data['ranged_misc_mod'] = 0;

	// Damage bonuses for attributes are added automatically elsewhere,
	// so don't put those here. These are going to be things like magic
	// that apply to all attacks (bonuses for a specific weapon go on the
	// weapon).
	data['unarmed_dmg_misc_mod'] = 4; // Martial Arts + Master's Art
	data['melee_dmg_misc_mod'] = 0; // For example, +3 for Martial Spirit.
	data['ranged_dmg_misc_mod'] = 0;

	// Shouldn't have to change these unless you have a feat that changes
	// which attribute gives the bonus for attack checks (To-Hit) 
	//(e.g. Martial Arts)
	data['unarmed_attr'] = 'int'; // Normally 'str'.
	data['melee_attr'] = 'str';
	data['ranged_attr'] = 'dex';

	// Weapons!
	data.weapons = [];

	data.weapons.push( new Weapon( {
		name: 'punch',
		style: 'unarmed',
		damageType: 'b',
		damageBase: '1d4',
		damageAttr: 'int', // Master's Art
		threat: 18,
		size: 'N/A',
		weight: 0,
		props: 'Aligned, Mix-Up (Pummel), Mix-Up (Bullrush), Mix-Up (Trip)'
	}));
		
	data.weapons.push( new Weapon( {
		name: 'Short Staff',
		style: 'melee',
		damageType: 'b',
		damageBase: '1d6',
		damageAttr: 'str',
		threat: 20,
		size: 'S/1h',
		weight: 3,
		props: 'Aligned, Double, Trip, Parry'
	}));
		
	data.weapons.push( new Weapon( {
		name: 'Dagger',
		style: 'melee',
		damageType: 's/p',
		damageBase: '1d6',
		damageAttr: 'str', // If this had finesse, it might be 'dex'.
		threat: 19,
		size: 'D/1h',
		weight: 1,
		props: 'Bleed, Hurl'
	}));
		
	// Condition Definitions (assumes defineConditionFunctionality() already called
	// on the given context.

	// Spells
	data['spell_feats'] = 1;
	data['spell points'] = data['caster_level'] * 2 + data['starting_action_dice'];


	data.spells = [];

	// These are the psionic talents every Athasian PC gets.
	data.spells.push(lookupSpell('DETECT ALIGNMENT'));
	data.spells.push(lookupSpell('GLOW I'));

	// These are my Mage spells
	data.spells.push(lookupSpell('ALARM'));
	data.spells.push(lookupSpell('CALL LIGHTNING I'));
	data.spells.push(lookupSpell('CALM EMOTIONS'));
	data.spells.push(lookupSpell('CHILL STORM I'));
	data.spells.push(lookupSpell('CONJURE ELEMENTAL I'));
	data.spells.push(lookupSpell('CONJURE ELEMENTAL II'));
	data.spells.push(lookupSpell('CONTROL WEATHER II'));

	// Need to fix Create Water to be a 2nd level spell per
	// Dark Sun house rules.
	var s = lookupSpell('CREATE WATER');
	s.setLevel('2');
	s.effect = s.effect.replace('up to 2 gallons','up to 1/2 gallon');
	data.spells.push(s);

	data.spells.push(lookupSpell('CURE WOUNDS II'));
	data.spells.push(lookupSpell('DEADLY DRAFT I'));
	data.spells.push(lookupSpell('DETECT MAGIC'));
	data.spells.push(lookupSpell('DETECT SECRET DOORS'));
	data.spells.push(lookupSpell('DIVINE FAVOR'));
	data.spells.push(lookupSpell('EXPEDITIOUS RETREAT'));

	s = lookupSpell('FEATHER FALL');
	s.castingTime = '1 Free Action';
	data.spells.push(s);

	// Need to update Freedom of Movement to be Level 3 per
	// Spell Secret.
	s = lookupSpell('FREEDOM OF MOVEMENT');
	s.setLevel('3');
	data.spells.push(s);

	data.spells.push(lookupSpell('GOODBERRY'));
	data.spells.push(lookupSpell('HASTE'));
	data.spells.push(lookupSpell('HOLD ANIMAL'));
	data.spells.push(lookupSpell('NATURE\'S ALLY I'));
	data.spells.push(lookupSpell('NEUTRALIZE POISON'));
	data.spells.push(lookupSpell('ORIENT SELF'));
	data.spells.push(lookupSpell('PRAYER'));
	data.spells.push(lookupSpell('READ MAGIC'));
	data.spells.push(lookupSpell('RESTORATION I'));
	data.spells.push(lookupSpell('SEE INVISIBLE'));
	data.spells.push(lookupSpell('SHAPE CHANGE I'));
	data.spells.push(lookupSpell('SHAPE STONE'));
	data.spells.push(lookupSpell('TONGUES I'));
	data.spells.push(lookupSpell('ZONE OF TRUTH'));

	// Add the character buffing effects for WIT I
	var wit = lookupSpell('WIT I');
	
	var clickFn = function(event, scope) {
		scope.data.conditions.smart.addGrade(event, 3);
		scope.popup.show('INT increased by 3', event);
	};

	wit.aux = makeLink('INT', clickFn);

	clickFn = function(event, scope) {
		scope.data.conditions.wise.addGrade(event, 3);
		scope.popup.show('WIS increased by 3', event);
	};
	
	wit.aux = wit.aux + ' or ' + makeLink('WIS', clickFn);
	
	clickFn = function(event, scope) {
		scope.data.conditions.cute.addGrade(event, 3);
		scope.popup.show('CHA increased by 3', event);
	};

	wit.aux = wit.aux + ' or ' + makeLink('CHA', clickFn);
	
	data.spells.push(wit);

	// Do the same for BRAWN.
	var brawn = lookupSpell('BRAWN I');
	
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

	// These are my Priest spell-like abilities that require no roll
	// and cost no magic points.
	s = lookupSpell('ENTANGLE');
	s.setPathSpell();
	data.spells.push(s);

	s = lookupSpell('PASS WITHOUT TRACE');
	s.setPathSpell();
	data.spells.push(s);

	s = lookupSpell('VERDURE');
	s.setPathSpell();
	data.spells.push(s);

	s = lookupSpell('TREE WALK');
	s.setPathSpell();
	data.spells.push(s);

	// Miscellaneous Abilities
	data.abilities = [];

	data.abilities.push( [ 'Trailblazer', 'Once per scene as a free action, grant teammates 1 of my Terrain feats until the end of the scene.' ] );
	data.abilities.push( [ 'Stalker', 'Non-error Survival and Tactics checks have a minimum of Scout_Level + 20' ] );
	data.abilities.push( [ 'Signs and Portents', '5 times/adventure, As a 1-minute action, ask the GM for a hint.  Gain an action die on refusal.' ] );
	data.abilities.push( [ 'Jungle Clutch', '+2 to climb, don\'t need climbing gear.  Gain chameleon I as a 1 minute action' ] );
	data.abilities.push( [ 'Chameleon I', '+4 bonus with stealth and hide in current terrain.' ] );
	data.abilities.push( [ 'Path of Nature I', '+5 to Survival' ] );
	data.abilities.push( [ 'Path of Nature II', 'Cast Entangle and Pass Without Trace once each per scene' ] );
	data.abilities.push( [ 'Path of Nature III', 'Cast Verdure and Tree Walk once each per scene' ] );
	data.abilities.push( [ 'Congregation', 'Once per adventure, summon ' + (3+data['perm_cha_mod']) + 
											' 25 XP NPCs (worshippers) with threat level ' + (data['career_level']-4) + '.' ] );
	data.abilities.push( [ 'Basic Skill Mastery: Athlete', '+2 and 19-20 threat for Athletics and Resolve.' ] );
	data.abilities.push( [ 'Talented Athlete', 'Increase both Athletics and Resolve for 1 skill point.' ] );
	data.abilities.push( [ 'Inquisitive Mind', 'Gain 2 additional interests.' ] );
	data.abilities.push( [ 'Pathfinder Basics: Desert', '+2 MPH Travel, Heat resistance 5, 1/2 water needs.' ] );
	data.abilities.push( [ 'Pathfinder Basics: Forest/Jungle', '+2 MPH Travel, +2 with Sneak Checks.' ] );
	data.abilities.push( [ 'Pathfinder Mastery', '+4 Blend, +4 Survival in all of my terrains.' ] );
	data.abilities.push( [ 'Spell Power', '5 extra spell points per scene' ] );
	data.abilities.push( [ 'Personal Lieutenant', 'Pensi' ] );
	data.abilities.push( [ 'Martial Arts', '+2 Unarmed damage, 19 threat, Use INT bonus for defense and attack roll bonuses' ] );
	data.abilities.push( [ 'Master\'s Art', '+2 more Unarmed damage, 18 threat, Use INT bonus for initiative and damage modifier' ] );
	data.abilities.push( [ 'Cheap Shot', '-2 to specific attribute or speed on hit -4' ] );
	data.abilities.push( [ 'Mix-up Bullrush', '+3 to hit with bullrush once per 3 rounds' ] );
	data.abilities.push( [ 'Mix-up Pummel', '+3 to hit with pummel (triple damage as subdual) once per 3 rounds' ] );
	data.abilities.push( [ 'Mix-up Trip', '+3 to Acrobatics with trip once per 3 rounds' ] );
	data.abilities.push( [ 'Relentless Attack', '+2 to hit an opponent if I missed him last time.' ] );

	// Junk
	data['panache'] = 1;
	data['prudence'] = 8;
	data['total_lifestyle'] = data['panache'] + data['prudence'];

	data['appearance_bonus'] = Math.floor((data['panache']+1)/3); // Maybe add the panache table
	data['money_saved'] = '50%';  // Maybe add the prudence table
	data['income'] = 10 * data['panache'];
	data['coin_in_hand'] = '10 c';
	data['stake'] = '900 c';

	data['walk_speed'] = 30;
	data['other_speed'] = 7;
	data['other_speed_mode'] = 'swim';
	data['travel_speed'] = 3;
	
	}; // End "with" block.
} // End defineCharacterData function.
