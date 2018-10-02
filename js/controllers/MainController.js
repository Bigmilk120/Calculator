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
	$i=0;
	$scope.screen=" ";
	$scope.saved=[];
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
			
			
			
		}else{
			$len=$scope.screen.length;
			$scope.screen=$scope.screen.slice(0,$len-1);
		}
	};
}]); 