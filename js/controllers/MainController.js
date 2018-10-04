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
	$opers=[];
	$buffor=0;
	$count=0;
	$scope.change_char=function(i){
		if($scope.hexagonal==true){
			$nums[$count]=$scope.screen;
			$buffor+=$nums[$count].length+1;
			
		}
		//$scope.screen+=$scope.chars[i].value.toString();
		$opers[$count]=$scope.chars[i].value;
		$scope.screen=$nums[$count];
		
		$scope.screen+=" "+$buffor;
		$scope.screen+=" "+$count;
		$scope.screen+=" "+$opers[$count];
		$count++;
	};
	
	$scope.save_use=function(i){
		$scope.screen+=$scope.saved[i].value.toString();
	};
	
	$scope.operation=function(i){
		if(i==0){
			if($scope.decimal==true)
				$scope.screen=eval($scope.screen);
			else if($scope.hexagonal==true){
				$hex_num=String(parseInt($scope.screen, 16));
				$scope.screen=eval($hex_num);
			}else if($scope.binary==true){
				$scope.screen="It's still not working";
			}
		}else if(i==1){
			$scope.screen=" ";
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