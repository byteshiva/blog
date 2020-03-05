<<<<<<< HEAD

var documents = [{
    "id": 0,
    "url": "https://byteshiva.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://byteshiva.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 2,
    "url": "https://byteshiva.github.io/about/",
    "title": "About Me",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 3,
    "url": "https://byteshiva.github.io/",
    "title": "",
    "body": "This site is built with fastpages, An easy to use blogging platform with extra features for Jupyter Notebooks.  fastpages automates the process of creating blog posts via GitHub Actions, so you don’t have to fuss with conversion scripts.  A full list of features can be found on GitHub. You can edit the index. md file to change this content. Posts"
    }, {
    "id": 4,
    "url": "https://byteshiva.github.io/search/",
    "title": "Search",
    "body": "          "
    }, {
    "id": 5,
    "url": "https://byteshiva.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 6,
    "url": "https://byteshiva.github.io/DEVELOPMENT.html",
    "title": "Development Guide",
    "body": " Seeing All Options From the Terminal     Basic usage: viewing your blog   Converting the pages locally   Visual Studio Code integration   Advanced usage         Rebuild all the containers     Removing all the containers     Attaching a shell to a container          You can run your fastpages blog on your local machine, and view any changes you make to your posts, including Jupyter Notebooks and Word documents, live. The live preview requires that you have Docker installed on your machine. Follow the instructions on this page if you need to install Docker. Seeing All Commands In The Terminal: There are many different docker-compose commands that are necessary to manage the lifecycle of the fastpages Docker containers.  To make this easier, we aliased common commands in a Makefile. You can quickly see all available commands by running this command in the root of your repository: make Basic usage: viewing your blog: All of the commands in this block assume that you’re in your blog root directory. To run the blog with live preview: make serverWhen you run this command for the first time, it’ll build the required Docker images, and the process might take a couple minutes. This command will build all the necessary containers and run the following services:  A service that monitors any changes in . /_notebooks/*. ipynb/ and . /_word/*. docx;*. doc and rebuild the blog on change.  A Jupyter Notebook server — use this to write and edit your posts.  You must see your terminal logs to find the link, which will start with https://127. 0. 0. 1:8888 A Jekyll server on https://127. 0. 0. 1:4000 — use this to preview your blog. The services will output to your terminal. If you close the terminal or hit Ctrl-C, the services will stop. If you want to run the services in the background: # run all services in the backgroundmake server-detached# stop the servicesmake stopIf you need to restart just the Jekyll server, and it’s running in the background — you can do make restart-jekyll. Note that the blog won’t autoreload on change, you’ll have to refresh your browser manually. If containers won’t start: try make build first, this would rebuild all the containers from scratch, This might fix the majority of update problems. To get the Jupyter Notebook Token: look for the Jupyter Notebook link in the output log of make server command, it’ll post the link with the token param in it. If you’re running containers in background, you can get the token by running the following command: # assuming you're running containers in background with docker-compose up -d# attach to bash in jupyter containermake bash-nb# get notebook list &amp; tokenjupyter notebook listConverting the pages locally: If you just want to convert your notebooks and word documents to . md posts in _posts, this command will do it for you: make convertYou can launch just the jekyll server with make server. Visual Studio Code integration: If you’re using VSCode with the Docker extension, you can run three containers from the sidebar: fastpages_jupyter_1,fastpages_watcher_1, and fastpages_jekyll_1. The containers will only show up in the list after you run or build them for the first time. So if they’re not in the list — try make build in the console. Advanced usage: Rebuild all the containers: If you changed files in _action_files directory, you might need to rebuild the containers manually, without cache. make buildRemoving all the containers: Want to start from scratch and remove all the containers? make removeAttaching a shell to a container: You can attach a terminal to a running service: # If the container is already running:# attach to a bash shell in the jekyll servicemake bash-jekyll# attach to a bash shell in the jupyter / watcher service. # they're essentially running the same software inside. make bash-nbNote: you can use docker-compose run instead of make bash-nb or make bash-jekyll to start a service and then attach to it. Or you can run all your services in the background, make server-detached, and then use make bash-nb or make bash-jekyll as in the examples above. "
    }, {
    "id": 7,
    "url": "https://byteshiva.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 8,
    "url": "https://byteshiva.github.io/face-api/jupyter/python/2020/03/02/Face-Recongnition-Intro.html",
    "title": "Face Recognition KickStarter",
    "body": "2020/03/02 -                 !pip3 install opencv-python  Collecting opencv-python Downloading opencv_python-4. 2. 0. 32-cp38-cp38-manylinux1_x86_64. whl (28. 2 MB)   |████████████████████████████████| 28. 2 MB 2. 1 MB/s eta 0:00:01Requirement already satisfied: numpy&gt;=1. 17. 3 in /home/siva/. asdf/installs/python/3. 8. 0/lib/python3. 8/site-packages (from opencv-python) (1. 18. 1)Installing collected packages: opencv-pythonSuccessfully installed opencv-python-4. 2. 0. 32  !pip3 install face_recognition       %pylab inline import face_recognitionimport cv2import matplotlib. patches as patchesfrom IPython. display import clear_outputfrom matplotlib. pyplot import imshowimport matplotlib. pylab as plt  Populating the interactive namespace from numpy and matplotlib        # Loading video for face detectionvideo_capture = cv2. VideoCapture(&quot;my_videos/hamilton_clip. mp4&quot;)frame_count = 0while video_capture. isOpened():    # Grab a single frame of video  ret, frame = video_capture. read()  # Bail out when the video file ends  if not ret:    video_capture. release()    break      # We will search face in every 15 frames to speed up process.   frame_count += 1  if frame_count % 15 == 0:      frame = cv2. cvtColor(frame, cv2. COLOR_BGR2RGB)        # Display video frame    title(&quot;Input Stream&quot;)    plt. imshow(frame)        # Find all the faces and face encodings in the current frame of video    rgb_frame = frame[:, :, ::-1]    face_locations = face_recognition. face_locations(rgb_frame)        # If faces were found, we will mark it on frame with blue dots    for face_location in face_locations:          plt. plot(face_location[1], face_location[0], &#39;bo&#39;)      plt. plot(face_location[1], face_location[2], &#39;bo&#39;)      plt. plot(face_location[3], face_location[2], &#39;bo&#39;)      plt. plot(face_location[3], face_location[0], &#39;bo&#39;)    # Show frame. . .     plt. show()     # . . . and hold it until a new frame appears    clear_output(wait=True)    "
    }, {
    "id": 9,
    "url": "https://byteshiva.github.io/face-api/jupyter/python/2020/03/02/Face-Reconginition-Example.html",
    "title": "Face Recognition Example",
    "body": "2020/03/02 -           Find faces in pictures We start by loading an example picture using Python imaging library. Go ahead and run the cell bellow to see the image.       from PIL import Image, ImageDrawfrom IPython. display import display# The program we will be finding faces on the example belowpil_im = Image. open(&#39;my_images/two_people. jpg&#39;)display(pil_im)    Learning from example Now we show the library two different faces (Joe Biden, Barack Obama) and generate the encodings for them. Encoding is simply a low dimensional representation of a face that can be easily compared with other faces the library will recognize in the future.       import face_recognitionimport numpy as npfrom PIL import Image, ImageDrawfrom IPython. display import display# This is an example of running face recognition on a single image# and drawing a box around each person that was identified. # Load a sample picture and learn how to recognize it. obama_image = face_recognition. load_image_file(&quot;my_images/obama. jpg&quot;)obama_face_encoding = face_recognition. face_encodings(obama_image)[0]# Load a second sample picture and learn how to recognize it. biden_image = face_recognition. load_image_file(&quot;my_images/biden. jpg&quot;)biden_face_encoding = face_recognition. face_encodings(biden_image)[0]# Create arrays of known face encodings and their namesknown_face_encodings = [  obama_face_encoding,  biden_face_encoding]known_face_names = [  &quot;Barack Obama. . &quot;,  &quot;Joe Biden. . &quot;]print(&#39;Learned encoding for&#39;, len(known_face_encodings), &#39;images. &#39;)  Learned encoding for 2 images.   Showtime Finally, we load the image we looked at in the first cell, find the faces in the image and compare them with the encodings the library generated in the previous step. We can see that library now correctly recognizes Barack and Joe in the input.       # Load an image with an unknown faceunknown_image = face_recognition. load_image_file(&quot;my_images/two_people. jpg&quot;)# Find all the faces and face encodings in the unknown imageface_locations = face_recognition. face_locations(unknown_image)face_encodings = face_recognition. face_encodings(unknown_image, face_locations)# Convert the image to a PIL-format image so that we can draw on top of it with the Pillow library# See http://pillow. readthedocs. io/ for more about PIL/Pillowpil_image = Image. fromarray(unknown_image)# Create a Pillow ImageDraw Draw instance to draw withdraw = ImageDraw. Draw(pil_image)# Loop through each face found in the unknown imagefor (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):  # See if the face is a match for the known face(s)  matches = face_recognition. compare_faces(known_face_encodings, face_encoding)  name = &quot;Unknown&quot;  # Or instead, use the known face with the smallest distance to the new face  face_distances = face_recognition. face_distance(known_face_encodings, face_encoding)  best_match_index = np. argmin(face_distances)  if matches[best_match_index]:    name = known_face_names[best_match_index]  # Draw a box around the face using the Pillow module  draw. rectangle(((left, top), (right, bottom)), outline=(0, 0, 255))  # Draw a label with a name below the face  text_width, text_height = draw. textsize(name)  draw. rectangle(((left, bottom - text_height - 10), (right, bottom)), fill=(0, 0, 255), outline=(0, 0, 255))  draw. text((left + 6, bottom - text_height - 5), name, fill=(255, 255, 255, 255))# Remove the drawing library from memory as per the Pillow docsdel draw# Display the resulting imagedisplay(pil_image)    Ref: https://www. pyimagesearch. com/2018/06/18/face-recognition-with-opencv-python-and-deep-learning/https://beta. deepnote. com/profile/d8e472ff-097c-4932-8ac5-850cfe8aaf86"
    }, {
    "id": 10,
    "url": "https://byteshiva.github.io/rust/jupyter/2020/03/01/Rust-KickStarter.html",
    "title": "Rust Notebook KickStarter",
    "body": "2020/03/01 -                 (1. . 13). map(fib). collect::&lt;Vec&lt;i32&gt;&gt;()  [2, 2, 4, 6, 10, 16, 26, 42, 68, 110, 178, 288]        let values = (1. . 13). map(fib). collect::&lt;Vec&lt;i32&gt;&gt;();values  [2, 2, 4, 6, 10, 16, 26, 42, 68, 110, 178, 288]        use std::sync::{Mutex, Arc};let counter = Arc::new(Mutex::new(0i32));std::thread::spawn({  let counter = Arc::clone(&amp;counter);  move || {    for i in 1. . 300 {      *counter. lock(). unwrap() += 1;      std::thread::sleep(std::time::Duration::from_millis(100));    }}});          *counter. lock()?  209        *counter. lock()?  288        *counter. lock()?  299        :dep base64 = &quot;0. 10. 1&quot;base64::encode(&amp;vec![1, 2, 3, 4])  &#34;AQIDBA==&#34;        pub fn fib(x: i32) -&gt; i32 {  if x &lt;= 2 {2} else {fib(x - 2) + fib(x - 1)}}          use std::fmt::Debug;pub struct Matrix&lt;T&gt; {pub values: Vec&lt;T&gt;, pub row_size: usize}impl&lt;T: Debug&gt; Matrix&lt;T&gt; {  pub fn evcxr_display(&amp;self) {    let mut html = String::new();    html. push_str(&quot;&lt;table&gt;&quot;);    for r in 0. . (self. values. len() / self. row_size) {      html. push_str(&quot;&lt;tr&gt;&quot;);      for c in 0. . self. row_size {        html. push_str(&quot;&lt;td&gt;&quot;);        html. push_str(&amp;format!(&quot;{:?}&quot;, self. values[r * self. row_size + c]));        html. push_str(&quot;&lt;/td&gt;&quot;);      }      html. push_str(&quot;&lt;/tr&gt;&quot;);          }    html. push_str(&quot;&lt;/table&gt;&quot;);    println!(&quot;EVCXR_BEGIN_CONTENT text/html\n{}\nEVCXR_END_CONTENT&quot;, html);  }}          let m = Matrix {values: vec![1,2,3,4,5,6,7,8,9], row_size: 3};m  123456789        extern crate image;extern crate base64;pub trait EvcxrResult {fn evcxr_display(&amp;self);}impl EvcxrResult for image::RgbImage {  fn evcxr_display(&amp;self) {    let mut buffer = Vec::new();    image::png::PNGEncoder::new(&amp;mut buffer). encode(&amp;**self, self. width(), self. height(),      image::ColorType::RGB(8)). unwrap();    let img = base64::encode(&amp;buffer);    println!(&quot;EVCXR_BEGIN_CONTENT image/png\n{}\nEVCXR_END_CONTENT&quot;, img);      }}impl EvcxrResult for image::GrayImage {  fn evcxr_display(&amp;self) {    let mut buffer = Vec::new();    image::png::PNGEncoder::new(&amp;mut buffer). encode(&amp;**self, self. width(), self. height(),      image::ColorType::Gray(8)). unwrap();    let img = base64::encode(&amp;buffer);    println!(&quot;EVCXR_BEGIN_CONTENT image/png\n{}\nEVCXR_END_CONTENT&quot;, img);      }}        image::ColorType::RGB(8)). unwrap();               ^^^ variant or associated item not found in `image::ColorType`no variant or associated item named `RGB` found for type `image::ColorType` in the current scope      image::ColorType::Gray(8)). unwrap();               ^^^^ variant or associated item not found in `image::ColorType`no variant or associated item named `Gray` found for type `image::ColorType` in the current scope        image::ImageBuffer::from_fn(256, 256, |x, y| {  if (x as i32 - y as i32). abs() &lt; 3 {    image::Rgb([0, 0, 255])  } else {    image::Rgb([0, 0, 0])  }})          :dep tokio = {version = &quot;0. 2&quot;, features = [&quot;full&quot;]}          let mut stream : tokio::net::TcpStream = tokio::net::TcpStream::connect(&quot;127. 0. 0. 1:99999&quot;). await?;  invalid port value        let mut stream : tokio::net::TcpStream = tokio::net::TcpStream::connect(&quot;127. 0. 0. 1:6573&quot;). await?;  Connection refused (os error 111)        use tokio::io::AsyncWriteExt;stream. write(b&quot;Hello, world!\n&quot;). await?;  stream. write(b&#34;Hello, world!\n&#34;). await?;^^^^^^ not found in this scopecannot find value `stream` in this scope        :vars  VariableTypemMatrix&lt;i32&gt;counterstd::sync::Arc&lt;std::sync::Mutex&lt;i32&gt;&gt;valuesstd::vec::Vec&lt;i32&gt;&lt;/table&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;        :help  :vars       List bound variables and their types:opt [level]   Toggle/set optimization level:fmt [format]   Set output formatter (default: {:?}). :efmt [format]  Set the formatter for errors returned by ?:explain     Print explanation of last error:clear      Clear all state, keeping compilation cache:dep       Add dependency. e. g. :dep regex = &#34;1. 0&#34;:sccache [0|1]  Set whether to use sccache. :linker [linker] Set/print linker. Supported: system, lld:version     Print Evcxr version:preserve_vars_on_panic [0|1] Try to keep vars on panicMostly for development / debugging purposes::last_compile_dir Print the directory in which we last compiled:timing      Toggle printing of how long evaluations take:last_error_json Print the last compilation error as JSON (for debugging):time_passes   Toggle printing of rustc pass times (requires nightly):internal_debug  Toggle various internal debugging code        let _immutable_binding = 1;let mut mutable_binding = 1;println!(&quot;Before mutation: {}&quot;, mutable_binding);// Okmutable_binding += 1;println!(&quot;After mutation: {}&quot;, mutable_binding);_immutable_binding += 1;  let _immutable_binding = 1;  ^^^^^^^^^^^^^^^^^^ first assignment to `_immutable_binding`_immutable_binding += 1;^^^^^^^^^^^^^^^^^^^^^^^ cannot assign twice to immutable variablecannot assign twice to immutable variable `_immutable_binding`  &lt;/div&gt;"
    }, {
    "id": 11,
    "url": "https://byteshiva.github.io/diagram/jupyter/code/diagram_as_code/2020/02/27/Diagram-as-Code.html",
    "title": "Diagram as Code",
    "body": "2020/02/27 -                 from diagrams import Diagramfrom diagrams. aws. compute import EC2with Diagram(&quot;Simple Diagram&quot;) as diag:  EC2(&quot;web&quot;)diag          pip install diagrams  Collecting diagrams Downloading https://files. pythonhosted. org/packages/59/41/24fbab973c1449faefd09a3197cb11311971df6db05ade2d15d554b7d8ef/diagrams-0. 6. 3-py3-none-any. whl (8. 8MB)   |████████████████████████████████| 8. 8MB 2. 5MB/s Collecting contextvars&lt;3. 0,&gt;=2. 4; python_version &gt;= &#34;3. 6&#34; and python_version &lt; &#34;3. 7&#34; Downloading https://files. pythonhosted. org/packages/83/96/55b82d9f13763be9d672622e1b8106c85acb83edd7cc2fa5bc67cd9877e9/contextvars-2. 4. tar. gzCollecting graphviz&lt;0. 14. 0,&gt;=0. 13. 2 Downloading https://files. pythonhosted. org/packages/f5/74/dbed754c0abd63768d3a7a7b472da35b08ac442cf87d73d5850a6f32391e/graphviz-0. 13. 2-py2. py3-none-any. whlRequirement already satisfied: jinja2&lt;3. 0,&gt;=2. 10 in /usr/local/lib/python3. 6/dist-packages (from diagrams) (2. 11. 1)Collecting immutables&gt;=0. 9 Downloading https://files. pythonhosted. org/packages/62/cc/3961b18a1a689a7e3232d923a8546cb901c49b4a33be6987c03a89175c4f/immutables-0. 11-cp36-cp36m-manylinux1_x86_64. whl (92kB)   |████████████████████████████████| 102kB 6. 6MB/s Requirement already satisfied: MarkupSafe&gt;=0. 23 in /usr/local/lib/python3. 6/dist-packages (from jinja2&lt;3. 0,&gt;=2. 10-&gt;diagrams) (1. 1. 1)Building wheels for collected packages: contextvars Building wheel for contextvars (setup. py) . . . done Created wheel for contextvars: filename=contextvars-2. 4-cp36-none-any. whl size=7666 sha256=c200628de2974404757d0f52fff9f5fedc667bb391a842d8e356f0bc2748bcc8 Stored in directory: /root/. cache/pip/wheels/a5/7d/68/1ebae2668bda2228686e3c1cf16f2c2384cea6e9334ad5f6deSuccessfully built contextvarsInstalling collected packages: immutables, contextvars, graphviz, diagrams Found existing installation: graphviz 0. 10. 1  Uninstalling graphviz-0. 10. 1:   Successfully uninstalled graphviz-0. 10. 1Successfully installed contextvars-2. 4 diagrams-0. 6. 3 graphviz-0. 13. 2 immutables-0. 11        from diagrams import Cluster, Diagramfrom diagrams. aws. compute import ECSfrom diagrams. aws. database import ElastiCache, RDSfrom diagrams. aws. network import ELBfrom diagrams. aws. network import Route53with Diagram(&quot;Clustered Web Services&quot;, show=False) as diag_clus_webservices:  dns = Route53(&quot;dns&quot;)  lb = ELB(&quot;lb&quot;)  with Cluster(&quot;Services&quot;):    svc_group = [ECS(&quot;web1&quot;),           ECS(&quot;web2&quot;),           ECS(&quot;web3&quot;)]  with Cluster(&quot;DB Cluster&quot;):    db_master = RDS(&quot;userdb&quot;)    db_master - [RDS(&quot;userdb ro&quot;)]  memcached = ElastiCache(&quot;memcached&quot;)  dns &gt;&gt; lb &gt;&gt; svc_group  svc_group &gt;&gt; db_master  svc_group &gt;&gt; memcacheddiag_clus_webservices          from diagrams import Cluster, Diagramfrom diagrams. aws. compute import ECS, EKS, Lambdafrom diagrams. aws. database import Redshiftfrom diagrams. aws. integration import SQSfrom diagrams. aws. storage import S3with Diagram(&quot;Event Processing&quot;, show=False) as Event_Processing_on_AWS:  source = EKS(&quot;k8s source&quot;)  with Cluster(&quot;Event Flows&quot;):    with Cluster(&quot;Event Workers&quot;):      workers = [ECS(&quot;worker1&quot;),            ECS(&quot;worker2&quot;),            ECS(&quot;worker3&quot;)]    queue = SQS(&quot;event queue&quot;)    with Cluster(&quot;Processing&quot;):      handlers = [Lambda(&quot;proc1&quot;),            Lambda(&quot;proc2&quot;),            Lambda(&quot;proc3&quot;)]  store = S3(&quot;events store&quot;)  dw = Redshift(&quot;analytics&quot;)  source &gt;&gt; workers &gt;&gt; queue &gt;&gt; handlers  handlers &gt;&gt; store  handlers &gt;&gt; dwEvent_Processing_on_AWS          from diagrams import Cluster, Diagramfrom diagrams. gcp. analytics import BigQuery, Dataflow, PubSubfrom diagrams. gcp. compute import AppEngine, Functionsfrom diagrams. gcp. database import BigTablefrom diagrams. gcp. iot import IotCorefrom diagrams. gcp. storage import GCSwith Diagram(&quot;Message Collecting&quot;, show=False) as Message_Collecting_System_on_GCP:  pubsub = PubSub(&quot;pubsub&quot;)  with Cluster(&quot;Source of Data&quot;):    [IotCore(&quot;core1&quot;),     IotCore(&quot;core2&quot;),     IotCore(&quot;core3&quot;)] &gt;&gt; pubsub  with Cluster(&quot;Targets&quot;):    with Cluster(&quot;Data Flow&quot;):      flow = Dataflow(&quot;data flow&quot;)    with Cluster(&quot;Data Lake&quot;):      flow &gt;&gt; [BigQuery(&quot;bq&quot;),           GCS(&quot;storage&quot;)]    with Cluster(&quot;Event Driven&quot;):      with Cluster(&quot;Processing&quot;):        flow &gt;&gt; AppEngine(&quot;engine&quot;) &gt;&gt; BigTable(&quot;bigtable&quot;)      with Cluster(&quot;Serverless&quot;):        flow &gt;&gt; Functions(&quot;func&quot;) &gt;&gt; AppEngine(&quot;appengine&quot;)  pubsub &gt;&gt; flowMessage_Collecting_System_on_GCP          from diagrams import Cluster, Diagramfrom diagrams. onprem. analytics import Sparkfrom diagrams. onprem. compute import Serverfrom diagrams. onprem. database import PostgreSQLfrom diagrams. onprem. inmemory import Redisfrom diagrams. onprem. logging import Fluentdfrom diagrams. onprem. monitoring import Grafana, Prometheusfrom diagrams. onprem. network import Nginxfrom diagrams. onprem. queue import Kafkawith Diagram(&quot;Advanced Web Service with On-Premise&quot;, show=False) as Advanced_Web_Service_with_On_Premise:  ingress = Nginx(&quot;ingress&quot;)  metrics = Prometheus(&quot;metric&quot;)  metrics &lt;&lt; Grafana(&quot;monitoring&quot;)  with Cluster(&quot;Service Cluster&quot;):    grpcsvc = [      Server(&quot;grpc1&quot;),      Server(&quot;grpc2&quot;),      Server(&quot;grpc3&quot;)]  with Cluster(&quot;Sessions HA&quot;):    master = Redis(&quot;session&quot;)    master - Redis(&quot;replica&quot;) &lt;&lt; metrics    grpcsvc &gt;&gt; master  with Cluster(&quot;Database HA&quot;):    master = PostgreSQL(&quot;users&quot;)    master - PostgreSQL(&quot;slave&quot;) &lt;&lt; metrics    grpcsvc &gt;&gt; master  aggregator = Fluentd(&quot;logging&quot;)  aggregator &gt;&gt; Kafka(&quot;stream&quot;) &gt;&gt; Spark(&quot;analytics&quot;)  ingress &gt;&gt; grpcsvc &gt;&gt; aggregatorAdvanced_Web_Service_with_On_Premise          from urllib. request import urlretrievefrom diagrams import Cluster, Diagramfrom diagrams. custom import Customfrom diagrams. aws. database import Aurorafrom diagrams. k8s. compute import Pod# Download an image to be used into a Custom Node classrabbitmq_url = &quot;https://jpadilla. github. io/rabbitmqapp/assets/img/icon. png&quot;rabbitmq_icon = &quot;rabbitmq. png&quot;urlretrieve(rabbitmq_url, rabbitmq_icon)with Diagram(&quot;Broker Consumers&quot;, show=False) as RabbitMQ_Consumers_with_Custom_Nodes:  with Cluster(&quot;Consumers&quot;):    consumers = [      Pod(&quot;worker&quot;),      Pod(&quot;worker&quot;),      Pod(&quot;worker&quot;)    ]  queue = Custom(&quot;Message queue&quot;, rabbitmq_icon)  queue &gt;&gt; consumers &gt;&gt; Aurora(&quot;Database&quot;)RabbitMQ_Consumers_with_Custom_Nodes    Reference : : https://diagrams. mingrammer. com/ How to run jupyter notebook locally :   $ git clone &lt;&lt;path-to-github&gt;&gt;  $ pip install jupyterlab  $ jupyter lab"
    }, {
    "id": 12,
    "url": "https://byteshiva.github.io/fastpages/jupyter/2020/02/21/introducing-fastpages.html",
    "title": "Introducing fastpages",
    "body": "2020/02/21 -            We are very pleased to announce the immediate availability of fastpages. fastpages is a platform which allows you to create and host a blog for free, with no ads and many useful features, such as: Create posts containing code, outputs of code (which can be interactive), formatted text, etc directly from Jupyter Notebooks; for instance see this great example post from Scott Hawley.  Notebook posts support features such as:Interactive visualizations made with Altair remain interactive. Hide or show cell input and output. Collapsable code cells that are either open or closed by default. Define the Title, Summary and other metadata via a special markdown cellsAbility to add links to Colab and GitHub automatically. Create posts, including formatting and images, directly from Microsoft Word documents. Create and edit Markdown posts entirely online using GitHub's built-in markdown editor. Embed Twitter cards and YouTube videos. Categorization of blog posts by user-supplied tags for discoverability. . . . and much morefastpages relies on Github pages for hosting, and Github Actions to automate the creation of your blog. The setup takes around three minutes, and does not require any technical knowledge or expertise. Due to built-in automation of fastpages, you don't have to fuss with conversion scripts.  All you have to do is save your Jupyter notebook, Word document or markdown file into a specified directory and the rest happens automatically. Infact, this blog post is written in a Jupyter notebook, which you can see with the  View on GitHub  link above. fast. ai have previously released a similar project called fast_template, which is even easier to set up, but does not support automatic creation of posts from Microsoft Word or Jupyter notebooks, including many of the features outlined above. Because fastpages is more flexible and extensible, we recommend using it where possible. fast_template may be a better option for getting folks blogging who have no technical expertise at all, and will only be creating posts using Github's integrated online editor. Setting Up Fastpages The setup process of fastpages is automated with GitHub Actions, too! Upon creating a repo from the fastpages template, a pull request will automatically be opened (after ~ 30 seconds) configuring your blog so it can start working.  The automated pull request will greet you with instructions like this: All you have to do is follow these instructions (in the PR you receive) and your new blogging site will be up and running! Jupyter Notebooks &amp; Fastpages In this post, we will cover special features that fastpages provides has for Jupyter notebooks.  You can also write your blog posts with Word documents or markdown in fastpages, which contain many, but not all the same features. Options via FrontMatter : The first cell in your Jupyter Notebook or markdown blog post contains front matter.  Front matter is metadata that can turn on/off options in your Notebook.  It is formatted like this: # Title&gt; Awesome summary- toc: true- branch: master- badges: true- comments: true- author: Hamel Husain &amp; Jeremy Howard- categories: [fastpages, jupyter]All of the above settings are enabled in this post, so you can see what they look like! the summary field (preceeded by &gt;) will be displayed under your title, and will also be used by social media to display as the description of your page. toc: setting this to true will automatically generate a table of contentsbadges: setting this to true will display Google Colab and GitHub links on your blog post. comments: setting this to true will enable comments.  See these instructions for more details. author this will display the authors names. categories will allow your post to be categorized on a  Tags  page, where readers can browse your post by categories. Markdown front matter is formatted similarly to notebooks.  The differences between the two can be viewed on the fastpages README. Code Folding : put a #collapse-hide flag at the top of any cell if you want to hide that cell by default, but give the reader the option to show it:              #collapse-hideimport pandas as pdimport altair as alt       put a #collapse-show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse-showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       If you want to completely hide cells (not just collapse them), read these instructions Interactive Charts With Altair : Interactive visualizations made with Altair remain interactive! We leave this below cell unhidden so you can enjoy a preview of syntax highlighting in fastpages, which uses the Dracula theme.       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables : You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;IMDB_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   IMDB_Rating         0   The Land Girls   146083. 0   8000000. 0   6. 1       1   First Love, Last Rites   10876. 0   300000. 0   6. 9       2   I Married a Strange Person   203134. 0   250000. 0   6. 8       3   Let's Talk About Sex   373615. 0   300000. 0   NaN       4   Slam   1087521. 0   1000000. 0   3. 4     Images w/Captions You can include markdown images with captions like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Of course, the caption is optional. Tweetcards : Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:  Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos : Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this:   Boxes / Callouts : Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. More Examples : This tutorial contains more examples of what you can do with notebooks. How fastpages Converts Notebooks to Blog Posts fastpages uses nbdev to power the conversion process of Jupyter Notebooks to blog posts.  When you save a notebook into the /_notebooks folder of your repository, GitHub Actions applies nbdev against those notebooks automatically.  The same process occurs when you save Word documents or markdown files into the _word or _posts directory, respectively. We will discuss how GitHub Actions work in a follow up blog post. Resources &amp; Next Steps We highly encourage you to start blogging with fastpages! Some resources that may be helpful: fastpages repo - this is where you can go to create your own fastpages blog!Fastai forums - nbdev &amp; blogging category.  You can ask questions about fastpages here, as well as suggest new features. nbdev: this project powers the conversion of Jupyter notebooks to blog posts. If you end up writing a blog post using fastpages, please let us know on Twitter: @jeremyphoward, @HamelHusain. "
    }, {
    "id": 13,
    "url": "https://byteshiva.github.io/jupyter/2020/02/20/test.html",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -           About This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter : Front Matter is a markdown cell at the beginning of your notebook that allows you to inject metadata into your notebook. For example: Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts : A #hide comment at the top of any code cell will hide both the input and output of that cell in your blog post. A #hide_input comment at the top of any code cell will only hide the input of that cell.     The comment #hide_input was used to hide the code that produced this.   put a #collapse-hide flag at the top of any cell if you want to hide that cell by default, but give the reader the option to show it:              #collapse-hideimport pandas as pdimport altair as alt       put a #collapse-show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse-showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       Interactive Charts With Altair : Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown :       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips :       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 3: More Tooltips :       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables : You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;Distributor&#39;, &#39;MPAA_Rating&#39;, &#39;IMDB_Rating&#39;, &#39;Rotten_Tomatoes_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   Distributor   MPAA_Rating   IMDB_Rating   Rotten_Tomatoes_Rating         0   The Land Girls   146083. 0   8000000. 0   Gramercy   R   6. 1   NaN       1   First Love, Last Rites   10876. 0   300000. 0   Strand   R   6. 9   NaN       2   I Married a Strange Person   203134. 0   250000. 0   Lionsgate   None   6. 8   NaN       3   Let's Talk About Sex   373615. 0   300000. 0   Fine Line   None   NaN   13. 0       4   Slam   1087521. 0   1000000. 0   Trimark   R   3. 4   62. 0     Images : Local Images : You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images : Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs : Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions : You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements Tweetcards : Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:  Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos : Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this:   Boxes / Callouts : Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. Footnotes : You can have footnotes in notebooks just like you can with markdown. For example, here is a footnote 1. This is the footnote. &#8617; "
    }, {
    "id": 14,
    "url": "https://byteshiva.github.io/markdown/2020/01/14/test-markdown-post.html",
    "title": "Example Markdown Post",
    "body": "2020/01/14 - Basic setup: Jekyll requires blog post files to be named according to the following format: YEAR-MONTH-DAY-filename. md Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and filename is whatever file name you choose, to remind yourself what this post is about. . md is the file extension for markdown files. The first line of the file should start with a single hash character, then a space, then your title. This is how you create a “level 1 heading” in markdown. Then you can create level 2, 3, etc headings as you wish but repeating the hash character, such as you see in the line ## File names above. Basic formatting: You can use italics, bold, code font text, and create links. Here’s a footnote 1. Here’s a horizontal rule: Lists: Here’s a list:  item 1 item 2And a numbered list:  item 1 item 2Boxes and stuff:  This is a quotation    You can include alert boxes…and…    You can include info boxesImages: Code: You can format text and code per usual General preformatted text: # Do a thingdo_thing()Python code and output: # Prints '2'print(1+1)2Formatting text as shell commands: echo  hello world . /some_script. sh --option  value wget https://example. com/cat_photo1. pngFormatting text as YAML: key: value- another_key:  another value Tables:       Column 1   Column 2         A thing   Another thing   Tweetcards: Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019Footnotes:       This is the footnote.  &#8617;    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}
=======
// from https://github.com/pmarsceill/just-the-docs/blob/master/assets/js/just-the-docs.js#L47

(function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

// function initNav() {
//     const mainNav = document.querySelector('.js-main-nav');
//     const pageHeader = document.querySelector('.js-page-header');
//     const navTrigger = document.querySelector('.js-main-nav-trigger');
  
//     jtd.addEvent(navTrigger, 'click', function(e){
//       e.preventDefault();
//       var text = navTrigger.innerText;
//       var textToggle = navTrigger.getAttribute('data-text-toggle');
  
//       mainNav.classList.toggle('nav-open');
//       pageHeader.classList.toggle('nav-open');
//       navTrigger.classList.toggle('nav-open');
//       navTrigger.innerText = textToggle;
//       navTrigger.setAttribute('data-text-toggle', text);
//       textToggle = text;
//     })
//   }


// Site search

function initSearch() {
    var request = new XMLHttpRequest();
    request.open('GET', '/blog/assets/js/search-data.json', true);
  
    request.onload = function(){
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        
        
        lunr.tokenizer.separator = /[\s\-/]+/
        
        
        var index = lunr(function () {
          this.ref('id');
          this.field('title', { boost: 200 });
          this.field('content', { boost: 2 });
          this.field('url');
          this.metadataWhitelist = ['position']
  
          for (var i in data) {
            this.add({
              id: i,
              title: data[i].title,
              content: data[i].content,
              url: data[i].url
            });
          }
        });
  
        searchResults(index, data);
      } else {
        // We reached our target server, but it returned an error
        console.log('Error loading ajax request. Request status:' + request.status);
      }
    };
  
    request.onerror = function(){
      // There was a connection error of some sort
      console.log('There was a connection error');
    };
  
    request.send();
  
    function searchResults(index, data) {
      var index = index;
      var docs = data;
      var searchInput = document.querySelector('.js-search-input');
      var searchResults = document.querySelector('.js-search-results');
  
      function hideResults() {
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
      }
  
      jtd.addEvent(searchInput, 'keydown', function(e){
        switch (e.keyCode) {
          case 38: // arrow up
            e.preventDefault();
            var active = document.querySelector('.search-result.active');
            if (active) {
              active.classList.remove('active');
              if (active.parentElement.previousSibling) {
                var previous = active.parentElement.previousSibling.querySelector('.search-result');
                previous.classList.add('active');
              }
            }
            return;
          case 40: // arrow down
            e.preventDefault();
            var active = document.querySelector('.search-result.active');
            if (active) {
              if (active.parentElement.nextSibling) {
                var next = active.parentElement.nextSibling.querySelector('.search-result');
                active.classList.remove('active');
                next.classList.add('active');
              }
            } else {
              var next = document.querySelector('.search-result');
              if (next) {
                next.classList.add('active');
              }
            }
            return;
          case 13: // enter
            e.preventDefault();
            var active = document.querySelector('.search-result.active');
            if (active) {
              active.click();
            } else {
              var first = document.querySelector('.search-result');
              if (first) {
                first.click();
              }
            }
            return;
        }
      });
  
      jtd.addEvent(searchInput, 'keyup', function(e){
        switch (e.keyCode) {
          case 27: // When esc key is pressed, hide the results and clear the field
            hideResults();
            searchInput.value = '';
            return;
          case 38: // arrow up
          case 40: // arrow down
          case 13: // enter
            e.preventDefault();
            return;
        }
  
        hideResults();
  
        var input = this.value;
        if (input === '') {
          return;
        }
  
        var results = index.query(function (query) {
          var tokens = lunr.tokenizer(input)
          query.term(tokens, {
            boost: 10
          });
          query.term(tokens, {
            wildcard: lunr.Query.wildcard.TRAILING
          });
        });
  
        if (results.length > 0) {
          searchResults.classList.add('active');
          var resultsList = document.createElement('ul');
          resultsList.classList.add('search-results-list');
          searchResults.appendChild(resultsList);
  
          for (var i in results) {
            var result = results[i];
            var doc = docs[result.ref];
  
            var resultsListItem = document.createElement('li');
            resultsListItem.classList.add('search-results-list-item');
            resultsList.appendChild(resultsListItem);
  
            var resultLink = document.createElement('a');
            resultLink.classList.add('search-result');
            resultLink.setAttribute('href', doc.url);
            resultsListItem.appendChild(resultLink);
  
            var resultTitle = document.createElement('div');
            resultTitle.classList.add('search-result-title');
            resultTitle.innerText = doc.title;
            resultLink.appendChild(resultTitle);
  
            var resultRelUrl = document.createElement('span');
            resultRelUrl.classList.add('search-result-rel-date');
            resultRelUrl.innerText = doc.date;
            resultTitle.appendChild(resultRelUrl);
  
            var metadata = result.matchData.metadata;
            var contentFound = false;
            for (var j in metadata) {
              if (metadata[j].title) {
                var position = metadata[j].title.position[0];
                var start = position[0];
                var end = position[0] + position[1];
                resultTitle.innerHTML = doc.title.substring(0, start) + '<span class="search-result-highlight">' + doc.title.substring(start, end) + '</span>' + doc.title.substring(end, doc.title.length)+'<span class="search-result-rel-date">'+doc.date+'</span>';
  
              } else if (metadata[j].content && !contentFound) {
                contentFound = true;
  
                var position = metadata[j].content.position[0];
                var start = position[0];
                var end = position[0] + position[1];
                var previewStart = start;
                var previewEnd = end;
                var ellipsesBefore = true;
                var ellipsesAfter = true;
                for (var k = 0; k < 3; k++) {
                  var nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
                  var nextDot = doc.content.lastIndexOf('.', previewStart - 2);
                  if ((nextDot > 0) && (nextDot > nextSpace)) {
                    previewStart = nextDot + 1;
                    ellipsesBefore = false;
                    break;
                  }
                  if (nextSpace < 0) {
                    previewStart = 0;
                    ellipsesBefore = false;
                    break;
                  }
                  previewStart = nextSpace + 1;
                }
                for (var k = 0; k < 10; k++) {
                  var nextSpace = doc.content.indexOf(' ', previewEnd + 1);
                  var nextDot = doc.content.indexOf('.', previewEnd + 1);
                  if ((nextDot > 0) && (nextDot < nextSpace)) {
                    previewEnd = nextDot;
                    ellipsesAfter = false;
                    break;
                  }
                  if (nextSpace < 0) {
                    previewEnd = doc.content.length;
                    ellipsesAfter = false;
                    break;
                  }
                  previewEnd = nextSpace;
                }
                var preview = doc.content.substring(previewStart, start);
                if (ellipsesBefore) {
                  preview = '... ' + preview;
                }
                preview += '<span class="search-result-highlight">' + doc.content.substring(start, end) + '</span>';
                preview += doc.content.substring(end, previewEnd);
                if (ellipsesAfter) {
                  preview += ' ...';
                }
  
                var resultPreview = document.createElement('div');
                resultPreview.classList.add('search-result-preview');
                resultPreview.innerHTML = preview;
                resultLink.appendChild(resultPreview);
              }
            }
          }
        }
      });
  
      // jtd.addEvent(searchInput, 'blur', function(){
      //   setTimeout(function(){ hideResults() }, 300);
      // });
    }
  }
  
//   function pageFocus() {
//     var mainContent = document.querySelector('.js-main-content');
//     mainContent.focus();
//   }
  
  // Document ready
  
  jtd.onReady(function(){
    // initNav();
    // pageFocus();
    if (typeof lunr !== 'undefined') {
      initSearch();
    }
  });
  
  })(window.jtd = window.jtd || {});
>>>>>>> template/master
