# 清空 deploy 目录
if [ -d "deploy" ]; then
    echo "Cleaning up existing deploy directory"
    rm -rf deploy
fi

mkdir -p deploy
# 收集 apps 文件夹下 react-app 的 dist
if [ -d "apps/react-app/dist" ]; then
    echo "Copying apps/react-app/dist to deploy/react-app"
    cp -r apps/react-app/dist deploy/react-app
else
    echo "apps/react-app/dist not found"
fi
# 收集 micro-apps 文件夹下每个子项目的 dist
if [ -d "micro-apps" ]; then
    for sub_dir in micro-apps/*; do
        if [ -d "$sub_dir/dist" ]; then
            echo "Copying $sub_dir/dist to deploy/$(basename "$sub_dir")"
            cp -r "$sub_dir/dist" "deploy/$(basename "$sub_dir")"
        else
            echo "$sub_dir/dist not found"
        fi
    done
else
    echo "micro-apps directory not found"
fi