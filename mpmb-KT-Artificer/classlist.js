/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This is the syntax for adding a new class to the sheet
				Note that you will need the syntax for adding a subclass as well if you want the class to have any choices for subclasses
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/


var iFileName = "KibblesTasty - ClassList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SourceList["KibblesTasty"] = {
	name : "KibblesTasty Revised artificer v2.0.1",
	abbreviation : "KT:RA",
	group : "KibblesTasty",
	url : "https://www.gmbinder.com/share/-LAEn6ZdC6lYUKhQ67Qk",
	date : "2019/10/21"
};

//Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []
ClassList["artificer"] = { 
	//required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "my" and "class" in it,
	// disregarding capitalization). If this looks too complicated, just write: /myclass/i

	regExpSearch : /artificer/i, 
	name : "Artificer", //required; the name to use for the class
	source : ["KT:RA", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	//required; the text to display when citing the primary ability of the class
	primaryAbility : "\n \u2022 Artificer: Intelegence;", 
	 //required; the text to display when citing the prerequisite for the class when multiclassing
	prereqs : "\n \u2022 Artificer: Intelegence 13;",
	die : 10, //required; the type of hit die the class has (i.e. 10 means d10)

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5], //required; the amount of ability score improvements (or feats) at each level. Note that there are 20 entries, one for each level. This example uses the Fighter's progression

	saves : ["Int", "Con"], //required; the two save proficiencies.
 	 //required; the text to display for skill proficiencies. Note the \n\n at the start, they are important!
 	 // The first entry is for when the class is the primary class, 
  	// the second entry is for when the class is taken later as part of a multiclass

	skills : ["\n\n" + toUni("Artificer") + ": Choose three from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, Sleight of Hand"],
/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	
	// optional; this is an object with arrays with the tool proficiencies gained.
	//  Each entry in an array can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) 
	// a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation 
	// if the tool is to be listed in the skill section and have a bonus calculated
	toolProfs : { 
		// optional; the tool proficiencies gained if the class is the primary class (i.e. taken at 1st level)
		primary : [["Thieves' tools", "Dex"]], 
		},

	armor : [ //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		[true, true, false, false], //required; the armor proficiencies if this is the first or only class
		[true, true, false, false] //required; the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

	weapons : [ //required; the 3 entries are for: ["simple", "martial", "other"]
		[true, false, ["hand crossbow", "heavy crossbow"]], //required; the weapon proficiencies if this is the first or only class
		[true, false, ["hand crossbow", "heavy crossbow"]] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

	equipment : "Artificer starting equipment:\n \u2022 a light crossbow and quiver of 20 bolts  -or- any two simple weapons.\n \u2022 Scale mail -or- leather armor -or- chain mail\n \u2022 thieves’ tools and a dungeoneer’s pack.\n\n In addition to the equipment granted by your background.",
	//required; the names of the subclasses. The first entry is the overall name that is given to the subclasses, 
	// the second entry is a list of the subclass, using the exact names of the entry of the subclasses in the ClassSubList.
	// Note that if one of the entries in the array of subclasses doesn't exist in the ClassSubList,
	// the sheet will throw an error as soon as you make a character with levels in this class

	//IMPORTANT: for any subclass you add using the AddSubClass() function, don't list them here!
	// The AddSubClass() function makes its own entry in this array! If you have entries here that don't exist 
	// (because you didn't add any ClassSubList entry, or added it using the AddSubClass() function, then the sheet will throw strange errors)!


	subclasses : ["Artificer Specialization", ["Thundersmith"]],
	//optional; if you include this attribute, the sheet will consider the class a prestige class 
	// You can make this attribute a number, which represents the levels the character must have before being able to gain the prestige class. 
	// Alternatively, you can make this attribute a string, which can be evaluated with eval() and returns either true (prereqs met) or false 
	// (prereqs not met).
	prestigeClassPrereq : 1, 
	 //required; the amount of attacks at each level. Note that there are 20 entries, one for each level.

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	 //optional, but required for a spellcaster; the ability score to use for the Ability Saving Throws. 
	 // Remove this line if your class has no Ability that requires Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)

	abilitySave : 4,
	// required for a spellcaster; the speed with which spell progression works type 1 for full spellcasting (Cleric),
	//  2 for half spellcasting (Paladin), and 3 for one-third spellcasting (Arcane Trickster). 
	// This can be any positive number other than 0. Remove this line if your class has no spellcasting.
	// If your character uses the Warlock way of spellcasting, write "warlock1" here.
	// The 1 indicates the spell progression factor. You can change it to a 2 or 3 to have half or one-third spell progression
	//  (or to any other factor you like).

	spellcastingFactor : "ktartificer2", 
		// You can also have this refer to a Spell Slot progression you define yourself, 
		// as a separate variable (see "Homebrew Syntax - SpellTable.js"). 
		// In order to do this the name of that variable and the spellcastingFactor must match.
		//  Using the name "purplemancer" for example would mean that here you put [spellcastingFactor : "purplemancer1"]
		// (the 1 is the factor, this can be any positive number other than 0) while for the variable containing the table you use "purplemancerSpellTable".
		// Note that the name is all lower case!

	
	spellcastingKnown : { //Optional; Denotes the amount and type of spells the class has access to
 //Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to cantrips. 
 // The numbers reflect the amount of cantrips known

		cantrips : [0],
		//Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to spells. 
		// The numbers reflect the amount of spells known. For a class that doesn't know spells, but prepares them from a list,
		// you should put "list" here. For a class that uses a spellbook, you should put "book" here.

		spells : [0, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12],
		prepared : false, //Optional; This indicates that the class has to prepare spells like a cleric/druid/paladin/wizard

	},


	features : { //required;  the class features. Each works the same way, so only a couple of example are given. You can add as many as you want
		"subclassfeature1" : { 
			name : "Artificer Specialization",
			source : ["KT:RA", 0],
			minlevel : 1,
			description : "\n   " + "Choose an Artificer Specialization you devot your craft to and put it in the \"Class\" field" + "\n   " + "Choose From Gadgetsmith(NotImplemented),Thundersmith",
		},

		"magic item analysis" : { //note the use of lower case characters
			name : "Magic Item Analysis", //required; the name of the class feature
			source : ["KT:RA", 0], //required; the source of the class feature
			minlevel : 1, //required; the level at which the feature is gained
			description : "\n   " + "your understanding of magic items allows you to analyze and understand their secrets. You know the artificer spells detect magic and identify, and you can cast them as rituals without material components.", //required; the text to put in the "Class Features" field
			choices : ["Great Weapon Fighting", "Protection", "Two-Weapon Fighting"], //optional; choices the feature offers, if any.
			choicesNotInMenu : true, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			spellcastingBonus : {
				name : "Magic Item Analysis",
				spells : ["detect magic", "identify"],
				selection : ["detect magic", "identify"],
				firstCol : "(R)",
			}

		},

		"Tool Expertise" : {
			name : "Tool Expertise",
			source : ["KT:RA", 0],
			minlevel : 2,
			description : "\n   " + "Starting at 2nd level, your proficiency bonus is doubled for any ability check you make that uses any of the tool proficiencies you gain from this class.",
		},

//You need at least one entry named "subclassfeatureX". It signals the sheet to ask the user for which subclass he would like to have. 
// The level of this feature should match the level the class needs to select a subclass. 
// Once a subclass is selected, any feature with "subclassfeature" in the object name in the class entry will be ignored.



		"subclassfeature3.1" : {
			name : "", //any feature who's name is empty like this one is, will be ignored. Since v12.5 of the sheet, an entry like this serves no function
			minlevel : 3,
		},

		"natural antivenom" : {
			name : "Natural Antivenom",
			source : ["UA:MC", 7],
			minlevel : 9,
			description : desc([
				"I have advantage on saves vs. poison and resistance to poison damage",
				"When I use a poultice, in addition to healing, I cure one poison effect on the creature",
				"I gain proficiency with Constitution saving throws"
			]),

			savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"

				text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg", "Magic can't put me to sleep"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here

				immune : ["poison", "disease"], // Optional; this is an array of strings that the character is immune to. This is put in the field after the text "Immune to ", so in this example it would result in "Immune to poison and disease"

				adv_vs : ["traps", "charmed"] // Optional; this is an array of things that the character has advantage on saves against. This is put in the field after the text "Adv. on saves vs. ", so in this example it would result in "Adv. on saves vs. traps and charmed"
			},

			dmgres : ["Poison"], //optional; an array of damage types that the class gets resistance against. // If the resistance has a condition attached to it, like only being against nonmagical attacks, substitute the entry in the array with an array of 2: [the damage type, the damage type with the condition]. // For example: [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]

			saves : ["Con"], //optional; an array of the ability scores with which the class feature grants proficiency in saving throws

			toolProfs : [["Musical instrument", 3], ["Thieves' tools", "Dex"]], 
			// optional; this is an array with the tool proficiencies gained. Each entry can be its own array of 2 entries. 
			// The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) 
			// the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated

			languageProfs : [1, "Elvish"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

			speed : { //required; This sets a value for one or more speed modes, and/or a value to be added to a specific speed mode or to all speed modes // the attributes of this object can be "walk", "burrow", "climb", "fly", "swim", and "allModes"

				// all of the following attributes are optional and you can add more ("burrow" isn't part of this example!)

				walk : { spd : 30, enc : 20 }, // the objects "walk", "burrow", "climb", "fly", "swim" are all the same, they are an object with two attributes, 'spd' for the speed in feet, and 'enc' for the encumbered speed in feet.

				climb : { spd : "+50", enc : 0 }, // instead of numbers, you can also have modifiers. Modifiers are a string, starting with a mathematical operator, followed by a number (e.g. "-10", "+20"). // a value that is zero is ignored

				fly : { spd : "walk", enc : 0 }, // instead of a number/modifier, you can also set the attribute to "walk". This makes the speed mode assume the walking speed // Using an underscore as the first character means the value is only added if the value would be non-zero

				swim : { spd : "fixed 60", enc : "fixed 60" }, // if you include the word "fixed" together with a number, the movement mode will be that number, without any modifiers from other sources (like the Monk's speed bonus). However, if another entry that isn't 'fixed' does end up with a higher total while including any modifiers, that speed is used instead

				allModes : "+10" // the 'allModes' attribute can only consist of a modifier. This modifier is applied to all speed modes, both normal and encumbered. It is only applied if the speed mode exists, it won't give the character a burrow speed if it would otherwise have none, for example
			},
		},
	}
}