import json,pathlib,subprocess,concurrent.futures
root=pathlib.Path('blender/tree');root.mkdir(exist_ok=True)
g=json.load(open('/tmp/small.json'))['gltf']['1k']['gltf'];items={'tree.gltf':g,**g['include']}
def fetch(item):
 n,d=item;p=root/n;p.parent.mkdir(parents=True,exist_ok=True);subprocess.run(['curl','-fLs',d['url'],'-o',str(p)],check=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:list(ex.map(fetch,items.items()))
