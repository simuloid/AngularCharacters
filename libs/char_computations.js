//****************************************************************************
//  It is assumed that a complete somebody_char_data.js has been populated
//  before we get here.
//****************************************************************************
function postDefineCharacterData(context) {
	var i; // Each weapon in weapon list
	var x;
	
	with (context) {

		data['total_studies'] = 0;

		for (I = 0; I < data['interests'].length; I += 1) {
			if (data['interests'][I].indexOf('Study:') === 0) {
				data['total_studies'] += 1;
			}
		}

		// Knowledge Skill is placed down here so that we can define total studies.
		data['skills']['knowledge'] = new Skill( { name: 'knowledge', isOrigin: true, misc: data['total_studies'] } );

		data['lost_vitality'] = 0;
		data['cur_vitality'] = data['max_vitality'];

		data['lost_wounds'] = 0;
		data['cur_wounds'] = data['max_wounds'];

		data['cur_action_dice'] = data['starting_action_dice'];

		data['defense_dex_mod'] = data['dex_mod'];
		data['defense_total'] = function() { return 10 + data['defense_class_bonus'] +
		  data['defense_dex_mod']() + data['defense_size_mod'] + data['defense_dodge_mod'] +
		  data['defense_misc_mod'] + data['defense_armor_mod'] };

		data['initiative_dex_mod'] = data[data['initiative_attribute']+'_mod'];
		data['initiative_total'] = function() { return data['initiative_class_bonus'] + 
		  data['initiative_dex_mod']() + data['initiative_misc_mod']; };

		data['fortitude_attr_mod'] = data['con_mod'];
		data['fortitude_total'] = function() { return data['fortitude_base'] + 
		  data['fortitude_attr_mod']() + data['fortitude_misc_mod']; };

		data['reflex_attr_mod'] = data['dex_mod'];
		data['reflex_total'] = function() { return data['reflex_base'] +
		  data['reflex_attr_mod']() + data['reflex_misc_mod']; };

		data['will_attr_mod'] = data['wis_mod'];
		data['will_total'] = function() { return data['will_base'] +
		  data['will_attr_mod']() + data['will_misc_mod']; };

		data['unarmed_misc_mod'] += (data['unarmed_fort']) ? 1 : 0;
		data['melee_misc_mod'] += (data['blunt_fort'] || data['edged_fort']) ? 1 : 0;
		data['ranged_misc_mod'] += (data['bows_fort'] || data['hurled_fort'] || data['black_powder_fort']) ? 1 : 0;

		data['unarmed_attr_mod'] = data[data['unarmed_attr']+'_mod'];
		data['unarmed_total'] = function() { return data['base_attack'] +
		  data['unarmed_attr_mod']() + data['unarmed_misc_mod']; };

		data['melee_attr_mod'] = data[data['melee_attr']+'_mod'];
		data['melee_total'] = function() { return data['base_attack'] +
		  data['melee_attr_mod']() + data['melee_misc_mod']; };

		data['ranged_attr_mod'] = data[data['ranged_attr']+'_mod'];
		data['ranged_total'] = function() { return data['base_attack'] +
		  data['ranged_attr_mod']() + data['ranged_misc_mod']; };

		for (i = 0; i < data.weapons.length; ++i) {
			x = data.weapons[i].style;
			data.weapons[i].bonus = data[x+'_total'];
		}
		
		data['class_level_1'] = data['class_1'] + ' / ' + data['level_1'];
		data['class_level_2'] = data['class_2'] + ' / ' + data['level_2'];
		data['class_level_3'] = data['class_3'] + ' / ' + data['level_3'];
		
		data['cur_spellpoints'] = data['spell points'];
		data['spell_save_dc'] = function() { return 10 + data['spell_feats'] + data['cha_mod'](); };

		data['total_lifestyle'] = data['panache'] + data['prudence'];

		data['income'] = 10 * data['panache'];
	};
}
