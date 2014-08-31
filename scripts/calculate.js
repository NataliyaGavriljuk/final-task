function ViewModel(){
		this.DVT = ko.observable();
		this.PE = ko.observable();
	/*	ліва частина*/
		this.a = ko.computed(function(){
			if(!this.DVT()){
				return "[A]";
			}else{
				return (this.DVT() * 0.925).toFixed(2);
			}
		}, this);

		this.bc = ko.computed(function(){
			if(!this.DVT()){
				return "[B + C]";
			}
			else{
				return (182 * (0.122 * this.a() ) + 16 * (this.a() - (0.122 * this.a() )) ).toFixed(2);
			}
		}, this);

		this.e = ko.computed(function(){
			if(!this.DVT()){
				return "[E]";
			}
			else{
				return ((this.a() - (this.a() * 0.122)) * 14).toFixed(2);
			}
		}, this);

		this.g = ko.computed(function(){
			if(!this.DVT()){
				return "[G]";
			}
			else{
				return (0.064 * 16 * (this.a() - (0.122 * this.a() ))).toFixed(2);
			}
		}, this);

		this.h = ko.computed(function(){
			if(!this.DVT()){
				return "[H]";
			}
			else{
				return (3 * this.a() * 0.52).toFixed(2);
			}
		}, this);

	/*	права частина*/
		this.aPE = ko.computed(function(){
			if(!this.PE()){
				return "[A]";
			}else{
				return (this.PE() * 0.85).toFixed(2);
			}
		}, this);

		this.bcPE = ko.computed(function(){
			if(!this.PE()){
				return "[B + C]";
			}
			else{
				return (182 * (0.176 * this.aPE() ) + 16 * (this.aPE() - (0.176 * this.aPE() )) ).toFixed(2);
			}
		}, this);

		this.i = ko.computed(function(){
			if(!this.PE()){
				return "[I]";
			}
			else{
				return (14 * (this.aPE() - (this.aPE() * 0.176))).toFixed(2);
			}
		}, this);

		this.j = ko.computed(function(){
			if(!this.PE()){
				return "[J]";
			}
			else{
				return (this.aPE() * 0.896).toFixed(2);
			}
		}, this);

	/*	фінальні результати*/
		this.injectionsAvoided = ko.computed(function(){
			if(!this.DVT() || !this.PE()){
				return "[DVT + PE]";
			}
			else{
				return this.bc() * 1 + this.bcPE() * 1;
			}
		}, this);

		this.INRclinicVisits = ko.computed(function(){
			if(!this.DVT() || !this.PE()){
				return "[DVT + PE]";
			}
			else{
				return (this.e() * 1 + this.i() * 1).toFixed(2);
			}
		}, this);

		this.NurveVisits = ko.computed(function(){
			if(!this.DVT()){
				return "[DVT]";
			}
			else{
				return this.g();
			}
		}, this);

		this.Hospital = ko.computed(function(){
			if(!this.DVT() || !this.PE()){
				return "[DVT + PE]";
			}
			else{
				return this.h() * 1 + this.j() * 1;
			}
		}, this);
	}
ko.applyBindings(new ViewModel());
