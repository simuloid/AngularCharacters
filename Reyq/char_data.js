/**
	Fill in the data.  Use single quotes for strings.
	Don't make numbers into strings.
	
	TODO:
*/
function defineCharacterData(context) {
	var I = 0; // Generic index variable
	var tempX; // Temporary object storage

	with(context) {
	
	data['character_name'] = 'Reyq';
	data['species_talent'] = 'Human / Intelligent';
	data['speciality'] = 'Sorcerer';
	data['class_1'] = 'Psion';
	data['level_1'] = 14;
	data['class_2'] = '';
	data['level_2'] = '';
	data['class_3'] = '';
	data['level_3'] = '';
	data['career_level'] = data['level_1'] + data['level_2'] + data['level_3'];
	data['caster_level'] = 14;

	data['player_name'] = 'Steve Rowe';
	data['current_xp'] = '200,000';
	data['next_level_xp'] = '250,000';
	data['gender'] = 'Male';
	data['age'] = 30;
	data['height'] = '5\' 9\"';
	data['weight'] = '165#';
	data['eyes'] = 'Brown';
	data['hair'] = 'Black';
	data['skin'] = 'Brown';
	data['starting_action_dice'] = 5;
	data['action_die_type'] = 8;
	data['action_die_explode']	= data['action_die_type'];
	data['action_die_bonus'] = 0;
	
	data['str'] = 10;
	data['dex'] = 12;
	data['con'] = 10;
	data['int'] = 20;
	data['wis'] = 15;
	data['cha'] = 16;

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
	data['skills']['athletics'] = new Skill( { name: 'athletics', isOrigin: false } );
	data['skills']['blend'] = new Skill( { name: 'blend', isOrigin: true, ranks: 17 } );
	data['skills']['acrobatics'] = new Skill( { name: 'acrobatics', isOrigin: false } );
	data['skills']['bluff'] = new Skill( { name: 'bluff', isOrigin: true, ranks: 17 } );
	data['skills']['crafting'] = new Skill( { name: 'crafting', isOrigin: true, ranks: 13 } );
	data['skills']['disguise'] = new Skill( { name: 'disguise', isOrigin: false } );
	data['skills']['haggle'] = new Skill( { name: 'haggle', isOrigin: false } );
	data['skills']['impress'] = new Skill( { name: 'impress', isOrigin: true, ranks: 17, misc: 2 } );
	data['skills']['intimidate'] = new Skill( { name: 'intimidate', isOrigin: true, ranks: 17 } );
	data['skills']['investigate'] = new Skill( { name: 'investigate', isOrigin: true, ranks: 17 } );
	data['skills']['medicine'] = new Skill( { name: 'medicine', isOrigin: true, ranks: 17 } );
	data['skills']['notice'] = new Skill( { name: 'notice', isOrigin: true, ranks: 17 } );
	data['skills']['prestidigitation'] = new Skill( { name: 'prestidigitation', isOrigin: true, ranks: 17 } );
	data['skills']['resolve'] = new Skill( { name: 'resolve', isOrigin: true, ranks: 17 } );
	data['skills']['ride'] = new Skill( { name: 'ride', isOrigin: true, ranks: 4 } );
	data['skills']['search'] = new Skill( { name: 'search', isOrigin: true, ranks: 17 } );
	data['skills']['sense motive'] = new Skill( { name: 'sense motive', isOrigin: true, ranks: 17 } );
	data['skills']['sneak'] = new Skill( { name: 'sneak', isOrigin: false } );
	data['skills']['spellcasting'] = new Skill( { name: 'spellcasting', isOrigin: true, ranks: 17, misc: 4, threat: 17 } );
	data['skills']['survival'] = new Skill( { name: 'survival', isOrigin: false } );
	data['skills']['tactics'] = new Skill( { name: 'tactics', isOrigin: true, ranks: 17 } );

	data['interests'] = [];
	data['interests'].push( 'Native Language: Human' );
	data['interests'].push( 'Study: Nibenay Culture' );
	data['interests'].push( 'Study: Politics' );
	data['interests'].push( 'Study: Economics' );
	data['interests'].push( 'Study: Spying' );
	data['interests'].push( 'Study: Psionics' );

	data['crafts'] = [];
	data['crafts'].push( 'Pharmacy (poisons)' );
	data['crafts'].push( 'Inscription (forgery)' );
	data['crafts'].push( 'Tailoring' );
	data['crafts'].push( 'Cooking' );

	data['vehicles'] = [];

	data['vehicles'].push( 'Ground Mounts' );
	data['vehicles'].push( 'Ground Vehicles' );

	data['max_vitality'] = 84;
	data['max_wounds'] = 10;
	data['legend'] = 11;
	data['reputation'] = 10;
	data['heroic_renown'] = 1;
	data['military_renown'] = 0;
	data['noble_renown'] = 4;
	data['total_renown'] = data['heroic_renown'] + data['military_renown'] + data['noble_renown'];
	data['heroic_title'] = 'Swordsman';
	data['military_title'] = '';
	data['noble_title'] = 'Earl';
	

	data['defense_class_bonus'] = 6;
	data['defense_size_mod'] = 0;
	data['defense_misc_mod'] = 5;
	data['defense_dodge_mod'] = 0;
	data['defense_armor_mod'] = -1;

	data['dr'] = 1;
	data['initiative_class_bonus'] = 8;
	data['initiative_misc_mod'] = 0;
	data['initiative_attribute'] = 'dex';

	// Saving Throws
	data['fortitude_base'] = 4;
	data['fortitude_misc_mod'] = 0;

	data['reflex_base'] = 4;
	data['reflex_misc_mod'] = 0;

	data['will_base'] = 9;
	data['will_misc_mod'] = 0;

	// Proficiencies
	data['unarmed_prof'] = true;
	data['unarmed_fort'] = false;
	data['bows_prof'] = false;
	data['bows_fort'] = false;
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
	data['base_attack'] = 7;

	// +1 for fortes are added automatically elsewhere, so don't put
	// that here.  These are attack check (To-Hit) bonuses.
	data['unarmed_misc_mod'] = 0;
	data['melee_misc_mod'] = 0;
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
	data['unarmed_attr'] = 'str';
	data['melee_attr'] = 'str';
	data['ranged_attr'] = 'dex';

	// Weapons!
	data.weapons = [];

	data.weapons.push( new Weapon( {
		name: 'Steel Dagger',
		style: 'melee',
		damageType: 's/p',
		damageBase: '1d6',
		damageAttr: 'str',
		threat: 19,
		size: 'D/1h',
		weight: 1,
		range: '15x2',
		props: 'Bleed, Hurl'
		}));
		
	data.weapons.push( new Weapon( {
		name: 'Razor',
		style: 'melee',
		damageType: 's',
		damageBase: '1d6',
		damageAttr: 'dex',
		threat: 19,
		size: 'F/1h',
		weight: 0.5,
		props: 'Bleed, +1/2 dmg as stress, Finesse'
		}));
		
	data.weapons.push( new Weapon( {
		name: 'Stiletto',
		style: 'melee',
		damageType: 'p',
		damageBase: '1d4',
		damageAttr: 'dex',
		threat: 18,
		size: 'D/1h',
		weight: 0.5,
		props: 'AP 8, Finesse'
		}));
		
	// Condition Definitions (assumes defineConditionFunctionality() already called
	// on the given context.

	// Spells
	data['spell points'] = 33;
	data['spell_feats'] = 7;

	data.spells = [];

	data.spells.push(lookupSpell('DETECT ALIGNMENT'));
	data.spells.push(lookupSpell('MAGIC VESTMENT I'));
	data.spells.push(lookupSpell('GLOW I'));
	data.spells.push(lookupSpell('DETECT SECRET DOORS'));
	data.spells.push(lookupSpell('TELEPATHY'));
	data.spells.push(lookupSpell('DETECT MAGIC'));
	data.spells.push(lookupSpell('SCARE I'));
	data.spells.push(lookupSpell('SLEEP I'));
	data.spells.push(lookupSpell('DISGUISE SELF'));
	data.spells.push(lookupSpell('UNSEEN SERVANT'));
	data.spells.push(lookupSpell('DETECT EMOTION'));
	data.spells.push(lookupSpell('KNOCK'));
	data.spells.push(lookupSpell('MAGE ARMOR'));
	data.spells.push(lookupSpell('SILENCE'));
	data.spells.push(lookupSpell('CURE WOUNDS II'));
	data.spells.push(lookupSpell('SHAPE CHANGE II'));
	data.spells.push(lookupSpell('INVISIBILITY'));
	data.spells.push(lookupSpell('READ THOUGHTS'));
	data.spells.push(lookupSpell('COUNTER MAGIC I'));
	data.spells.push(lookupSpell('TONGUES II'));
	data.spells.push(lookupSpell('MAGE SCRIBE I'));
	data.spells.push(lookupSpell('DETECT LIES'));
	data.spells.push(lookupSpell('DIMENSION DOOR'));
	data.spells.push(lookupSpell('FLAWLESS FIB'));
	data.spells.push(lookupSpell('FREEDOM OF MOVEMENT'));
	data.spells.push(lookupSpell('RESILIENT SPHERE I'));
	data.spells.push(lookupSpell('SCRYE III'));
	data.spells.push(lookupSpell('FLY II'));

	tempx = lookupSpell('WIT II');
	
	var clickFn = function(event, scope) {
		scope.data.conditions.smart.addGrade(event, 5);
		scope.popup.show('INT increased by 5', event);
	};

	// tempx.aux = '<span class="link" onClick="data.conditions.smart.addGrade(event, 5);">INT</span>&nbsp;' +
			// '<span class="link" onClick="data.conditions.wise.addGrade(event, 5);">WIS</span>&nbsp;' +
			// '<span class="link" onClick="data.conditions.cute.addGrade(event, 5);">CHA</span>';
	tempx.aux = makeLink('INT', clickFn);

	clickFn = function(event, scope) {
		scope.data.conditions.wise.addGrade(event, 5);
		scope.popup.show('WIS increased by 5', event);
	};
	
	tempx.aux = tempx.aux + ' or ' + makeLink('WIS', clickFn);
	
	clickFn = function(event, scope) {
		scope.data.conditions.cute.addGrade(event, 5);
		scope.popup.show('CHA increased by 5', event);
	};

	tempx.aux = tempx.aux + ' or ' + makeLink('CHA', clickFn);
	
	data.spells.push(tempx);

	tempx = lookupSpell('SEARING RAY');
	clickFn = function(event, scope) {
		scope.showRoll('Searing Ray Damage', '7d8', event);
	};

	var html = makeLink('Roll Damage', clickFn);

	tempx.aux = html; //angular.compile(angular.element(html));
	data.spells.push(tempx);

	tempx = lookupSpell('FINGER OF DEATH');
	tempx.level = parseInt(tempx.level, 10) - 1;
	tempx.dc = 13 + tempx.level * 3 - 2;

	clickFn = function(event, scope) {
		scope.showRoll('Damage if Save', '3d6+14', event);
	};

	tempx.aux = makeLink('Damage if Save', clickFn);
	data.spells.push(tempx);

	tempx = (lookupSpell('TRUE SEEING'));
	tempx.dc = tempx.dc - 2;
	data.spells.push(tempx);

	tempx = (lookupSpell('MIND PROBE'));
	tempx.level = parseInt(tempx.level, 10) - 1;
	tempx.dc = 13 + tempx.level * 3 - 2;
	data.spells.push(tempx);

	tempx = (lookupSpell('DOMINATE'));
	tempx.level = parseInt(tempx.level, 10) - 1;
	tempx.dc = 13 + tempx.level * 3 - 2;
	data.spells.push(tempx);

	tempx = (lookupSpell('FLARE'));
	clickFn = function(event, scope) {
		scope.showRoll('Roll duration','d6',event);
	};
	tempx.aux = makeLink('Roll duration', clickFn); //'<span class="link" onClick="showRoll(\'Roll duration\',\'d6\',event);">Roll Duration</span>';
	data.spells.push(tempx);

	data.spells.push(lookupSpell('SHADOW WALK'));
	data.spells.push(lookupSpell('ENDURE ELEMENTS'));
	data.spells.push(lookupSpell('EXPEDITIOUS RETREAT'));
	data.spells.push(lookupSpell('ORIENT SELF'));
	data.spells.push(lookupSpell('WHISPERS'));

	// Miscellaneous Abilities
	data.abilities = [];

	data.abilities.push( [ 'Double Boost', 'May spend 2 action dice on INT skills' ] );
	data.abilities.push( [ 'Split Decision', 'May have 2 prepared ready actions' ] );
	data.abilities.push( [ 'Charming', 'Increase disposition of an NPC by 5 1/scene' ] );
	data.abilities.push( [ 'Terrifying Look', '+4 to save DC vs my stress dmg attacks' ] );
	data.abilities.push( [ 'Paired Skills', 'Spellcasting and Intimidate' ] );
	data.abilities.push( [ 'Hurled Forte', '+1 with hurled weapons' ] );
	data.abilities.push( [ 'Edged Forte', '+1 with edged weapons' ] );
	data.abilities.push( [ 'Unarmed Proficiency', 'Unarmed attracks do lethal damage' ] );
	data.abilities.push( [ 'Mix-Up Disarm', '+3 to Disarm if not done recently' ] );
	data.abilities.push( [ 'Relentless Attack', '+2 to attack if missed last time' ] );
	data.abilities.push( [ 'Venom Master', '+1 error range: poison incubation is instant' ] );
	data.abilities.push( [ 'Casting Supremacy', '+4 Spellcasting, 17+ threat, free critical activation' ] );
	data.abilities.push( [ 'Hidden Spell', 'Cast without speaking or gesturing' ] );
	data.abilities.push( [ 'Casting Mastery', 'Re-roll a spellcast check 1/scene' ] );
	data.abilities.push( [ 'Spell Power', '5 extra spell points per scene' ] );
	data.abilities.push( [ 'Spell Conversion (Area)', '+3 points to double area of a spell' ] );
	data.abilities.push( [ 'Spell Conversion (Cast Time)', '+3 points to make casting a free action' ] );
	data.abilities.push( [ 'Double Cast', '5 times/session, cast twice in 1 round' ] );
	data.abilities.push( [ 'Master of Magic', 'May take 10 on cast check 5/scene' ] );
	data.abilities.push( [ 'Mage', 'Once per scene, regain spell points equal to the sum of up to 3 non-exploding action dice' ] );

	// Junk
	data['panache'] = 7;
	data['prudence'] = 2;

	data['appearance_bonus'] = 2;
	data['money_saved'] = '25%';

	data['walk_speed'] = 30;
	data['other_speed'] = 60;
	data['other_speed_mode'] = 'fly';
	data['travel_speed'] = 3;

	}; // End "with" block.
} // End defineCharacterData function.
