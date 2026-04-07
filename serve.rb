require 'webrick'
require 'socket'

root = "/Users/rohanpoudel/Documents/HBCUC2/Marys Hand/presentation"
port = (ENV['PORT'] || 8090).to_i

Dir.chdir(root)

server = WEBrick::HTTPServer.new(
  :Port => port,
  :DocumentRoot => root,
  :Logger => WEBrick::Log.new($stdout, WEBrick::Log::INFO),
  :AccessLog => [[File.open('/dev/null', 'w'), WEBrick::AccessLog::COMMON_LOG_FORMAT]]
)

trap('INT') { server.shutdown }
trap('TERM') { server.shutdown }

puts "Serving presentation on port #{port}"
server.start
