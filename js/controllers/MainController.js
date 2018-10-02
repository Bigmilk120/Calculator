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
	
	$scope.change_char=function(i){
		$scope.screen+=$scope.chars[i].value.toString();
	};
	
	$scope.save_use=function(i){
		$scope.screen+=$scope.saved[i].value.toString();
	};
	
	$scope.operation=function(i){
		if(i==0){
			$scope.screen=eval($scope.screen);
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
			} else{
				
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
}]); 