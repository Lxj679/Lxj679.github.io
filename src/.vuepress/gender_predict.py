def predic_gender(name):
    namedata=[("张伟","男"),("王伟","男"),("王芳","女"),("李伟","男"),("李娜","女"),
            ("张敏","女"),("李静","女"),("王静","女"),("刘伟","男"),("王秀英","女"),
            ("王丽","女"),("张静","女"),("张秀英","女"),("李强","男"),("王敏","女"),
            ("李敏","女"),("王磊","男"),("刘洋","男"),("王艳","女"),("王勇","男"),
            ("李军","男"),("张勇","男"),("李杰","男"),("张杰","男"),("张磊","男"),
            ("王强","男"),("李娟","女"),("王军","男"),("张艳","女"),("张涛","男"),
            ("王涛","男"),("李艳","女"),("王超","男"),("李明","男"),("李勇","男"),
            ("王娟","女"),("刘杰","男"),("刘敏","女"),("李霞","女"),("李丽","女"),
            ("张军","男"),("王杰","男"),("张强","男"),("王秀兰","女"),("王刚","男"),
            ("王平","男"),("刘芳","女"),("刘燕","女")]
    gender_count={}#初始化统计字典
    for name, gender in namedata:
        last_char = name[1:]#获取名字除姓氏外的字符串
        if last_char not in gender_count:
            gender_count[last_char][gender] += 1
    gender_map = {}#创建性别映射字典
    for char, counts in gender_count.items():
        if counts['男'] > counts['女']:
            gender_map[char] = 'male'
        elif counts['女'] > counts['男']:
            gender_map[char] = 'female'
        else:
            gender_map = 'unknown'
    print(gender_map)
    last_char = name[1:]
    return gender_map.get(last_char)
predict_data = ['程丽','陆明','徐敏','章超','金秀兰','汪磊','刘霞','潘秀英']
predictions = [(name,predic_gender(name)) for name in predict_data]
print(predictions)



    
           


