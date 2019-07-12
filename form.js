function trainer_details(){
    const trainer = new details();
    trainer.t_details(
        trainer_name=document.getElementById('trainer_name').value,
        email=document.getElementById('email').value,
        skills=document.getElementById('skill').value
    );
    trainer.t_add();
}

function searchclass(){
    var sec=new details();
    sec.sec_class(
        document.getElementById('searchclass').value
    );
}

function class_details(){
    const cdetails = new details();
    cdetails.c_details(
        class_name=document.getElementById('class_name').value,
        slot=document.getElementById('slot').value,
        subject=document.getElementById('subject').value,
        trainer=document.getElementById('t_name').value
    );
    cdetails.c_add();
}

const c_sub = () => {
    var sub = new details();
    const sub_trainer = sub._filter(
        document.getElementById('subject').value
    );
    buildTrainername(sub_trainer);
}

const buildTrainername = (sub_trainer)=> { 
    const train_name = document.getElementById('t_name');
    let rows = '';
    sub_trainer.forEach((det)=>{
    rows += `<option value=${det.tname}>${det.tname}
    </option>`
    });
    train_name.innerHTML=rows;
}

function view_edit(){
    document.getElementById('class_name').focus();

}
 
class details{

    t_details(trainer_name,email,skills){
        this.trainer_name=trainer_name;
        this.email=email;
        this.skills=skills;
    }

    t_add(){
        localStorage.setItem(this.trainer_name,JSON.stringify({
            tname : this.trainer_name,
            email : this.email,
            tskill: this.skills,
        }));
    }

    c_details(class_name,slot,subject,trainer){
        this.class_name=class_name;
        this.slot=slot;
        this.subject=subject;
        this.trainer=trainer;
    }

    c_add(){
        localStorage.setItem("class_details",JSON.stringify({
            class_name : this.class_name,
            slot: this.slot,
            subject: this.subject,
            trainer: this.trainer
        }));
        
    }

    _filter(subject){
        let subj = [];
        if(subject=='maths'){
            Object.keys(localStorage).forEach((e)=>{
                const train = JSON.parse(localStorage.getItem(e));
                if(train.tskill == 'maths'){
                    subj.push(train);
                }
            });
        }
        else if(subject=='science'){
            Object.keys(localStorage).forEach((e)=>{
                const train = JSON.parse(localStorage.getItem(e));
                if(train.tskill == 'science'){
                    subj.push(train);
                }
            });
        }
        else if(subject=='cs'){
            Object.keys(localStorage).forEach((e)=>{
                const train = JSON.parse(localStorage.getItem(e));
                if(train.tskill == 'cs'){
                    subj.push(train);
                }
            });
        }
        else if(subject=='sports'){
            Object.keys(localStorage).forEach((e)=>{
                const train = JSON.parse(localStorage.getItem(e));
                if(train.tskill == 'sports'){
                    subj.push(train);
                }
            });
        }
        else if(subject=='eng'){
            Object.keys(localStorage).forEach((e)=>{
                const train = JSON.parse(localStorage.getItem(e));
                if(train.tskill == 'eng'){
                    subj.push(train);
                }
            });
        }
        else if(subject=='java'){
            Object.keys(localStorage).forEach((e)=>{
                const train = JSON.parse(localStorage.getItem(e));
                if(train.tskill == 'java'){
                    subj.push(train);
                }
            });
        }
        return subj;
    }

    sec_class(searchclass){
        console.log(searchclass);
        const subj = [];
        if(searchclass=="class_A")
        {
            document.getElementById("sub3").value='Science';
            document.getElementById("sub5").value='Sports';
            document.getElementById("sub2").value='Java';
            document.getElementById("sub6").value='CS';
            document.getElementById("sub1").value='English';
            document.getElementById("sub4").value='Maths';
        }
        else if(searchclass=='class_B'){
            document.getElementById("sub1").value='Science';
            document.getElementById("sub2").value='Sports';
            document.getElementById("sub3").value='Java';
            document.getElementById("sub4").value='CS';
            document.getElementById("sub5").value='English';
            document.getElementById("sub6").value='Maths';
        }
        return subj;
    }

}