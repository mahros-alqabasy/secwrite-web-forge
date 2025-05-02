
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const NinjaSkillsWriteup: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A1117]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/writeups" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Writeups
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-[#F5F1F1]">Ninja Skills - TryHackMe Writeup</h1>
          
          <div className="flex items-center mb-6">
            <img src="public/lovable-uploads/89d13a5f-f0e7-4d9f-8a00-e5daed4d8eb2.png" alt="mahros" className="w-8 h-8 rounded-full mr-3" />
            <span className="text-[#F5F1F1] mr-2">mahros</span>
            <span className="text-gray-400 text-sm mr-2">•</span>
            <span className="text-gray-400 text-sm">May 2, 2025</span>
            <span className="text-gray-400 text-sm mx-2">•</span>
            <span className="text-gray-400 text-sm">15 min read</span>
          </div>
          
          <div className="flex gap-2 mb-8">
            <span className="badge-easy">Easy</span>
            <span className="platform-badge">TryHackMe</span>
            <span className="platform-badge">Linux</span>
            <span className="platform-badge">Bash</span>
          </div>
          
          <div className="prose prose-invert max-w-none mb-8">
            <Card className="bg-[#0A1117] border-[#1B2023]">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="mb-4">
                  <strong>Room Name:</strong> Ninja Skills<br />
                  <strong>Difficulty:</strong> Easy<br />
                  <strong>Category:</strong> Linux<br />
                  <strong>Link:</strong> <a href="https://tryhackme.com/room/ninjaskills" className="text-primary hover:underline">NinjsSkills TryHackMe</a>
                </p>

                <h2 className="text-2xl font-semibold mb-4 mt-8">Inputs</h2>
                <h3 className="text-xl font-medium mb-2">Files Names</h3>
                <div className="bg-[#1B2023] p-4 rounded-md mb-6 font-mono">
                  8V2L bny0 c4ZX D8B3 FHl1 oiMO PFbD rmfX SRSq uqyw v2Vb X1Uy
                </div>

                <h2 className="text-2xl font-semibold mb-4 mt-8">Objectives</h2>
                <h3 className="text-xl font-medium mb-2">Task#1</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Which files are owned by the best-group?</li>
                  <li>Which of these files contain an IP address?</li>
                  <li>Which file has the SHA1 hash of 9d54da7584015647ba052173b84d45e8007eba94?</li>
                  <li>Which file contains 230 lines?</li>
                  <li>Which file's owner has an ID of 502?</li>
                  <li>Which file is executable by everyone?</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 mt-8">Walkthrough</h2>
                
                <h3 className="text-xl font-medium mb-2">Step 1: Export Files Names to ./files_names</h3>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  echo "8V2L bny0 c4ZX D8B3 FHl1 oiMO PFbD rmfX SRSq uqyw v2Vb X1Uy" > ./files_names
                </div>

                <h3 className="text-xl font-medium mb-2 mt-6">Step 2: Find Files Paths</h3>
                <p className="italic mb-2">The given files are names, so we have to find the full path of every file</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  for fname in $(cat ./files_names); do<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;echo $(find / -type f -iname $fname 2>/dev/null) >> ./files_paths<br />
                  done
                </div>
                
                <p className="font-medium mb-2">Output:</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  ./files_names<br />
                  ./files_paths
                </div>
                
                <div className="mb-6">
                  <img 
                    src="public/lovable-uploads/6ae5ff1b-debf-4aea-846b-cc4dbdeb91cb.png" 
                    alt="Finding file paths" 
                    className="rounded-md w-full"
                  />
                </div>

                <h3 className="text-xl font-medium mb-2 mt-6">Step 3: Save files info</h3>
                <p className="italic mb-2">The next questions are about files attributes, so we can save their attributes into ./files_info</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  for fpath in $(cat ./files_paths); do<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;echo $(ls -la $path) >> ./files_info<br />
                  done
                </div>

                <h3 className="text-xl font-medium mb-2 mt-6">Step 4: Answer Q1</h3>
                <p className="italic mb-2">Which files owned by the group: "best-group"?</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  cat ./files_info | grep -i "best-group"
                </div>
                
                <p className="font-medium mb-2">Output:</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  best-group /mnt/D8B3<br />
                  best-group /home/v2VB
                </div>
                
                <div className="mb-6">
                  <img 
                    src="public/lovable-uploads/cb9e85c3-5bf7-428a-a050-9461bde85ec1.png" 
                    alt="Files owned by best-group" 
                    className="rounded-md w-full"
                  />
                </div>

                <h3 className="text-xl font-medium mb-2 mt-6">Step 5: Answer Q2</h3>
                <p className="italic mb-2">Which of these files contain an IP address?</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  for fpath in $(cat ./files_paths); do<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;if [ $(grep -Eo "([0-9]{"{1,3}"}\\.){"{3}"}[0-9]{"{1,3}"}" $fpath) ]; then<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo $fpath<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;fi<br />
                  done
                </div>
                
                <p className="font-medium mb-2">Output:</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  /opt/oIM0
                </div>
                
                <div className="mb-6">
                  <img 
                    src="public/lovable-uploads/f420872e-2972-4f8f-8f4f-e617a02388c6.png" 
                    alt="File containing IP address" 
                    className="rounded-md w-full"
                  />
                </div>

                <h3 className="text-xl font-medium mb-2 mt-6">Step 6: Answer Q3</h3>
                <p className="italic mb-2">Which file has the SHA1 hash of 9d54da7584015647ba052173b84d45e8007eba94?</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  for fpath in $(cat ./files_paths); do<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;fhash="9d54da7584015647ba052173b84d45e8007eba94"<br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;if [ "$fhash" == "$(sha1sum $fpath | cut -d' ' -f1)" ]; then<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "$fhash $fpath"<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;fi<br />
                  done
                </div>
                
                <p className="font-medium mb-2">Output:</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  /opt/c4zx
                </div>
                
                <div className="mb-6">
                  <img 
                    src="public/lovable-uploads/13f59dae-9392-4427-9526-196a1d3a4885.png" 
                    alt="File with specific SHA1 hash" 
                    className="rounded-md w-full"
                  />
                </div>

                <h3 className="text-xl font-medium mb-2 mt-6">Step 7: Answer Q4</h3>
                <p className="italic mb-2">Which file contains 230 lines?</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  for fpath in $(cat ./files_paths); do<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;echo "$(cat $fpath | wc -l) $fpath"<br />
                  done
                </div>
                
                <p className="font-medium mb-2">Output:</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  bny0
                </div>

                <h3 className="text-xl font-medium mb-2 mt-6">Step 8: Answer Q5</h3>
                <p className="italic mb-2">Which file's owner has an ID of 502?</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  for fpath in $(cat ./files_paths); do<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;ls -lnh $fpath<br />
                  done
                </div>
                
                <p className="font-medium mb-2">Output:</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  /X1Uy
                </div>
                
                <div className="mb-6">
                  <img 
                    src="public/lovable-uploads/d6ca948e-4a0f-43cf-ae51-6c259fa3118b.png" 
                    alt="File with owner ID 502" 
                    className="rounded-md w-full"
                  />
                </div>

                <h3 className="text-xl font-medium mb-2 mt-6">Step 9: Answer Q6</h3>
                <p className="italic mb-2">Which file is executable by everyone?</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  for fpath in $(cat ./files_paths); do<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;ls -lh $fpath<br />
                  done
                </div>
                
                <p className="font-medium mb-2">Output:</p>
                <div className="bg-[#1B2023] p-4 rounded-md mb-4 font-mono">
                  /etc/8V2L
                </div>
                
                <div className="mb-6">
                  <img 
                    src="public/lovable-uploads/a05901e3-1f4f-4bab-b8c3-94f2ed150e17.png" 
                    alt="File executable by everyone" 
                    className="rounded-md w-full"
                  />
                </div>

                <h2 className="text-2xl font-semibold mb-4 mt-8">Key Learnings</h2>
                
                <h3 className="text-xl font-medium mb-2">Efficient File Handling in Bash</h3>
                <p className="mb-4">
                  Use of <code>find</code>, <code>grep</code>, <code>awk</code>, <code>ls</code>, <code>wc</code>, and <code>sha1sum</code> provides powerful capabilities to inspect and filter files across the system.
                </p>
                
                <h3 className="text-xl font-medium mb-2">Understanding File Permissions and Metadata</h3>
                <p className="mb-4">
                  Reading file permissions, ownerships (UID/GID), and executable bits is crucial for file-level access auditing in Linux environments.
                </p>
                
                <h3 className="text-xl font-medium mb-2">Regex for IP and Hash Matching</h3>
                <p className="mb-4">
                  Applying regular expressions in Bash to extract IPs and verify SHA1 hashes streamlines file content analysis.
                </p>

                <h2 className="text-2xl font-semibold mb-4 mt-8">Conclusion</h2>
                <p className="mb-4">
                  The "Ninja Skills" room on TryHackMe provides a solid practical exercise in Linux system fundamentals, especially around file management and shell scripting. By requiring real-world usage of command-line tools, it reinforces how Bash can be used to solve forensic and administrative tasks quickly and precisely. This exercise is highly valuable for beginners aiming to transition into intermediate Linux users and security professionals. It also highlights the importance of automating system reconnaissance tasks with well-written scripts.
                </p>
                
                <div className="mb-6 mt-8">
                  <img 
                    src="public/lovable-uploads/55b00f59-4970-42b6-8dc7-0dc8a21885c2.png" 
                    alt="Completion badge" 
                    className="rounded-md w-full"
                  />
                </div>

                <h2 className="text-2xl font-semibold mb-4 mt-8">Flags</h2>
                <ul className="list-disc pl-6">
                  <li><strong>Flag 1:</strong> <code>D8B3 v2Vb</code></li>
                  <li><strong>Flag 2:</strong> <code>oiMO*</code></li>
                  <li><strong>Flag 3:</strong> <code>c4ZX</code></li>
                  <li><strong>Flag 4:</strong> <code>bny0</code></li>
                  <li><strong>Flag 5:</strong> <code>X1Uy</code></li>
                  <li><strong>Flag 6:</strong> <code>8V2L</code></li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="border-t border-[#1B2023] pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-[#F5F1F1]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>42</span>
                </button>
                <button className="flex items-center gap-2 text-[#F5F1F1]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span>5</span>
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="https://tryhackme.com/room/ninjaskills" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                  Try on TryHackMe
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NinjaSkillsWriteup;
