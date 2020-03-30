@echo off
REM use one of the following commands to ensure that project was built and repacked before publishing
REM msbuild.exe "..\Plugins.csproj"
REM devenv "..\..\BulletproofProjectTemplate.sln" /Rebuild Debug /Project "..\Plugins.csproj" /projectconfig Debug

set package_root=..\..\
REM Find the spkl in the package folder (irrespective of version)
For /R %package_root% %%G IN (spkl.exe) do (
	IF EXIST "%%G" (set spkl_path=%%G
	goto :continue)
	)

:continue
@echo Using '%spkl_path%' 
REM spkl plugins [path] [connection-string] [/p:release]
"%spkl_path%" plugins "%cd%\.." %*

if errorlevel 1 (
echo Error Code=%errorlevel%
exit /b %errorlevel%
)

pause