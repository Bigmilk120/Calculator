app.controller('MainController', ['$scope', function($scope) { 
	$scope.title = 'Calculator'; 
	$scope.numbers=[
		{value:"0",
		id:0},
		{value:"1",
		id:1},
		{value:"2",
		id:2},
		{value:"3",
		id:3},
		{value:"4",
		id:4},
		{value:"5",
		id:5},
		{value:"6",
		id:6},
		{value:"7",
		id:7},
		{value:"8",
		id:8},
		{value:"9",
		id:9},
		{value:"(",
		id:10},
		{value:")",
		id:11},
		{value:".",
		id:12},
	];
	$scope.hex=[
		{value:"0",
		id:0},
		{value:"1",
		id:1},
		{value:"2",
		id:2},
		{value:"3",
		id:3},
		{value:"4",
		id:4},
		{value:"5",
		id:5},
		{value:"6",
		id:6},
		{value:"7",
		id:7},
		{value:"8",
		id:8},
		{value:"9",
		id:9},
		{value:"A",
		id:10},
		{value:"B",
		id:11},
		{value:"C",
		id:12},
		{value:"D",
		id:13},
		{value:"E",
		id:14},
		{value:"F",
		id:15},
	
	];
	$scope.bin=[
		{value:"0",
		id:0},
		{value:"1",
		id:1}
	];
	
	$scope.chars=[
		{value:"+",
		id:0},
		{value:"-",
		id:1},
		{value:"*",
		id:2},
		{value:"/",
		id:3},
	];
	$scope.operations=[
		{id:0,
		value:"Result"},
		{id:1,
		value:"Clear"},
		{id:2,
		value:"Save"},
		{id:3,
		value:"Back"},
	];
	$scope.screen=" ";
	$saved_items=0;
	$s0=$s1=$s2=$s3=" ";
	$scope.change=function(i){
		$scope.screen+=$scope.numbers[i].value.toString();
	};
	$scope.change_hex=function(i){
		$scope.screen+=$scope.hex[i].value.toString();
	};
	$scope.change_bin=function(i){
		$scope.screen+=$scope.bin[i].value.toString();
	};
	$nums=[];
	$formula="";
	$opers=[];
	$buffor=0;
	$count=0;
	$czy=0;
	$scope.change_char=function(i){
		if($scope.hexagonal==true){
			$nums[$count]=$scope.screen.slice($buffor+1,$scope.screen.length);
			$buffor+=$nums[$count].length+1;
			$opers[$count]=$scope.chars[i].value;
			$count++;
		}
		if($scope.binary==true){
			$nums[$count]=$scope.screen.slice($buffor+1,$scope.screen.length);
			$buffor+=$nums[$count].length+1;
			$opers[$count]=$scope.chars[i].value;
			$count++;
		}
		$scope.screen+=$scope.chars[i].value.toString();
		
	};
	
	$scope.save_use=function(i){
		$scope.screen+=$scope.saved[i].value.toString();
	};
	
	$scope.operation=function(i){
		if(i==0){
			if($scope.decimal==true)
				$scope.screen=eval($scope.screen);
			else if($scope.hexagonal==true){
				$nums[$count]=$scope.screen.slice($buffor+1,$scope.screen.length);
				for(var i=0;i<$count;i++){
					$nums[i]=parseInt($nums[i],16);
					$formula+=$nums[i].toString()+$opers[i].toString();
				}
				$nums[$count]=parseInt($nums[$count],16);
				$formula+=$nums[$count].toString();
				$formula=eval($formula);
				
				$scope.screen=" "+$formula.toString(16);
				$nums=[];				
				$formula="";

				$opers=[];
				$buffor=0;
				$count=0;
			}else if($scope.binary==true){
				$nums[$count]=$scope.screen.slice($buffor+1,$scope.screen.length);
				for(var i=0;i<$count;i++){
					$nums[i]=parseInt($nums[i],2);
					$formula+=$nums[i].toString()+$opers[i].toString();
				}
				$nums[$count]=parseInt($nums[$count],2);
				$formula+=$nums[$count].toString();
				$formula=eval($formula);
				
				$scope.screen=" "+$formula.toString(2);
				$nums=[];				
				$formula="";

				$opers=[];
				$buffor=0;
				$count=0;
			}
		}else if(i==1){
			$scope.screen=" ";
			$formula="";
			$nums=[];
			$opers=[];
			$buffor=0;
			$count=0;
		}else if(i==2){
			if($saved_items==0){
				$s0=$scope.screen.toString();
				$saved_items++;
			} else if($saved_items==1){
				$s1=$scope.screen.toString();
				$saved_items++;
			} else if($saved_items==2){
				$s2=$scope.screen.toString();
				$saved_items++;
			} else if($saved_items==3){
				$s3=$scope.screen.toString();
				$saved_items++;
			}
			$scope.saved=[
				{id:0,
				value:$s0},
				{id:1,
				value:$s1},
				{id:2,
				value:$s2},
				{id:3,
				value:$s3}
			];
		}else{
			if($scope.screen==0){
				$formula="";
				$nums=[];
				$opers=[];
				$buffor=0;
				$count=0;
			}
				
			$len=$scope.screen.length;
			$scope.screen=$scope.screen.slice(0,$len-1);
		}
	};
	
	
	$scope.decimal = true;
	$scope.hexagonal = false;
	$scope.binary=false;
	$scope.isShowHide = function (param) {
	if (param == "decimal") {
		$scope.decimal = true;
		$scope.hexagonal = false;
		$scope.binary=false;
	}
	else if (param == "hexagonal") {
		$scope.decimal = false;
		$scope.hexagonal = true;
		$scope.binary=false;
	}
	else if (param=="binary") {
		$scope.decimal = false;
		$scope.hexagonal = false;
		$scope.binary=true;
	}
	}
	
}]); 