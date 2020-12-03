var exec = require('child_process').exec;
function execute(cmd){
    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log("success");
        }
    });
}
execute('sequelize-auto -h 219.216.80.18 -d BSdataTest -u postgres -x 616616 -p 5432 -e postgres -o "./temp"');