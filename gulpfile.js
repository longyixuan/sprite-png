var gulp=require("gulp"),
    spritesmith=require("gulp.spritesmith");

gulp.task("default", function () {
    return gulp.src("src/images/*.png")//需要合并的图片地址
        .pipe(spritesmith({
            imgName: "images/picsrv_login/sprite.png",//保存合并后图片的地址
            cssName: "css/sprite.css",//保存合并后对于css样式的地址
            padding:5,//合并时两个图片的间距
            algorithm: "binary-tree",//注释1
            cssTemplate:"src/css/handlebarsStr.css"//注释2
        }))
        .pipe(gulp.dest("dist/"));
});