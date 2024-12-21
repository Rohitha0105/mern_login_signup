const addPost = require('../model/AddPosts');
const College = require('../model/Signup')

const collegePost = async(req,res) =>{
    const {Organisation,Branch,Experience,Designation,NoOfOpenings,Salary} =
    req.body;
try{
   const college = await College.findById(req.UserId);

if(!college){
    res.status(400).json({message: "College ID not found"});
}
if(!Array.isArray(college.collegePost)){
    college.collegePost = [];
}
    const Post = new addPost({
            Organisation: college.name,
            Branch,
            Experience,
            Designation,
            NoOfOpenings,
            Salary,
            College: college._id,
        });

        const collegePost = await Post.save();

        college.collegePost.push(collegePost);

        await college.save();
        res.status(200).json(collegePost)
    } catch (error){
        console.log(error);
    }
}

module.exports = {collegePost};