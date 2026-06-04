import asyncio
import os
from wisp_python import WispServer

port = int(os.environ.get("PORT", 8080))

server = WispServer(host="0.0.0.0", port=port)
asyncio.run(server.start())
