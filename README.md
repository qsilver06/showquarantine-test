# ShowQuarantine

Create an Outlook add-in that shows the user's quarantine folder in a web browser

Summary Open https://security.microsoft.com/quarantine in default browser from an add-in button in the Outlook ribbon.

Got the idea and most of the code from here: https://blog.expta.com/2021/10/how-to-install-outlook-add-in-to-view.html

Unfortunately this isn't working in my case in folders with preview pane off.

MS manifest.xml supports the following xsi-types only:                                
MessageReadCommandSurface                                                        
MessageComposeCommandSurface                                                     
AppointmentOrganizerCommandSurface                                            
AppointmentAttendeeCommandSurface                                                 
Module (only in DesktopFormFactor)                                              
MobileMessageReadCommandSurface                                                 
MobileOnlineMeetingCommandSurface                                               
MobileLogEventAppointmentAttendee                                              
LaunchEvent                                                                   
Events                                                                       
DetectedEntity                                                                 

None of them unfortunately allows add-in execution in home window.              

Add-in not (yet) visible in OWA. Desktop client updating from ExO takes ages (>12 h).
