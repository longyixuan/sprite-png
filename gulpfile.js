var gulp=require("gulp"),
    spritesmith=require("gulp.spritesmith");

gulp.task("default", function () {
    return gulp.src("src/images/*.png")//��Ҫ�ϲ���ͼƬ��ַ
        .pipe(spritesmith({
            imgName: "images/picsrv_login/sprite.png",//����ϲ���ͼƬ�ĵ�ַ
            cssName: "css/sprite.css",//����ϲ������css��ʽ�ĵ�ַ
            padding:5,//�ϲ�ʱ����ͼƬ�ļ��
            algorithm: "binary-tree",//ע��1
            cssTemplate:"src/css/handlebarsStr.css"//ע��2
        }))
        .pipe(gulp.dest("dist/"));
});