module.exports = {
   html: `
	<div class="alarms-view">
		<div>
			<a href="#alarms/builder" class="n10btn">Chart Builder</a>
		</div>
		<br/>
		<div class="widget" style="display:inline-block; width: calc(50% - 10px); margin-right:5px; height: 450px;">		
			<div alarm-poly-chart saved="eyJjb25mIjp7ImNoYXJ0VHlwZSI6Im11bHRpQmFyQ2hhcnQiLCJ0aXRsZSI6IkFsYXJtcyIsImlucHV0IjpbImFsYXJtU3RhdGUiLCJpbXBhY3RzLmhvc3RuYW1lIl0sIndpZGdldFdpZHRoIjoiNTAlIiwid2lkZ2V0SGVpZ2h0IjoiNjAwcHgifSwib3ZlcnJpZGVzIjp7InhBeGlzIjp7ImF4aXNMYWJlbCI6Ikhvc3RuYW1lIn0sInlBeGlzIjp7ImF4aXNMYWJlbCI6Ik9jY3VyYW5jZSJ9LCJtYXJnaW4iOnsibGVmdCI6IjE5MCJ9fX0=">
			</div>
		</div>

		<div class="widget" style="display:inline-block; width: calc(50% - 10px); margin-right:0; height: 450px;">
			<div alarm-poly-chart saved="eyJjb25mIjp7ImNoYXJ0VHlwZSI6ImRpc2NyZXRlQmFyQ2hhcnQiLCJ0aXRsZSI6IkFsYXJtIFR5cGVzIiwiaW5wdXQiOlsiZXZlbnRUeXBlIl0sIndpZGdldFdpZHRoIjoiNTAlIiwid2lkZ2V0SGVpZ2h0IjoiNjAwcHgifSwib3ZlcnJpZGVzIjp7InhBeGlzIjp7ImF4aXNMYWJlbCI6IkV2ZW50VHlwZSJ9LCJ5QXhpcyI6eyJheGlzTGFiZWwiOiJPY2N1cmFuY2UifX19"></div>
		</div>

		<br/>

		<div class="widget" style="height: 420px;">
			<active-alarm-view></active-alarm-view>
		</div>
	</div>`,
   css: {
      "alarms-view": "armsdf1123",
      "widge": "sar!F_!11"
   },
   result: `<div class="armsdf1123"><div><a href="#alarms/builder" class="n10btn">Chart Builder</a></div><br/><div class="widget" style="display:inline-block; width: calc(50% - 10px); margin-right:5px; height: 450px;"><div alarm-poly-chart saved="eyJjb25mIjp7ImNoYXJ0VHlwZSI6Im11bHRpQmFyQ2hhcnQiLCJ0aXRsZSI6IkFsYXJtcyIsImlucHV0IjpbImFsYXJtU3RhdGUiLCJpbXBhY3RzLmhvc3RuYW1lIl0sIndpZGdldFdpZHRoIjoiNTAlIiwid2lkZ2V0SGVpZ2h0IjoiNjAwcHgifSwib3ZlcnJpZGVzIjp7InhBeGlzIjp7ImF4aXNMYWJlbCI6Ikhvc3RuYW1lIn0sInlBeGlzIjp7ImF4aXNMYWJlbCI6Ik9jY3VyYW5jZSJ9LCJtYXJnaW4iOnsibGVmdCI6IjE5MCJ9fX0="></div></div><div class="widget" style="display:inline-block; width: calc(50% - 10px); margin-right:0; height: 450px;"><div alarm-poly-chart saved="eyJjb25mIjp7ImNoYXJ0VHlwZSI6ImRpc2NyZXRlQmFyQ2hhcnQiLCJ0aXRsZSI6IkFsYXJtIFR5cGVzIiwiaW5wdXQiOlsiZXZlbnRUeXBlIl0sIndpZGdldFdpZHRoIjoiNTAlIiwid2lkZ2V0SGVpZ2h0IjoiNjAwcHgifSwib3ZlcnJpZGVzIjp7InhBeGlzIjp7ImF4aXNMYWJlbCI6IkV2ZW50VHlwZSJ9LCJ5QXhpcyI6eyJheGlzTGFiZWwiOiJPY2N1cmFuY2UifX19"></div></div><br/><div class="widget" style="height: 420px;"><active-alarm-view></active-alarm-view></div></div>`
};
